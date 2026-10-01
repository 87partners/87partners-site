#!/usr/bin/env node
// note の RSS を取得し、news.html（一覧）と index.html（最新3件）を静的HTMLとして更新する。
// 使い方:
//   node scripts/update-note-feed.mjs                 # 本番RSSを取得
//   node scripts/update-note-feed.mjs --file feed.xml # ローカルのRSSで検証
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RSS_URL = process.env.NOTE_RSS_URL || 'https://note.com/osamu_aranami/rss';
const NEWS_LIMIT = 30;
const LATEST_LIMIT = 3;

const fileArg = process.argv.indexOf('--file');
const xml = fileArg > -1
    ? await readFile(process.argv[fileArg + 1], 'utf8')
    : await fetchFeed(RSS_URL);

const items = parseItems(xml);
if (items.length === 0) {
    console.error('RSSから記事を取得できませんでした。ファイルは更新しません。');
    process.exit(1);
}
console.log(`記事 ${items.length} 件を取得`);

const newsChanged = await replaceBlock('news.html', 'NOTE_FEED', renderNewsItems(items.slice(0, NEWS_LIMIT)), '            ');
const indexChanged = await replaceBlock('index.html', 'NOTE_LATEST', renderLatestCards(items.slice(0, LATEST_LIMIT)), '            ');
if (newsChanged) await touchSitemap('https://www.87partners.com/news.html');
console.log(`news.html: ${newsChanged ? '更新' : '変更なし'} / index.html: ${indexChanged ? '更新' : '変更なし'}`);

// ---------------------------------------------------------------

async function fetchFeed(url) {
    const res = await fetch(url, { headers: { 'User-Agent': '87partners-site-feed/1.0 (+https://www.87partners.com/)' } });
    if (!res.ok) throw new Error(`RSS取得に失敗: ${res.status} ${url}`);
    return res.text();
}

function parseItems(xml) {
    return [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/g)].map(([, body]) => {
        const thumbAttr = body.match(/<media:thumbnail[^>]*url="([^"]+)"/);
        const date = new Date(tag(body, 'pubDate'));
        return {
            title: decode(tag(body, 'title')),
            link: tag(body, 'link'),
            date: isNaN(date) ? null : date,
            thumbnail: thumbAttr ? decode(thumbAttr[1]) : tag(body, 'media:thumbnail'),
            excerpt: summarize(decode(tag(body, 'description'))),
        };
    }).filter(i => i.title && /^https:\/\/note\.com\//.test(i.link));
}

function tag(body, name) {
    const m = body.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)</${name}>`));
    if (!m) return '';
    return m[1].replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, '$1').trim();
}

function decode(s) {
    return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
        .replace(/&amp;/g, '&');
}

function summarize(html, max = 90) {
    const text = decode(html.replace(/<(br|\/p|\/div|\/h\d)[^>]*>/gi, ' ').replace(/<[^>]*>/g, '')).replace(/続きをみる\s*$/, '').replace(/\s+/g, ' ').trim();
    return text.length > max ? text.slice(0, max) + '…' : text;
}

function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 日付は日本時間で表示
function jstParts(d) {
    const j = new Date(d.getTime() + 9 * 3600 * 1000);
    const p = n => String(n).padStart(2, '0');
    return { iso: `${j.getUTCFullYear()}-${p(j.getUTCMonth() + 1)}-${p(j.getUTCDate())}`,
             label: `${j.getUTCFullYear()}.${p(j.getUTCMonth() + 1)}.${p(j.getUTCDate())}` };
}

function renderNewsItems(items) {
    return items.map(i => {
        const d = i.date ? jstParts(i.date) : null;
        return `<li class="news-item">
    <div class="news-meta">
        ${d ? `<time class="news-date" datetime="${d.iso}">${d.label}</time>` : ''}
        <span class="news-category news-category--column">コラム</span>
    </div>
    <h2 class="news-title"><a href="${esc(i.link)}" target="_blank" rel="noopener">${esc(i.title)}</a></h2>
    ${i.excerpt ? `<p class="news-excerpt">${esc(i.excerpt)}</p>` : ''}
    <a class="news-link" href="${esc(i.link)}" target="_blank" rel="noopener">note で続きを読む →</a>
</li>`;
    }).join('\n');
}

function renderLatestCards(items) {
    return items.map(i => {
        const d = i.date ? jstParts(i.date) : null;
        return `<a class="column-card" href="${esc(i.link)}" target="_blank" rel="noopener" data-event="note_click" data-event-label="トップ最新コラム：${esc(i.title)}">
    ${i.thumbnail ? `<img class="column-card-thumb" src="${esc(i.thumbnail)}" alt="" loading="lazy" width="640" height="336">` : '<div class="column-card-thumb column-card-thumb--empty">note</div>'}
    <div class="column-card-body">
        ${d ? `<time class="column-card-date" datetime="${d.iso}">${d.label}</time>` : ''}
        <p class="column-card-title">${esc(i.title)}</p>
    </div>
</a>`;
    }).join('\n');
}

async function replaceBlock(file, marker, html, indent) {
    const full = path.join(ROOT, file);
    const src = await readFile(full, 'utf8');
    const re = new RegExp(`(<!-- ${marker}:START[^>]*-->)[\\s\\S]*?(\\n[ \\t]*<!-- ${marker}:END -->)`);
    if (!re.test(src)) throw new Error(`${file} に ${marker} マーカーがありません`);
    const body = html.split('\n').map(l => indent + l).join('\n');
    const out = src.replace(re, (_, start, end) => `${start}\n${body}${end}`);
    if (out === src) return false;
    await writeFile(full, out);
    return true;
}

async function touchSitemap(loc) {
    const full = path.join(ROOT, 'sitemap.xml');
    const src = await readFile(full, 'utf8');
    const today = jstParts(new Date()).iso;
    const out = src.replace(new RegExp(`(<loc>${loc.replace(/\./g, '\\.')}</loc>\\s*<lastmod>)[^<]*`), `$1${today}`);
    if (out !== src) await writeFile(full, out);
}
