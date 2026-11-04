---
title: "NASA SSPICY Otter Communications Loss November 2026 Ends First Debris-Inspection Demo"
description: "NASA SSPICY Otter communications loss November 2026 has ended the $15 million debris-inspection demonstration after a fault-protection flaw silenced the spacecraft's radio during commissioning, NASA and Starfish Space confirmed on November 3."
pubDate: 2026-11-04
category: 'Technology'
---

NASA has lost its first commercial debris inspector. In a brief announcement on November 3, the agency said that Starfish Space's Otter spacecraft, the vehicle behind the Small Spacecraft Propulsion and Inspection Capability (SSPICY) mission, is not recoverable after contact was lost during commissioning in October. The spacecraft's radio, engineers concluded, has been switched off by its own fault-protection system — and there is no way to switch it back on.

The failure ends, barely a month after launch, the first NASA-funded attempt to send a commercial spacecraft to inspect dead satellites up close. It also delivers a hard lesson about one of the quietest dangers in spaceflight: the safety software designed to save a spacecraft can, under the wrong conditions, be the thing that silences it forever.

## A Mission Declared Lost

The SSPICY mission launched on October 1, 2026, aboard SpaceX's Transporter-18 rideshare flight, which carried some 130 small satellites, CubeSats, and prototypes into orbit in a single Falcon 9 launch. Starfish Space, the Seattle-area startup leading the mission, established initial communications with its Otter spacecraft after separation. Then, during commissioning — the careful first phase of a mission in which engineers power on systems, calibrate instruments, and prepare a spacecraft for regular operations — contact stopped.

Starfish has not been able to reestablish two-way communication since. Weeks of troubleshooting and analysis by NASA and Starfish engineers traced the silence to the spacecraft's fault-protection system, the onboard software responsible for detecting problems and responding to them automatically. In this case, the system is keeping the spacecraft's radio erroneously turned off. With no radio, there is no command path back to the spacecraft, and with no command path, there is no way to correct the fault. NASA and Starfish have therefore concluded that the spacecraft is not recoverable.

The announcement, published on NASA's small-satellite blog on November 3, was short and unsparing. It did not speculate about what triggered the fault-protection response, nor did it hold out hope of a recovery. For a technology demonstration, that bluntness is itself notable: NASA's technology missions are designed to take risks that operational missions cannot, and part of the bargain is that some of them will fail in public.

<picture>
<source srcset="/img/1446776811953-b23d57bd21aa-1000.avif" type="image/avif">
<source srcset="/img/1446776811953-b23d57bd21aa-700.webp" type="image/webp">
<img src="/img/1446776811953-b23d57bd21aa-700.webp" alt="A satellite in low Earth orbit above a blanket of clouds" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>

*A satellite in low Earth orbit above Earth's clouds. Image: Unsplash.*

## What Went Wrong: A Guardian That Would Not Stand Down

Fault-protection software is one of the least celebrated and most consequential systems on any spacecraft. Because a satellite in low Earth orbit may pass over a ground station for only a few minutes at a time, and a deep-space probe may be light-minutes or light-hours from Earth, spacecraft must be able to look after themselves between contacts. Fault protection watches telemetry for signs of trouble — a battery voltage sagging, a temperature climbing, a computer behaving oddly — and takes pre-programmed action: switch to a backup unit, safe the spacecraft, or shut down a suspect subsystem before it can do more damage.

That autonomy is essential. It is also, by design, difficult to override. A fault-protection system that ground controllers could easily second-guess would be of little use during the long silences between contacts. The trade-off is that if the software misreads a situation — if it decides a healthy radio is a threat, or if a fault response leaves the spacecraft in a state from which no ground command can rescue it — the very system meant to preserve the mission can end it.

NASA's statement says only that the fault-protection system is "keeping the spacecraft's radio erroneously turned off." It does not say what the system thought it was protecting against, whether the trigger was a genuine hardware anomaly misinterpreted by software, a software logic error, or a sensor reading that crossed a threshold it should not have. Those details may emerge later, in a mishap review or a Starfish engineering update. For now, the essential fact is the outcome: a spacecraft that is otherwise presumably intact in orbit cannot hear Earth, and Earth cannot reach it.

The failure mode is a familiar one in spaceflight history, even if the specifics differ. Spacecraft have been lost before to safe-mode loops, to antennas pointed the wrong way after an autonomous response, and to software that did exactly what it was told to do under conditions its designers did not anticipate. What makes the SSPICY case striking is how early it happened. Commissioning is the phase when a spacecraft is at its most closely watched, with engineers working through checklists and trending every subsystem. Losing contact there, before the mission's real work had even begun, means the failure struck before the spacecraft had a chance to prove any of the technologies it was built to demonstrate.

## What SSPICY Was Supposed to Prove

The ambition behind SSPICY was large for a spacecraft roughly the size of an oven. The 335-kilogram Otter vehicle, designated Otter 24C, was built to rendezvous with and inspect inoperable satellites — dead spacecraft that cannot cooperate, cannot share navigation data, and cannot steady themselves for a visitor. During the mission, Otter was to approach up to four inactive, U.S.-origin objects in low Earth orbit, closing to within hundreds of meters to measure their spin rates, spin axes, and the condition of their surface materials.

Those measurements sound modest. They are, in fact, the missing foundation for an entire future industry. A dead satellite tumbles. Its surfaces may be degraded by years of radiation and micrometeoroid strikes. Its exact orientation and rotation must be known before any servicing vehicle can safely approach, let alone dock, refuel, repair, or drag it out of orbit. Today, most of what operators know about defunct satellites comes from ground-based radar and optical tracking — useful, but coarse. SSPICY was meant to show that a small commercial spacecraft could gather close-up inspection data, the kind of data that turns a blip on a radar screen into a real object with a known attitude, a known spin, and a known surface.

Beyond inspection, the mission was designed to demonstrate advanced propulsion, guidance, navigation, and control technologies, along with an innovative articulating robotic boom — the hardware that would eventually let an Otter vehicle grapple or interact with another spacecraft. NASA describes SSPICY as the first launch and deployment of Starfish's Otter spacecraft and the first integration of the company's navigation and propulsion technologies into a single spacecraft system. It was funded as a Phase III Small Business Innovation Research (SBIR) award worth $15 million, managed by NASA's Small Spacecraft and Distributed Systems program at Ames Research Center in California's Silicon Valley, under the agency's Advanced Research and Technology Division.

The inspections themselves had been planned for 2027, after commissioning was complete. Otter's target list was never publicly identified — NASA's mission materials said only that candidate objects must be medium-sized, of U.S. origin, and in circular orbits at least 400 kilometers high, and that their owners had agreed to the visits. Owner consent, however, does not make a dead satellite cooperative in any technical sense: it still sends no telemetry, holds no steady attitude, and offers no docking target. That was precisely the point. If Otter could inspect a genuinely uncooperative object, the same skills would transfer to the far larger population of debris that nobody owns or controls.

## From Launch Pad to Silence: Otter's Short Flight

Otter's journey to orbit began well. The spacecraft lifted off at 11:32 a.m. Pacific time on October 1 aboard the Transporter-18 rideshare, one of roughly 130 payloads packed into a single Falcon 9 fairing. For a startup's first full-scale servicing vehicle, reaching orbit on a rideshare was itself a milestone: Starfish had spent years building and flying smaller prototypes, and Otter 24C was the first vehicle that carried the company's complete navigation and propulsion architecture.

Initial communications were established after separation, and the mission entered commissioning — the phase in which a new spacecraft is methodically brought to life. Then contact was lost. NASA's announcement does not give a precise date for the loss of signal, saying only that it occurred during commissioning and that subsequent attempts to reestablish contact failed. The gap between the October 1 launch and the November 3 announcement suggests weeks of quiet troubleshooting before NASA and Starfish were willing to call the mission unrecoverable, a timeline consistent with the painstaking work of trying every available command path and ground-station pass before conceding that a spacecraft is gone.

There is a particular cruelty in the timing. SSPICY was the first commercial space debris inspection mission NASA had ever funded, and its launch had been greeted as the moment a long-discussed idea — that dead satellites could be visited, studied, and eventually serviced by commercial vehicles — finally left the drawing board. Instead, the mission's legacy may be a cautionary tale about commissioning, the phase of flight where optimism is highest and where, as Otter's fate shows, a single software decision can end everything before the science starts.

<picture>
<source srcset="/img/1516849841032-87cbac4d88f7-1000.avif" type="image/avif">
<source srcset="/img/1516849841032-87cbac4d88f7-700.webp" type="image/webp">
<img src="/img/1516849841032-87cbac4d88f7-700.webp" alt="A rocket lifting off from its launch pad in a cloud of exhaust" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*A rocket lifts off from its launch pad. Image: Unsplash.*

## Starfish's Long Road to Otter

Starfish Space, based in Tukwila, Washington, near Seattle, did not arrive at Otter 24C by accident. The company, co-founded by Trevor Bennett and Austin Link, has spent years pursuing the idea that satellites should not have to be disposable — that a spacecraft nearing the end of its fuel, or stranded in the wrong orbit, or drifting dead through a crowded shell, could be visited, extended, or removed by another machine.

Before the full-scale Otter, Starfish flew two smaller prototypes called Otter Pup. The first, launched in 2023, recovered from a tumble after its transfer tug failed and still completed a rendezvous to roughly one kilometer of its target — a partial success that the company treated as a rich source of engineering data. The second Otter Pup flew on SpaceX's Transporter-14 rideshare in June 2025 and has been conducting relative-navigation operations with a replacement target. Each flight was a lesson in the unforgiving physics of close approach: two objects moving at some 7.5 kilometers per second, separated by kilometers, must be coaxed together with meter-level precision using sensors, software, and thrusters that all have to work at once.

That incremental record is part of why the SSPICY loss stings. Starfish had already shown it could fly rendezvous hardware; Otter 24C was supposed to show it could do so at full scale, with a complete servicing vehicle, under a NASA contract, against real dead satellites. The company also holds substantial business beyond SSPICY: contracts with Intelsat for life extension in geostationary orbit, a $37.5 million agreement with Space Systems Command for national-security rendezvous and proximity operations, and a $52.5 million deal with the Space Development Agency to deorbit satellites from its proliferated warfighter constellation. Those missions do not depend on SSPICY's spacecraft, but they do depend on the same core technologies — and on customer confidence that Starfish's vehicles will keep talking to the ground.

The company announced its first Otter's journey to space at a celebration at the Seattle Aquarium on September 23, 2026, days before the October 1 launch. Bennett framed success simply at the time: actually going out and providing a commercial inspection service on a number of different spacecraft. The first Otter will not get that chance. Whether the second one does, and how quickly, will be one of the more closely watched questions in the small but fast-growing satellite-servicing field.

## Why Inspecting Dead Satellites Matters

It is easy, reading about a single lost small satellite, to miss the scale of the problem it was meant to address. Low Earth orbit is filling up at a pace with no precedent. According to the European Space Agency's 2026 space environment report, more than 4,000 payloads entered orbit during 2025 alone. Mega-constellations are launching by the dozens of satellites at a time — China alone has lofted hundreds of Qianfan and Guowang constellation spacecraft in the past year — while older satellites, spent rocket stages, and fragments from past collisions and breakups continue to circle the planet, uncontrolled.

Every one of those objects is a potential collision, and every collision creates more fragments, which create more collision risk — the runaway chain reaction known as the Kessler syndrome. The only way to break that chain, beyond simply launching fewer things and deorbiting what we can, is to learn to operate around dead objects: to approach them, inspect them, understand their condition, and eventually capture, repair, or remove them. Inspection is the first step, and it is the least glamorous one. It produces no dramatic grappling footage, no deorbit burn, no satellite dragged to a fiery end. It produces data — spin rates, surface maps, attitude histories — and data is what makes every later step possible.

That is why NASA funded SSPICY, and why its loss matters beyond one company's balance sheet. The agency's objective for the mission was explicitly dual: accelerate industry technologies for in-space servicing, assembly, and manufacturing, while giving NASA valuable data on the characteristics of orbital debris objects. The first goal survives Otter's silence — the technologies can be reflown, and Starfish's other contracts will test many of the same systems. The second goal, the debris data itself, does not. The inspections planned for 2027 will not happen on this spacecraft, and the close-up measurements of real dead satellites that NASA hoped to gather remain ungathered.

The broader field has felt similar setbacks before. The history of satellite servicing is littered with near-misses and partial successes — missions that proved rendezvous but not docking, docking but not refueling, refueling but not at commercial scale. Each one taught the field something, and each one cost years. SSPICY's contribution may turn out to be a narrow but important one: a case study in how fault-protection design must account for the possibility that the safest action, taken autonomously, can be the one that ends the mission.

<picture>
<source srcset="/img/1419242902214-272b3f66ee7a-1000.avif" type="image/avif">
<source srcset="/img/1419242902214-272b3f66ee7a-700.webp" type="image/webp">
<img src="/img/1419242902214-272b3f66ee7a-700.webp" alt="A bright streak crossing a star-filled night sky above dark mountains" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*A bright streak crosses a star-filled night sky. Image: Unsplash.*

The timing also intersects with other reminders of how crowded and contested near-Earth space has become. In recent months, trackers have documented a Russian military satellite closing to within hundreds of meters of a commercial radar-imaging spacecraft — the kind of uncooperative proximity operation that, in civilian hands, SSPICY was meant to make routine and safe. And in September, the European Space Agency deliberately steered its 26-year-old Cluster satellite Tango into a targeted reentry over the South Pacific, a reminder that even well-planned ends of life require careful orbital choreography. The contrast is instructive: one mission ended exactly as planned after a quarter-century of science; another ended after a few weeks because a piece of safety software would not let go of the radio.

Readers following this story may also recall SpaceNews' earlier coverage of the mission's launch: <a href="/blog/nasa-sspicy-otter-inspect-dead-satellites/">NASA's SSPICY Mission: A Robotic Inspector Is Now Hunting Dead Satellites in Orbit</a>, which described Otter's planned inspections in detail, as well as <a href="/blog/esa-cluster-tango-reentry-26-years/">Tango's Final Dance: After 26 Years, ESA's Cluster Mission Ends in a Blaze Over the South Pacific</a> and <a href="/blog/russian-kosmos-2612-shadowing-iceye-x36-satellite/">Russia's Kosmos 2612 Is Shadowing a U.S. Radar Satellite — and Trackers Say It Looks Deliberate</a>, both of which show how seriously operators now take the behavior of objects — cooperative or not — sharing crowded orbits.

## What Happens Next

NASA's statement struck a forward-looking note, even as it closed the book on this spacecraft. "Commercial capabilities like Starfish's are critical for a competitive U.S. space economy and strong American leadership in low Earth orbit," said Greg Stover, director of the Advanced Research and Technology Division at NASA Headquarters in Washington. "Technology demonstrations allow us to quickly test new systems, learn from their performance, and iterate so that we are pushing the boundaries of what's possible with every mission. NASA will continue taking on bold challenges in close collaboration with our industry partners."

That language is the standard grammar of technology-demonstration failures, and it is also, in this case, literally true. SSPICY was funded precisely because inspection of dead satellites is hard, unproven, and commercially risky — the kind of work that private capital alone is slow to finance. The mission's failure does not invalidate the concept; it narrows the list of things that must go right next time, and it puts fault-protection design at the top of that list.

For Starfish, the immediate questions are practical. The company has said it intends to continue gathering information for NASA on the performance of Otter technologies, along with orbital debris inspection data in low Earth orbit, during future missions with the Otter spacecraft. That phrasing — future missions, plural — suggests the SSPICY loss is a delay rather than a cancellation of the company's servicing ambitions. Its Intelsat, Space Systems Command, and Space Development Agency work gives it flight opportunities beyond the NASA demonstration, and each of those missions will carry versions of the same navigation, propulsion, and proximity-operations systems. Whether NASA re-flies a dedicated SSPICY follow-on, or folds its debris-inspection goals into a later Otter flight, will depend on funding, on the findings of the failure review, and on how quickly Starfish can show that the radio-silencing flaw is understood and fixed.

There are also questions that NASA's brief statement leaves unanswered, and that the servicing community will want answered. Was the fault-protection trigger a hardware event — a power transient, a sensor glitch — or a pure software logic error? Could a different fault-response design, one that preserved a minimal command path even in safe mode, have saved the mission? And how will future Otter vehicles be designed so that no single autonomous decision can permanently sever the link to Earth? Those answers will matter far beyond Starfish: every company building servicing vehicles, debris removers, and life-extension tugs faces the same design tension between autonomy and recoverability.

<picture>
<source srcset="/img/1502134249126-9f3755a50d78-1000.avif" type="image/avif">
<source srcset="/img/1502134249126-9f3755a50d78-700.webp" type="image/webp">
<img src="/img/1502134249126-9f3755a50d78-700.webp" alt="A dense field of stars and glowing nebula clouds in deep space" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*A dense field of stars and glowing nebula clouds in deep space. Image: Unsplash.*

For now, Otter 24C joins the population it was sent to study: an inoperable object in low Earth orbit, silent, tumbling on its own terms, waiting for someone — someday — to come and take a close look. The irony is not lost on anyone in the field. The spacecraft built to inspect the dead has become one of them, not through a collision or an explosion, but through a whisper of software that decided the safest thing to do was to stop listening.

That is the risk NASA accepted when it funded SSPICY, and the reason the agency funds technology demonstrations at all: to find the failure modes on a $15 million small satellite, in a mission designed to be expendable, rather than on a billion-dollar operational spacecraft or a crewed vehicle. The debris problem has not gone away. The inspections have not happened yet. But the next Otter that flies will carry, along with its sensors and its boom and its thrusters, one hard-won lesson: in space, the system that protects you must never be allowed to make you unreachable — because a spacecraft that cannot hear Earth is, for every purpose that matters, already gone.

<picture>
<source srcset="/img/1462331940025-496dfbfc7564-1000.avif" type="image/avif">
<source srcset="/img/1462331940025-496dfbfc7564-700.webp" type="image/webp">
<img src="/img/1462331940025-496dfbfc7564-700.webp" alt="A glowing blue bubble nebula surrounded by stars" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*A glowing blue bubble nebula surrounded by stars. Image: Unsplash.*
