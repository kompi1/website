---
title: "JWST 3D Dark Matter Map COSMOS-Web: Webb Traces the Cosmic Web to Redshift 2"
description: "The JWST 3D dark matter map COSMOS-Web reconstruction traces invisible mass across 20 slices of cosmic time to redshift 2, doubling Hubble's reach and revealing galaxy clusters Hubble's maps missed."
pubDate: 2026-11-14
category: 'Astronomy'
---

For most of human history, the largest structure in the universe was invisible in every sense that matters. Galaxies are the lights we see, but they are only the decoration. The scaffolding that holds them in place — the dark matter that outweighs ordinary matter by roughly five to one — emits no light, reflects none, and can only be found by the way its gravity bends the light of things behind it. Astronomers have been drawing maps of that scaffolding for two decades, but every map until now has been either flat or shallow: a two-dimensional projection that stacks everything along the line of sight into a single sheet, or a three-dimensional attempt that ran out of depth long before the universe got interesting.

A new study posted on November 2, 2026, changes that. Led by Diana Scognamiglio of Duke University and NASA's Jet Propulsion Laboratory, a team of 20 researchers has reconstructed the three-dimensional distribution of dark matter across the COSMOS-Web field — a patch of sky imaged for 255 hours by the James Webb Space Telescope — slicing the invisible universe into 20 layers of cosmic time that reach back to redshift 2, roughly 10 billion years ago. It is the deepest three-dimensional dark matter map ever made, and it doubles the redshift reach of the best three-dimensional maps the Hubble Space Telescope ever produced. Where Hubble's maps stopped at redshift 1, Webb's new map keeps going, into the epoch astronomers call cosmic noon, when galaxies were forming stars at the fastest rate in the history of the universe.

The work arrives as a companion to a two-dimensional map the same lead author published in Nature Astronomy in 2026, a map so sharp — one arcminute resolution, more than twice the sharpness of earlier Hubble maps — that it revealed filaments, clusters, and voids in unprecedented detail. The new paper takes that flat map and gives it depth, separating structures that overlap in projection and recovering galaxy clusters that Hubble's lensing maps never detected at all. It is, in effect, the first time astronomers have been able to watch the cosmic web grow in three dimensions across the era when the universe built most of its galaxies.

<picture>
<source srcset="/img/1444703686981-a3abbc4d4fe3-1000.avif" type="image/avif">
<source srcset="/img/1444703686981-a3abbc4d4fe3-700.webp" type="image/webp">
<img src="/img/1444703686981-a3abbc4d4fe3-700.webp" alt="A dense field of stars glittering against the darkness of deep space" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>
*Every galaxy in a field like this one is a backlight. Its light is bent by the dark matter between it and Earth, and measuring those tiny distortions is how astronomers map what they cannot see. Image: Unsplash.*

## The map in three dimensions

The COSMOS field is one of the most intensively studied patches of sky in astronomy. It sits in the constellation Sextans and covers about 0.54 square degrees — roughly two and a half times the area of the full Moon — and it has been observed by nearly every major telescope on Earth and in space. The COSMOS-Web survey added Webb's contribution: deep near-infrared imaging with the Near-Infrared Camera, NIRCam, across four bandpasses, at a resolution of 0.02 arcseconds per pixel. The survey's overview paper, published in 2023, laid out the plan; the new papers are the payoff.

The technique at the heart of the map is weak gravitational lensing. Dark matter does not shine, but its gravity deflects the light of distant galaxies by a tiny amount, stretching their apparent shapes by a fraction of a percent. A single galaxy's distortion is meaningless — nobody knows what shape it started with — but across a quarter of a million galaxies, the pattern emerges. Galaxies behind a massive, invisible clump of dark matter are systematically stretched in the same direction, and that coherent distortion is a fingerprint of the mass in front of them. Measure enough shapes, and the mass reveals itself.

Webb's advantage is density. The two-dimensional map measured the shapes of 129 galaxies per square arcminute, many of them independently in two infrared bands, F115W and F150W, centred at 1.1 and 1.5 micrometres. That is nearly double the number Hubble could measure in the same field, and it is what buys the map its resolution: 1.00 arcminutes, plus or minus 0.01, more than twice as sharp as earlier Hubble maps. The three-dimensional reconstruction uses a slightly smaller effective sample — 121 galaxies per square arcminute — because it also needs reliable distance estimates for the background galaxies, but it is still a far denser sampling than anything Hubble achieved.

Depth is the harder problem. A two-dimensional lensing map is a projection: every structure along the line of sight, near and far, is stacked into one image, like a photograph of a forest taken through fog. Recovering the third dimension — which clump is near, which is far — is what mathematicians call a severely ill-posed inverse problem. The lensing signal from matter at different distances blends together, the unknown original shapes of individual galaxies add noise, and the distances to the background galaxies themselves carry uncertainty. Earlier approaches stabilized the inversion with simple mathematical priors that smoothed away exactly the small-scale, clumpy structure astronomers most wanted to see.

Scognamiglio's team took a different route. They coupled a physical model of how lensing distorts galaxy shapes to a diffusion-based Bayesian generative prior — a machine-learning model trained on cosmological simulations that knows what the cosmic web is supposed to look like, filaments and voids and all — and sampled the resulting probability distribution of the matter field. Instead of producing a single best-guess map, the method produces 1,024 plausible versions of the three-dimensional matter distribution, a posterior ensemble. Structures that appear in most of those versions are real; structures that appear in only a few are uncertain. The result is not just a map but a map with honest error bars.

The reconstructed volume spans redshift 0.13 to 1.92, divided into 20 lens planes, and it retains non-linear structure — the sharp, clumpy knots of the cosmic web — across a broad range of spatial scales. When the volume is sliced into redshift intervals, the dominant over-densities change position and amplitude from slice to slice, showing that the structures contributing to the projected lensing signal really do sit at different cosmic distances. Several of the reconstructed over-densities coincide, at consistent positions and redshifts, with galaxy clusters identified independently by other means. And crucially, the Webb reconstruction recovers structures associated with higher-redshift clusters that the previous Hubble weak lensing map of COSMOS, published by Massey and colleagues in 2007, never detected.

<picture>
<source srcset="/img/1506318137071-a8e063b4bec0-1000.avif" type="image/avif">
<source srcset="/img/1506318137071-a8e063b4bec0-700.webp" type="image/webp">
<img src="/img/1506318137071-a8e063b4bec0-700.webp" alt="A dense field of stars, the background against which telescopes track faint distant galaxies" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*The COSMOS-Web survey imaged a patch of sky about two and a half times the area of the full Moon, measuring the shapes of roughly a quarter of a million background galaxies. Image: Unsplash.*

## How weak lensing draws the invisible

To understand why this map matters, it helps to understand what weak lensing actually measures — and why it is the only tool that can do this job. Dark matter makes up about 85 percent of all the matter in the universe, yet it interacts with ordinary matter almost entirely through gravity. It does not absorb light, emit light, or scatter it. A telescope pointed at a dark matter halo sees nothing. But the halo's gravity bends the paths of photons passing through it, and that bending is imprinted on the images of the galaxies behind it.

The effect is weak — the stretching is typically around one percent — which is why the technique demands enormous numbers of background galaxies. One galaxy tells you nothing. Ten thousand tell you something. A quarter of a million, measured with Webb's resolution, tell you a great deal. The COSMOS-Web field is ideal for the job precisely because it is so well studied: the same patch of sky has deep imaging and spectroscopy from the ultraviolet to the mid-infrared, so the distances to the background galaxies can be estimated, and the clusters and groups in the field are independently known from X-ray and optical surveys. That independence is what lets the team test the map: if a dark matter clump appears at the same place and redshift as a known galaxy cluster, the map is working.

The new paper's test cases are three X-ray groups at redshifts of about 0.9 to 1.0, identified in an earlier catalogue by Gozaliasl and colleagues. At all three positions, the Webb reconstruction shows a more pronounced over-density than the same analysis run on Hubble's older COSMOS data, and the improvement is not a trick of lower noise — the scatter in randomized null reconstructions is comparable between the two. The deeper, higher-resolution Webb observations genuinely see more distant mass. The reconstructed signal can peak slightly in front of a group's redshift, the authors note, reflecting the limited radial precision inherent to lensing; the map separates structures in depth, but it does not pin each one to an exact distance. That caveat is stated plainly in the paper, and it is part of what makes the result credible.

The method itself is a sign of where cosmology is heading. The diffusion-based prior — the same family of generative models that powers modern image generation — was trained on cosmological simulations, so it encodes the physics of how dark matter assembles into haloes, filaments, and voids under gravity. Combined with a physical forward model of lensing, it lets the team explore the full range of three-dimensional matter distributions consistent with the data, rather than settling for a single smoothed answer. The approach was presented by Scognamiglio in a colloquium at Ohio University on October 23, 2026, under the title "Mapping the Invisible Universe Across Space and Cosmic Time with the James Webb Space Telescope," and the colloquium summary notes that the 2D and 3D maps together establish a high-resolution benchmark for ongoing cosmological surveys like ESA's Euclid mission and NASA's Nancy Grace Roman Space Telescope.

That benchmark matters because Euclid and Roman will map dark matter over vastly larger areas of sky — Euclid's first data release alone is built around a billion galaxies — but they cannot match Webb's depth and resolution in a single field. The COSMOS-Web maps show what the wide surveys should expect to find, and they provide a testing ground for the analysis methods those surveys will use. SpaceNews has covered <a href="/blog/euclid-dr1-foundation-billion-galaxies-november-2026/">Euclid DR1 Foundation Billion Galaxies: ESA's Dark Universe Map Begins</a>, the opening chapter of that much larger mapping programme.

## What the map shows

The most immediate payoff of the three-dimensional map is the clusters it finds that Hubble missed. In the paper's redshift slices, green triangles mark galaxy clusters detected only in the Webb map; orange crosses mark clusters already seen in Hubble's map. The Webb-only detections are the point. They are structures at higher redshift, fainter and further away, whose lensing signal was too weak and too sparsely sampled for Hubble's catalogue to catch. Finding them in the dark matter map, at positions and redshifts that match independently identified clusters, is a direct demonstration that Webb sees deeper into the universe's mass distribution than any telescope before it.

The map also shows how dark and luminous matter co-evolve. Filaments of dark matter thread between clusters; under-dense voids open up between them; and the galaxies, visible in the same survey, sit where the dark matter is densest. This is the cosmic web as theory predicts it: a network that grew under gravity from tiny primordial density fluctuations, with dark matter collapsing first and ordinary matter falling into the gravitational wells it created. The two-dimensional Nature Astronomy map had already shown this co-evolution in projection, tracing mass features out to redshift 2, including the most distant structure at redshift 1.1. The three-dimensional map adds the missing axis, letting astronomers watch the web's knots move and change as the slices step back through time.

There is a second, subtler payoff. The reconstructed structures are consistent with the standard cosmological model — the Lambda-CDM framework in which dark matter is cold and collisionless — as tested by null reconstructions and end-to-end simulations. That consistency is not a foregone conclusion. Alternative ideas about dark matter, including models in which dark matter particles interact with each other, predict different small-scale structure, and the distribution of mass in clusters and filaments is one of the places those differences should show up. The El Gordo cluster, the most massive known, has become a testing ground for exactly that question, as SpaceNews reported in <a href="/blog/el-gordo-two-state-self-interacting-dark-matter/">El Gordo's Strange Heart: A Two-State Dark Matter Model for the Universe's 'Fat One'</a>. The COSMOS-Web maps do not settle the nature of dark matter, but they extend the test into the high-redshift, non-Gaussian regime — the clumpy, small-scale structure where competing models diverge most — and they do it with quantified uncertainties, so future comparisons will be able to say precisely how well each model fits.

## The map in numbers

| Quantity | Value |
|---|---|
| Survey field | COSMOS-Web, 0.54 square degrees (0.77° × 0.70°) |
| Imaging | 255 hours of JWST NIRCam imaging, four bands (F115W, F150W, F277W, F444W) |
| Galaxy shapes measured (2D map) | 129 per square arcminute, roughly a quarter of a million in total |
| Effective source density (3D map) | 121 galaxies per square arcminute |
| Angular resolution | 1.00 ± 0.01 arcminutes, more than twice Hubble's |
| Redshift reach (3D) | 20 lens planes, z ≈ 0.13–1.92 (to redshift 2) |
| Redshift reach (Hubble 3D, 2007) | z ≈ 1 |
| Most distant structure (2D map) | z ≈ 1.1 |
| Posterior realizations sampled | 1,024 |
| Test X-ray groups | 3 groups at z ≈ 0.9–1.0 |
| Lead author | Diana Scognamiglio (Duke University / JPL) |
| 3D paper posted | 2 November 2026, arXiv:2611.03786 |

<picture>
<source srcset="/img/1464802686167-b939a6910659-1000.avif" type="image/avif">
<source srcset="/img/1464802686167-b939a6910659-700.webp" type="image/webp">
<img src="/img/1464802686167-b939a6910659-700.webp" alt="The glowing core of the Milky Way rising above dark clouds" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Dark matter outweighs ordinary matter by roughly five to one, yet it can only be found by the gravity it exerts on light. The Milky Way's own halo is part of the same invisible web. Image: Unsplash.*

## From a flat picture to a layered volume

The two papers are best understood as two halves of one achievement. The first, published in Nature Astronomy in 2026, built the two-dimensional map: an extremely detailed, wide-area weak-lensing mass map covering the full COSMOS-Web footprint, with an angular resolution of one arcminute. Its headline result was the sheer quality of the map — more than twice the resolution of earlier Hubble maps, revealing how dark and luminous matter co-evolve across filaments, clusters, and under-densities. It was, by the lead author's account, the largest dark matter map yet made with Webb and twice as sharp as any dark matter map made by other observatories.

The second paper, posted to arXiv on November 2, takes that flat map and unstacks it. The two-dimensional map is a projection; the new work is a reconstruction, and the difference is more than a third axis. A projection blends structures at different distances, so a massive cluster at redshift 0.5 and a modest group at redshift 1.5 can produce similar-looking blobs. The three-dimensional reconstruction separates them, using the way the lensing signal changes with the distances of the background galaxies to assign mass to different layers. It is the difference between a photograph of a city skyline and a model of the city with every building at its correct distance.

The comparison with Hubble is the cleanest measure of progress. The pioneering Hubble reconstruction of COSMOS, published by Massey and colleagues in 2007, demonstrated that three-dimensional weak lensing mapping was possible at all, but it reached only redshift 1 and its resolution was limited by the source density, depth, and methods available at the time. Webb's map doubles the redshift reach, more than doubles the angular resolution, and recovers structures — including whole clusters — that Hubble's map missed. The improvement is not incremental; it is the difference between mapping the universe's skeleton out to the era when galaxies were young and mapping it only out to the era when they were already middle-aged.

Cosmic noon is the reason the extra depth matters. Around redshift 2, about 10 billion years ago, the universe was forming stars at its fastest ever rate, galaxies were assembling most of their mass, and the black holes at their centres were growing most rapidly. The dark matter haloes that hosted that activity were assembling too, merging and accreting in the densest knots of the web. A map that reaches redshift 2 does not just go further back in time; it reaches the epoch when the universe built most of what we see today. The previous Hubble maps stopped at redshift 1, roughly 8 billion years ago, when much of that construction was already done. Webb's map watches the construction itself.

## The road to a three-dimensional dark matter map

- **2007 — Hubble draws the first 3D map.** Massey and colleagues publish the first three-dimensional weak lensing map of the COSMOS field, demonstrating the technique works but reaching only redshift 1.
- **2023 — COSMOS-Web begins.** Casey and colleagues publish the survey overview in The Astrophysical Journal, laying out Webb's plan to image 0.54 square degrees with NIRCam in four bandpasses.
- **2026 — Webb's flat map arrives.** Scognamiglio and colleagues publish the ultra-high-resolution two-dimensional weak lensing map in Nature Astronomy, measuring 129 galaxies per square arcminute at one-arcminute resolution, more than twice as sharp as Hubble's maps.
- **23 October 2026 — The work goes public.** Scognamiglio presents the 2D and 3D maps in a colloquium at Ohio University, describing them as a high-resolution benchmark for Euclid and the Roman Space Telescope.
- **2 November 2026 — The third dimension.** Scognamiglio and 19 co-authors post the three-dimensional reconstruction to arXiv, spanning 20 lens planes to redshift 2 with 1,024 posterior realizations and recovering clusters Hubble's maps missed.

<picture>
<source srcset="/img/1519681393784-d120267933ba-1000.avif" type="image/avif">
<source srcset="/img/1519681393784-d120267933ba-700.webp" type="image/webp">
<img src="/img/1519681393784-d120267933ba-700.webp" alt="A luminous nebula glowing in deep reds and purples among the stars" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Gravitational lensing magnifies and distorts the light of distant galaxies. Webb has used that effect to double the record for magnified stars in a single distant galaxy arc, as SpaceNews reported in <a href="/blog/jwst-dragon-galaxy-104-magnified-stars-november-2026/">JWST Dragon Galaxy 104 Magnified Stars: Webb Doubles the Record in a Distant Arc</a>. Image: Unsplash.*

## Why it matters

The map matters for three reasons, each aimed at a different audience. For cosmologists, it is a new test of the standard model in a regime — high redshift, small scales, non-Gaussian structure — where the model has had the least direct verification. The structures the map recovers are consistent with Lambda-CDM, and the posterior sampling means that consistency can be quantified rather than asserted. If future, larger maps find structures the model cannot produce, that will be visible in exactly this kind of analysis.

For the survey telescopes now coming online, the map is a calibration standard. Euclid is already mapping the dark universe over a huge area, and the Roman Space Telescope will follow with deep, wide infrared imaging. Both will produce weak lensing maps of their own, and both need to know how their methods perform against ground truth. A field as well studied as COSMOS, with a Webb map this deep and this carefully characterized, is the place where those methods get tested. The Ohio colloquium summary makes the point explicitly: the 2D and 3D maps establish a high-resolution benchmark for Euclid and Roman.

For everyone else, the map matters because it is a picture of the universe's real architecture. The galaxies we photograph are not the universe; they are the lights strung on a dark frame, and for the first time we can see that frame in three dimensions across the epoch when it was being built. The cosmic web is no longer a simulation or a metaphor. It is a measured thing, with filaments and voids and clusters at known distances, and it stretches back to cosmic noon.

## The honest limits

The paper is candid about what the map cannot do, and the caveats deserve as much attention as the results. The radial positions of individual structures are uncertain. The lensing signal is smeared along the line of sight by the broad lensing kernel, and uncertainties in the background galaxies' distances blur neighbouring lens planes together. A reconstructed over-density can peak slightly in front of the true redshift of the cluster it corresponds to. The advance, the authors write, is the ability to distinguish matter structures at different redshifts that overlap in two-dimensional maps, while accounting for uncertainties in their radial positions — not the ability to locate each structure precisely.

The three-dimensional paper is also, as of this writing, a preprint: it was posted to arXiv on November 2, 2026, and has not yet completed peer review, unlike its two-dimensional companion, which passed review at Nature Astronomy. Preprints are the normal currency of fast-moving astronomy, and the paper's null tests and simulation checks are thorough, but the distinction is worth stating. The map's claims rest on a method — diffusion-based generative priors — that is new to this problem, and the community will want to see it reproduced on other fields before treating it as routine.

Those limits do not diminish the result; they define it. A map with quantified uncertainties is more useful than a map that pretends to be exact, and a method that says where it is unsure is a method other teams can build on. The 1,024 posterior realizations are not a hedge. They are the point: the universe's invisible scaffolding, drawn not as a single confident picture but as a range of possibilities, with the structures that survive all 1,024 versions standing out as the ones to trust.

<picture>
<source srcset="/img/1462331940025-496dfbfc7564-1000.avif" type="image/avif">
<source srcset="/img/1462331940025-496dfbfc7564-700.webp" type="image/webp">
<img src="/img/1462331940025-496dfbfc7564-700.webp" alt="Stars shining through wisps of glowing interstellar gas and dust" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*The COSMOS-Web field has been observed from the ultraviolet to the mid-infrared, giving astronomers the distances they need to place dark matter in three dimensions. Image: Unsplash.*

The next step is scale. The COSMOS-Web field is a postage stamp — 0.54 square degrees against a whole sky of more than 41,000. Euclid is already covering vastly more, and Roman will go deeper still. The methods proven on this one small patch — dense shape measurements, generative priors, posterior sampling — are the methods those surveys will carry across the sky. When they do, the map that began in a single field in Sextans will become a map of the whole visible universe, in three dimensions, back to cosmic noon and beyond. The invisible universe is, slowly and measurably, becoming visible.

## Sources

- [arXiv: 3D dark matter map of the JWST COSMOS-Web field using diffusion-based generative priors (Scognamiglio et al., 2026)](https://arxiv.org/abs/2611.03786)
- [Chalmers Research: An ultra-high-resolution map of (dark) matter (Scognamiglio et al., Nature Astronomy, 2026)](https://research.chalmers.se/en/publication/550420)
- [Ohio University Physics Colloquium: Mapping the Invisible Universe Across Space and Cosmic Time with the James Webb Space Telescope (23 October 2026)](https://calendar.ohio.edu/event/physics-colloquium-mapping-the-invisible-universe-across-space-and-cosmic-time-with-the-james-webb-space-telescope-oct-23)
- [Horizon Lab Weekly Digest, November 6, 2026 — James Webb Builds 3D Dark Matter Map](https://horizonlab.space/en/article/weekly-digest-november-6-2026/)
