// Post-build HTML optimizer. Runs as part of `npm run build` (locally and on
// GitHub Pages) to squeeze maximum PageSpeed scores out of the static output:
//  - every <img> gets decoding="async" (never blocks the main thread)
//  - on article pages, the first image is the LCP element: fetchpriority="high"
//  - every other image without an explicit loading attr becomes loading="lazy"
// This is done here instead of a rehype plugin because Astro 7's default
// Markdown processor (Satteri) does not run remark/rehype plugins for content
// collections, and switching processors proved unreliable.

import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;

function* htmlFiles(dir) {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			yield* htmlFiles(full);
		} else if (entry === 'index.html') {
			yield full;
		}
	}
}

let imagesTouched = 0;
let pagesTouched = 0;

// Preload the two main font files so text never waits on them. The hashed
// filenames are discovered from the just-built output, so this stays correct
// across builds.
const astroDir = join(dist, '_astro');
const fontFiles = readdirSync(astroDir).filter(
	(f) => f.startsWith('atkinson-hyperlegible-latin-') && f.endsWith('.woff2') && !f.includes('latin-ext')
);
const fontPreloads = fontFiles
	.map(
		(f) =>
			`<link rel="preload" href="/_astro/${f}" as="font" type="font/woff2" crossorigin>`
	)
	.join('');

for (const file of htmlFiles(dist)) {
	let html = readFileSync(file, 'utf8');
	const isArticle = file.includes(`${join('dist', 'blog')}/`) && !file.endsWith(join('blog', 'index.html'));
	let seen = 0;
	let changed = false;

	html = html.replace(/<img\b[^>]*>/g, (tag) => {
		seen += 1;
		let next = tag;
		if (!/\bdecoding=/.test(next)) {
			next = next.replace('<img', '<img decoding="async"');
			changed = true;
		}
		if (isArticle) {
			if (seen === 1 && !/\bfetchpriority=/.test(next)) {
				next = next.replace('<img', '<img fetchpriority="high"');
				changed = true;
			} else if (seen > 1 && !/\bloading=/.test(next)) {
				next = next.replace('<img', '<img loading="lazy"');
				changed = true;
			}
		}
		if (next !== tag) imagesTouched += 1;
		return next;
	});

	if (changed) {
		writeFileSync(file, html);
		pagesTouched += 1;
	}

	// Inject font preloads right after <meta charset>, on every page.
	// (Skip if already injected, so re-running the script is idempotent.)
	if (fontPreloads && !html.includes('rel="preload" href="/_astro/atkinson-hyperlegible')) {
		const withFonts = html.replace(
			/<meta charset="utf-8"[^>]*>/,
			(match) => `${match}${fontPreloads}`
		);
		if (withFonts !== html) {
			writeFileSync(file, withFonts);
			pagesTouched += 1;
		}
	}
}

console.log(`[optimize-html] ${imagesTouched} <img> tags optimized across ${pagesTouched} pages.`);
