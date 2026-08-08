---
prev:
  text: Where "Spec-Driven Development" Came From
  link: /origins
next:
  text: Resources
  link: /resources
image: /images/pages/people.png
---

# Notable People in Spec-Driven Development

![Notable People in Spec-Driven Development](/images/pages/people.png)

> The people who shaped how we specify software, from executable specifications to collaborative modeling to AI-driven development. Entries are listed alphabetically within each era.
>
> This page is curated by [Sam Hatoum](#sam-hatoum), who publishes SpecDriven independently and also founded [Auto](https://on.auto). Someone missing? [Suggest an addition](/community#suggest-a-change).

## Modern Spec-Driven Development {#modern}

### Sam Hatoum {#sam-hatoum}

**Era:** ~2010-present | **Contribution:** Industrial spec-driven development, Narrative-Driven Development, Auto, specdriven.com

Publisher of [SpecDriven](/about) and founder of [Auto](https://on.auto), where he currently works on product modeling for software built with agents. His use of "spec-driven development" beginning in 2016 is traceable through Simian (2013 to 2015), xSpecs (2016 to 2020), and later work. He purchased specdriven.com in 2020 and developed Narrative-Driven Development at Xolvio across client engagements, building on BDD, DDD, EventStorming, and quality-first practices. Auto has since retired the NDD method name and uses ordinary product language in the product. Sam disclaims any "inventor" framing; for the term genealogy and the receipts behind the 2016 industrial coining see [Where "Spec-Driven Development" Came From](/origins) and [Proof and Prior Art](/perspectives/the-spec-driven-shift/i-coined-spec-driven-development-proof).

Cross-refs: [Where "Spec-Driven Development" Came From](/origins), [Timeline: NDD](/timeline#narrative-driven-development), [Landscape: Auto](/landscape/auto), [Historical NDD note](/dialects/narrative-driven)

### John Lam and Den Delimarsky {#spec-kit-team}

**Era:** 2025 | **Contribution:** GitHub Spec Kit

The two key figures behind **GitHub Spec Kit**. John Lam ([@jflam](https://github.com/jflam)) provided the research and conceptual foundation, born out of his work on steering LLM-assisted development at GitHub. Den Delimarsky ([@localden](https://github.com/localden)), then Principal Product Engineer at GitHub, was the primary implementer and public face of the project, writing the official announcement and evangelizing SDD across podcasts and conferences. Spec Kit surpassed 16,000 GitHub stars within its first week, codifying the `Specify → Plan → Tasks → Implement` pipeline as an open-source toolkit.

Cross-refs: [Landscape: GitHub Spec Kit](/landscape/github-spec-kit)

### Clare Liguori {#clare-liguori}

**Era:** 2024-present | **Contribution:** Kiro (AWS), Strands Agents SDK

Senior Principal Software Engineer at AWS in the agentic AI organization. Clare is the driving force behind **Kiro**, AWS's agentic IDE built around the dichotomy of "vibe mode" vs. "spec mode." She demonstrated spec-driven development with Kiro at Werner Vogels' closing keynote at AWS re:Invent 2025, where she described how her own experience struggling to communicate intent to AI led her to essentially create specifications, which became the conceptual foundation for Kiro's approach.

She articulated Kiro's three-phase SDD approach: requirements definition, technical design, and task list generation. 10+ years at Amazon, prior work on AWS Proton, Amazon ECS, and AWS Code Suite.

Cross-refs: [Landscape: Kiro](/landscape/kiro)

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

Cross-refs: [Timeline: EventStorming](/timeline#eventstorming), [Discovery: EventStorming](/guides/discovery-techniques#eventstorming)

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

Cross-refs: [Discovery: Domain Storytelling](/guides/discovery-techniques#domain-storytelling)

### Jeff Patton {#jeff-patton}

**Era:** 2005-present | **Contribution:** User Story Mapping

Popularized **User Story Mapping**. Author of *User Story Mapping* (O'Reilly, 2014). If you have ever arranged sticky notes in a two-dimensional grid to plan a release, you are using Jeff's technique.

Cross-refs: [Discovery: User Story Mapping](/guides/discovery-techniques#user-story-mapping)

### Paul Rayner {#paul-rayner}

**Era:** 2010s-present | **Contribution:** EventStorming Handbook, BDD with Cucumber, Explore DDD

A leading DDD and EventStorming practitioner. Paul authored *The EventStorming Handbook*, co-authored *Behavior-Driven Development with Cucumber* (with Richard Lawrence), and founded the Explore DDD conference.

Cross-refs: [Discovery: EventStorming](/guides/discovery-techniques#eventstorming)

### Greg Young {#greg-young}

**Era:** 2000s-2010s | **Contribution:** CQRS, Event Sourcing

Formalized **CQRS** and **Event Sourcing**. His process specifications directly influenced Event Modeling. If you work with event-driven systems, Greg's thinking is foundational.

Cross-refs: [Timeline: Event Modeling](/timeline#event-modeling)

## Specification by Example {#sbe}

### Gojko Adzic {#gojko-adzic}

**Era:** 2009-present | **Contribution:** Specification by Example, Impact Mapping

Author of **Specification by Example** (2012 Jolt Award winner). Gojko synthesized the movement from 50+ teams and also created **Impact Mapping**. He runs the #GivenWhenThenWithStyle challenge series, which is worth following if you write scenarios.

Cross-refs: [Timeline: SbE](/timeline#specification-by-example), [Discovery: Impact Mapping](/guides/discovery-techniques#impact-mapping)

## Behavior-Driven Development {#bdd}

### David Chelimsky {#david-chelimsky}

**Era:** 2007 | **Contribution:** RSpec Story Runner

Added plain-text story support to RSpec in 2007 with **RSpec Story Runner**, a step toward what would become Cucumber.

Cross-refs: [Timeline: RSpec Story Runner](/timeline#concordion-robot-rspec)

### Pekka Klärck {#pekka-klarck}

**Era:** ~2005-present | **Contribution:** Robot Framework

Created **Robot Framework** (~2005), a keyword-driven, table-based specification framework that became widely used for acceptance testing.

Cross-refs: [Timeline: Robot Framework](/timeline#concordion-robot-rspec)

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

Cross-refs: [Discovery: Example Mapping](/guides/discovery-techniques#example-mapping)

## The Executable Specification Pioneers {#exec-spec-pioneers}

### Kent Beck {#kent-beck}

**Era:** ~2000 | **Contribution:** Test-Driven Development, Extreme Programming

Formalized **TDD** with red-green-refactor. Kent reframed tests as a design activity, not just verification. Co-author of the Agile Manifesto. Author of *TDD: By Example* (2002).

Cross-refs: [Timeline: TDD](/timeline#test-driven-development)

### Barry Boehm {#barry-boehm}

**Era:** 1970s-2000s | **Contribution:** Defect Origin Research

Documented that roughly 50% of all software defects originate at the specification stage. Author of *Software Engineering Economics* (1981). His findings remain the load-bearing citation for spec-first cost arguments; for the full evidence pack, see [the ROI page](/guides/roi#pre-ai-evidence-what-specifications-did-for-quality).

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

## Structured Methods and Pre-OO Modeling {#structured-methods}

### Peter Chen {#peter-chen}

**Era:** 1976 | **Contribution:** Entity-Relationship diagrams

Introduced **Entity-Relationship diagrams** in 1976. Unlike many specification formats of that era, ER diagrams stuck. They remain the standard way to specify database structures today.

Cross-refs: [Timeline: ER diagrams](/timeline)

### Larry Constantine {#larry-constantine}

**Era:** ~1975 | **Contribution:** Structure charts

With Ed Yourdon, developed **structure charts** for system decomposition (~1975).

Cross-refs: [Timeline: Structure charts](/timeline)

### Tom DeMarco {#tom-demarco}

**Era:** 1978 | **Contribution:** Data Flow Diagrams

His 1978 book popularized **Data Flow Diagrams** and data dictionaries.

Cross-refs: [Timeline: Data Flow Diagrams](/timeline)

### Douglas T. Ross {#douglas-ross}

**Era:** 1960s-70s | **Contribution:** SADT

Introduced **SADT** (1960s-70s), a hierarchical-diagram approach for decomposing systems.

Cross-refs: [Timeline: SADT](/timeline)

### Ed Yourdon {#ed-yourdon}

**Era:** ~1975 | **Contribution:** Structure charts

With Larry Constantine, developed **structure charts** for system decomposition (~1975).

Cross-refs: [Timeline: Structure charts](/timeline)

## UML and Object-Oriented Modeling {#uml}

### Grady Booch {#grady-booch}

**Era:** 1990s | **Contribution:** Unified Modeling Language

One of the "three amigos" who unified competing object-oriented modeling approaches into **UML** (1995).

Cross-refs: [Timeline: UML](/timeline)

### Ivar Jacobson {#ivar-jacobson}

**Era:** 1990s | **Contribution:** Unified Modeling Language

One of the "three amigos" who unified competing object-oriented modeling approaches into **UML** (1995).

Cross-refs: [Timeline: UML](/timeline)

### James Rumbaugh {#james-rumbaugh}

**Era:** 1990s | **Contribution:** Unified Modeling Language

One of the "three amigos" who unified competing object-oriented modeling approaches into **UML** (1995).

Cross-refs: [Timeline: UML](/timeline)

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

### Bertrand Meyer {#bertrand-meyer}

**Era:** 1986-present | **Contribution:** Design by Contract, Eiffel

Created **Eiffel** (1986) and formalized **Design by Contract (DbC)**. Meyer made Hoare-style preconditions, postconditions and invariants first-class syntax in a programming language, with runtime checking. The first time executable specifications shipped in production code.

His 1988/1997 *Object-Oriented Software Construction* is one of the most influential textbooks in software engineering. His 1997 IEEE Computer column on the Ariane 5 explosion made the case that explicit contracts catch failures that implicit assumptions miss.

DbC influenced JML, Spec#, Code Contracts, Java's `assert`, and Python's typing decorators. The 2004 [Ostroff/Paige/Makalsky](#ostroff-paige-makalsky) paper *Agile Specification-Driven Development* is built on Eiffel.

Cross-refs: [Timeline: Design by Contract](/timeline#design-by-contract), [Where "Spec-Driven Development" Came From](/origins#_1986-meyer-s-design-by-contract-specs-become-executable)

### Jonathan Ostroff, Richard Paige, and David Makalsky {#ostroff-paige-makalsky}

**Era:** 2004 | **Contribution:** Agile Specification-Driven Development

Authors of *Agile Specification-Driven Development* (XP 2004, Springer LNCS), the earliest known published use of the phrase "specification-driven development" in the academic record. Their work sits in the formal methods and Eiffel teaching tradition, distinct from the BDD/practitioner lineage that brought the term into mainstream usage in the 2020s. See [Where "Spec-Driven Development" Came From](/origins#_2004-the-first-published-use-of-the-term) for full context and the companion TFM 2004 paper.

Cross-refs: [Timeline: Agile Specification-Driven Development](/timeline#agile-sdd), [Where "Spec-Driven Development" Came From](/origins#_2004-the-first-published-use-of-the-term)

---

> **Know someone who should be listed here?** [Suggest an addition](/community#suggest-a-change).
