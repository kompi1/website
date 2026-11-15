---
title: "51 Eridani b FLIP JWST: The Hidden Giant Found in Two-Year-Old Webb Data"
description: "51 Eridani b FLIP JWST research has recovered a giant exoplanet from two-year-old Webb images that standard processing could not see. A Northwestern-led team reports in Nature that its new glare-removal method makes the telescope up to 15 times more sensitive, opening the archives to a fresh hunt for hidden worlds."
pubDate: 2026-11-15
category: 'Astronomy'
---

For two years, a giant planet sat inside a picture taken by the most powerful space telescope ever built, and nobody could see it. The data was there. The planet was there. The light from its star simply drowned it out, and every standard tool astronomers had for removing that glare came up empty.

Then a team of researchers at Northwestern University tried a different idea. Instead of borrowing the glare of other stars to model what the starlight should look like, they built a working digital copy of the telescope itself — a simulation of how light travels through the mirrors and instruments of the James Webb Space Telescope, tuned until it reproduced the glare in that exact observation, wobble for wobble. When they subtracted the simulated glare, the planet appeared.

The planet is 51 Eridani b, a young gas giant about 97 light-years from Earth. It was not a new discovery; ground-based telescopes found it in 2015. What is new is the method that found it again, in data where the world's best telescope had seemingly failed. The technique, called FLIP — short for Physics-based Learning for Imaging Planets — was published in the journal Nature on 4 November 2026, and it improved Webb's sensitivity to faint planets by between two and 15 times in the tests the team ran. The result suggests that the archives of Webb, and of other telescopes, may hold planets that were photographed years ago and never noticed.

<picture>
<source srcset="/img/1654263391025-4c4809a37f5c-1000.avif" type="image/avif">
<source srcset="/img/1654263391025-4c4809a37f5c-700.webp" type="image/webp">
<img src="/img/1654263391025-4c4809a37f5c-700.webp" alt="A gas giant planet with moons against a dark star field, an artist's impression of a distant exoplanet" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>
*A gas giant world like 51 Eridani b, rendered against the stars. Image: Unsplash.*

## The Planet That Was Already in the Picture

51 Eridani b orbits the star 51 Eridani, about 97 light-years away in the constellation Eridanus, the River. It is a young gas giant, a world far larger than Jupiter, circling a young star. Astronomers first found it in 2015 using the Gemini Planet Imager, a ground-based instrument built specifically to photograph planets directly — a rare and difficult feat in a field where most worlds are detected indirectly, by the tiny dip in starlight they cause when they pass in front of their star, or by the wobble they induce in the star itself.

That 2015 discovery made 51 Eridani b an important target. A young, bright gas giant is a laboratory for studying how planets form and how their atmospheres behave, and astronomers wanted to look at it with Webb's infrared eyes. Webb's Near-Infrared Camera, NIRCam, observed the system, taking images through a filter centred on a wavelength of 4.3 microns. The observations were made about two years before the new paper appeared.

But when the images were processed with the standard methods, the planet was not there. A 2025 analysis of the same Webb observations, led by Balmer and colleagues, could not separate the planet's faint signal from the glare of its host star at that wavelength. The planet had been photographed by the most sensitive infrared telescope in history, and the picture seemed to contain nothing.

The problem was not that Webb's camera was too weak. It was that the star is overwhelmingly bright compared with its planet, and that the wavelength chosen for the observation made the planet even fainter than usual. Carbon dioxide in the planet's atmosphere absorbs light strongly at 4.3 microns, dimming the very signal the astronomers were trying to measure. The planet was hiding twice over: behind its star's glare, and behind its own atmosphere's appetite for infrared light.

## Why Webb Cannot Simply Photograph a Planet

Direct imaging — taking an actual picture of a planet around another star — is one of the hardest things in astronomy. The difficulty is a matter of contrast. Even a relatively bright planet can be more than 100,000 times fainter than the star it orbits. It is the equivalent of trying to photograph a firefly hovering next to a searchlight, from kilometres away, through air that shimmers.

Webb carries a coronagraph, a mask inside its instruments that blocks most of the starlight, rather like holding a thumb up to cover the Sun so you can see something faint beside it. But a coronagraph cannot block everything. Some starlight always leaks around the mask, scattering through the telescope's optics and landing on the detector as a halo of glare. Worse, that glare is not stable. Tiny imperfections in the mirrors, small thermal shifts as the telescope's temperature changes, and minute vibrations all alter the pattern of scattered light from one moment to the next. The glare in one image is never quite the same as the glare in another.

For years, the standard answer has been a technique called KLIP, named for the Karhunen-Loève image processing method described by Soummer and colleagues in 2012. KLIP builds its model of the glare from images of other stars — reference stars observed under similar conditions — and subtracts that borrowed glare from the target image. It is a clever statistical method, and it has found planets. But it has a limit. Because it relies on other stars' glare, it can never quite capture the exact optical state of the telescope at the moment the target was observed. The method runs into what the new paper calls the telescope stability limit: the point at which the telescope's own tiny, shifting imperfections, rather than the faintness of the planet, become the barrier to seeing anything more.

That is the wall FLIP was designed to break through. Rather than borrowing glare from another star, it models the telescope itself.

## FLIP: A Digital Twin of the Telescope

FLIP starts from STPSF, the Space Telescope Science Institute's own model of Webb's optics, and rebuilds it in PyTorch, a software framework that allows the model to be differentiated — that is, the software can work out exactly how each adjustment to the model would change the simulated picture. The result is what the researchers describe as a digital twin of the telescope: a computer model that simulates how light travels through Webb's mirrors and instruments and lands on its detectors.

The team then adjusts millions of parameters inside that model — accounting for tiny misalignments, optical distortions, thermal shifts and vibrations — until the simulated glare matches the real glare in the observation being analysed. Once the model accurately reproduces the unwanted starlight, the scientists subtract that simulated glare from the original observation. What remains, if the model is right, is the faint light of anything else in the frame: a planet.

The approach combines physical knowledge of the telescope with sophisticated computational optimisation, using mathematical tools similar to those used in artificial intelligence research. But the researchers are careful about what FLIP is not. It is not an AI system that identifies planets. No machine-learning model is asked to decide whether a planet is present. The learning happens inside the physics model of the telescope, and the planet is found by the oldest method in the book: looking at what is left after the starlight is gone.

The work was led by Rodrigo Ferrer-Chavez, a doctoral student in astronomy at Northwestern University, with colleagues at Northwestern, Caltech, MIT and the Space Telescope Science Institute — including Jason J. Wang, an assistant professor of physics and astronomy at Northwestern, and Katherine L. Bouman, William T. Freeman, Laurent Pueyo, Brandon Y. Feng and Marshall D. Perrin. The project was funded by the Space Telescope Science Institute, the Alfred P. Sloan Foundation and the US National Science Foundation. Its full title states its ambition plainly: "Imaging exoplanets below the telescope stability limit."

## The Test on Three Stars

To prove the method, the team turned it on archival Webb data — observations that had already been taken, already been analysed, and already been published. They chose three star systems, observed with NIRCam across four datasets, and set FLIP against KLIP using the settings the original authors had published.

Two of the systems, HIP 65426 and 51 Eridani, contain previously identified planets. The third, TYC 5899, has no known planetary companions and served as a control: a field where the method should find nothing, so that any false signal would be exposed. Across all of the observations, FLIP consistently outperformed the conventional processing, improving sensitivity to faint planets by factors ranging from two to 15.

The most visible result was 51 Eridani b itself. In the NIRCam image taken through the F430M filter — the 4.3-micron band where carbon dioxide had swallowed the planet's light — the standard KLIP processing had failed to pull the planet out. FLIP produced a detection above five sigma, the threshold astronomers commonly use for a confident signal, with a signal-to-noise ratio of 6.3. The planet appeared at its expected location, with the expected shape of the signal, and the result is the first picture of 51 Eridani b at that wavelength.

The gain was not uniform, and the researchers do not pretend otherwise. It depends on the target and on how close to the star the measurement is made. The 15-fold improvement belongs to the TYC 5899 field at a separation of half an arcsecond from the star — very close in, on the sky. On the 51 Eridani field, the gain at that same separation is about five times. That pattern matters, because the gain is greatest close to the star, and close to the star is exactly where planets like Earth orbit. Sensitivity near the star is the hardest prize in direct imaging, and it is the one FLIP improves most.

| Star system | Known planet? | What FLIP found | Sensitivity gain |
|---|---|---|---|
| 51 Eridani | Yes — 51 Eridani b, found from the ground in 2015 | Planet recovered at 4.3 microns, signal-to-noise ratio 6.3, first image at that wavelength | About 5 times at 0.5 arcseconds from the star |
| HIP 65426 | Yes — a known giant planet | Planet detected with improved sensitivity over standard processing | Within the overall 2 to 15 times range |
| TYC 5899 | No known planets (control field) | No planet claimed; used to measure the method's sensitivity | 15 times at 0.5 arcseconds from the star |
| All test fields combined | Two with planets, one without | FLIP consistently outperformed conventional KLIP processing | 2 to 15 times overall |

<picture>
<source srcset="/img/1465101162946-4377e57745c3-1000.avif" type="image/avif">
<source srcset="/img/1465101162946-4377e57745c3-700.webp" type="image/webp">
<img src="/img/1465101162946-4377e57745c3-700.webp" alt="The Milky Way's dense star fields, where thousands of stars crowd into a single telescope image" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*The crowded star fields of the Milky Way, where every point of light is a star that could hide a planet. Image: Unsplash.*

## A Short History of 51 Eridani b

- **2015** — The Gemini Planet Imager, a ground-based instrument in Chile, discovers 51 Eridani b, a young gas giant about 97 light-years away. It becomes a prized target for studying young planetary atmospheres.
- **About two years before November 2026** — Webb's NIRCam observes the 51 Eridani system through the F430M filter, at 4.3 microns, where carbon dioxide in the planet's atmosphere absorbs infrared light.
- **2025** — A standard analysis of those Webb observations, led by Balmer and colleagues, fails to detect the planet at 4.3 microns. The data is published, and the planet appears to be missing from Webb's view.
- **4 November 2026** — Ferrer-Chavez and colleagues publish "Imaging exoplanets below the telescope stability limit" in Nature. FLIP recovers 51 Eridani b from the same two-year-old data at a signal-to-noise ratio of 6.3 — the first image of the planet at 4.3 microns.
- **5 November 2026** — The NASA Exoplanet Archive lists 6,464 confirmed exoplanets, a catalogue built largely by the transit method, to which direct imaging is now adding a sharper tool.

<picture>
<source srcset="/img/1637984135921-301a7d39e3b7-1000.avif" type="image/avif">
<source srcset="/img/1637984135921-301a7d39e3b7-700.webp" type="image/webp">
<img src="/img/1637984135921-301a7d39e3b7-700.webp" alt="Saturn and its rings, a gas giant of the kind direct imaging studies around other stars" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Saturn, a gas giant of the kind direct imaging studies around other stars. Image: Unsplash.*

## What 15 Times More Sensitive Really Means

A sensitivity gain of two to 15 times sounds abstract. In practice, it is the difference between seeing and not seeing. A planet that is five times below the detection threshold of standard processing is invisible; with FLIP, it is a detection. A survey that would have needed fifteen times as much telescope time to reach the same depth can now reach it in the time it already has. And because the improvement is largest close to the star, it opens the region of sky where the most interesting planets live — the temperate zone, where a rocky world could hold liquid water on its surface.

There is a second, quieter implication, and it may be the larger one. FLIP does not need a new telescope. It needs old data and better mathematics. Every image Webb has already taken is a candidate for reprocessing, and every image in which a planet was looked for and not found is now a question mark rather than a closed case. The same logic applies to other telescopes with good optical models. Astronomy has always advanced by building bigger instruments; FLIP is a reminder that it can also advance by understanding the instruments it already has more deeply.

That is not a free lunch. The researchers are plain about where FLIP stops. The photon noise limit — the floor set by the light itself, by the random arrival of photons — is not reached in any of these observations, and the models cannot yet hand back the telescope's drifts as numbers with uncertainties attached. The method was tested on only three stars, and the researchers have not established that it will deliver the same sensitivity improvements for every telescope, planet or observing condition. A technique that works on four datasets is a proof of concept, not a guarantee. Future work will determine how widely it can be applied, and whether it can help reveal the smaller, colder planets that remain beyond the reach of current direct-imaging techniques.

It is also worth stating what this result is not. FLIP recovered a planet that was already known; it did not discover a new world. The study provides no evidence of extraterrestrial life, and it does not establish that 51 Eridani b is habitable. It is a giant gas world, far too hot and too unlike Earth for that question to arise. What it establishes is that a known planet can now be seen where it could not be seen before — and that is a statement about the method, not about the planet.

## Why This Matters Beyond One Planet

The result lands in a field that has changed beyond recognition in a single generation. According to the NASA Exoplanet Archive, scientists had confirmed 6,464 exoplanets as of 5 November 2026. That catalogue was built mostly by the transit method: NASA's Kepler mission and its successor, the Transiting Exoplanet Survey Satellite, or TESS, watch for the small decreases in starlight that occur when a planet passes in front of its host star. Transit surveys are extraordinarily productive, but they infer a planet from its shadow. Direct imaging aims to detect light from the planet itself, and that light carries information a shadow cannot — the composition of an atmosphere, the temperature of a world, the chemistry that might one day betray biology.

The two approaches are complementary, and recent weeks have shown both at work. TESS watched a hot Jupiter called TOI-2535 b vanish from view as its orbit wobbled, a story covered in <a href="/blog/toi-2535-b-disappearing-planet-november-2026/">TOI-2535 b Disappearing Planet: TESS Watched a Hot Jupiter Vanish</a>, while Webb has been mapping the invisible scaffolding of the universe in <a href="/blog/jwst-3d-dark-matter-map-cosmos-web-november-2026/">JWST 3D Dark Matter Map COSMOS-Web: Webb Traces the Cosmic Web to Redshift 2</a> and doubling records for magnified stars in <a href="/blog/jwst-dragon-galaxy-104-magnified-stars-november-2026/">JWST Dragon Galaxy 104 Magnified Stars: Webb Doubles the Record in a Distant Arc</a>. FLIP belongs in that company as a different kind of advance: not a new observation, but a new way of seeing observations that already exist.

The stakes are highest for the search for Earth-like worlds. Earth-sized planets are much smaller and fainter than giant gas worlds, and they orbit close to their stars, in exactly the region where glare is worst and where FLIP's gains are largest. Detecting a planet in its star's habitable zone does not automatically mean the planet contains water or supports life, and the researchers emphasise that point. But before anyone can ask whether a world is habitable, they must first be able to see it. A method that sharpens Webb's vision near the star is a step toward that first sighting, and the technology could also support NASA's proposed Habitable Worlds Observatory, a future space telescope concept designed to directly image planets orbiting stars beyond our solar system.

<picture>
<source srcset="/img/1707058665464-c11b94b7ecd3-1000.avif" type="image/avif">
<source srcset="/img/1707058665464-c11b94b7ecd3-700.webp" type="image/webp">
<img src="/img/1707058665464-c11b94b7ecd3-700.webp" alt="An observatory dome above the clouds at sunset, where ground-based telescopes first found 51 Eridani b" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*An observatory dome above the clouds at sunset. Ground-based telescopes found 51 Eridani b in 2015; Webb has now seen it again. Image: Unsplash.*

## What Comes Next

The immediate future of FLIP is more testing. Three stars and four datasets are enough to prove the idea; they are not enough to map its limits. The team will want to run the method on more systems, at more wavelengths, and on fainter targets, to learn where the gains hold and where they fade. The measurements of 51 Eridani b's atmosphere at 4.3 microns — the science the original Webb observation was designed to do — are still to come, and they will be the first real scientific payoff of the recovery: a measurement of carbon dioxide and other molecules in a young giant's atmosphere, at a wavelength ground-based telescopes cannot use.

Longer term, the method points in two directions. One is inward, toward the archive: reprocessing the thousands of coronagraphic images Webb has already taken, looking for planets that were there all along. The other is outward, toward the next generation of telescopes. If a digital twin of the telescope can squeeze more sensitivity out of Webb, the same idea — a differentiable physical model, tuned to the instrument's actual behaviour — could be built into the design of future observatories from the start, including the Habitable Worlds Observatory that NASA hopes will one day photograph an Earth-like world directly.

There is a lesson in the story that has nothing to do with telescopes. The data that hid 51 Eridani b was not bad data. It was good data, taken by a superb instrument, analysed by competent scientists with the best available tools, and it said nothing. Two years later, the same data says something new — not because the sky changed, but because the way of looking changed. Astronomy's archives are full of images like that one: observations that were analysed once, with the methods of their day, and filed away. FLIP is a reminder that the sky we have already photographed may still contain discoveries, waiting for someone to learn how to see them.

<picture>
<source srcset="/img/1446776811953-b23d57bd21aa-1000.avif" type="image/avif">
<source srcset="/img/1446776811953-b23d57bd21aa-700.webp" type="image/webp">
<img src="/img/1446776811953-b23d57bd21aa-700.webp" alt="Earth seen from orbit, the template for the Earth-like worlds astronomers hope direct imaging will one day reveal" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Earth seen from orbit — the template for the Earth-like worlds astronomers hope direct imaging will one day reveal. Image: Unsplash.*

For now, the score stands at one recovered planet, a sensitivity gain of up to fifteen times, and a method that turns the telescope itself into the instrument of its own improvement. The planet was never lost. It was only hidden — and the hiding place was the glare of its own sun.

## Sources

- [Phys.org: Giant planet emerges from two-year-old JWST data thanks to glare-removal technique](https://phys.org/news/2026-11-giant-planet-emerges-year-jwst.html)
- [Quick Read: Hidden Exoplanet Revealed by James Webb Breakthrough](https://www.quickread.co.za/scientists-reveal-hidden-exoplanet-using-breakthrough-james-webb-telescope-technique/)
- [Nature World News: Software, Not a New Telescope, Pulled Giant Planet 51 Eridani b Out of Old Webb Images](https://www.natureworldnews.com/articles/73790/20261110/software-not-new-telescope-pulled-giant-planet-51-eridani-b-out-old-webb-images.htm)
- [Allatra: Old Webb Observations Can Be Reprocessed for Planets They Seemed Not to Hold](https://allatra.media/space/space-flip-physics-based-starlight-subtraction)
