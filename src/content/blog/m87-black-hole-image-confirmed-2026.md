---
title: "M87 Black Hole Image Confirmed 2026: An AI That Never Saw a Black Hole Found the Same Ring"
description: "M87 black hole image confirmed 2026: a four-person CSIRO team rebuilt the famous ring with an AI trained only on everyday photographs, and the ring came back at the same size — 42.2 microarcseconds across, matching the Event Horizon Telescope's 2019 result."
pubDate: 2026-11-18
category: 'Astronomy'
---

On April 10, 2019, astronomers unveiled the first direct image of a black hole: a glowing orange ring around the darkness at the centre of the galaxy Messier 87, some 55 million light-years from Earth. The picture became one of the most recognisable scientific images of the modern era, printed on magazine covers, stamped onto T-shirts, and shown in classrooms around the world. It also carried a question that has trailed it ever since. The same collaboration that collected the telescope data also processed it into the image. Could the ring be real — or could it be, at least in part, a product of the choices the imaging teams made?

This week, a small team of four researchers at CSIRO, Australia's national science agency, published an answer in the journal *Nature*. They rebuilt the image of M87* — the supermassive black hole at the heart of the galaxy — using a completely different method, one designed to ignore the telescope calibration errors and subjective processing decisions that have dogged black hole imaging for decades. And the ring came back. Not a jet, not a blob, not a scatter of bright spots. A ring, the same size, the same shape, and the same orientation as the one the Event Horizon Telescope (EHT) published seven years ago.

The result, published online on November 11, 2026, is the first truly independent validation of the most famous black hole image ever made. It does not come from a new telescope or a new set of observations. It comes from the same public EHT data, read by a machine that had never seen a black hole at all.

<picture>
<source srcset="/img/1462331940025-496dfbfc7564-1000.avif" type="image/avif">
<source srcset="/img/1462331940025-496dfbfc7564-700.webp" type="image/webp">
<img src="/img/1462331940025-496dfbfc7564-700.webp" alt="A colourful nebula glowing in deep space, evoking the hot gas swirling around the black hole at the centre of galaxy M87" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>
*A colourful nebula glowing in deep space. Image: Unsplash.*

## The ring that would not go away

The new study is built on a simple and deliberately awkward idea. If you want to know whether a picture is real, hand the raw measurements to a system that has no idea what it is supposed to find, and see what it draws.

The system the CSIRO team built is called GenDIReCT, short for Generative Deep learning Image Reconstruction with Closure Terms. It is a latent diffusion model — the same class of generative artificial intelligence that powers modern image generators — but it was trained on ordinary photographs: landscapes, animals, objects. It was never trained on radio astronomy data, and it was never shown a black hole simulation. As lead author Samuel Lai, an astronomer at CSIRO, put it: "Our model had no idea what a black hole looked like when we applied it to the M87 data."

That ignorance is the point. The EHT does not take a photograph in the ordinary sense. It links radio observatories across the planet — in Chile, Mexico, Hawaii, Arizona, Spain and elsewhere — so that the whole Earth acts as a single telescope, and it records interference patterns from the radio waves arriving at each dish. Turning those patterns into an image requires calibration: correcting for the atmosphere above each telescope, for tiny timing differences, and for the quirks of each instrument. Those corrections involve choices, and choices can, in principle, steer the result. The EHT collaboration knew this in 2019, which is why it had four independent imaging teams work on the same data before the image was released. But all four teams were still inside the collaboration, and all of them worked from the same calibrated data.

GenDIReCT sidesteps the problem at its root. Instead of using the calibrated measurements, it builds its images only from what astronomers call closure invariants — closure phases and closure amplitudes. These are combinations of measurements taken by three telescopes at a time, arranged so that the calibration errors of each individual station cancel out. A closure quantity does not care whether one dish's clock was slightly off or its atmosphere was slightly thicker than expected, because the error appears in the combination and disappears again. The technique is not new in principle, but using it as the sole input to a generative reconstruction, with no black hole knowledge baked into the model, is what makes this analysis different.

The team fed GenDIReCT the public EHT observations of M87* from three observing campaigns: four nights in April 2017, two nights in April 2018 — when the Greenland Telescope had joined the array — and two nights in April 2021. All of the data were taken at a wavelength of 1.3 millimetres. They ran the reconstruction at three different image sizes, up to 450 microarcseconds square, to check that the result did not depend on how large a canvas the model was given. The ring appeared in every year of data and at every image size they tried.

Its diameter came out at 42.2 ± 1.5 microarcseconds. The EHT's own best measurement from 2019 was 42 ± 3 microarcseconds. The two numbers agree to well within their uncertainties. Assuming the galaxy sits 16.8 megaparsecs away — about 55 million light-years — that ring size implies a black hole of 6.5 ± 0.5 billion times the mass of the Sun, the same central value the original analysis produced. That is more than a thousand times the mass of the black hole at the centre of our own Milky Way.

The ring's appearance matched in subtler ways, too. It is brightest to the south and south-west, just as in the original image, and its overall orientation is consistent with the 2019 result. Comparing their reconstructions with simulated black holes viewed from different angles, the team found the best match puts our line of sight about 20 degrees from the black hole's jet — close to the 17.2 ± 3.3 degrees measured independently from the jet itself at a lower radio frequency. The geometry, in other words, hangs together.

## Why the 2019 image needed a second opinion

To understand why this confirmation matters, it helps to remember how extraordinary the original image was — and how fragile it looked to sceptics.

M87* sits about 55 million light-years away in the Virgo cluster of galaxies, and its shadow spans a sliver of sky so small that Lai compares the task of imaging it to standing in a backyard and trying to photograph a doughnut on the Moon. The EHT overcame that by combining dishes spread across the planet into a virtual telescope as wide as the Earth itself, observing at a wavelength of 1.3 millimetres, where the glowing gas around the black hole shines brightly and the blurring effect of interstellar gas is at its weakest.

When the image was released on April 10, 2019, it was an immediate triumph: the first direct visual evidence of a supermassive black hole and its shadow, a ring of light bent around a region where gravity is so strong that not even light escapes. The ring's size matched the predictions of Einstein's general relativity for a black hole of about 6.5 billion solar masses, a striking confirmation of a century-old theory in the strongest gravitational field astronomers can image.

But the image was also, inevitably, a reconstruction. The EHT records sparse interference measurements, not pixels, and many different images are compatible with the same sparse data. The collaboration handled this carefully, with four independent teams and blind tests, and the ring survived them all. Even so, the structural worry remained: the people who collected the data also decided how to calibrate and image it.

That worry sharpened into an open debate in 2022, when a team led by Makoto Miyoshi challenged the ring, arguing that it could be an artefact of the imaging process rather than a real feature of the sky. The challenge was published and debated, and further challenges followed in 2024. The EHT collaboration defended its result, but a debate of that kind is not settled by assertion. It is settled by an independent method, applied by people outside the collaboration, that reaches the same answer without sharing the original assumptions.

That is what the CSIRO paper delivers. "This is the first truly independent validation of the EHT image, an important step in the scientific process," said Nithyanandan Thyagarajan, the paper's corresponding author and a researcher in CSIRO's Space and Astronomy division. Laurent Loinard, the director of the Event Horizon Telescope Collaboration, said the work independently validates the collaboration's results.

## A machine trained on landscapes, pointed at a black hole

The story of how the new result was produced is almost as interesting as the result itself. The method behind it, GenDIReCT, was developed by the CSIRO team and described in an earlier paper in the *Publications of the Astronomical Society of Australia*. Before it was ever pointed at M87*, it was tested on other radio sources, including the nearby galaxy Centaurus A, to prove that it could reconstruct real astronomical structures from closure data alone.

The diffusion model at its heart learned what pictures look like from ordinary photographs — the same kind of training data that teaches commercial image generators about edges, textures and smooth gradients. It learned nothing about black holes, nothing about accretion discs, and nothing about what a shadow is supposed to look like. When the team finally allowed their fully validated method to look at the EHT observations of M87*, on December 4, 2025, they did not tell it what to find. They simply gave it the closure measurements and let it reconstruct whatever image best explained them.

What came back was a ring. In every dataset, in every year, at every image size. The model produced no alternative structures — no jet, no multiple rings, no ambiguous off-centre blob — consistent with astrophysical models of a black hole shadow. The ring's diameter and orientation were stable across the independent datasets, which span four years of observations and a growing telescope array. Even the changes between years made physical sense: the ring's brightest point shifts slightly between 2017 and the later years, which the authors attribute to turbulence in the gas falling toward the black hole, a restless, churning flow that never sits still.

That stability across time is one of the strongest parts of the result. The 2017 data, the 2018 data and the 2021 data were taken with different combinations of telescopes, under different weather, with different calibration headaches. A ring produced by a calibration error or a processing choice would be expected to change as those conditions changed. Instead it persisted, at the same size, in all of them.

<picture>
<source srcset="/img/1419242902214-272b3f66ee7a-1000.avif" type="image/avif">
<source srcset="/img/1419242902214-272b3f66ee7a-700.webp" type="image/webp">
<img src="/img/1419242902214-272b3f66ee7a-700.webp" alt="A distant galaxy glowing against the darkness of deep space, like Messier 87, home of the first black hole ever imaged" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A distant galaxy glowing in deep space. Image: Unsplash.*

## M87* in numbers

The new paper's measurements sit neatly alongside the original 2019 values, and the comparison is the heart of the story. The table below gathers the key figures from the CSIRO analysis and the EHT's original result, all drawn from the published sources.

| Quantity | CSIRO GenDIReCT (2026) | EHT original (2019) |
|---|---|---|
| Ring diameter | 42.2 ± 1.5 microarcseconds | 42 ± 3 microarcseconds |
| Black hole mass | 6.5 ± 0.5 billion solar masses | 6.5 billion solar masses |
| Distance to M87 | 16.8 megaparsecs (~55 million light-years) | ~55 million light-years |
| Observing wavelength | 1.3 millimetres | 1.3 millimetres |
| Data used | Public EHT data, 2017, 2018, 2021 (8 nights) | EHT data, April 2017 (4 nights) |
| Brightest part of ring | South and south-west | South |
| Viewing angle to jet | ~20 degrees | 17.2 ± 3.3 degrees (from jet) |
| Imaging input | Closure phases and amplitudes only | Calibrated visibilities |
| Model training data | Everyday photographs (no astronomy) | Black hole simulations and priors |

The closeness of the two diameter measurements is striking: the new value sits well inside the original uncertainty range. But the table also shows what changed. The new analysis uses twice as many observing nights, spread over four years instead of one campaign, and it uses only closure quantities — the calibration-proof combinations — where the original used calibrated visibilities. The model that produced it had never seen a black hole. And still the ring came back at the same size.

There is a useful sense of scale in the angular numbers. A microarcsecond is a millionth of an arcsecond, and an arcsecond is 1/3,600th of a degree. The ring's 42 microarcseconds is roughly the apparent size of an orange sitting on the surface of the Moon, seen from Earth. That the same sliver of sky can be measured twice, by two entirely different routes, to within a fraction of a microarcsecond, is a measure of how far black hole imaging has come since 2019.

## A timeline of the ring

The confirmation published this month is the latest step in a story that stretches back nearly a decade, from the first observations to the independent check.

## Timeline: from first light to independent confirmation

- **April 5–11, 2017** — The Event Horizon Telescope observes M87* over four nights, linking radio dishes across the planet into an Earth-sized telescope at a wavelength of 1.3 millimetres.
- **April 10, 2019** — The EHT Collaboration reveals the first image of a black hole: a glowing ring 42 ± 3 microarcseconds across, implying a black hole of 6.5 billion solar masses at the centre of Messier 87, about 55 million light-years away.
- **April 2018 and April 2021** — The EHT observes M87* again, with the Greenland Telescope joining the array in 2018, adding new baselines and new nights of public data.
- **2022–2024** — A team led by Makoto Miyoshi challenges the ring, arguing it could be an artefact of the EHT's imaging choices. The debate over the image's reliability sharpens.
- **December 4, 2025** — After validating their method on other sources, the four-person CSIRO team finally lets GenDIReCT look at the EHT observations of M87*.
- **November 11, 2026** — Lai, Thyagarajan, Wong and Diakogiannis publish "Independent interferometric observable confirms black hole shadow in M87*" in *Nature* (Volume 659, pages 317–323). The ring is confirmed at 42.2 ± 1.5 microarcseconds.
- **November 12, 2026** — CSIRO publishes its announcement, written by two of the study's authors, and the EHT Collaboration's director welcomes the independent validation.

The timeline carries a quiet lesson about how science corrects itself. The 2019 image was not accepted on trust, and it was not defended by authority. It was challenged, in public, by other scientists, and it survived because a different team, with a different method, built the picture again from scratch and found the same ring. That is the process working as designed.

## What the confirmation does not prove

The CSIRO team is careful about the limits of its own result, and the paper states them plainly. The most important is that the method is independent but the data are not. Both analyses start from the same public EHT measurements. If there were a problem baked into the raw recordings themselves — a fault in the telescopes, or in the way the signals were combined — it would pass straight through both analyses. What the new work rules out is the possibility that the ring is a product of the original teams' calibration and processing choices. It cannot rule out a flaw in the data itself, because no new observations were made.

There are other caveats. The ring was less clear in some reconstructions from the weaker datasets, where fewer telescopes were observing and the measurements were sparser. The authors stress that their generative outputs are not formal statistical uncertainties, so the error bars should be read as a guide to the spread of reconstructions rather than a rigorous confidence interval. The chosen image size acts as a quiet assumption about how large the source can be, and the ring's width and the brightness of its centre changed with the method, so those details probably say little about the black hole itself. And the black hole's spin — one of the most sought-after numbers in the field, because it records the history of how the black hole grew — remains unconstrained by this analysis.

None of that weakens the central finding, but it frames it honestly. An independent check that agrees with the original is strong evidence; it is not the last word. The authors themselves note that a good fit to the data is necessary but not sufficient proof that an image is correct, because there is no ground-truth picture of M87* to check against. The ring is real as far as anyone can now tell, and the evidence for it has just become substantially harder to dismiss.

<picture>
<source srcset="/img/1464802686167-b939a6910659-1000.avif" type="image/avif">
<source srcset="/img/1464802686167-b939a6910659-700.webp" type="image/webp">
<img src="/img/1464802686167-b939a6910659-700.webp" alt="The Milky Way core with glowing nebula clouds, a view of the galaxy where supermassive black holes grow at the centre" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*The Milky Way core with glowing nebula clouds. Image: Unsplash.*

## Why a ring is a test of Einstein

The reason astronomers care so much about a glowing ring, beyond its beauty, is that its size is set by the black hole's mass and by general relativity. Light passing near a black hole is bent by gravity, and the shadow it casts — the dark region bounded by the ring of light from hot gas orbiting just outside — has a size that general relativity predicts precisely for a given mass. Measure the ring, and you measure the mass. Measure it accurately, and you test Einstein's theory in the strongest gravitational field that astronomers can image.

That is why the agreement between the two measurements matters beyond the image itself. The 2019 ring gave a mass of 6.5 billion solar masses, consistent with earlier estimates from the motions of stars and gas in M87's core, but derived in a completely different way. The new measurement, made with a different method from the same data, returns the same mass. The consistency between three routes to the same number — stellar motions, gas motions, and now two independent readings of the shadow — is what turns a striking picture into a reliable measurement.

The result also matters for the next generation of black hole imaging. The next-generation Event Horizon Telescope, now under development, aims to extend the original eight-station array to as many as 30 stations worldwide, including the first telescope on the Antarctic plateau. More dishes mean more closure triangles, and each one closes more loops in the data — exactly the kind of measurement GenDIReCT is built to exploit. CSIRO has indicated that GenDIReCT will be applied to next-generation EHT data as it becomes available, and the engineering contract for new antennas was signed with Germany's mtex technology GmbH in 2023, with prototype hardware scheduled ahead of a first science campaign.

Closer to home, the team expects planned observations with the James Webb Space Telescope's NIRSpec instrument to map gas and star motions in the core of M87 and tighten the mass estimate further. Each new measurement narrows the space in which doubt can hide.

## The picture that survived its own audit

Seven years after it was unveiled, the first image of a black hole has now passed the hardest test a scientific result can face: a blind re-examination by outsiders who did not share its assumptions, did not use its tools, and did not know what they were supposed to find. A small team in Perth, working with a generative model trained on landscapes and animals and objects, pointed it at the rawest form of the EHT's data and watched a ring assemble itself out of the numbers — the same ring, at the same size, brightest in the same place.

It is a fitting outcome for a picture that was never really about a single telescope, or a single team. The EHT was built on the idea that a planet-sized instrument could see what no single dish could. The confirmation extends that idea one step further: a result becomes trustworthy not when one group declares it, but when a different group, using different tools, finds the same thing in the same sky. The ring of M87* has now been found twice, by two different kinds of seeing. The doughnut on the Moon, it turns out, was really there.

For readers who want to follow the story further, SpaceNews has covered the growing family of black holes found by modern telescopes, including <a href="/blog/jwst-little-red-dots-november-2026-direct-collapse-black-holes/">JWST Little Red Dots November 2026: The First Supermassive Black Holes Explained</a>, the powerful jets they launch in <a href="/blog/3c-120-black-hole-jet-2026-xrism-hot-inner-flow/">3C 120 Black Hole Jet 2026: XRISM Finds the Hot Inner Flow That Launches It</a>, and the runaway black hole racing through space in <a href="/blog/rbh-1-runaway-black-hole-webb-954-kms-november-2026/">RBH-1 Runaway Black Hole at 954 km/s: Webb Confirms a Monster Fleeing Its Galaxy</a>.

<picture>
<source srcset="/img/1506318137071-a8e063b4bec0-1000.avif" type="image/avif">
<source srcset="/img/1506318137071-a8e063b4bec0-700.webp" type="image/webp">
<img src="/img/1506318137071-a8e063b4bec0-700.webp" alt="A dense field of stars scattered across the dark sky, the crowded heart of a galaxy like Messier 87" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A dense field of stars across the dark sky. Image: Unsplash.*

<picture>
<source srcset="/img/1511424011930-878efa4d6ed2-1000.avif" type="image/avif">
<source srcset="/img/1511424011930-878efa4d6ed2-700.webp" type="image/webp">
<img src="/img/1511424011930-878efa4d6ed2-700.webp" alt="The Milky Way arching over a desert road under a dark sky, a reminder of how small our view of the universe is" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*The Milky Way over a desert road. Image: Unsplash.*

## Sources

- [Nature: Independent interferometric observable confirms black hole shadow in M87* (Lai et al., 2026)](https://doi.org/10.1038/s41586-026-11241-9)
- [CSIRO: Is this iconic black hole image accurate? New study delivers an independent result](https://www.csiro.au/en/news/all/articles/2026/november/blackhole-conversation)
- [Astro Bulletin: M87 Black Hole Ring Confirmed by New Method](https://astrobulletin.com/m87-black-hole-ring-confirmed/)
- [SciQuest: M87 black hole ring confirmed by an independent method](https://sciquest.org/m87-black-hole-shadow-independent-confirmation/)
