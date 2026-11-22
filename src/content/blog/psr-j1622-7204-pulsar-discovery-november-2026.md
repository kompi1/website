---
title: "PSR J1622-7204 Pulsar Discovery: Fermi Finds a Neutron Star Spinning 261 Times a Second"
description: "PSR J1622-7204 pulsar discovery, announced November 19, 2026, used a cryptography-inspired lattice search to find a millisecond pulsar in 15 years of Fermi data with about ten hours of computing time — work that had defeated a search worth 600 computer-years."
pubDate: 2026-11-21
category: 'Astronomy'
---

For fifteen years, the photons were already there. They had been streaming down from a patch of southern sky, recorded one by one by a telescope orbiting Earth, filed away in a public archive, and waiting for someone clever enough to read them. On November 19, 2026, an international team of astronomers announced that they had finally done it: they found a new pulsar — a neutron star spinning 261 times every second — hiding in plain sight in NASA's Fermi Gamma-ray Space Telescope data. The discovery itself is remarkable. The way it was made may matter even more. The team found the pulsar using about ten hours of computing time on a standard processor, after the previous best method had failed to find it despite consuming the equivalent of roughly 600 years of computing on a single processor. The trick was borrowed from an unlikely place: the mathematics of cryptography.

The new object is called PSR J1622-7204. It is an isolated millisecond pulsar, a city-sized stellar corpse rotating so fast that a point on its equator whips around hundreds of times in the blink of an eye. Its discovery was published on November 19, 2026, in the journal Physical Review Letters, where it was selected as an Editors' Suggestion, and it is the first gamma-ray pulsar ever found with a new search technique that turns an astronomical needle-in-a-haystack problem into a problem in geometry. The researchers say the same method could now unlock dozens or even hundreds of pulsars that have been sitting, undetected, in the Fermi archive for years — including a class of pulsars in binary star systems that traditional methods have considered essentially impossible to find.

<picture>
<source srcset="/img/1520034475321-cbe63696469a-1000.avif" type="image/avif">
<source srcset="/img/1520034475321-cbe63696469a-700.webp" type="image/webp">
<img src="/img/1520034475321-cbe63696469a-700.webp" alt="A deep field of stars and distant galaxies against the darkness of space" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>
*The newly discovered pulsar PSR J1622-7204 hides among the stars of the southern sky. Image: Unsplash.*

## A Lighthouse Nobody Could See

A pulsar is what remains when a massive star dies. The core collapses into a neutron star, a ball of matter so dense that a teaspoon of it would weigh about a billion tons, and if that ball spins fast enough and carries a strong magnetic field, it sweeps beams of radiation across space like a lighthouse. Each time a beam crosses Earth, telescopes see a pulse. The fastest of these objects, the millisecond pulsars, can spin hundreds of times per second, and they are among the most precise clocks in the universe — so precise that astronomers use them to test Einstein's theory of general relativity, to hunt for gravitational waves, and even, in principle, to navigate spacecraft through deep space.

PSR J1622-7204 spins at 261 hertz, completing one rotation roughly every 3.8 milliseconds. That puts it firmly in the millisecond class, the elite group of the fastest-spinning neutron stars known. What makes it special is not its speed alone but where it was found: in gamma rays, the highest-energy form of light, in data collected by NASA's Fermi Gamma-ray Space Telescope. Fermi has been surveying the entire sky every three hours since its launch in 2008, and in its 18 years of operation it has detected gamma-ray photons from more than 300 pulsars. But finding a pulsar in gamma-ray data is extraordinarily difficult, and this one had resisted every previous attempt.

The problem is one of scarcity. A pulsar's beam sweeps past Earth with every rotation, but Fermi catches only a tiny fraction of the light. For a typical gamma-ray pulsar, the telescope records roughly one photon for every hundred million rotations of the star. Imagine trying to work out the rhythm of a lighthouse by watching it through a telescope that blinks open for a fraction of a second, once in a very long while, and catches a single flash each time — and then trying to connect those isolated flashes, spread across fifteen years, into a single steady beat. That is the challenge the new method had to solve.

## The Source That Would Not Give Up Its Secret

Astronomers had long suspected that something interesting was hiding in this particular patch of sky. In Fermi's catalogues, the source is listed as 4FGL J1622.2-7202, an unassociated gamma-ray source — meaning a region of the sky that glows in gamma rays with characteristics typical of a pulsar, but with no known pulsar attached to it. Fermi has catalogued almost 1,000 such regions, and each one is a standing invitation: somewhere in there, a spinning neutron star may be waiting to be found.

The trouble was never a lack of data. It was the sheer size of the search. To find a pulsar's signal, researchers must guess several unknowns at once: how fast the star spins, how quickly that spin is slowing down, and precisely where the star sits in the sky. A small error in any one of those guesses destroys the pattern, because a prediction carried across fifteen years of observations drifts hopelessly out of phase. Searching every possible combination of spin rate, slowdown rate, and sky position would require, in the words of lead author Daniel Pook-Kolb of the Max Planck Institute for Gravitational Physics in Hannover, Germany, an impossible number of computations.

"We don't see every rotation from the pulsar, and we can't just count the rotations to work out where the photon came from," Pook-Kolb said. "We have a four-dimensional grid, and we must search each direction with millions of trials in it. There's just not enough computing power on Earth to do it."

That was the wall the field had hit. The traditional way around it was brute force, distributed. Astronomers would break the Fermi data into smaller chunks and hand them to volunteers around the world through the Einstein@Home programme, which runs searches on the unused computing power of ordinary people's computers. Even with thousands of volunteers contributing, it typically took the equivalent of hundreds of computer-years to identify a single gamma-ray pulsar. And for PSR J1622-7204, even that was not enough. A previous leading search method failed to detect the pulsar at all, despite consuming computing resources equivalent to approximately 600 years on a single standard processor.

## Borrowing a Trick from the Code-Breakers

The breakthrough came from a direction nobody in pulsar astronomy had expected: cryptography. In 2025, study co-authors Dotan Gazith and Barak Zackay of the Weizmann Institute of Science in Israel demonstrated that the pulsar search could be radically simplified by reframing it as a geometry problem. Their insight was that each possible guess about the missing rotations — the unknown number of whole turns the star completed between one detected photon and the next — could be represented as a point in a mathematical structure called a lattice, a regularly spaced grid of points in many dimensions. The correct guess, the one that lines up the photons into a coherent pulse pattern, sits unusually close to the origin of that lattice. And mathematicians have spent decades developing efficient algorithms for finding exactly such short vectors in high-dimensional lattices, originally to test encryption systems designed to resist code-breaking by future quantum computers.

"We have nothing to do with cryptography in our analysis here, but those algorithms can help us solve the problem of searching for pulsars in our data," Gazith said.

The idea sounds abstract, but its effect is concrete and dramatic. Instead of testing every possible combination of spin rate, slowdown, and position one by one, the lattice method lets the computer jump straight toward the combinations that fit. Pook-Kolb and his colleagues — working with Gazith, Zackay, Colin Clark of the Max Planck Institute, and collaborators at Chalmers University of Technology in Gothenburg, Sweden — built an improved version of the lattice search and aimed it at 4FGL J1622.2-7202, using fifteen years of Fermi Large Area Telescope data.

The search worked in stages. For individual trials, the team selected just 80 photons from those considered most likely to have come from the source. Each trial took about five minutes on a single computer core — a job easily handled by an ordinary laptop, which usually has between two and eight cores. The new pulsar turned up in about one percent of those trial runs. Once the lattice method had identified a candidate, the researchers fed in the full Fermi data set to confirm it, and the signal that emerged was so strong it could not be a chance occurrence. Total computing time: about ten hours on a standard processor. The paper describing the result was received by Physical Review Letters on May 21, 2026, revised in July, accepted on September 22, and published on November 19, 2026.

<picture>
<source srcset="/img/1532693322450-2cb5c511067d-1000.avif" type="image/avif">
<source srcset="/img/1532693322450-2cb5c511067d-700.webp" type="image/webp">
<img src="/img/1532693322450-2cb5c511067d-700.webp" alt="A colourful nebula glowing against a field of distant stars" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Fermi has catalogued almost 1,000 gamma-ray sources with pulsar-like characteristics. Image: Unsplash.*

## How Big the Speed-Up Really Is

It is worth pausing on the scale of what happened here, because the numbers are startling even by the standards of a field used to big numbers. The comparison, as reported by NASA, runs like this: the previous best search spent the equivalent of about 600 years of single-processor computing time and found nothing. The new method spent about 10 hours and found the pulsar. NASA describes the new approach as about a million times faster than before for the relevant search problem, and the authors of the Physical Review Letters paper report that their method reduces the computational cost of the search by a further five to six orders of magnitude beyond the already-improved lattice technique published in 2025.

That is not a marginal improvement. It is the difference between a search that is practically impossible and one that a laptop can run over lunch. And it changes what astronomers can attempt. A search that once consumed hundreds of computer-years per pulsar can now be run many times over, against many sources, with the computing power a university department already owns. The bottleneck in gamma-ray pulsar astronomy is no longer computing power. It is imagination — which sources to try next, and which questions to ask of the data.

The result also carries a quiet lesson about the value of old data. Fermi's photons from 4FGL J1622.2-7202 were recorded years ago. Nothing about the sky changed between the failed supercomputer search and the successful laptop search. What changed was the algorithm. The data were patient. They waited for the mathematics to catch up.

## PSR J1622-7204 by the Numbers

| Quantity | Value |
|---|---|
| Pulsar name | PSR J1622-7204 |
| Spin frequency | 261 Hz (261 rotations per second) |
| Rotation period | About 3.8 milliseconds |
| Type | Isolated millisecond pulsar |
| Fermi source | 4FGL J1622.2-7202 (previously unassociated) |
| Data used | 15 years of Fermi Large Area Telescope observations |
| Photons per trial | 80 (most likely from the source) |
| Time per trial | About 5 minutes on one processor core |
| Total computing time | About 10 hours on a standard processor |
| Previous best search | Failed after ~600 single-processor years |
| Speed improvement | About one million times faster |
| Typical photon catch rate | About 1 photon per 100 million rotations |
| Paper | Physical Review Letters 137, 211201 (2026) |
| Published | November 19, 2026 |

## A Timeline of the Discovery

### From Launch to Lattice

**June 11, 2008** — NASA launches the Fermi Gamma-ray Space Telescope. It begins surveying the entire sky every three hours in gamma rays, the highest-energy form of light.

**2009** — After an initial one-year calibration period, all Fermi data become fully public, and continue to be released as soon as they are processed. That open-data policy will prove decisive seventeen years later.

**2010s** — Fermi's catalogue grows from a few hundred gamma-ray sources to thousands. More than 300 pulsars are identified in Fermi data, but almost 1,000 pulsar-like regions remain unassociated with any known object, including 4FGL J1622.2-7202.

**2025** — Dotan Gazith and Barak Zackay of the Weizmann Institute of Science show that the pulsar search can be transformed into a geometry problem: finding the shortest vector in a high-dimensional lattice. The approach draws on algorithms developed by cryptographers testing encryption against future quantum computers.

**May 21, 2026** — Daniel Pook-Kolb and colleagues submit their paper on an improved lattice search and its first success to Physical Review Letters. The paper is revised on July 29 and accepted on September 22.

**November 19, 2026** — The paper is published in Physical Review Letters, volume 137, article 211201, as an Editors' Suggestion, and NASA announces the discovery of PSR J1622-7204, a pulsar spinning 261 times per second, found in fifteen years of Fermi data with about ten hours of computing time.

<picture>
<source srcset="/img/1548284706-24b96b23d6d8-1000.avif" type="image/avif">
<source srcset="/img/1548284706-24b96b23d6d8-700.webp" type="image/webp">
<img src="/img/1548284706-24b96b23d6d8-700.webp" alt="A reddish full moon glowing among the stars of the night sky" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Millisecond pulsars are among the most precise clocks in the universe. Image: Unsplash.*

## Why Millisecond Pulsars Matter

To understand why astronomers care so much about finding more of these objects, it helps to know what a millisecond pulsar is for. A pulsar is a neutron star, and a neutron star is what is left when a star much heavier than the Sun explodes and its core collapses under its own gravity. The result is a sphere roughly the size of a city, packing more mass than the Sun into a volume a million billion times smaller, spinning with a regularity that rivals atomic clocks. Millisecond pulsars are the fastest of them, spun up to hundreds of rotations per second by stealing matter from a companion star over millions of years, and their pulses arrive with such metronomic precision that astronomers can use them to test Einstein's general relativity in extreme gravity, to detect the faint ripples of gravitational waves passing through the galaxy, and to explore the physics of matter squeezed far beyond anything a laboratory can reproduce.

That precision is also why finding them is worth the effort. Every new millisecond pulsar is a new clock, and a new clock is a new instrument. A network of them spread across the sky — a pulsar timing array — can sense gravitational waves from pairs of supermassive black holes circling each other in distant galaxies, waves with periods of years that no Earth-based detector can catch. The more clocks in the network, and the better their sky coverage, the sharper the picture. A pulsar found in the southern sky, where PSR J1622-7204 sits, is especially valuable, because the southern sky has historically had fewer well-timed pulsars than the north.

There is a second reason the discovery matters, and it has nothing to do with this particular star. The method that found it is general. The same lattice trick should work on other unassociated Fermi sources, and the team is already using it to search for more. "We know that there are probably tens or maybe even hundreds of these pulsars in the data set that we just couldn't find," said Colin Clark, an astrophysicist at the Max Planck Institute who co-authored the study. If he is right, the Fermi archive contains a hidden population of pulsars, and the next few years could see them emerge one by one as the new method sweeps through the catalogue.

## The Next Frontier: Pulsars in Binary Systems

The team's next goal is more ambitious still: finding pulsars in binary systems, where a pulsar orbits a companion star. Those systems are scientifically precious — binary pulsars provided the first indirect evidence for gravitational waves, earning a Nobel Prize in 1993 — but they have been considered out of reach for gamma-ray searches, because the companion star's gravity distorts the pulsar's signal in ways that traditional methods cannot untangle. The orbital motion adds another layer of unknowns to a search that was already drowning in them.

The lattice method changes the arithmetic. By cutting the cost of the search by orders of magnitude, it makes the previously intractable tractable, and the team plans to extend the searches using a combination of the new algorithm and the crowdsourced computing power of the Einstein@Home programme. The volunteers who once donated hundreds of computer-years to a single search may now find their machines working through many sources at once, each one a candidate for a hidden pulsar.

It is a neat symmetry. The old method needed a supercomputer, or an army of volunteers, and still missed the signal. The new method needs a laptop and a clever idea — and then, to go further, it can hand the laptop's clever idea back to the army of volunteers and let them run it at scale.

<picture>
<source srcset="/img/1444703686981-a3abbc4d4fe3-1000.avif" type="image/avif">
<source srcset="/img/1444703686981-a3abbc4d4fe3-700.webp" type="image/webp">
<img src="/img/1444703686981-a3abbc4d4fe3-700.webp" alt="Stars shining through wisps of glowing interstellar gas" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*The lattice method could reveal tens or hundreds of pulsars still hidden in Fermi data. Image: Unsplash.*

## The Quiet Power of Open Data

There is a final thread to this story, and it may be the most important one for the future of astronomy. The discovery would not have happened without NASA's longstanding policy of making its science data freely available to anyone. After Fermi's first year of calibration, all of its data became public, and they continue to be released as soon as they are processed. That openness allowed researchers from outside the Fermi mission — a team led from a gravitational-physics institute in Germany, using ideas from cryptography researchers in Israel — to apply a completely new approach to the dataset. NASA's support for the science community, through open software and tools such as Fermitools, enabled the team to prepare its dataset before beginning the analysis.

"The nice thing about NASA data is it's all open," Clark said. "All 18 years of Fermi data have been made public, and the data just keeps growing."

The Fermi mission has grown its catalogue from a few hundred gamma-ray sources to thousands, with new findings emerging as scientists apply fresh ideas to the same data. And because the data are open, any search one team does, another team can repeat and check. "Any search that one team is doing, another team can just go and do that and check the search," said Elizabeth Hays, Fermi project scientist at NASA's Goddard Space Flight Center in Greenbelt, Maryland. "It's made all of the science better."

That is a model worth noticing. The telescope cost a fortune and took years to build. The data it collected sat in an archive, free for anyone to download. And the discovery that came out of it this week cost ten hours on a standard processor and an idea borrowed from code-breakers. The most expensive part of the whole endeavour, by far, was the idea — and ideas, unlike telescopes, do not need a launch vehicle.

## A Familiar Pattern in the Gamma-Ray Sky

PSR J1622-7204 is not the first gamma-ray story to remind astronomers that the high-energy sky still holds surprises. NASA's Neil Gehrels Swift Observatory spent 22 years chasing cosmic explosions before taking its final bow, as covered in <a href="/blog/nasa-swift-observatory-ends-22-years-gamma-ray-bursts/">After 22 Years Chasing Cosmic Explosions, NASA's Swift Observatory Takes Its Final Bow</a>, and the gamma-ray burst GRB 260310A showed how deceptive a modest flash can be in <a href="/blog/grb-260310a-off-axis-jet/">GRB 260310A Off-Axis Jet Hid a Monster Explosion Behind a Modest Flash</a>. The neutron-star theme runs through the <a href="/blog/nicer-neutron-star-mission-ends-november-2026/">NICER Neutron Star Mission Ends November 2026</a>, which measured the sizes of the densest stars known from the International Space Station. What sets the new discovery apart is that it is not about a bigger telescope or a brighter explosion. It is about a smarter search — and the realisation that the archive itself is a telescope, if you know how to look through it.

Fermi is still flying, still surveying the sky every three hours, still adding photons to the archive. Somewhere in those photons are more pulsars, spinning hundreds of times a second, flashing once in a hundred million turns, waiting for the right question to be asked. Thanks to a borrowed trick from cryptography, the questions just got a million times cheaper to ask.

## Sources

- [NASA: NASA Science Data Powers New Method to Discover Hard-to-Find Pulsars](https://science.nasa.gov/open-science/fermi-data-pulsar-discovery/)
- [Physical Review Letters: Gamma-Ray Pulsar Discovery Using a Lattice-Based Method](https://journals.aps.org/prl/abstract/10.1103/vlt2-xzgk)
- [APS Physics: Efficient Algorithm Slashes Pulsar Discovery Time](https://physics.aps.org/articles/v19/s144)
- [Weizmann Institute: From a Complex Problem to a Dizzying Discovery — A New Method for Finding Cosmic Lighthouses](https://weizmann-usa.org/news-media/news-releases/from-a-complex-problem-to-a-dizzying-discovery-a-new-method-for-finding-cosmic-lighthouses/)
