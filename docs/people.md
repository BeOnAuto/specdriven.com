---
prev:
  text: Community
  link: /community
next:
  text: Timeline
  link: /timeline
---

# Notable People in Spec-Driven Development

> The people who shaped how we specify software, from executable specifications to collaborative modeling to AI-driven development. Entries are listed alphabetically within each era.
>
> This page is curated by [Sam Hatoum](#sam-hatoum), founder of [Auto](https://on.auto) and creator of specdriven.com as a community resource for the spec-driven movement. Someone missing? [Submit a PR](https://github.com/BeOnAuto/specdriven.com).

## Modern Spec-Driven Development {#modern}

### Sam Hatoum {#sam-hatoum}

**Era:** ~2010-present | **Contribution:** Narrative-Driven Development, Auto, specdriven.com

Founder of [Auto](https://on.auto). Sam has focused on spec-driven development for roughly 15 years, long before AI made it trendy. He purchased specdriven.com in 2020 and documented his thinking across [Embracing Specifications](https://gist.github.com/SamHatoum/388c6ff663eb86ef3463a251b48f2db5) (January 2018) and [Spec-Driven Development](https://gist.github.com/SamHatoum/e3789342ec5329ed5b9a8fecd64346f3) (May 2021), predating the current wave by half a decade.

He developed **Narrative-Driven Development** at Xolvio, independently from Event Modeling, building on extensive experience with BDD, DDD, EventStorming, and quality-first practices across dozens of enterprise client engagements.

NDD is a [model-based, multimodal specification format](/dialects/narrative-driven#ndd-is-model-based-and-multimodal): a TypeScript fluent interface for developers, visual journey maps for designers, and document views for product and QA teams. It extends BDD with Given/When/Then for business domain logic plus Should/Should Not for component-level contracts, all backed by a unified model with pluggable builders.

Sam created specdriven.com as a community resource for the entire spec-driven movement.

Cross-refs: [Timeline: NDD](/timeline#narrative-driven-development), [Landscape: Auto](/landscape/auto), [NDD Dialect](/dialects/narrative-driven)

### John Lam and Den Delimarsky {#spec-kit-team}

**Era:** 2025 | **Contribution:** GitHub Spec Kit

The two key figures behind **GitHub Spec Kit**. John Lam ([@jflam](https://github.com/jflam)) provided the research and conceptual foundation, born out of his work on steering LLM-assisted development at GitHub. Den Delimarsky ([@localden](https://github.com/localden)), then Principal Product Engineer at GitHub, was the primary implementer and public face of the project, writing the official announcement and evangelizing SDD across podcasts and conferences. Spec Kit surpassed 16,000 GitHub stars within its first week, codifying the `Specify → Plan → Tasks → Implement` pipeline as an open-source toolkit.

Cross-refs: [Landscape: GitHub Spec Kit](/landscape/github-spec-kit)

### Clare Liguori {#clare-liguori}

**Era:** 2024-present | **Contribution:** Kiro (AWS), Strands Agents SDK

Senior Principal Software Engineer at AWS in the agentic AI organization. Clare is the driving force behind **Kiro**, AWS's agentic IDE built around the dichotomy of "vibe mode" vs. "spec mode." She demonstrated spec-driven development with Kiro at Werner Vogels' closing keynote at AWS re:Invent 2025, where she described how her own experience struggling to communicate intent to AI led her to essentially create specifications, which became the conceptual foundation for Kiro's approach.

She articulated Kiro's three-phase SDD approach: requirements definition, technical design, and task list generation. 10+ years at Amazon, prior work on AWS Proton, Amazon ECS, and AWS Code Suite.

Cross-refs: [Landscape: Kiro](/landscape/kiro)

### Guy Podjarny {#guy-podjarny}

**Era:** 2025 | **Contribution:** Tessl, Spec Registry

Founder and CEO of **Tessl**. Previously founded Snyk. Guy launched the Spec Registry (10,000+ usage specs) and the Tessl Framework. He coined the term "vibe specing."

Cross-refs: [Landscape: Tessl](/landscape/tessl)

### Sze Wong {#sze-wong}

**Era:** 2025 | **Contribution:** "Specs Are the New Code"

Founder and CEO of Zerion Software. Sze (also known as "Zee") wrote one of the early manifestos of the modern SDD movement: *Spec-Driven Development: In the Age of AI Coding, Specs Are the New Code* (Medium, November 2025). The piece articulated the cultural shift: when AI can write all the code, the bottleneck shifts from coding to clarity, and strong communicators become the new "10x developers." He defined the structural requirements of an AI-ready spec: Inputs, Logic, Outputs, Constraints, Examples.

## Analysis and Commentary {#analysis}

### Martin Fowler {#martin-fowler}

**Era:** 2025-2026 | **Contribution:** SDD Tools Analysis

His ThoughtWorks analysis of spec-driven development tools provided one of the most balanced assessments of the current landscape. He categorized tools into spec-first, spec-anchored, and spec-as-source patterns, and drew the important parallel to **Model-Driven Development**, which is worth understanding if you are evaluating SDD tools.

Cross-refs: [Landscape](/landscape/)

## Domain-Driven Design and Collaborative Modeling {#ddd-collaborative}

### Kenny Baas-Schwegler, Evelyn van Kelle, and Gien Verschatse {#collaborative-design}

**Era:** 2020s | **Contribution:** Collaborative Software Design

Authors of *Collaborative Software Design* (Manning). They synthesized the collaborative modeling movement into a practical guide that ties together EventStorming, Domain Storytelling, Example Mapping, and more.

Cross-refs: [Discovery](/guides/discovery)

### Alberto Brandolini {#alberto-brandolini}

**Era:** 2013 | **Contribution:** EventStorming

Invented **EventStorming** (2013). This was a key factor behind the DDD renaissance and the Collaborative Modeling movement. Alberto founded Avanscoperta and authored *Introducing EventStorming* (Leanpub).

Cross-refs: [Timeline: EventStorming](/timeline#eventstorming), [Discovery: EventStorming](/guides/discovery#eventstorming)

### Adam Dymitruk {#adam-dymitruk}

**Era:** ~2018-2019 | **Contribution:** Event Modeling

CEO of Adaptech Group. Adam developed **Event Modeling**, building on Young's CQRS/ES and Brandolini's EventStorming. It provides complete system blueprints with Given/When/Then per slice.

Cross-refs: [Timeline: Event Modeling](/timeline#event-modeling)

### Eric Evans {#eric-evans}

**Era:** 2003 | **Contribution:** Domain-Driven Design

Author of **Domain-Driven Design** (2003). If you have ever used the terms **Ubiquitous Language**, **Bounded Contexts**, or **Aggregates**, you have Eric to thank. His work shaped BDD, EventStorming, Event Modeling, and NDD.

Cross-refs: [Timeline: DDD](/timeline#domain-driven-design)

### Stefan Hofer and Henning Schwentner {#hofer-schwentner}

**Era:** 2010s-present | **Contribution:** Domain Storytelling

Developed **Domain Storytelling**, a pictographic notation for domain discovery. Authors of *Domain Storytelling* (Addison-Wesley, 2021).

Cross-refs: [Discovery: Domain Storytelling](/guides/discovery#domain-storytelling)

### Jeff Patton {#jeff-patton}

**Era:** 2005-present | **Contribution:** User Story Mapping

Popularized **User Story Mapping**. Author of *User Story Mapping* (O'Reilly, 2014). If you have ever arranged sticky notes in a two-dimensional grid to plan a release, you are using Jeff's technique.

Cross-refs: [Discovery: User Story Mapping](/guides/discovery#user-story-mapping)

### Paul Rayner {#paul-rayner}

**Era:** 2010s-present | **Contribution:** EventStorming Handbook, BDD with Cucumber, Explore DDD

A leading DDD and EventStorming practitioner. Paul authored *The EventStorming Handbook*, co-authored *Behavior-Driven Development with Cucumber* (with Richard Lawrence), and founded the Explore DDD conference.

Cross-refs: [Discovery: EventStorming](/guides/discovery#eventstorming)

### Greg Young {#greg-young}

**Era:** 2000s-2010s | **Contribution:** CQRS, Event Sourcing

Formalized **CQRS** and **Event Sourcing**. His process specifications directly influenced Event Modeling. If you work with event-driven systems, Greg's thinking is foundational.

Cross-refs: [Timeline: Event Modeling](/timeline#event-modeling)

## Specification by Example {#sbe}

### Gojko Adzic {#gojko-adzic}

**Era:** 2009-present | **Contribution:** Specification by Example, Impact Mapping

Author of **Specification by Example** (2012 Jolt Award winner). Gojko synthesized the movement from 50+ teams and also created **Impact Mapping**. He runs the #GivenWhenThenWithStyle challenge series, which is worth following if you write scenarios.

Cross-refs: [Timeline: SbE](/timeline#specification-by-example), [Discovery: Impact Mapping](/guides/discovery#impact-mapping)

## Behavior-Driven Development {#bdd}

### Aslak Hellesoy {#aslak-hellesoy}

**Era:** 2006-2008 | **Contribution:** RSpec, Cucumber, Gherkin

Created RSpec (2006) and **Cucumber** (2008). **Gherkin** became the industry standard for executable specifications. Co-author of *The Cucumber Book*.

Cross-refs: [Timeline: Cucumber](/timeline#cucumber-and-gherkin)

### Liz Keogh {#liz-keogh}

**Era:** 2004-present | **Contribution:** BDD pioneer, Deliberate Discovery

A pioneer from 2004. Her framing captures the essence of BDD: "having conversations is more important than capturing conversations is more important than automating conversations."

Cross-refs: [Timeline: BDD](/timeline#behavior-driven-development)

### Chris Matts {#chris-matts}

**Era:** 2004 | **Contribution:** Given/When/Then canvas

Business analyst at ThoughtWorks who, alongside Dan North, proposed the **Given/When/Then canvas**. Chris expanded BDD from a developer practice into a business analysis tool.

Cross-refs: [Timeline: BDD](/timeline#behavior-driven-development)

### Gaspar Nagy {#gaspar-nagy}

**Era:** 2009-present | **Contribution:** SpecFlow, BDD Books series

Creator of **SpecFlow** (.NET BDD framework). Co-author of the BDD Books series. Gaspar coined "formulation" for the second BDD practice. Editor of the BDD Addict newsletter.

Cross-refs: [Resources](/resources)

### Dan North {#dan-north}

**Era:** 2003-2006 | **Contribution:** BDD

Coined "**Behavior-Driven Development**." Created JBehave (2004). Co-developed the Given/When/Then canvas with Chris Matts. His 2006 article "Introducing BDD" is the origin document for the entire movement.

Cross-refs: [Timeline: BDD](/timeline#behavior-driven-development)

### David Peterson {#david-peterson}

**Era:** ~2005 | **Contribution:** Concordion

Built **Concordion** at Sky UK. Free-form HTML-based executable specifications that doubled as living documentation. A different approach from Gherkin that proved specs could take many forms.

Cross-refs: [Timeline: Concordion](/timeline#concordion-robot-rspec)

### Seb Rose {#seb-rose}

**Era:** 2015-present | **Contribution:** BDD Books series

Co-author (with Gaspar Nagy) of *Discovery* (2018), *Formulation* (2021), and the forthcoming *Effective BDD* (Manning). Lead author of *The Cucumber for Java Book*. Seb codified **Discovery, Formulation, and Automation** as the three BDD practices.

Cross-refs: [Resources](/resources)

### Matt Wynne {#matt-wynne}

**Era:** 2008-present | **Contribution:** The Cucumber Book, Example Mapping

Co-founder of Cucumber Ltd. Co-author of *The Cucumber Book*. Created **Example Mapping** (~2015), a lightweight technique you can use to break down stories before writing scenarios. Currently leads Cucumber open-source at SmartBear.

Cross-refs: [Discovery: Example Mapping](/guides/discovery#example-mapping)

## The Executable Specification Pioneers {#exec-spec-pioneers}

### Kent Beck {#kent-beck}

**Era:** ~2000 | **Contribution:** Test-Driven Development, Extreme Programming

Formalized **TDD** with red-green-refactor. Kent reframed tests as a design activity, not just verification. Co-author of the Agile Manifesto. Author of *TDD: By Example* (2002).

Cross-refs: [Timeline: TDD](/timeline#test-driven-development)

### Barry Boehm {#barry-boehm}

**Era:** 1970s-2000s | **Contribution:** Defect Origin Research

Documented that 50% of all software defects originate at the specification stage. Author of *Software Engineering Economics* (1981). If you need one argument for investing in specification quality, this is it.

### Ward Cunningham {#ward-cunningham}

**Era:** 2001-2002 | **Contribution:** FIT, FitNesse

Invented the wiki AND the **Framework for Integrated Test (FIT)**. FIT was the first tool where business stakeholders wrote examples in tables that became automated tests. Ward co-created FitNesse with Robert C. Martin.

Cross-refs: [Timeline: FIT](/timeline#fit-and-fitnesse)

### Robert C. Martin {#robert-martin}

**Era:** 2002 | **Contribution:** FitNesse

Co-created **FitNesse** with Cunningham. His influence on software craftsmanship reinforced the idea that specs and tests are first-class artifacts, not afterthoughts.

Cross-refs: [Timeline: FIT](/timeline#fit-and-fitnesse)

### Chris Stevenson {#chris-stevenson}

**Era:** 2003 | **Contribution:** AgileDox / TestDox

Built the JUnit utility that printed test names as English sentences. This was the spark that ignited BDD. Dan North called it his first "aha moment."

Cross-refs: [Timeline: AgileDox](/timeline#agiledox-testdox)

## Genesis: The Intellectual Roots {#genesis}

### Jean-Raymond Abrial {#jean-raymond-abrial}

**Era:** 1970s-1990s | **Contribution:** Z Notation, B Method

Created **Z Notation** (Oxford, late 1970s) and the **B Method** (1990s). Abrial proved that specifications could be mathematically verified and refined into implementations. The B Method was used in the Paris Metro Line 14 (the driverless one).

Cross-refs: [Timeline: Formal Methods](/timeline#formal-methods)

### Edsger Dijkstra {#edsger-dijkstra}

**Era:** 1960s-1970s | **Contribution:** Structured Programming, Program Correctness

His work on **structured programming** and program correctness proofs laid the intellectual foundation for all specification work. Dijkstra made the first argument that code should match a specification of behavior.

Cross-refs: [Timeline: Structured Programming](/timeline#structured-programming)

### C.A.R. Hoare {#car-hoare}

**Era:** 1960s-1970s | **Contribution:** Hoare Logic, Pre/Post-condition Reasoning

His **pre-condition/post-condition pattern** echoes directly through Given/When/Then decades later. If you write a Given clause, you are standing on Hoare's shoulders.

---

> **Know someone who should be listed here?** [Submit a PR](https://github.com/BeOnAuto/specdriven.com).

*An initiative by [Auto](https://on.auto).*
