#!/usr/bin/env node
/**
 * Brand Asset Generator — ChainMark logo pack (sprocket & chain, v2)
 *
 * Generates the full Spec-Driven logo pack as standalone SVGs
 * (wordmark text converted to outlines, no font dependencies),
 * plus rasterized favicons / app icons via puppeteer.
 *
 * Usage: node scripts/brand/generate.ts
 * Output: docs/public/brand/*.svg, docs/public/favicon.* and icon PNGs
 */

import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../..');
const PUBLIC_DIR = resolve(ROOT, 'docs/public');
const BRAND_DIR = resolve(PUBLIC_DIR, 'brand');
const FONT_CACHE = resolve(__dirname, 'fonts');

const ORANGE = '#F08422';
const INK = '#0D0D0D';

/* ---------- ChainMark geometry (ported from the design component) ---------- */

type Mode = 'loop' | 'solo';

interface MarkColors {
  wheel: string;
  wheel2?: string;
  chain: string;
}

const TAU = Math.PI * 2;
const PITCH = 15;
const BELT_W = 1.6;
const PIN_R = 1.5;

function chainMarkBody(mode: Mode, colors: MarkColors): string {
  const ux = (a: number) => Math.cos(a);
  const uy = (a: number) => Math.sin(a);

  let wheels: { cx: number; cy: number; rBody: number; fill: string }[];
  let beltD: string;
  const pins: { x: number; y: number }[] = [];

  if (mode === 'solo') {
    const c = [60, 60];
    const r = 44;
    wheels = [{ cx: c[0], cy: c[1], rBody: r - 8, fill: colors.wheel }];
    beltD = `M ${c[0] + r} ${c[1]} A ${r} ${r} 0 1 1 ${c[0] - r} ${c[1]} A ${r} ${r} 0 1 1 ${c[0] + r} ${c[1]} Z`;
    const n = Math.round((TAU * r) / PITCH);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * TAU;
      pins.push({ x: +(c[0] + r * ux(a)).toFixed(2), y: +(c[1] + r * uy(a)).toFixed(2) });
    }
  } else {
    const c1 = [75, 44];
    const r1 = 36;
    const c2 = [43, 89];
    const r2 = 24;
    const dx = c2[0] - c1[0];
    const dy = c2[1] - c1[1];
    const d = Math.hypot(dx, dy);
    const th = Math.atan2(dy, dx);
    const al = Math.acos((r1 - r2) / d);
    const A1 = th + al;
    const A2 = th - al;
    const pt = (c: number[], r: number, a: number) => [c[0] + r * ux(a), c[1] + r * uy(a)];
    const P1 = pt(c1, r1, A1);
    const Q1 = pt(c2, r2, A1);
    const Q2 = pt(c2, r2, A2);
    const P2 = pt(c1, r1, A2);
    const wrap2 = 2 * al;
    const wrap1 = TAU - 2 * al;
    const f = (v: number[]) => v.map((n) => n.toFixed(2)).join(' ');
    beltD =
      `M ${f(P1)} L ${f(Q1)} A ${r2} ${r2} 0 ${wrap2 > Math.PI ? 1 : 0} 0 ${f(Q2)}` +
      ` L ${f(P2)} A ${r1} ${r1} 0 ${wrap1 > Math.PI ? 1 : 0} 0 ${f(P1)} Z`;
    wheels = [
      { cx: c1[0], cy: c1[1], rBody: r1 - 6, fill: colors.wheel2 ?? colors.wheel },
      { cx: c2[0], cy: c2[1], rBody: r2 - 5, fill: colors.wheel },
    ];

    const L = Math.sqrt(Math.max(0, d * d - (r1 - r2) * (r1 - r2)));
    const segs = [L, r2 * wrap2, L, r1 * wrap1];
    const total = segs.reduce((a, b) => a + b, 0);
    const n = Math.round(total / PITCH);
    const lerp = (a: number[], b: number[], t: number) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    for (let i = 0; i < n; i++) {
      let s = ((i + 0.5) / n) * total;
      let q: number[];
      if (s < segs[0]) q = lerp(P1, Q1, s / segs[0]);
      else if ((s -= segs[0]) < segs[1]) q = pt(c2, r2, A1 - (s / segs[1]) * wrap2);
      else if ((s -= segs[1]) < segs[2]) q = lerp(Q2, P2, s / segs[2]);
      else {
        s -= segs[2];
        q = pt(c1, r1, A2 - (s / segs[3]) * wrap1);
      }
      pins.push({ x: +q[0].toFixed(2), y: +q[1].toFixed(2) });
    }
  }

  const pinCircles = pins
    .map((p) => `<circle cx="${p.x}" cy="${p.y}" r="${PIN_R}" fill="${colors.chain}"/>`)
    .join('');
  const wheelCircles = wheels
    .map((w) => `<circle cx="${w.cx}" cy="${w.cy}" r="${w.rBody}" fill="${w.fill}"/>`)
    .join('');
  return `<path d="${beltD}" stroke="${colors.chain}" stroke-width="${BELT_W}" fill="none" stroke-linejoin="round"/>${pinCircles}${wheelCircles}`;
}

function chainMarkSvg(mode: Mode, colors: MarkColors, size = 120): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="${size}" height="${size}" fill="none">${chainMarkBody(mode, colors)}</svg>\n`;
}

/* ---------- Fonts (Google Fonts static TTFs, cached locally) ---------- */

const LEGACY_UA = 'Mozilla/5.0 (Windows NT 6.1)';

interface FontSpec {
  family: string;
  weight: number;
  file: string;
}

const FONTS: FontSpec[] = [
  { family: 'Hanken Grotesk', weight: 400, file: 'hanken-grotesk-400.ttf' },
  { family: 'Hanken Grotesk', weight: 700, file: 'hanken-grotesk-700.ttf' },
  { family: 'IBM Plex Mono', weight: 500, file: 'ibm-plex-mono-500.ttf' },
];

interface BrandFont {
  outline: opentype.Font;
  kern: opentype.Font;
}

async function ensureFonts(): Promise<Record<string, BrandFont>> {
  mkdirSync(FONT_CACHE, { recursive: true });
  const fonts: Record<string, BrandFont> = {};
  for (const spec of FONTS) {
    const path = resolve(FONT_CACHE, spec.file);
    if (!existsSync(path)) {
      const cssUrl = `https://fonts.googleapis.com/css2?family=${spec.family.replace(/ /g, '+')}:wght@${spec.weight}&display=swap`;
      const css = await (await fetch(cssUrl, { headers: { 'User-Agent': LEGACY_UA } })).text();
      const match = css.match(/src:\s*url\((https:[^)]+\.ttf)\)/);
      if (!match) throw new Error(`No TTF url found for ${spec.family} ${spec.weight}`);
      const ttf = await (await fetch(match[1])).arrayBuffer();
      writeFileSync(path, Buffer.from(ttf));
      console.log(`Downloaded ${spec.family} ${spec.weight}`);
    }
    // Two instances: opentype.js getKerningValue corrupts glyph outlines
    // parsed from the same Font object, so kerning gets its own copy.
    const parse = () => opentype.parse(readFileSync(path).buffer.slice(0));
    fonts[`${spec.family}:${spec.weight}`] = { outline: parse(), kern: parse() };
  }
  return fonts;
}

/* ---------- Text to outline paths ---------- */

interface TextPiece {
  d: string;
  bbox: { x1: number; y1: number; x2: number; y2: number };
}

interface GlyphOutline {
  d: string;
  bbox: opentype.BoundingBox;
  advance: number;
}

const glyphCaches = new WeakMap<BrandFont, Map<string, GlyphOutline>>();

function glyphOutline(font: BrandFont, ch: string, fontSize: number): GlyphOutline {
  // Glyph-by-glyph via cmap lookups: font.getPath trips over GSUB features
  // opentype.js does not support (Hanken Grotesk ships lookupType 6 ccmp).
  // Each glyph is outlined exactly once at the origin and reused via
  // translate transforms: repeated getPath calls on the same glyph at
  // varying offsets corrupt its point data (NaN coordinates).
  let cache = glyphCaches.get(font);
  if (!cache) glyphCaches.set(font, (cache = new Map()));
  const key = `${ch}@${fontSize}`;
  let entry = cache.get(key);
  if (!entry) {
    const glyph = font.outline.charToGlyph(ch);
    const path = glyph.getPath(0, 0, fontSize);
    const d = path.toPathData(2);
    if (d.includes('NaN')) throw new Error(`NaN outline for ${JSON.stringify(ch)}`);
    entry = {
      d,
      bbox: path.getBoundingBox(),
      advance: (glyph.advanceWidth ?? 0) * (fontSize / font.outline.unitsPerEm),
    };
    cache.set(key, entry);
  }
  return entry;
}

function outlineText(font: BrandFont, text: string, fontSize: number, letterSpacing = 0): TextPiece {
  const scale = fontSize / font.kern.unitsPerEm;
  let x = 0;
  let d = '';
  let prevCh: string | null = null;
  let bbox = { x1: Infinity, y1: Infinity, x2: -Infinity, y2: -Infinity };
  for (const ch of text) {
    if (prevCh) {
      x += font.kern.getKerningValue(font.kern.charToGlyph(prevCh), font.kern.charToGlyph(ch)) * scale;
    }
    const g = glyphOutline(font, ch, fontSize);
    if (g.d) {
      d += `<g transform="translate(${+x.toFixed(2)} 0)"><path d="${g.d}"/></g>`;
      bbox = {
        x1: Math.min(bbox.x1, x + g.bbox.x1),
        y1: Math.min(bbox.y1, g.bbox.y1),
        x2: Math.max(bbox.x2, x + g.bbox.x2),
        y2: Math.max(bbox.y2, g.bbox.y2),
      };
    }
    x += g.advance + letterSpacing * fontSize;
    prevCh = ch;
  }
  return { d, bbox };
}

const pieceW = (p: TextPiece) => p.bbox.x2 - p.bbox.x1;
const pieceH = (p: TextPiece) => p.bbox.y2 - p.bbox.y1;

/** Wrap outlined text so its bbox top-left lands at (x, y) */
function placePiece(p: TextPiece, x: number, y: number, fill: string): string {
  const tx = +(x - p.bbox.x1).toFixed(2);
  const ty = +(y - p.bbox.y1).toFixed(2);
  return `<g transform="translate(${tx} ${ty})" fill="${fill}">${p.d}</g>`;
}

function svgDoc(width: number, height: number, body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${+width.toFixed(1)} ${+height.toFixed(1)}" width="${+width.toFixed(1)}" height="${+height.toFixed(1)}" fill="none">${body}</svg>\n`;
}

function placeMark(mode: Mode, colors: MarkColors, x: number, y: number, size: number): string {
  const s = +(size / 120).toFixed(4);
  return `<g transform="translate(${+x.toFixed(2)} ${+y.toFixed(2)}) scale(${s})">${chainMarkBody(mode, colors)}</g>`;
}

const SPECTRUM = [
  { offset: '0%', color: '#F2555A' },
  { offset: '34%', color: '#F08422' },
  { offset: '72%', color: '#6BBF59' },
  { offset: '100%', color: '#4FB0E8' },
];

function spectrumGradient(id: string): string {
  const stops = SPECTRUM.map((s) => `<stop offset="${s.offset}" stop-color="${s.color}"/>`).join('');
  return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0">${stops}</linearGradient></defs>`;
}

/* ---------- Pack variants ---------- */

const MARKS: { name: string; mode: Mode; colors: MarkColors }[] = [
  // Primary marks (cards 01/05 dark, 11/15 light)
  { name: 'mark-dark', mode: 'loop', colors: { wheel: ORANGE, wheel2: '#242424', chain: '#3D3D3D' } },
  { name: 'mark-light', mode: 'loop', colors: { wheel: ORANGE, wheel2: '#2B2B2B', chain: '#C9C9C9' } },
  // Nav / compact (cards 03, 13)
  { name: 'mark-nav-dark', mode: 'loop', colors: { wheel: ORANGE, wheel2: '#3A3A3A', chain: '#4A4A4A' } },
  { name: 'mark-nav-light', mode: 'loop', colors: { wheel: ORANGE, wheel2: '#2B2B2B', chain: '#BDBDBD' } },
  { name: 'mark-solo-dark', mode: 'solo', colors: { wheel: ORANGE, chain: '#4A4A4A' } },
  { name: 'mark-solo-light', mode: 'solo', colors: { wheel: ORANGE, chain: '#BDBDBD' } },
  // On brand orange (cards 04, 14)
  { name: 'mark-on-orange-dark', mode: 'loop', colors: { wheel: INK, wheel2: '#D06E12', chain: '#A85708' } },
  { name: 'mark-on-orange-light', mode: 'loop', colors: { wheel: '#FFFFFF', wheel2: '#2B2B2B', chain: '#C4741F' } },
  // Avatars (cards 04, 14)
  { name: 'mark-avatar-on-light', mode: 'solo', colors: { wheel: INK, chain: '#9A9A9A' } },
  { name: 'mark-avatar-on-dark', mode: 'solo', colors: { wheel: ORANGE, chain: '#5A5A5A' } },
  // One colour (cards 06/07/16/17/18)
  { name: 'mark-mono-white', mode: 'loop', colors: { wheel: '#FFFFFF', wheel2: '#FFFFFF', chain: '#FFFFFF' } },
  { name: 'mark-mono-black', mode: 'loop', colors: { wheel: INK, wheel2: INK, chain: INK } },
  { name: 'mark-mono-orange', mode: 'loop', colors: { wheel: ORANGE, wheel2: ORANGE, chain: ORANGE } },
  // Favicon (cards 09/19: under 28px, solo in one colour)
  { name: 'favicon-solo', mode: 'solo', colors: { wheel: ORANGE, chain: ORANGE } },
];

interface Theme {
  suffix: string;
  markColors: MarkColors;
  text: string;
  secondary: string;
  navMarkColors: MarkColors;
}

const THEMES: Theme[] = [
  {
    suffix: 'dark',
    markColors: { wheel: ORANGE, wheel2: '#242424', chain: '#3D3D3D' },
    text: '#F2F2F2',
    secondary: '#8A8A8A',
    navMarkColors: { wheel: ORANGE, wheel2: '#3A3A3A', chain: '#4A4A4A' },
  },
  {
    suffix: 'light',
    markColors: { wheel: ORANGE, wheel2: '#2B2B2B', chain: '#C9C9C9' },
    text: '#1A1A1A',
    secondary: '#6E6E6E',
    navMarkColors: { wheel: ORANGE, wheel2: '#2B2B2B', chain: '#BDBDBD' },
  },
];

function lockupPrimary(fonts: Record<string, BrandFont>, t: Theme): string {
  const hg700 = fonts['Hanken Grotesk:700'];
  const hg400 = fonts['Hanken Grotesk:400'];
  const M = 124;
  const gap = 26;
  const word = outlineText(hg700, 'Spec-Driven', 44, -0.03);
  const tag = outlineText(hg400, 'Specifications are a new software medium.', 15, 0.02);
  const blockH = pieceH(word) + 11 + pieceH(tag);
  const top = (M - blockH) / 2;
  const textX = M + gap;
  const body =
    placeMark('loop', t.markColors, 0, 0, M) +
    placePiece(word, textX, top, t.text) +
    placePiece(tag, textX, top + pieceH(word) + 11, t.secondary);
  const width = textX + Math.max(pieceW(word), pieceW(tag));
  return svgDoc(width, M, body);
}

function wordmarkSpectrum(fonts: Record<string, BrandFont>, t: Theme): string {
  const hg700 = fonts['Hanken Grotesk:700'];
  const mono = fonts['IBM Plex Mono:500'];
  const word = outlineText(hg700, 'Spec-Driven', 44, -0.03);
  const label = outlineText(mono, 'DEVELOPMENT', 12, 0.3);
  const labelColor = t.suffix === 'dark' ? '#7A7A7A' : '#8A8A8A';
  let y = 0;
  let body = spectrumGradient('spectrum');
  body += placePiece(word, 0, y, t.text);
  y += pieceH(word) + 14;
  body += `<rect x="0" y="${y.toFixed(1)}" width="220" height="3" rx="1.5" fill="url(#spectrum)"/>`;
  y += 3 + 14;
  body += placePiece(label, 0, y, labelColor);
  y += pieceH(label);
  return svgDoc(Math.max(pieceW(word), 220, pieceW(label)), y, body);
}

function lockupNav(fonts: Record<string, BrandFont>, t: Theme): string {
  const hg700 = fonts['Hanken Grotesk:700'];
  const M = 30;
  const gap = 11;
  const word = outlineText(hg700, 'Spec-Driven', 19, -0.02);
  const body =
    placeMark('loop', t.navMarkColors, 0, 0, M) +
    placePiece(word, M + gap, (M - pieceH(word)) / 2, t.text);
  return svgDoc(M + gap + pieceW(word), M, body);
}

function appIcon(bg: string, markColors: MarkColors, rounded: boolean): string {
  const S = 512;
  const r = rounded ? Math.round((26 / 116) * S) : 0;
  const markSize = Math.round((88 / 116) * S);
  const off = (S - markSize) / 2;
  return svgDoc(
    S,
    S,
    `<rect width="${S}" height="${S}" rx="${r}" fill="${bg}"/>` + placeMark('loop', markColors, off, off, markSize)
  );
}

/* ---------- Rasterization ---------- */

interface RasterJob {
  key: string;
  svg: string;
  out?: string;
  size: number;
}

async function rasterize(jobs: RasterJob[]): Promise<Record<string, Buffer>> {
  const puppeteer = await import('puppeteer');
  const browser = await puppeteer.default.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const buffers: Record<string, Buffer> = {};
  const page = await browser.newPage();
  for (const job of jobs) {
    await page.setViewport({ width: job.size, height: job.size, deviceScaleFactor: 1 });
    const html = `<!doctype html><style>html,body{margin:0;background:transparent}svg{display:block;width:${job.size}px;height:${job.size}px}</style>${job.svg}`;
    await page.setContent(html, { waitUntil: 'load' });
    const buf = Buffer.from(await page.screenshot({ type: 'png', omitBackground: true }));
    buffers[job.key] = buf;
    if (job.out) {
      writeFileSync(resolve(PUBLIC_DIR, job.out), buf);
      console.log(`  Rasterized ${job.out} (${job.size}px)`);
    }
  }
  await browser.close();
  return buffers;
}

/** Pack PNG buffers into a .ico file (PNG-encoded entries) */
function packIco(entries: { size: number; png: Buffer }[]): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(entries.length, 4);
  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + 16 * entries.length;
  entries.forEach((e, i) => {
    const o = i * 16;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o);
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(e.png.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += e.png.length;
  });
  return Buffer.concat([header, dir, ...entries.map((e) => e.png)]);
}

/* ---------- Main ---------- */

async function main() {
  mkdirSync(BRAND_DIR, { recursive: true });
  const fonts = await ensureFonts();

  console.log('Generating mark SVGs...');
  for (const m of MARKS) {
    writeFileSync(resolve(BRAND_DIR, `${m.name}.svg`), chainMarkSvg(m.mode, m.colors));
    console.log(`  brand/${m.name}.svg`);
  }

  console.log('Generating lockup SVGs...');
  for (const t of THEMES) {
    writeFileSync(resolve(BRAND_DIR, `lockup-primary-${t.suffix}.svg`), lockupPrimary(fonts, t));
    writeFileSync(resolve(BRAND_DIR, `wordmark-spectrum-${t.suffix}.svg`), wordmarkSpectrum(fonts, t));
    writeFileSync(resolve(BRAND_DIR, `lockup-nav-${t.suffix}.svg`), lockupNav(fonts, t));
    console.log(`  brand/lockup-primary-${t.suffix}.svg, wordmark-spectrum-${t.suffix}.svg, lockup-nav-${t.suffix}.svg`);
  }

  console.log('Generating app icon SVGs...');
  writeFileSync(resolve(BRAND_DIR, 'app-icon-dark.svg'), appIcon(INK, { wheel: ORANGE, wheel2: '#242424', chain: '#3D3D3D' }, true));
  writeFileSync(resolve(BRAND_DIR, 'app-icon-orange.svg'), appIcon(ORANGE, { wheel: INK, wheel2: '#D06E12', chain: '#A85708' }, true));

  console.log('Writing site logo SVGs...');
  const navDark = chainMarkSvg('loop', { wheel: ORANGE, wheel2: '#3A3A3A', chain: '#4A4A4A' });
  const navLight = chainMarkSvg('loop', { wheel: ORANGE, wheel2: '#2B2B2B', chain: '#BDBDBD' });
  writeFileSync(resolve(PUBLIC_DIR, 'logo-dark.svg'), navDark);
  writeFileSync(resolve(PUBLIC_DIR, 'logo-light.svg'), navLight);
  writeFileSync(resolve(PUBLIC_DIR, 'favicon.svg'), chainMarkSvg('solo', { wheel: ORANGE, chain: ORANGE }));

  console.log('Rasterizing icons...');
  const faviconSolo = chainMarkSvg('solo', { wheel: ORANGE, chain: ORANGE });
  const squareIcon = (size: number, markRatio: number) =>
    svgDoc(
      size,
      size,
      `<rect width="${size}" height="${size}" fill="${INK}"/>` +
        placeMark('loop', { wheel: ORANGE, wheel2: '#242424', chain: '#3D3D3D' }, (size * (1 - markRatio)) / 2, (size * (1 - markRatio)) / 2, size * markRatio)
    );

  const buffers = await rasterize([
    { key: 'favicon-96', svg: faviconSolo, out: 'favicon-96x96.png', size: 96 },
    { key: 'apple-touch', svg: squareIcon(180, 88 / 116), out: 'apple-touch-icon.png', size: 180 },
    { key: 'manifest-192', svg: squareIcon(192, 0.6), out: 'web-app-manifest-192x192.png', size: 192 },
    { key: 'manifest-512', svg: squareIcon(512, 0.6), out: 'web-app-manifest-512x512.png', size: 512 },
    { key: 'logo-png', svg: appIcon(INK, { wheel: ORANGE, wheel2: '#242424', chain: '#3D3D3D' }, true), out: 'logo.png', size: 512 },
    { key: 'ico-16', svg: faviconSolo, size: 16 },
    { key: 'ico-32', svg: faviconSolo, size: 32 },
    { key: 'ico-48', svg: faviconSolo, size: 48 },
  ]);

  console.log('Packing favicon.ico...');
  writeFileSync(resolve(PUBLIC_DIR, 'favicon.ico'), packIco([16, 32, 48].map((s) => ({ size: s, png: buffers[`ico-${s}`] }))));

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
