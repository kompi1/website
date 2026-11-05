---
title: "Webb FLIP 51 Eridani b November 2026: The Hidden Planet in Two-Year-Old Data"
description: "Webb FLIP 51 Eridani b November 2026 is the story of a giant planet recovered from two-year-old James Webb data by a new glare-removal technique that made the telescope up to 15 times more sensitive to faint worlds."
pubDate: 2026-11-05
category: 'Astronomy'
---

For two years, a giant planet sat inside a picture taken by the most powerful telescope ever launched, and nobody could see it. The planet was not missing. The data were not corrupted. The image was exactly what the James Webb Space Telescope had recorded. But the planet's faint glow was buried under the glare of its own star, smeared and scattered by imperfections in the telescope so small they are measured in billionths of a meter. Conventional software looked at that image and found nothing. A new technique looked at the same image and found a world.

The technique is called FLIP, short for Physics-based Learning for Imaging Planets, and it was published in the journal *Nature* on November 4, 2026, by a team led by Rodrigo Ferrer-Chavez, a doctoral student in astronomy at Northwestern University, with co-author Jason Wang, an assistant professor of physics and astronomy at the same university. When the team applied FLIP to archived Webb observations, it improved the telescope's sensitivity to faint planets by two to fifteen times over standard methods. And in one of those observations, it recovered the giant planet 51 Eridani b — a world that had been hiding in plain sight at a wavelength where carbon dioxide in its atmosphere swallows the very light astronomers need to see it.

The result is not a new planet. It is something arguably more important: proof that the archive of the world's greatest telescope already contains discoveries that no one has been able to extract yet. If a piece of software can pull a hidden planet out of two-year-old data, then every Webb observation ever taken deserves a second look — and the next generation of planet-hunting telescopes may not need to be built to impossible tolerances after all.

## The planet that was there all along

51 Eridani b is a familiar name to exoplanet astronomers. It was discovered in December 2014 and announced in August 2015 as the first exoplanet found by the Gemini Planet Imager, a new instrument on the Gemini South telescope in Chile designed to photograph faint, young planets orbiting bright, nearby stars. The discovery, led by Bruce Macintosh of Stanford University and published in *Science*, was immediately recognized as a milestone: here was a planet about twice the mass of Jupiter, orbiting its star at roughly 13 times the Earth-Sun distance — between Saturn and Uranus in the scale of our own solar system — and it was the lowest-mass planet ever directly imaged at the time.

The system sits about 96 light-years from Earth in the constellation Eridanus, the River, and it is strikingly young. The star 51 Eridani, also known as HD 29391, is only about 20 million years old — a newborn by astronomical standards, born some 40 million years after the dinosaurs died out. That youth is what made the planet visible at all. Young giant planets are still hot from their formation, glowing in infrared light at temperatures around 800 degrees Fahrenheit, and 51 Eridani b was also the coldest directly imaged planet known at its discovery, with the strongest atmospheric methane signal ever detected on an alien world. Its light, however, is still roughly a million times fainter than its star.

That million-to-one contrast is the central problem of direct exoplanet imaging, and it is the problem FLIP was built to solve. "Planets are a million times fainter than their stars," Ferrer-Chavez said. "So, to image exoplanets, we need to remove that glare. That is a very tricky problem because even the tiniest changes in the telescope can affect how that glare appears. Slight shifts or tilts — even on the scale of just a few nanometers — can change the pattern of light. Our method models how light travels through the telescope and accounts for those tiny changes, allowing us to remove the glare much more precisely."

In 2024, Webb's Near-Infrared Camera, NIRCam, observed the 51 Eridani system through its F430M filter, at a wavelength of 4.3 microns. That wavelength is scientifically precious: it is where carbon dioxide strongly absorbs infrared light, so a planet's brightness there can reveal the composition of its atmosphere. But it is also a wavelength where the planet's signal is at its faintest, because the carbon dioxide in 51 Eridani b's own atmosphere absorbs the light Webb is trying to catch. When astronomers processed those observations with the standard technique, known as KLIP, the planet did not appear. The original analysis, published by Balmer and colleagues in 2025, could not separate the planet from the residual glare of its star. The data went into the archive with a planet inside it that no one could see.

## A telescope that cannot sit still

To understand why the planet stayed hidden, it helps to understand what a coronagraph actually does — and what it cannot do. Webb carries masks inside its instruments called coronagraphs that physically block most of a star's light, like holding a thumb up to blot out the Sun so you can see a bird flying beside it. That gets rid of the bulk of the glare. But it is never enough. Some starlight still leaks around and through the optics, scattering into a hazy pattern of speckles that can easily hide a planet.

Astronomers then turn to software. For about twenty years, the standard approach has been to photograph a different, planetless star, use that image as a reference for what pure starlight looks like, and subtract the reference from the science image. Whatever is left over, in theory, is the planet. The method, and its modern variants such as KLIP, has powered nearly every direct image of an exoplanet ever taken.

The trouble is that no telescope can stay perfectly still. Webb's primary mirror is 6.5 meters across, made of 18 hexagonal segments of gold-coated beryllium, and it operates at temperatures colder than minus 220 degrees Celsius. Its instruments are cooled by a cryocooler whose small motors can make the mirrors vibrate. Thermal changes can make a mirror expand or contract by picometers — trillionths of a meter. And there are instabilities nobody fully understands yet, behaviors the telescope exhibits that engineers are still learning to characterize as they operate the most complex observatory ever flown.

"We try to make telescopes extremely stable, but there are extreme engineering challenges that we haven't quite solved yet," Wang said. "There are known causes of instability and unknown causes. Small thermal changes could cause a mirror to expand or contract by a picometer. Telescopes like JWST have cryocoolers to keep the instrument super cold. Those coolers have little motors that can cause the mirrors to vibrate. So, there are issues like those but also issues that we still don't understand as we learn how to build these complex telescopes."

Each of those tiny changes alters the pattern of scattered starlight by a little. The reference image, taken at a different moment, never quite matches the science image. The subtraction leaves behind a residue of glare — and a faint planet can drown in that residue. Photographing a planet next to a star has been compared to spotting a firefly hovering beside a blazing floodlight. Even relatively bright young giant planets can be 100,000 times fainter than their host stars. At 4.3 microns, where carbon dioxide dims 51 Eridani b further still, the firefly was effectively invisible.

<picture>
<source srcset="/img/1444703686981-a3abbc4d4fe3-1000.avif" type="image/avif">
<source srcset="/img/1444703686981-a3abbc4d4fe3-700.webp" type="image/webp">
<img src="/img/1444703686981-a3abbc4d4fe3-700.webp" alt="A lone stargazer silhouetted beneath the glowing band of the Milky Way on a dark night" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>

*Directly imaging an exoplanet is like spotting a firefly beside a floodlight — the planet can be a million times fainter than its star. Image: Unsplash.*

## FLIP: a digital twin instead of a reference star

The Northwestern team's insight was to stop relying on reference photographs and instead build a replica of the telescope itself. FLIP creates what the researchers call a "digital twin" of Webb — a virtual model that simulates how starlight travels through the telescope's mirrors and reaches its detectors, imperfections and all.

Using computational techniques similar to those used to train artificial intelligence models, the team fine-tuned millions of parameters in the digital twin to account for the telescope's tiny imperfections: subtle shifts in position, distortions in the optics, the precise way light bends and scatters through the system. The crucial point, Wang emphasized, is that this is not an AI system hunting for planets. "We used the same computational tools that researchers use to train AI models, but we did not actually use AI," he said. "Because we already know the physics, we don't need AI to understand what's happening."

The process works by iteration. FLIP starts with a model of the telescope, simulates the starlight pattern that model would produce, compares it against the actual observation, and adjusts the model's parameters to close the gap. It repeats that loop, refining the twin until the simulated glare matches the real glare with remarkable precision. Then it subtracts the simulated glare from the image. What remains is whatever the model cannot explain — and if a planet is there, it is what remains.

The difference from the old approach is fundamental. A reference star tells you what starlight looked like at another time, through a telescope in a slightly different state. A digital twin tells you what the starlight should look like in this exact observation, through this exact telescope, in this exact state. The twin is built from physics, not from a second photograph, so it is not limited by the wobble between two exposures. In principle, it can model glare that no reference image could ever capture, because no reference image was ever taken under identical conditions.

The approach also sidesteps one of the quiet frustrations of high-contrast imaging: telescope time. Reference-star observations consume precious hours on the world's most oversubscribed observatory. A method that models the glare from the science data itself frees that time for more science — and it can be applied retroactively to observations taken years ago, when nobody thought to take the ideal reference frames.

## The test: three stars, one hidden planet

To prove the method worked, Ferrer-Chavez and Wang reanalyzed past Webb observations of three star systems. Two of them — HIP 65426 and 51 Eridani — host known giant planets. The third, TYC 5899, has no known planetary companions, which made it a control: a good method should find planets where they exist and find nothing where they do not.

Across all three systems, FLIP consistently outperformed conventional image-processing techniques, improving sensitivity for detecting faint planets by two to fifteen times. The gain was largest close to the star, exactly where planets like Earth orbit — and exactly where the glare is worst. In the control system, FLIP found nothing it should not have, which matters as much as any detection: a method that hallucinates planets is worse than useless.

The headline result came from 51 Eridani. In the NIRCam observation through the F430M filter, the standard KLIP processing had failed to pull the planet out of the glare. FLIP produced a detection above five sigma — the statistical threshold astronomers treat as a confident detection — at the planet's expected position, with the expected shape of the signal. A visualization released with the study shows the process step by step: as the iterations progress, the starlight is peeled away, and 51 Eridani b emerges from the noise at precisely the spot where the original discovery images said it should be.

"We showed that we can actually recover a planet that people previously couldn't see," Wang said. "This is real data in a real scenario. It was science left on the table because we didn't have the right tools to analyze the data in the most optimal way."

That phrase — science left on the table — is the heart of the story. Webb has been operating for more than four years, and its archive holds thousands of observations. Many of them were processed with the best tools available at the time and then filed away. FLIP suggests that the archive is not a record of what Webb found, but a record of what Webb was capable of finding with the software of the moment. The same data, reprocessed with better tools, can yield new science without a single additional second of telescope time.

<picture>
<source srcset="/img/1465101162946-4377e57745c3-1000.avif" type="image/avif">
<source srcset="/img/1465101162946-4377e57745c3-700.webp" type="image/webp">
<img src="/img/1465101162946-4377e57745c3-700.webp" alt="A dense field of stars and pinkish clouds of gas in the Milky Way" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*Webb's archive holds thousands of observations that may contain planets no one has yet been able to extract. Image: Unsplash.*

## Why 4.3 microns matters

The wavelength at which 51 Eridani b reappeared is not a coincidence, and it is part of why the result matters beyond a single planet. At 4.3 microns, carbon dioxide absorbs infrared light strongly. For astronomers, that absorption is a diagnostic tool: measuring how much light a planet emits or reflects at that wavelength reveals whether carbon dioxide is present in its atmosphere, and in what abundance. Carbon dioxide is one of the key molecules in planetary atmospheres — a greenhouse gas, a product of volcanic outgassing, and a potential clue to a planet's formation history and climate.

The cruel irony is that the same property that makes 4.3 microns scientifically valuable also makes planets harder to see there. The planet's own carbon dioxide dims its signal at exactly the wavelength astronomers most want to study. Before FLIP, that meant a trade-off: observe at wavelengths where planets are brighter but less informative, or observe at 4.3 microns and accept that only the brightest planets would show up. FLIP breaks that trade-off. By removing the glare far more precisely, it lets astronomers work at the informative wavelengths without losing the planet in the noise.

The same logic applies to other molecules and other wavelengths. Methane, water vapor, carbon monoxide — each leaves its fingerprint at a particular wavelength, and each fingerprint is easiest to read where the planet is often faintest. A general-purpose tool that sharpens Webb's vision across the board is worth more than a trick that works at one wavelength for one planet.

It also matters for the coldest, smallest planets. The sensitivity gain of two to fifteen times does not just recover known planets; it lowers the threshold for discovering unknown ones. A planet that is fifteen times fainter than the previous detection limit is a planet in a different class: smaller, colder, older, closer to its star. Those are the planets astronomers most want to find, because they are the ones most like the worlds in our own solar system — and the ones most likely to be habitable.

## A wobbly telescope and the observatory after Webb

The implications of FLIP reach beyond Webb's archive and into the design of the telescope that will succeed it. NASA's proposed Habitable Worlds Observatory, planned for launch in the 2040s, aims to do what no telescope has ever done: directly photograph Earth-like planets orbiting distant Sun-like stars. To find such small planets, the observatory may need to maintain optical stability at the picometer scale — trillionths of a meter, roughly 100 to 1,000 times more stable than Webb. That is an engineering demand so extreme that it has shaped the entire design conversation around the mission, driving requirements for ultra-stable mirrors, vibration isolation, and thermal control that push the limits of what can be built and launched.

FLIP offers a potentially different path forward. Rather than relying entirely on engineering solutions to keep a telescope perfectly stable, astronomers might correct for its tiny imperfections in software. If a digital twin can model a telescope's wobble precisely enough to subtract the glare it causes, then the stability requirement can be relaxed — not eliminated, but eased — and the observatory becomes cheaper, simpler, and more feasible to build. The trade is between hardware and computation, and computation has been getting cheaper for decades while ultra-precision hardware has not.

That is not to say FLIP replaces the need for a stable telescope. A coronagraph still has to block the bulk of the starlight, and no software can recover a planet buried under glare that saturates the detector. But the history of astronomy is full of problems that looked like hardware limits until someone found a software answer. Adaptive optics, which corrects for atmospheric turbulence in real time, turned ground-based telescopes from also-rans into planet-imaging machines. Interferometry turned arrays of small telescopes into instruments with the resolution of a single giant one. FLIP belongs to the same lineage: a computational technique that makes an existing telescope behave like a better one.

The Habitable Worlds Observatory is still in its architecture-study phase — NASA published a design study in 2026 examining a six-meter concept for the mission — and decisions about its final form are years away. But the FLIP result will now be part of that conversation. For readers following the observatory's development, the story of its evolving design, including the six-meter architecture study, is already taking shape in recent coverage of <a href="/blog/habitable-worlds-observatory-6-meter-design-2026/">the Habitable Worlds Observatory 6-meter design and NASA's new architecture study</a>. What FLIP adds to that story is a reminder that the observatory's most important instrument may not be its mirror or its coronagraph, but the software that cleans up after them.

## What the archive may still hold

The most immediate consequence of the FLIP result is the least glamorous and perhaps the most productive: astronomers will now go back through Webb's existing observations and look again. The three systems tested in the *Nature* paper are a proof of concept, not a survey. There are hundreds of direct-imaging observations in the archive, many of them targeting stars where planets are suspected but unconfirmed, or where a planet was detected at one wavelength but not at another. Each of those datasets is a candidate for reprocessing.

The potential rewards are concrete. A planet detected at a new wavelength is a planet whose atmosphere can be characterized more fully. A planet detected closer to its star than before is a planet in a different orbital regime, with a different temperature and a different formation story. And a planet detected for the first time in old data is a discovery that costs nothing but computing time — no proposal, no peer review of telescope time, no wait for the next observing cycle.

There is also a subtler effect on how astronomers plan observations. If archival data can be mined more deeply, then the value of every new observation increases, because it will be reprocessed again in five years with even better tools. Observing programs that looked marginal under old processing may look compelling under FLIP. Targets that were observed once and abandoned may deserve a second look before anyone concludes the star has no planets at all.

The method's limits are honest ones, and the researchers do not hide them. FLIP was verified on three star systems, and the planet it recovered was already known — so the result confirms the procedure on a known object rather than discovering a new planet. The two-to-fifteen-times sensitivity gain was measured on those observations and says nothing yet about Earth-sized planets, for which telescope stability would remain the limiting factor. A digital twin is only as good as its model of the telescope, and building that model for every instrument mode, every filter, and every observing configuration is a substantial program of work. None of that diminishes the result; it defines the road ahead.

<picture>
<source srcset="/img/1502134249126-9f3755a50d78-1000.avif" type="image/avif">
<source srcset="/img/1502134249126-9f3755a50d78-700.webp" type="image/webp">
<img src="/img/1502134249126-9f3755a50d78-700.webp" alt="The colorful band of the Milky Way glowing blue, gold and red against the dark sky" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*The two-to-fifteen-times sensitivity gain is largest close to the star — exactly where Earth-like planets orbit. Image: Unsplash.*

## The bigger picture: Webb's year of revelations

The FLIP result arrives in a year that has already been remarkable for Webb. The telescope has imaged galaxies from the universe's first billion years, peered into the atmospheres of distant worlds, and returned images that have rewritten textbooks on how stars and planets form. For readers catching up on the observatory's recent work, the breadth of that year is captured in <a href="/blog/webb-telescope-2026-discoveries/">Webb's breakthrough year — baby galaxies, impossible planets, and the clearest alien world ever seen</a>. FLIP is a different kind of breakthrough from those: not a new object, but a new way of seeing. It belongs in the same conversation, though, because it multiplies the value of everything else Webb has done.

It also belongs in a lineage of exoplanet imaging that has been advancing steadily for a decade. The Gemini Planet Imager found 51 Eridani b in 2014. Webb began observing exoplanet atmospheres in 2022. In 2026, astronomers using radio telescopes reported the first direct detection of an exoplanet's magnetic field, from the young giant Beta Pictoris b — a measurement that, like FLIP, extracted a signal everyone had assumed was out of reach, as described in <a href="/blog/beta-pictoris-b-first-exoplanet-magnetic-field-detection/">the first direct detection of an exoplanet's magnetic field at Beta Pictoris b</a>. The pattern is unmistakable: the frontier of exoplanet science is increasingly a frontier of signal processing, of finding fainter signals in data that already exists.

That pattern carries a lesson for how the public understands discovery. The romantic image is a lone astronomer at a telescope, spotting something no one has seen before. The reality, more and more, is a team of researchers at computers, teaching software to understand a telescope well enough to see past its flaws. The discovery still requires a telescope — without Webb's mirrors and detectors there would be no data to process — but the decisive step is increasingly computational. FLIP's authors are explicit about that: the same tools that train AI models, applied not to replace physical understanding but to encode it, parameter by parameter, into a working replica of the machine.

There is also a human story in the byline. The study's lead author is a doctoral student. The method he built does not require a new space mission, a new instrument, or a billion-dollar budget. It requires a deep understanding of optics, a facility with modern computational tools, and the patience to iterate a model millions of times until it matches reality. It is the kind of work that a single researcher, properly supported, can do — and it may unlock more planets than many observing programs.

## What to watch next

The next steps are already clear. The Northwestern team will apply FLIP to more archived Webb observations, and other groups will adopt and adapt the method for their own targets. The first test will be whether FLIP can find a planet nobody knew was there — a genuine discovery, rather than a recovery. The second will be whether the sensitivity gains hold across Webb's other instruments and observing modes, particularly the Mid-Infrared Instrument, where the glare problem is different and the planets are colder. The third will be whether the approach can be generalized to the next generation of telescopes, including ground-based extremely large telescopes whose adaptive-optics systems face their own version of the stability problem.

Watch, too, for the first atmospheric studies that FLIP makes possible at 4.3 microns. A planet whose carbon dioxide feature can finally be measured is a planet whose atmosphere can be modeled more completely — its temperature structure, its cloud cover, its chemistry. For 51 Eridani b itself, the recovered detection is a proof of concept, but the same technique applied to other planets at the same wavelength could yield the first carbon dioxide measurements for a class of worlds that has so far resisted them.

And watch the Habitable Worlds Observatory. Every design decision for that mission — mirror size, stability budget, coronagraph design, software pipeline — will now be made in a world where FLIP exists. If the observatory's engineers can trade some stability for computation, the mission gets cheaper and more likely to fly. If they cannot, the lesson of FLIP still applies: whatever telescope eventually launches, its archive will be mined and remined for decades, and the software that mines it will matter as much as the hardware that fills it.

<picture>
<source srcset="/img/1519681393784-d120267933ba-1000.avif" type="image/avif">
<source srcset="/img/1519681393784-d120267933ba-700.webp" type="image/webp">
<img src="/img/1519681393784-d120267933ba-700.webp" alt="Snowy mountain peaks beneath the Milky Way with a bright shooting star streaking across the sky" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*The archive is not a record of what Webb found, but of what it was capable of finding with the software of the moment. Image: Unsplash.*

## The planet was never lost

There is a quiet poetry to the way 51 Eridani b came back. The planet was discovered by a ground-based telescope in Chile, confirmed by a space telescope's archive, and recovered by a graduate student's software that treats the telescope itself as a puzzle to be solved. It was never lost. It was waiting — in the data, in the glare, in the gap between what the telescope recorded and what the software of 2025 could understand.

"We know of no planets around other stars that are like those in our own solar system," Ferrer-Chavez said. "It's not that they don't exist. It's that we cannot see them. Every time we improve our techniques, we discover new types of planets. By finding more planets, we can better understand how planetary systems form and evolve, and ultimately how typical our own solar system truly is."

That is the promise at the end of this story, and it is larger than one planet or one paper. Somewhere in Webb's archive, in observations taken years ago and filed away as unremarkable, there are planets nobody has seen yet — smaller, colder, closer to their stars, more like the worlds we know. They are not waiting for a new telescope. They are waiting for a better way of looking. On November 4, 2026, astronomers showed that the better way of looking has arrived, and that it works. The sky, it turns out, was never the limit. The software was. And the software just got fifteen times better.
