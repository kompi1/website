// One-time (and repeatable) image pipeline: downloads every Unsplash photo used
// by the site and generates self-hosted, properly-sized AVIF + WebP variants.
// Run: node ./scripts/fetch-images.mjs
// Output: public/img/<id>-1200.avif|webp and <id>-800.avif|webp

import { existsSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';

const IDS = [
	'1419242902214-272b3f66ee7a',
	'1444703686981-a3abbc4d4fe3',
	'1446776811953-b23d57bd21aa',
	'1447433589675-4aaa569f3e05',
	'1454789548928-9efd52dc4031',
	'1459908676235-d5f02a50184b',
	'1462331940025-496dfbfc7564',
	'1465101162946-4377e57745c3',
	'1502134249126-9f3755a50d78',
	'1509391366360-2e959784a276',
	'1516849841032-87cbac4d88f7',
	'1517976487492-5750f3195933',
	'1519681393784-d120267933ba',
	'1520034475321-cbe63696469a',
	'1532187863486-abf9dbad1b69',
	'1532693322450-2cb5c511067d',
	'1614313913007-2b4ae8ce32d6',
	// Tahap C expansion (2026-11-08) — topic notes for photo selection:
	'1457364887197-9150188c107b', // rocket launch, long-exposure arc at dusk
	'1541185934-01b600ea069c', // rocket launch, night arc + twilight exhaust plume
	'1541185933-ef5d8ed016c2', // Falcon Heavy liftoff at launch pad
	'1541873676-a18131494184', // Apollo astronaut on the Moon
	'1564053051381-5cb91813736b', // astronaut spacewalk (Gemini-era EVA)
	'1707058665464-c11b94b7ecd3', // observatory dome above clouds at sunset
	'1523597020744-b68b1edd3e1c', // blood moon / lunar eclipse
	'1548284706-24b96b23d6d8', // reddish full moon among stars
	'1506318137071-a8e063b4bec0', // dense star field
	'1464802686167-b939a6910659', // Milky Way core with nebula clouds
	'1614728894747-a83421e2b9c9', // Mars full disk
	'1632395627760-72e6eca7f9c7', // Earth full disk from space
	'1654263391025-4c4809a37f5c', // gas-giant planet with moons (render)
	'1637984135921-301a7d39e3b7', // Saturn and rings
	'1614732484003-ef9881555dc3', // Uranus full disk
	'1593378026483-2a1fd46a35bd', // aurora over snowy fjord
	'1517411032315-54ef2cb783bb', // aurora over coastline
	'1483347756197-71ef80e95f73', // aurora over pine forest
	'1473425021274-58232d06e88b', // aurora reflected in a lake
	'1511424011930-878efa4d6ed2', // Milky Way over desert road
];

const OUT = new URL('../public/img/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

// 16:9 crops matching the site's CSS (aspect-ratio: 16/9 + object-fit: cover),
// so no layout shift and no wasted pixels. Kept compact (each file < ~70KB)
// so they can be deployed through the repo.
const VARIANTS = [
	{ suffix: '1000', width: 1000, height: 563 }, // article body (720px column)
	{ suffix: '700', width: 700, height: 394 }, // cards / thumbnails
];

for (const id of IDS) {
	const url = `https://images.unsplash.com/photo-${id}?q=85&w=1600&auto=format&fit=crop`;
	const res = await fetch(url);
	if (!res.ok) {
		console.error(`FAILED ${id}: HTTP ${res.status}`);
		continue;
	}
	const buf = Buffer.from(await res.arrayBuffer());
	for (const v of VARIANTS) {
		const base = `${OUT}${id}-${v.suffix}`;
		if (existsSync(`${base}.avif`) && existsSync(`${base}.webp`)) {
			continue; // already generated
		}
		const pipeline = sharp(buf).resize(v.width, v.height, { fit: 'cover' });
		await pipeline.clone().avif({ quality: 52 }).toFile(`${base}.avif`);
		await pipeline.clone().webp({ quality: 68 }).toFile(`${base}.webp`);
	}
	console.log(`done ${id}`);
}
console.log('All images processed.');
