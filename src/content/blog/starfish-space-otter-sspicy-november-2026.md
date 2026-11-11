---
title: "Starfish Space Otter SSPICY November 2026: NASA's Debris Inspector Goes Silent"
description: "Starfish Space Otter SSPICY November 2026 ended in silence when NASA and Starfish Space declared the first Otter servicing spacecraft unrecoverable after a fault-protection error kept its radio switched off, cutting short the first agency-funded commercial debris inspection mission."
pubDate: 2026-11-11
category: 'Technology'
---

NASA's first attempt to hire a commercial spacecraft to go and look at dead satellites ended in silence. On November 3, 2026, NASA and Starfish Space announced that the company's first full-scale Otter servicing spacecraft, flying the Small Spacecraft Propulsion and Inspection Capability mission known as SSPICY, had lost contact during commissioning and could not be recovered. A fault in the spacecraft's onboard fault-protection system was keeping its radio switched off, and with no way to send the vehicle a command or a fix, the mission was over before its real work had even begun.

The loss is a sharp disappointment for a mission that carried outsized ambitions for its size. Otter 24C, a 335-kilogram spacecraft about the size of an oven, was supposed to spend roughly two years flying itself from one dead object to another in low Earth orbit, drifting to within hundreds of metres of up to four inoperable American satellites and rocket bodies to photograph them, measure how fast they spin, and record the condition of their surfaces. Nobody had ever asked a commercial spacecraft to do that kind of inspection work for NASA before. Now the first try has failed, and the inspections that were due to begin in early 2027 will not happen on this spacecraft.

Starfish Space, the Tukwila, Washington, startup that built and operated the vehicle, said it is working with its bus supplier to find and fix the fault, and that its other Otter missions are still planned. No contract cancellations have been reported since the loss. But the episode is a reminder of how unforgiving the first flight of a new spacecraft can be, and how a single software error in a system designed to protect a satellite can instead become the thing that kills it.

<picture>
<source srcset="/img/1459908676235-d5f02a50184b-1000.avif" type="image/avif">
<source srcset="/img/1459908676235-d5f02a50184b-700.webp" type="image/webp">
<img src="/img/1459908676235-d5f02a50184b-700.webp" alt="A heavy rocket climbing from its launch pad in a tower of flame and smoke" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>
*A Falcon 9 climbs away from its launch pad. Otter 24C rode a Falcon 9 to orbit on October 1, 2026, as part of SpaceX's Transporter-18 rideshare. Image: Unsplash.*

## A promising launch, then silence

Otter 24C launched on October 1, 2026, aboard a SpaceX Falcon 9 flying the Transporter-18 dedicated rideshare mission from Space Launch Complex 4E at Vandenberg Space Force Base in California. The rocket lifted off at 18:32 UTC, bound for a sun-synchronous orbit, carrying 130 payloads, among them three NASA-supported small spacecraft. SpaceX's flight timeline listed "SSPICY Otter" deploying about one hour and three minutes after liftoff.

For a short while, everything looked normal. Starfish Space established initial communications with the spacecraft after deployment, the routine first hello that tells a ground team its vehicle survived the ride to orbit. Then, during commissioning — the careful early phase in which a spacecraft switches on its systems one by one, calibrates its instruments, and prepares for normal operations — contact was lost.

Starfish and NASA spent weeks troubleshooting. Engineers tried to re-establish a two-way link, and analysts on both sides worked through what could have gone wrong. The investigation pointed to the spacecraft's fault-protection system, the onboard software that watches for malfunctions and responds by restarting or shutting down equipment. In this case, an error in that software was keeping the radio switched off. A system built to save the spacecraft in an emergency was instead silencing it, and because the radio was off, there was no way to send up a command to correct the fault. NASA and Starfish concluded the spacecraft was not recoverable, and said so publicly on November 3.

Starfish later identified the fault as an error in the fault-protection software on the satellite bus supplied by Astro Digital of Santa Clara, California, and said it was working with Astro Digital to fix the fault-protection system and update testing for future Otter spacecraft. The company named the cause, the supplier, and the fix in its public update rather than staying vague about what had happened — a level of openness that stood out in an industry where failures are often described in the thinnest possible language.

## What SSPICY was supposed to do

SSPICY, short for the Small Spacecraft Propulsion and Inspection Capability, was a NASA technology demonstration funded through a 15 million dollar Small Business Innovation Research Phase III contract awarded to Starfish Space in 2024 and spread over three years. The mission was managed through NASA's Small Spacecraft Technology program at NASA's Ames Research Center in California, with funding from the agency's Advanced Research and Technology Division. NASA has described it as the first commercial space debris inspection mission it has ever funded.

The plan was straightforward in concept and hard in practice. After commissioning, Otter was to use its low-thrust electric propulsion system to travel from one target to the next, approaching inoperable space objects of United States origin in low Earth orbit and examining them from a few hundred metres away, without touching or docking with any of them. The targets were never publicly named. NASA's mission description said only that they would be objects such as satellites, rocket bodies, or other hardware, each close to the orbit SSPICY was released into, of medium size, of American origin, and in a circular orbit at least 400 kilometres up. The spacecraft was to collect data on each object's spin rate, its spin axis, and the condition of its surfaces, and inspections were due to begin in early 2027, with the mission lasting about two years.

That information matters more than it might sound. A dead satellite is not a still object. It tumbles, sometimes fast, and nobody on the ground can see exactly how it is oriented or whether its surfaces are intact. Any future mission that wants to grab a dead satellite, refuel a live one, or push a derelict out of the way needs to know those things first. An inspection flight is the reconnaissance that makes everything else possible. Starfish designed Otter for exactly that wider job: life extension for working satellites and end-of-life disposal for dead ones, with a capture device meant to attach to a flat, unprepared surface rather than a dedicated docking fixture, because almost none of the thousands of satellites already in orbit were built with one.

The spacecraft carried three in-house systems that Starfish had been developing for years. CETACEAN is a computer-vision navigation system that works out where a target is and how it is oriented using ordinary cameras. CEPHALOPOD is the autonomous guidance and control system that plans and flies the approach without a ground operator in the loop. Nautilus is the capture mechanism, which adheres electrostatically, with an electromagnet as backup. SSPICY was also the first time Starfish's navigation and propulsion technologies had flown together in a single spacecraft, and the first launch and deployment of a full-scale Otter. The mission additionally tested an innovative articulating robotic boom. The flight was a test of the whole architecture at once, which is part of what made it valuable, and part of what made it risky.

<picture>
<source srcset="/img/1509391366360-2e959784a276-1000.avif" type="image/avif">
<source srcset="/img/1509391366360-2e959784a276-700.webp" type="image/webp">
<img src="/img/1509391366360-2e959784a276-700.webp" alt="A rocket's fiery ascent trail arcing across the night sky" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A rocket's ascent trail arcs across the night sky. Transporter-18 carried 130 payloads to a sun-synchronous orbit. Image: Unsplash.*

## The radio that would not switch on

Fault protection is one of the quiet disciplines of spacecraft engineering, and one of the most consequential. A satellite in orbit cannot be reached by a technician. So engineers give it software that watches its own health, and when something looks wrong, the software is allowed to act on its own: restart a computer, switch to a backup unit, safe the spacecraft by turning off non-essential equipment, and wait for instructions. The logic is supposed to be conservative. When it works, it saves missions. When it misfires, it can do the opposite, and the worst misfire is one that disables the very channel ground controllers would use to fix it.

That is what happened to Otter 24C, according to NASA and Starfish. The fault-protection system kept the radio erroneously turned off. With the radio off, the spacecraft could neither hear commands nor send telemetry, and the fault could not be corrected from the ground. Troubleshooting and analysis by both NASA and Starfish confirmed the diagnosis, and both sides agreed the spacecraft could not be brought back.

It is worth pausing on the sequence, because it explains why a mission can be lost in days even when the hardware is mostly fine. The spacecraft made contact after launch, which means its radio, power, and basic systems worked. The failure appeared during commissioning, while systems were being activated in sequence. Somewhere in that process, the fault-protection logic concluded, wrongly, that the radio should be off, and then kept it off. From the ground, the result looks the same as a dead spacecraft: silence. The difference is that the vehicle may still be intact and tumbling quietly overhead, healthy in every way except the one that matters.

Starfish has not said publicly whether the fault lay in the logic itself, in a sensor reading that fed the logic bad information, or in the way the bus and the payload software interacted. What the company has said is that the error was in fault protection on the Astro Digital bus, that it is working with Astro Digital on a fix, and that testing will be updated for future Otter spacecraft. That framing matters for the company's next flights, because fault protection is not a component that can simply be swapped out. It is woven through the spacecraft's software, and fixing it means re-examining the conditions under which the spacecraft is allowed to silence itself.

## Mission at a glance

| Item | Detail |
|---|---|
| Spacecraft | Otter 24C, first full-scale Otter servicing vehicle |
| Mass | 335 kilograms |
| Operator | Starfish Space, Tukwila, Washington |
| Satellite bus | Astro Digital, Santa Clara, California |
| Mission | NASA SSPICY (Small Spacecraft Propulsion and Inspection Capability) |
| Contract | 15 million dollars, NASA SBIR Phase III, awarded 2024, over three years |
| Launch | October 1, 2026, 18:32 UTC |
| Launch vehicle | SpaceX Falcon 9, Transporter-18 rideshare |
| Launch site | Space Launch Complex 4E, Vandenberg Space Force Base, California |
| Orbit | Sun-synchronous orbit, low Earth orbit |
| Payloads on flight | 130 |
| Deployment | About 1 hour 3 minutes after liftoff |
| Planned targets | Up to four inoperable objects of U.S. origin |
| Planned inspections | From early 2027, within hundreds of metres, no docking |
| Planned duration | About two years |
| Loss announced | November 3, 2026 |
| Cause | Fault-protection error keeping the radio switched off |
| Status | Not recoverable |

Every figure in this table comes from NASA's November 3 mission update and the launch reporting that preceded it. The targets were never named, and the sources do not publish the mission's orbital parameters, so this table does not invent them.

## Starfish's long road to Otter

Starfish Space was founded in 2018 with a single bet: that the most valuable real estate in the space economy would not be launch, but what happens after a satellite is already in orbit. Satellites break, run out of fuel, and drift. Somebody has to go up there and deal with them. The company's answer is Otter, a compact, electric-propulsion servicer built around software more than hardware, designed to rendezvous with a satellite that was never built to be visited, inspect it, dock with it, and either extend its life or take it out of orbit.

The road to a full-scale Otter was slow, and it was marked by near misses. The company's first demonstration satellite, Otter Pup 1, launched on June 12, 2023, aboard SpaceX's Transporter-8 rideshare. The plan was to dock with another spacecraft, but the mission went sideways almost immediately: Otter Pup 1 was thrown off a failing transfer tug, spinning at more than 330 degrees per second. The tiny spacecraft recovered its attitude control, but it lost its chemical thruster, and the docking objective was gone before it started. Starfish salvaged what it could. On April 19, 2024, Otter Pup 1 completed a rendezvous and proximity operations flyby, capturing an image of a D-Orbit ION spacecraft from within approximately one kilometre. It was not a docking, but it was proof that the navigation software could find and approach another object in orbit.

Otter Pup 2, launched on June 23, 2025, aboard Transporter-14, was meant to go further: the first commercial docking with an unprepared satellite in low Earth orbit. That goal slipped away too, when D-Orbit ended the collaboration and the target spacecraft was withdrawn, for reasons neither company explained. Otter Pup 2 spent months phasing toward a replacement target, and its docking attempt remained pending. The company also flew a mission called Remora with Impulse Space, an autonomous rendezvous and proximity operations demonstration in low Earth orbit that was completed in December 2025.

Meanwhile the contracts kept coming, and they are the reason the loss of Otter 24C matters beyond a single spacecraft. In May 2024, Starfish won a 37.5 million dollar contract from the United States Space Force to develop, launch, and operate an Otter for national space assets in geostationary orbit. A month later, in June 2024, Intelsat signed a contract for an Otter to extend the working life of one of its geostationary satellites. In August 2024, NASA awarded the 15 million dollar SSPICY contract. In January 2026, the Space Force, through its Space Development Agency, awarded Starfish a 52.5 million dollar contract to provide end-of-life disposal services for the Proliferated Warfighter Space Architecture constellation in low Earth orbit, targeting a launch in 2027. It was the first time a customer had formally contracted an end-of-life disposal mission for an operational satellite constellation. In April 2026, Starfish raised more than 100 million dollars in a funding round led by Point72 Ventures.

SSPICY was the first of the three Otter vehicles scheduled for launch in 2026 to fly, and the first to carry a customer mission. The Space Force and Intelsat flights are the ones that will now carry the weight of proving the architecture, and they will do so with a fault-protection fix that did not exist when Otter 24C launched.

<picture>
<source srcset="/img/1532187863486-abf9dbad1b69-1000.avif" type="image/avif">
<source srcset="/img/1532187863486-abf9dbad1b69-700.webp" type="image/webp">
<img src="/img/1532187863486-abf9dbad1b69-700.webp" alt="A rocket engine exhaust blazing against the night sky during ascent" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A rocket engine exhaust blazes during ascent. Otter's own propulsion is electric and low-thrust, built for slow, precise hops between targets rather than speed. Image: Unsplash.*

## Why an inspection flight matters

It is easy to read SSPICY as a small mission about looking at old satellites. That undersells it. Low Earth orbit is now the busiest place humans have ever operated, and the pace is still rising. More than 260 orbital launches had already taken place in 2026 by early November, the large majority of them successful, and each one adds hardware to a region where dead satellites and spent rocket bodies stay for years. The objects SSPICY was meant to visit are part of that population: American hardware, launched years ago, now uncontrolled and unvisited.

Nobody can manage that population without knowing what is actually up there. A catalogue entry says where an object is and roughly how big it is. It does not say whether a solar array is cracked, whether an antenna is deployed, or whether the body is spinning once a minute or once an hour. Those details decide whether a future servicing vehicle can approach safely, whether a capture mechanism can grip, and whether a disposal mission can push the object down without breaking it apart. Inspection is the step that turns a catalogue entry into a workable plan, and SSPICY was the first time NASA had paid a commercial company to take it.

The mission also tested a different way of doing spaceflight. Traditionally, NASA builds a spacecraft for one mission, flies it, and retires it. SSPICY was the opposite: a commercial vehicle, built on a commercial bus, sold to multiple customers, flying a NASA demonstration as its first job and commercial servicing as its second. If it had worked, it would have shown that the same small spacecraft could inspect a dead satellite for NASA in one year and extend the life of a communications satellite for Intelsat the next. That model is the foundation of Starfish's business, and it is the reason the company raised more than 100 million dollars in April 2026.

The failure does not disprove the model, but it does expose its fragility. A commercial servicer is only as reliable as its least-tested subsystem, and on a first flight the least-tested subsystem is often the software that is supposed to protect the spacecraft from itself. NASA's own framing of the loss, as part of how technology demonstrations work, is worth taking seriously: demonstrations exist precisely to find these failures before they happen on an operational mission with a customer satellite at stake. The cost of finding it here is one spacecraft and a 15 million dollar contract. The cost of finding it on a geostationary life-extension flight for Intelsat, or on a disposal flight for the Space Force's warfighter constellation, would have been far higher.

## A timeline of Otter, from startup to silence

**2018** — Starfish Space is founded in Tukwila, Washington, to build satellite servicing spacecraft.

**November 2022** — The company announces its first demonstration mission, Otter Pup 1, with the goal of docking with another spacecraft in orbit.

**June 12, 2023** — Otter Pup 1 launches aboard SpaceX's Transporter-8 rideshare. It is thrown off a failing transfer tug, spinning at more than 330 degrees per second, recovers attitude control, and loses its chemical thruster.

**April 19, 2024** — Otter Pup 1 completes a rendezvous and proximity operations flyby within approximately one kilometre of a D-Orbit ION spacecraft, capturing an image.

**May 2024** — Starfish wins a 37.5 million dollar U.S. Space Force contract for an Otter servicing vehicle in geostationary orbit.

**June 2024** — Intelsat contracts Starfish for an Otter to extend the life of a geostationary satellite.

**August 2024** — NASA awards Starfish a 15 million dollar SBIR Phase III contract for the SSPICY debris inspection mission.

**April 2026** — Starfish raises more than 100 million dollars in a funding round led by Point72 Ventures.

**June 23, 2025** — Otter Pup 2 launches aboard Transporter-14 for a first commercial docking attempt; its D-Orbit target is later withdrawn.

**December 2025** — Starfish and Impulse Space complete the Remora autonomous rendezvous and proximity operations demonstration in low Earth orbit.

**January 2026** — The Space Force's Space Development Agency awards Starfish a 52.5 million dollar contract for end-of-life disposal of Proliferated Warfighter Space Architecture satellites, targeting launch in 2027.

**September 23, 2026** — Starfish confirms its first full-scale Otter servicing vehicle is complete and assigned to the SSPICY mission on Transporter-18.

**October 1, 2026, 18:32 UTC** — Otter 24C launches aboard a Falcon 9 from Vandenberg Space Force Base, California, and deploys about one hour and three minutes later. Starfish establishes initial contact, then loses it during commissioning.

**November 3, 2026** — NASA and Starfish Space announce that the spacecraft is not recoverable. A fault-protection error is keeping its radio switched off.

## What happens next

The immediate question is whether SSPICY gets a replacement flight. NASA's November 3 update does not say whether Starfish will fly another Otter for SSPICY specifically, and the sources reviewed for this article do not answer that question. The early-2027 inspections will not happen on Otter 24C, and that much is certain. What is not yet known is whether NASA considers the demonstration's objectives important enough to fund a second attempt, or whether the agency treats the 15 million dollars as the price of a lesson learned and moves on.

Starfish's position is stronger than the loss of one spacecraft might suggest. The company says its other Otter missions are still planned, and no contract cancellations have been reported since the announcement. The Space Force disposal contract, targeting a 2027 launch, and the Intelsat life-extension mission are both still on the books, and both now benefit from the one thing Otter 24C could still deliver: a known failure mode with a known fix. The company is working with Astro Digital to correct the fault-protection system and to update the testing that is supposed to catch such errors before launch. The next Otter to fly will carry that fix, and its commissioning phase will be watched more closely than any Starfish flight before it.

There is also a narrower, technical lesson that the whole small-satellite industry will be watching. Otter 24C flew on a bus built by Astro Digital, a supplier whose hardware flies on many small missions. A fault-protection error on a commercial bus raises questions that go beyond one spacecraft: how the bus's software was tested, how the payload team's software interacted with it, and whether the fault logic was exercised against the exact sequence of events that commissioning produces. Those are the kinds of questions that change test plans across the industry, quietly, in the months after a failure, even when no regulator orders it.

For NASA, the episode is a reminder of the bargain built into the SBIR program. The agency funds small companies to try hard things cheaply, and sometimes the cheap attempt fails. The alternative is to build everything in-house, slowly and expensively, and to never learn what a commercial servicer can do. NASA's small-satellite program has flown dozens of technology demonstrations, and not all of them work. The ones that fail still produce something: a failure report, a fixed bug, and a next spacecraft that does not make the same mistake.

<picture>
<source srcset="/img/1632395627760-72e6eca7f9c7-1000.avif" type="image/avif">
<source srcset="/img/1632395627760-72e6eca7f9c7-700.webp" type="image/webp">
<img src="/img/1632395627760-72e6eca7f9c7-700.webp" alt="The full disk of Earth seen from space, the region where Otter was to inspect dead satellites" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Earth seen from space. Otter was to inspect dead American satellites and rocket bodies in low Earth orbit, flying within hundreds of metres of each target. Image: Unsplash.*

## A familiar pattern, and why it still stings

Space history is full of first flights that ended in silence. The pattern is so familiar that it can sound routine: a new spacecraft, a new piece of software, a fault that nobody caught on the ground, a mission that ends before it begins. But familiarity should not be mistaken for insignificance. Each of those failures was someone's first chance to prove a new idea, and each one cost years of work.

What makes the Otter loss sting in particular is how close the mission came to working. The launch was clean. The deployment was clean. The spacecraft phoned home. Then, during the quiet, methodical work of switching systems on one by one, a piece of protective software did exactly the wrong thing, and the mission was gone. There was no explosion, no dramatic telemetry, no last transmission. Just a radio that would not switch on, and a spacecraft drifting overhead that can no longer hear the people who built it.

That is the particular cruelty of a fault-protection failure. The system exists because engineers know spacecraft will encounter problems they cannot predict. It is the spacecraft's instinct for self-preservation. When it misfires, the instinct becomes the threat, and the spacecraft protects itself from its own operators. The fix is not more protection, but better judgement about when protection should act — and better testing of the moments when a spacecraft is most vulnerable, which are the first days after launch, when everything is being switched on for the first time.

Starfish Space has now lost a spacecraft to that lesson, after losing a docking objective to a failed transfer tug in 2023 and a docking target to a withdrawn partnership in 2025. The company has spent eight years trying to dock with something, and it still has not done it. That record invites scepticism, and the scepticism is fair. But it is also worth remembering what the company has done: it recovered a spinning satellite, flew within a kilometre of another spacecraft and photographed it, completed an autonomous rendezvous demonstration with Impulse Space, and won contracts from NASA, the Space Force, and Intelsat. The industry keeps hiring Starfish because the problem it is solving — what to do with the thousands of satellites already in orbit — is not going away, and because nobody else has solved it either.

Otter 24C will stay in orbit, silent, until the atmosphere eventually claims it. Its inspections will not happen, and the four dead objects it was meant to visit will remain unexamined, their spin rates and surface conditions still unknown. The next Otter to fly will carry the fix for the fault that silenced this one, and the test plan that should have caught it. That is the thin consolation of a technology demonstration: the spacecraft is lost, but the lesson is not, and the mission it was meant to fly is still waiting for someone to fly it.

<picture>
<source srcset="/img/1516849841032-87cbac4d88f7-1000.avif" type="image/avif">
<source srcset="/img/1516849841032-87cbac4d88f7-700.webp" type="image/webp">
<img src="/img/1516849841032-87cbac4d88f7-700.webp" alt="A heavy-lift rocket standing on its launch pad at dawn" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A rocket stands on its launch pad at dawn. Starfish says its other Otter missions, including contracted flights for the U.S. Space Force and Intelsat, are still planned. Image: Unsplash.*

For readers following the wider story of spacecraft that work in orbit rather than merely passing through it, the context is worth keeping. ESA's <a href="/blog/hera-didymos-close-up-60-km-november-2026/">Hera Didymos Close-Up 60 km: ESA Sees the Hidden Face of the Asteroid DART Struck</a> shows what close-proximity operations look like when they work, with a spacecraft flying within 60 kilometres of an asteroid to study the aftermath of a collision. The end of a long mission is a different kind of story, told in <a href="/blog/nasa-swift-telescope-re-entry-november-2026/">NASA Swift Telescope Re-Entry November 2026: A 22-Year Gamma-Ray Hunter Burns Up Over Sumatra</a>, about a veteran observatory that kept working for 22 years before its final plunge. And the commercial launch business that carries missions like SSPICY to orbit is itself changing fast, as <a href="/blog/stoke-space-nova-second-launch-pad-november-2026/">Stoke Space Nova Second Launch Pad November 2026: A Second Home for the Fully Reusable Rocket</a> describes. Otter's story sits between those three: a new kind of spacecraft, built by a commercial company, trying to do work in orbit that no one had paid a commercial company to do before.

## Sources

- [NASA: NASA-Funded SSPICY Mission Experiences Communications Loss](https://www.nasa.gov/blogs/smallsatellites/2026/11/03/nasa-funded-sspicy-mission-experiences-communications-loss/)
- [NASASpaceflight: Starfish Space's first Otter servicing vehicle slated for Transporter-18](https://www.nasaspaceflight.com/2026/09/starfish-spaces-otter-transporter-18/)
- [Orbinauts: Otter, NASA's first commercial debris inspector, launches](https://orbinauts.com/news/nasas-first-commercial-debris-inspector-has-launched/)
- [Universe Magazine: A software glitch interrupted NASA's demonstration mission in orbit](https://universemagazine.com/en/a-software-glitch-interrupted-nasas-demonstration-mission-in-orbit/)
