---
title: "SPHEREx Data Release 1 All-Sky Spectral Cube: NASA Maps the Infrared Universe"
description: "The SPHEREx Data Release 1 all-sky spectral cube is now public, giving every astronomer on Earth a 102-color infrared map of the entire sky to hunt for the fingerprints of cosmic inflation, the glow of distant galaxies, and frozen water in the Milky Way."
pubDate: 2026-11-17
category: 'Astronomy'
---

NASA has handed the world's astronomers a new map of the universe, and it is unlike any sky atlas ever published. On November 12, 2026, the SPHEREx mission released its first major data set, Data Release 1, through the NASA/IPAC Infrared Science Archive. Its centerpiece is an all-sky spectral cube: a measurement of the entire sky in 102 infrared wavelengths, from 0.75 to 5.0 micrometres, assembled into 12,288 tiles that any researcher can download, query, and mine for discoveries. For the first time, the whole sky has been photographed not in a handful of colors but in a spectrum, and the data are free for anyone to use.

SPHEREx — the Spectro-Photometer for the History of the Universe, Epoch of Reionization, and Ices Explorer — is a small telescope with an outsized job. Launched on March 11, 2025, aboard a Falcon 9 rocket from Vandenberg Space Force Base alongside NASA's PUNCH microsatellites, it is a NASA Astrophysics Medium-Class Explorer mission managed by the Jet Propulsion Laboratory, with James Bock of the California Institute of Technology as principal investigator. Its planned two-year mission is to map the entire sky four times in near-infrared light, collecting spectra of more than 450 million galaxies and more than 100 million stars in the Milky Way. The first complete map was finished in December 2025, just six months into science operations. Data Release 1 is the moment that map, reprocessed and calibrated to the mission's best current standard, becomes a public resource.

The release matters because SPHEREx does something no other telescope does. Hubble and the James Webb Space Telescope look deep and narrow, staring at tiny patches of sky in exquisite detail. SPHEREx looks wide and spectral, sweeping the whole sky and splitting the light from every point into 102 colors. That combination turns a flat star chart into a three-dimensional atlas: with a spectrum for every galaxy, astronomers can estimate distances far more precisely than ordinary imaging allows, and with spectra for every patch of the Milky Way, they can hunt for the chemical fingerprints of water ice and other molecules frozen onto dust grains in the clouds where stars and planets are born.

<picture>
<source srcset="/img/1464802686167-b939a6910659-1000.avif" type="image/avif">
<source srcset="/img/1464802686167-b939a6910659-700.webp" type="image/webp">
<img src="/img/1464802686167-b939a6910659-700.webp" alt="The Milky Way core glowing with nebula clouds" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>

*The Milky Way core, the kind of crowded sky SPHEREx maps in 102 infrared colors. Image: Unsplash.*

## The Whole Sky, in 102 Colors

A spectral cube is a simple idea with an enormous payoff. An ordinary image has two dimensions: position on the sky, left-right and up-down. A spectral cube adds a third axis, wavelength, so that every point on the sky carries not just a brightness but a spectrum, a measurement of how much light arrives at each of 102 different infrared wavelengths. Stack those measurements together and the sky becomes a three-dimensional data set that can be sliced in different ways: one slice is a picture of the whole sky at a single wavelength, another is the full spectrum of a single galaxy, and a third is a map of a single chemical fingerprint, such as the absorption signature of water ice, across an entire star-forming cloud.

The SPHEREx All-Sky Cube divides the celestial sphere into 12,288 tiles, each covering about 1.8 by 1.8 degrees of sky. Every tile is a data cube of 512 by 512 pixels at a scale of 12.9 arcseconds per pixel, measured in 102 spectral channels. The channels span 0.75 to 5.0 micrometres, the near-infrared range where the chemical signatures of water, carbon dioxide, and carbon monoxide ices are found, and where the light of distant galaxies carries information about their distances and ages. The spectral resolution varies across the range, from about R=35 at the longest wavelengths to R=128 at the shortest, enough to separate the broad molecular features the mission was designed to find.

Two of the 102 channels are empty by design. Channels 51 and 52 sit beside the instrument's beam splitter, the optical element that divides incoming light between detector arrays, and they contain no data. The numbering is kept intact so that every channel always means the same wavelength, and researchers working with the cube simply skip those two slots. It is a small quirk, but it is documented in the release guides, and it is the kind of detail that matters when a data set is meant to be used by thousands of people who were never in the room when the instrument was built.

The cube also comes with its foregrounds handled. Zodiacal light, the faint glow of sunlight scattered by dust in our own solar system, has been modeled and subtracted from the cube, so that the remaining signal is the sky beyond. The individual spectral images, by contrast, retain that foreground, which is why the archive recommends the cube for work that needs a clean sky and the images for work that needs the raw measurements. There are documented limits as well: emission from helium in Earth's upper atmosphere, particularly at 1.083 micrometres, can leave stripes in some channels, and the browsable PNG maps the archive provides are for visualization only. Serious analysis should use the FITS cubes, the standard scientific format, where every pixel carries its measured value and its uncertainty.

## A Small Telescope With a Clever Trick

SPHEREx achieves its all-sky coverage with a telescope whose effective aperture is just 20 centimetres, smaller than many amateur instruments. Its power comes not from light-gathering size but from design. Behind the telescope sit six detector arrays, each behind a linear variable filter, a piece of glass whose transmitted wavelength changes gradually across its surface. A given position on a detector therefore corresponds to a given wavelength, and by repointing the spacecraft so that the same celestial source falls on different parts of the detector, the mission builds up a spectrum one wavelength at a time. Three nested conical shields protect the cooling system and optics from sunlight and Earth's radiation, keeping the detectors cold enough to sense faint infrared light.

The survey strategy is built on repetition. SPHEREx scans the entire sky every six months, and over its planned two-year mission it will obtain a minimum of four spectra at every point along the ecliptic, with much greater redundancy in the deep survey fields at the north and south ecliptic poles, where the scan pattern naturally overlaps. The first two sky surveys are the ones reprocessed into Data Release 1; the third and fourth surveys are covered by Quick Release 3, the mission's rolling release of newer data. Together, the two releases form a uniformly processed set, reprocessed with the same pipeline and calibrations, so that a researcher can combine them without worrying that a change in processing is masquerading as a change in the sky.

That uniformity is the real advance of Data Release 1. The mission has been releasing data weekly since July 2025, beginning with Quick Release 1, then Quick Release 2 in October 2025, and Quick Release 3 in September 2026. Each quick release was processed with the best calibrations available at the time, which meant that the calibrations changed between releases. Data Release 1 reprocesses the first two surveys with the improved pipeline and calibrations used for Quick Release 3, putting the whole first year of data on a single footing. The archive now recommends DR1 and QR3 for new work and cautions against casually combining them with older QR2 data, because the calibrations have changed. Quick Release 2 searches have been retired from the archive's search tools, although direct downloads of the QR2 files remain available through February 2027.

## SPHEREx Data Release 1 at a Glance

| Fact | Detail |
|---|---|
| Release | Data Release 1 (DR1), announced November 12, 2026 |
| Archive | NASA/IPAC Infrared Science Archive (IRSA) |
| Data set identifier | DOI 10.26131/IRSA679 |
| New product | All-Sky Spectral Cube |
| Wavelength range | 0.75 to 5.0 micrometres |
| Spectral channels | 102 (channels 51 and 52 empty, beside the beam splitter) |
| Sky tiles | 12,288 (HEALPix order 5, about 1.8 by 1.8 degrees each) |
| Tile size | 512 by 512 pixels, 12.9 arcseconds per pixel |
| Surveys included | Surveys 1 and 2, reprocessed; uniform with Quick Release 3 (Surveys 3 and 4) |
| Zodiacal light | Model subtracted in the cube; retained in individual spectral images |
| Known limitation | Helium emission at 1.083 micrometres can produce stripes |
| Next major product | First High Reliability Source Catalog, August 2027 |
| Mission launch | March 11, 2025, Falcon 9 from Vandenberg, with PUNCH |
| Planned mission | Two years, 2025 to 2027; entire sky mapped four times |
| Galaxies targeted | More than 450 million |
| Milky Way stars targeted | More than 100 million |

<picture>
<source srcset="/img/1459908676235-d5f02a50184b-1000.avif" type="image/avif">
<source srcset="/img/1459908676235-d5f02a50184b-700.webp" type="image/webp">
<img src="/img/1459908676235-d5f02a50184b-700.webp" alt="A deep field of distant stars and galaxies" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*Every point in a deep field like this one carries a spectrum in the SPHEREx cube. Image: Unsplash.*

## Three Questions for the Whole Sky

The mission was selected in February 2019 to address three of astrophysics' biggest questions, and the data release serves all three at once.

The first question is about the beginning of the universe itself. In the first fraction of a second after the Big Bang, the universe is thought to have undergone inflation, expanding by a trillion-trillion-fold in less than a second. Inflation should have left its mark in the way matter is distributed on the largest scales, in subtle patterns in the three-dimensional arrangement of galaxies. SPHEREx will map the positions of hundreds of millions of galaxies in three dimensions to look for those patterns, testing whether the simplest models of inflation are correct and whether the primordial fluctuations that seeded galaxies really behave as theory predicts. The spectra are what make the map three-dimensional: with 102 measurements per galaxy, distances estimated from the data are far more precise than those from ordinary broad-band imaging, and precise distances are what turn a flat picture into a volume.

The second question is about the light of all the galaxies that ever were. Every galaxy that has ever shone has contributed to a faint collective glow, the extragalactic background light, including light from galaxies too faint or too distant to be picked out individually by any telescope. By measuring that glow across the whole sky in 102 colors, SPHEREx can trace the history of light produced by galaxies, including the light of hidden galaxies that other observatories have never individually observed. It is a census taken not by counting galaxies one by one but by measuring the sum of all their light, and it reaches back to the epoch when the first galaxies were switching on.

The third question is the closest to home, and the most personal: where does the water in planetary systems come from? SPHEREx will make more than 9 million observations of the Milky Way, searching interstellar clouds for hidden reservoirs of water, carbon dioxide, and other molecules essential for life. The evidence suggests that significant amounts of these molecules exist not as gas but as ice, frozen onto tiny dust grains in cold molecular clouds, and that those grains eventually become part of newly forming planets. Spectroscopy can identify water ice and other frozen molecules because each one leaves a specific chemical fingerprint in the infrared wavelengths it absorbs and emits, fingerprints that fall squarely inside SPHEREx's 0.75 to 5.0 micrometre range. Mapping where those ices are, and how abundant they are, tells astronomers how much raw material for oceans, atmospheres, and perhaps life was available when planetary systems like our own were being built.

None of these questions will be answered by the data release alone. Establishing a cosmological result or identifying a particular chemical feature requires careful analysis of the measurements and their uncertainties, and the mission team is explicit that the release is a resource, not a result. What it does is put the raw material for those answers into the hands of every astronomer on Earth, not just the mission team, and that is the point. The data are public, the tools to explore them are public, and the discoveries they contain may come from anywhere.

## From Launch to Data Release 1

**February 2019 — Selection.** NASA selects SPHEREx as a Medium-Class Explorer mission to address the origin of the universe, the evolution of galaxies, and the origin of water in planetary systems.

**March 11, 2025 — Launch.** SPHEREx launches aboard a Falcon 9 rocket from Vandenberg Space Force Base, sharing the ride with NASA's PUNCH microsatellites. The observatory begins its planned two-year mission.

**July 2025 — First quick release.** The archive begins releasing SPHEREx spectral images weekly, starting with Quick Release 1, giving researchers their first look at the survey data.

**October 2025 — Quick Release 2.** The first reprocessed quick release becomes available, with improved calibrations over the initial release.

**December 2025 — First full-sky map.** Six months into science operations, SPHEREx completes its first complete map of the sky in 102 infrared wavelengths.

**September 2026 — Quick Release 3.** The newest quick release covers Surveys 3 and 4, processed with the mission's improved pipeline.

**November 12, 2026 — Data Release 1.** The mission releases DR1 at IRSA: Surveys 1 and 2 reprocessed to the Quick Release 3 standard, plus the first All-Sky Spectral Cube, covering the whole sky in 102 channels from 0.75 to 5.0 micrometres. The data set carries the identifier DOI 10.26131/IRSA679.

**February 2027 — Quick Release 2 retired.** Direct downloads of the older QR2 files end, completing the transition to the uniformly processed DR1 and QR3 data.

**August 2027 — First source catalog.** The mission's published delivery schedule sets this date for the first High Reliability Source Catalog, a list of reliably measured individual objects, which is a separate deliverable from the images and cubes in DR1.

## What Researchers Can Do With It Now

The archive does not expect researchers to download the entire sky. The SPHEREx pages at IRSA link to a Data Explorer, an interactive tool for specifying a patch of sky and pulling out just that region, along with spectral-image cutouts, mosaic tools, and a tool for extracting the spectrum of a chosen object. A researcher interested in a single star-forming cloud can retrieve its spectra without touching the rest of the survey. A cosmologist can pull the tiles covering a survey field and start measuring galaxy distances. A student can browse the visualization maps, one frame per spectral channel, and watch the sky change as the wavelength slides from the near-infrared into the mid-infrared.

The release also carries a quiet lesson about how modern astronomy works. The first SPHEREx results have already begun to appear, including studies of brown dwarfs, the objects that blur the line between stars and exoplanets, and <a href="/blog/spherex-v572-velorum-nova-dust-shell/">observations of the nova V572 Velorum, whose dust shell the mission has examined</a>. Those early results came from the quick releases. Data Release 1 is the moment the mission's first year of data stops being a stream of weekly updates and becomes a stable, citable, uniformly processed foundation that other work can build on, with a digital object identifier that lets any paper point to exactly the data it used.

There are caveats, and the mission documents them openly. The helium striping at 1.083 micrometres, the two empty channels, the difference between the zodiacal-light-subtracted cube and the foreground-retaining images, and the warning against mixing DR1 with the older QR2 calibrations are all spelled out in the release guides. That transparency is part of the product. A sky map is only useful if its users know where it can be trusted and where it cannot, and the archive's documentation treats those limits as first-class information rather than fine print.

<picture>
<source srcset="/img/1506318137071-a8e063b4bec0-1000.avif" type="image/avif">
<source srcset="/img/1506318137071-a8e063b4bec0-700.webp" type="image/webp">
<img src="/img/1506318137071-a8e063b4bec0-700.webp" alt="A dense field of stars across the sky" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*SPHEREx measures a spectrum for every star in fields like this one, more than 100 million in the Milky Way alone. Image: Unsplash.*

## How SPHEREx Compares With the Great Observatories

SPHEREx does not compete with the great telescopes. It completes them, and the comparison shows why an all-sky spectral survey is worth building even in an era of giant observatories.

The James Webb Space Telescope sees farther and finer than any telescope before it, resolving individual galaxies in the early universe and taking detailed spectra of single exoplanets. But its field of view is tiny, and its time is precious. Webb can study a thousand galaxies in exquisite detail. It cannot survey 450 million of them. SPHEREx trades depth for breadth, accepting a modest 20-centimetre aperture and moderate spectral resolution in exchange for the whole sky, and its catalog of distances and spectra becomes the finding chart that tells targeted telescopes where to look next.

<a href="/blog/euclid-dr1-foundation-billion-galaxies-november-2026/">Euclid, the European Space Agency's survey telescope, also maps the sky on a grand scale, and its first data release has already laid the foundation for a billion-galaxy catalog.</a> Euclid's strength is sharp imaging and weak-lensing measurements of dark matter. SPHEREx's strength is spectra: 102 colors per object where Euclid has a handful of bands, giving more precise distances for the galaxies whose arrangement tests inflation. The two surveys are complementary by design, and SPHEREx's precise redshifts for foreground galaxies, combined with Euclid's lensing measurements of background galaxies, will allow direct measurements of the dark matter distribution around those foreground galaxies.

<a href="/blog/hubble-gravitational-lenses-roman-november-2026/">The Nancy Grace Roman Space Telescope, which launched in 2026, will add its own wide-field infrared survey to the mix, with a field of view hundreds of times larger than Hubble's in the infrared.</a> Roman will go deeper than SPHEREx over its survey fields, and SPHEREx will cover the whole sky, including the regions Roman never visits. Together with the ground-based Rubin Observatory, which is now watching the sky night after night, these missions form a survey ecosystem in which each instrument's weakness is another's strength, and the all-sky spectral cube is the layer that ties spectra to every point in the sky at once.

That layering is also why the data release matters beyond cosmology. A spectrum for every point in the sky is a resource that no single science team could exhaust. It is an encyclopedia of hundreds of millions of cosmic objects, in NASA's own description, and encyclopedias are used in ways their authors never predict. The brown dwarf studies and the nova observations that have already come out of SPHEREx data are early examples. The catalog of reliably measured individual objects, due in August 2027, will make that kind of work easier still, but the cube is already enough for any researcher with a question and an internet connection to start digging.

<picture>
<source srcset="/img/1707058665464-c11b94b7ecd3-1000.avif" type="image/avif">
<source srcset="/img/1707058665464-c11b94b7ecd3-700.webp" type="image/webp">
<img src="/img/1707058665464-c11b94b7ecd3-700.webp" alt="An observatory dome above the clouds at sunset" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*Survey data from space and archives on the ground now work as one system. Image: Unsplash.*

## What Comes Next

Data Release 1 covers the mission's first year. The second year is already being surveyed, and the pattern of releases will continue: quick releases on a weekly cadence, and further annual data releases that reprocess everything to the best available standard. The deep fields at the ecliptic poles will keep accumulating exposure, growing more sensitive with every pass, and the all-sky cube will be rebuilt from deeper data as the survey fills in. The High Reliability Source Catalog in August 2027 will turn the images and cubes into a list of objects with measured properties, the form in which most astronomers actually work.

The longer arc is the one the mission was selected for in 2019. By the end of its planned two years, SPHEREx will have mapped the entire sky four times in 102 colors, producing a data set that will be mined for a decade or more, long after the spacecraft itself has finished observing. The inflation test needs the full survey volume. The extragalactic background light measurement needs the full sky. The ice inventory needs the full Milky Way, observed over and over so that faint features can be separated from noise. Data Release 1 is the first installment of that archive, and it arrives with the mission barely past the halfway mark of its planned life.

There is something fitting about the timing. The first full-sky map was completed in December 2025, in the mission's first six months. Less than a year later, that map has been reprocessed, packaged into a cube, documented down to its empty channels and its helium stripes, given a permanent identifier, and handed to the world. The universe, as SPHEREx sees it, is not a collection of pretty pictures. It is a spectrum, 102 colors deep, covering every direction at once, and for the first time anyone can open it and look.

<picture>
<source srcset="/img/1511424011930-878efa4d6ed2-1000.avif" type="image/avif">
<source srcset="/img/1511424011930-878efa4d6ed2-700.webp" type="image/webp">
<img src="/img/1511424011930-878efa4d6ed2-700.webp" alt="The Milky Way stretching over a desert road at night" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*The whole sky, surveyed every six months: SPHEREx turns the night sky into a spectrum. Image: Unsplash.*

## The First Map Is Only the Beginning

Astronomy has always advanced in two ways: by building bigger telescopes, and by making better maps. The great sky surveys, from the photographic plates of the last century to the digital catalogs of this one, have repeatedly turned up discoveries nobody planned, because a map of everything contains things its makers never thought to look for. SPHEREx's Data Release 1 is the newest of those maps, and the most colorful: the entire sky, measured in 102 infrared wavelengths, with a spectrum attached to every point.

Its three great questions — what set the universe expanding, where all the light of all the galaxies went, and where the water for new planets hides — will take years to answer, and the answers may not come from the mission team at all. They may come from a graduate student pulling a single tile out of the archive, or from a cosmologist combining the cube with Euclid's lensing maps, or from a chemist of the interstellar medium tracing a faint ice signature across a cloud nobody had studied before. That is the bet behind every public data release, and it is why the release itself is news: the map is now open, the sky is now a spectrum, and the search has just begun.

## Sources

- [SPHEREx mission team: SPHEREx Data Release 1 (DR1) is now available at IRSA](https://spherex.caltech.edu/news/spherex-data-release-1-dr1-is-now-available-at-irsa)
- [NASA/IPAC Infrared Science Archive: SPHEREx Data Release 1 (DR1) Spectral All-Sky Cube, DOI 10.26131/IRSA679](https://www.ipac.caltech.edu/doi/10.26131/IRSA679)
- [NASA JPL: SPHEREx science goals — 3D map of hundreds of millions of galaxies, inflation, and water ices](https://www.jpl.nasa.gov/press-kits/spherex/mission-overview/science/)
- [TS2 Space: NASA's SPHEREx Releases All-Sky Spectral Cube for Public Research](https://ts2.tech/en/nasas-spherex-releases-an-all-sky-spectral-cube-for-public-research/)
