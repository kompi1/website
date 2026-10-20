---
title: "The Data Center Leaves Earth: China's Orbital AI Constellation Doubles With a Methane-Fueled Launch"
description: "On October 14, 2026, LandSpace's Zhuque-2E rocket lofted eight AI computing satellites and two laser-communication testers into orbit, growing the Three-Body Computing Constellation to 20 satellites — the world's first working orbital data-center fleet."
pubDate: 2026-10-20
category: 'Technology'
---

Shortly before 8 p.m. local time on October 14, 2026, a two-stage rocket burning liquid methane lifted off from the Jiuquan Satellite Launch Center in the Gobi Desert, bound for a sun-synchronous orbit a few hundred kilometers overhead. The vehicle was LandSpace's Zhuque-2E, a privately built Chinese launcher, and its payload was anything but ordinary: eight satellites that think. Each is a node of the Three-Body Computing Constellation, a fleet whose owners — Chengdu-based ADA Space and the government-affiliated Zhejiang Lab — intend to do in orbit what server farms do on the ground: process data, run artificial intelligence models, and beam down answers instead of raw bits.

The launch delivered the constellation's Group-02 batch (星算计划02组), satellites carrying the serial numbers 44 through 50 as well as 39, and grew the fleet from 12 to 20 satellites. Riding alongside them were two communications test spacecraft, Guangchuan-03 and Guangchuan-04, built by Laser Starcom to push the frontier of optical laser links between satellites. It was the seventh flight of the Zhuque-2E, the tenth flight of LandSpace's Zhuque-2 rocket series, the company's thirteenth orbital launch attempt — and China's 72nd launch of 2026.

<picture>
<source srcset="/img/1447433589675-4aaa569f3e05-1000.avif" type="image/avif">
<source srcset="/img/1447433589675-4aaa569f3e05-700.webp" type="image/webp">
<img src="/img/1447433589675-4aaa569f3e05-700.webp" alt="A heavy-lift rocket climbs away from its launch pad on a pillar of flame, bound for orbit." width="1000" height="563" fetchpriority="high" decoding="async">
</picture>
*LandSpace's methane-fueled Zhuque-2E lifted off from Jiuquan on October 14, 2026, carrying eight AI computing satellites into sun-synchronous orbit. Image: Unsplash.*

## A Methane Rocket on a Commercial Climb

Liftoff came at 19:40 China Standard Time — 12:40 UTC — from Launch Area 96A at Jiuquan, according to reports of the flight. The Zhuque-2E is LandSpace's privately developed workhorse, and both of its stages burn liquid methane and liquid oxygen: four TQ-12A engines power the first stage with 338 tons of thrust, while a single TQ-15A engine drives the second stage with 85 tons. Standing 55.9 meters tall and weighing 267,000 kilograms when fully fueled, with 3.35-meter-diameter stages and a 4.2-meter fairing, the vehicle can place 6,000 kilograms into low Earth orbit or 4,000 kilograms into a 500-kilometer sun-synchronous orbit. The Zhuque-2 lineage made history in 2023 when the original Zhuque-2 became the first liquid-methane rocket to reach orbit; the E variant is the commercialized, batch-produced evolution.

This mission was the Zhuque-2E's fourth flight of 2026, and the second time it has flown within two months, following a connectivity-constellation mission in September. It was also the second time this year the vehicle has flown back-to-back missions, as it did in May and June. Since June, LandSpace has been batch-producing the Zhuque-2E to raise its flight rate. After this mission concluded, the company said on social media that it is "currently advancing the regularized commercial launch operations of the ZQ-2E and the engineering reuse verification of the ZhuQue-3" — the reusable successor it has been developing.

The October 14 flight also carried a quiet institutional milestone. Hazard notices for the day showed two launches planned minutes apart from Jiuquan: the Zhuque-2E and a Long March 4 series rocket from the Shanghai Academy of Spaceflight Technology. Jiuquan deconflicted the two flights in favor of LandSpace — reportedly the first time a commercial firm has been allowed to fly first, while the state-owned Shanghai Academy switched to a different payload. It was the launch site's second deconfliction this year, after CAS Space's Kinetica-2 and Space Pioneer's Tianlong-3 were similarly sorted out in March. For a private Chinese launch company to take scheduling precedence over a state-owned vehicle is a sign of how far the country's commercial launch sector has come — and how crowded its pads are getting.

The trajectory matters. LandSpace's Zhuque-2 made history in 2023 as the first liquid-methane rocket to reach orbit, and the E variant has been climbing the cadence curve ever since: four flights this year alone, back-to-back missions in May and June and again in September and October, and batch production since June. The company's public line — that it is now advancing "regularized commercial launch operations" of the ZQ-2E alongside reuse verification of the ZhuQue-3 — is the language of a firm shifting from proving it can fly to proving it can fly often. A computing constellation that needs dozens of batches in the coming years is exactly the kind of customer that rewards that shift: regular, repeatable, commoditized rides to the same orbit, over and over.

## What the New Satellites Carry

The eight Group-02 satellites were shipped to Jiuquan in early September to allow time for integration with the launcher, and in the coming days they will link up with the twelve already in orbit, ahead of demonstrating expanded onboard computing, new laser communication links that can reach the ground, and large deployable cooling radiators.

That hardware list reads like a data-center spec sheet. Reports on the new batch describe a named chip flying for the first time — XFEON's StarCore S1 — alongside 10-kilowatt-class liquid cooling and large deployable radiator structures, with the training of AI foundation models directly in orbit on the test agenda. The satellites were final-assembled on a Taizhou production line, a sign that ADA Space is industrializing a product that began as a proof of concept.

The concept is in-orbit edge computing taken to its logical extreme. Each of the first-batch satellites carries an AI model of roughly 8 billion parameters — comparable in scale to some commercial large language models — delivering about 744 trillion operations per second, for a batch total of roughly 5 peta-operations per second and 30 terabytes of onboard storage. Free-space optical links running at up to 100 gigabits per second connect the satellites into a cluster. The pitch: instead of beaming raw Earth-observation or sensor data down to ground stations — a bottleneck limited by brief 5-to-15-minute passes and finite radio bandwidth — the constellation processes data in orbit and sends down only the answers.

## Why Move the Servers to Space

The rationale behind orbital compute is straightforward, and it has less to do with novelty than with terrestrial limits. On the ground, data centers are running into constraints on land, power, and cooling even as demand for AI compute keeps climbing. Space offers nearly uninterrupted sunlight and the ability to reject heat passively into the cold of space, potentially reducing dependence on the water-hungry cooling systems that terrestrial facilities require. China's state-owned main space contractor, CASC, has folded gigawatt-scale space-based computing infrastructure into its five-year planning for the 2026–2030 period, and Beijing opened a space computing centre in June 2026.

The deeper logic is about the physics of observation. Earth-observation satellites generate torrents of data — hyperspectral imagery, radar returns, video — and most of it is downloaded raw, analyzed on the ground, and archived. If the analysis can happen in orbit, a satellite can, for example, identify the ships in an image or the damage in a disaster zone and downlink only a small report. The satellites can also hand work to each other: a distributed cluster that splits a large task, processes it jointly across nodes, and reassembles the result.

<picture>
<source srcset="/img/1519681393784-d120267933ba-1000.avif" type="image/avif">
<source srcset="/img/1519681393784-d120267933ba-700.webp" type="image/webp">
<img src="/img/1519681393784-d120267933ba-700.webp" alt="A star-filled sky over dark mountains. The Three-Body Computing Constellation now numbers 20 satellites processing AI workloads in orbit." width="1000" height="563" loading="lazy" decoding="async">
</picture>
*The Three-Body Computing Constellation's twenty satellites form a distributed AI cluster above the Earth, linked by high-speed laser crosslinks. Image: Unsplash.*

## A Track Record, Not a Promise

What makes the Three-Body Computing Constellation unusual is that it is already flying — and already doing things no other constellation has done. The first twelve satellites went up in May 2025, and the year since has produced a series of genuinely novel demonstrations.

Nine months of in-orbit testing were completed by February 2026, with ten AI models validated in orbit, including Alibaba's Qwen3 — a step reported as the first general-purpose large model running fully in orbit. Analysts note that end-to-end inference — a question uploaded, an answer returned — runs in under two minutes. The constellation's roots go back further: a demonstration satellite trained a large language model in orbit in September 2024, which observers say came about fifteen months before the American claim to the same milestone.

Then came the capabilities that make the system feel less like an experiment and more like infrastructure. In March 2026, the constellation ran the open-source OpenClaw AI agent in orbit to voice-command a humanoid and a quadruped robot on Earth — compute offloaded to the sky, instructions beamed down. In July 2026, two satellites held a continuous laser communications link for 192 hours, 8 minutes, and 45 seconds — just over eight days — at up to 1,000 kilometers with 99.99% availability and zero data loss, which is exactly the kind of sustained lock a distributed orbital compute cluster needs to split work across nodes.

Industry has noticed. ADA Space has signed a strategic agreement with Tencent covering AI agent deployment and enterprise applications, and SenseTime — another Chinese AI heavyweight — has shown interest in the constellation's capabilities.

## The Rideshare Passengers

The two smaller passengers on the Zhuque-2E, Guangchuan-03 (光传-03星) and Guangchuan-04, deserve attention of their own. They come from Laser Starcom (Beijing Aurora Star Communications Technology), and they build on lessons from an earlier pair that flew on the first Zhuque-2E mission in November 2024. In a March 2025 trial, that earlier pair demonstrated an optical laser link at 400 gigabits per second.

Optical links are the nervous system of orbital computing. Radio-frequency links are fine for telemetry and modest downlinks, but a compute cluster needs enormous bandwidth between nodes and, eventually, to the ground. The new Guangchuan pair will work on laser communication links and optimizations for onboard processing — and the Group-02 computing satellites themselves carry laser terminals capable of connecting to the ground, a step toward closing the loop between orbital servers and terrestrial users.

## The Global Race Is Real — and Crowded

China is not alone in seeing servers as space hardware; it is simply the first to have a working constellation. In the United States, startup Starcloud is pursuing orbital data centers directly, Nvidia used its GTC 2026 event to unveil a Space-1 Vera Rubin module offering 25 times the compute of an H100 GPU for orbit, and Eric Schmidt took over as CEO of Relativity Space in 2025 with a plan to build orbital data centers on its Terran R rocket. Lonestar has taken a different approach entirely — lunar data storage and disaster recovery, with a payload that landed on the Moon in March 2025. Meta has separately outlined plans to use solar energy gathered in orbit to power its own future AI data centers.

Europe, meanwhile, is studying. The Horizon Europe ASCEND study, led by Thales Alenia Space since 2023, argues that orbital data centers could strengthen European digital sovereignty; ESA flies AI on the Φ-sat-2 mission with Open Cosmos and gave France's Edge Aerospace a roadmap contract in May 2026. But a European Space Policy Institute brief published in August 2026, titled "Constellating Compute," warned that if the gap widens, Europe risks having to compute its own space data through third parties. The analysts' shorthand for the current state of play: in orbit, China ships constellations while the West files spectrum applications — the West's flying hardware so far amounts to a demonstration and two hosted nodes.

That framing is slightly unfair to the difficulty of the engineering, which is genuinely hard. Thermal management — dissipating kilowatts of waste heat from densely packed chips in vacuum — and radiation-hardened computing hardware remain major challenges, as industry observers consistently note. The deployable radiators and liquid-cooling loops on the new Group-02 satellites are direct attacks on the first problem.

<picture>
<source srcset="/img/1465101162946-4377e57745c3-1000.avif" type="image/avif">
<source srcset="/img/1465101162946-4377e57745c3-700.webp" type="image/webp">
<img src="/img/1465101162946-4377e57745c3-700.webp" alt="An artist's impression of a communications satellite above Earth, trailing beams of data across the darkness." width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Laser communication links are the nervous system of orbital computing, shuttling data between satellites at hundreds of gigabits per second. Image: Unsplash.*

## The Policy Scaffolding Behind the Hardware

The constellation is not a lone corporate venture; it sits inside one of the most deliberate industrial build-outs in recent space history. China's strategic 15th Five-year Plan, adopted in March, folded space-based computing into its vision of an integrated system fusing communication, navigation, sensing, and computing across sky, Earth, and ground. Beijing opened a space computing centre in June 2026, and a Shanghai forum the same year became the institutional showcase for the effort — specialized chips, satellite platforms, large language models, networking, security standards, and even what Chinese policy language calls "tokenized orbital compute operations."

The numbers discussed in official channels are correspondingly vast. CASC has called for gigawatt-scale orbital infrastructure across the 2026–2030 window; other constellations are in motion, including Nayuta ALAYA at a planned 12,500 satellites, the 1,000-satellite Xingshu project, and work by GalaxySpace, Landspace, and China Mobile. A January 2026 state-level filing for 200,000 satellites — the regulatory layer that precedes any constellation — sits in the background. Against that backdrop, the Three-Body Constellation is the spearhead: the one with actual hardware in orbit, actual models running, actual laser links holding.

That hardware-first position is also why it draws strategic attention. Analysts at ABI Research have described China as having assumed a modest lead in orbital compute precisely because it was first to put up a dedicated multi-satellite constellation for the purpose, citing the talent, manufacturing base, and funding to push the concept hard. One US-based China expert has called the project a leading but loosely defined effort — after the first twelve satellites, he argues, relatively little of substance was publicly demonstrated — while expecting steady development nonetheless. The October 14 launch is, in a sense, the answer to that skepticism: eight more satellites, a new chip, bigger radiators, and a production line behind them.

## What Comes Next

The constellation's roadmap is ambitious. The finished system, as described by its developers, envisions on the order of 1,000 satellites delivering roughly 1,000 peta-operations per second of compute — about an exaflop, putting it in the same league as today's most powerful terrestrial supercomputers. Some reports describe an eventual 2,800-strong fleet, with 100 satellites planned by 2027, around 1,000 by 2030, and completion by 2035. A third batch of 14 satellites is reportedly due in the fourth quarter of 2026, and the constellation's ITU filing has been approved. Announced at the 2024 Wuzhen summit by Alibaba veteran Wang Jian, who leads the scheme under Zhejiang Lab, the project also carries the curiously literary name "Three-Body Computing Constellation" — an English nod to Liu Cixin's award-winning science fiction novel, known in Chinese as the 星算计划 (Xingsuan, or "star-computing") plan.

Whether the fleet reaches a thousand nodes or not, something has already shifted. The October 14 launch demonstrates a cadence — four Zhuque-2E flights this year, batch production underway, a commercial firm taking pad priority over a state rocket — that makes each batch easier than the last. The satellites themselves are evolving from experiments toward product: named chips, production-line assembly, cooling systems sized for real workloads.

<picture>
<source srcset="/img/1532187863486-abf9dbad1b69-1000.avif" type="image/avif">
<source srcset="/img/1532187863486-abf9dbad1b69-700.webp" type="image/webp">
<img src="/img/1532187863486-abf9dbad1b69-700.webp" alt="Distant galaxies in deep space. Analysts describe orbital compute as becoming a matter of technological sovereignty." width="1000" height="563" loading="lazy" decoding="async">
</picture>
*In the coming years, analysts expect orbital compute to become as much about sovereignty as about technology. Image: Unsplash.*

For years, the idea of data centers in orbit lived in slide decks and policy papers.

<picture>
<source srcset="/img/1516849841032-87cbac4d88f7-1000.avif" type="image/avif">
<source srcset="/img/1516849841032-87cbac4d88f7-700.webp" type="image/webp">
<img src="/img/1516849841032-87cbac4d88f7-700.webp" alt="An astronaut's view of Earth from orbit, blue and cloud-streaked. A new fleet of satellites is learning to think above the planet." width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Earth seen from orbit. Above it, a constellation of computing satellites is learning to process data where it is collected. Image: Unsplash.*

On October 14, another eight servers rose into the sky on a column of methane flame — and joined twelve already up there, running AI models, tasking robots, and holding laser links for days at a time. The data center has left Earth. It just needs a few thousand more racks.
