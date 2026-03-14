---
prev:
  text: Notable People
  link: /people
next:
  text: Resources
  link: /resources
---

# Timeline of Spec-Driven Development

Spec-driven development didn't appear out of nowhere. It has roots stretching back to the 1960s, when software teams first realized that the gap between what you intend to build and what actually gets built is the most expensive problem in the industry.

This timeline traces that journey. From formal methods to agile specs to AI-driven tools, you'll see how each generation tried to close that gap, what worked, what failed, and what we can learn from all of it.

## The Nascent Era (1960s-1970s) {#nascent-era}

### The Software Crisis (1968) {#software-crisis}

The term **"software crisis"** was coined at the 1968 NATO Conference in Garmisch, Germany. Projects were consistently late, over budget, and riddled with defects. The core issue wasn't a lack of skilled programmers. It was the gap between what stakeholders intended and what developers actually built.

That gap turned out to be the most expensive problem in software. And six decades later, you're still dealing with it.

### Structured Programming {#structured-programming}

In 1968, [Edsger Dijkstra](/people#dijkstra) published his famous letter, "Go To Statement Considered Harmful." His argument was simple: programs should be composed of well-defined, verifiable structures. No spaghetti logic. No unpredictable jumps.

His 1972 book, *A Discipline of Programming*, along with [Tony Hoare's](/people#hoare) work on program correctness proofs, established something powerful. You could actually prove that a program matched its specification. The idea that specs could be verified (not just hoped for) starts right here.

### Formal Methods {#formal-methods}

Mathematicians took the verification idea further with formal specification languages:

- **VDM** (1960s, IBM Vienna Lab) used mathematical notation drawn from logic and set theory.
- **Z Notation** (late 1970s, Oxford, [Jean-Raymond Abrial](/people#abrial)) combined set theory and first-order predicate logic. IBM used it in the development of CICS.
- **B Method** (1990s, also Abrial) succeeded Z with better refinement support. It was used for the driverless Paris Metro Line 14.

These methods were too complex for most commercial development. But they proved something important: specifications could be mathematically verified. Their legacy lives on in safety-critical domains like aviation, rail, and nuclear systems.

### Structured Analysis and Design {#structured-analysis}

While formal methods stayed in academia, practitioners built their own specification approaches:

- **SADT** by [Douglas T. Ross](/people#ross) (1960s-70s) introduced hierarchical diagrams for decomposing systems.
- [Tom DeMarco's](/people#demarco) 1978 book popularized **Data Flow Diagrams** and data dictionaries.
- [Larry Constantine](/people#constantine) and [Ed Yourdon](/people#yourdon) (~1975) developed **structure charts** for system decomposition.
- **SSADM** became the UK government's standardized methodology in the early 1980s.

This was the first systematic "specification layer" between business needs and code. You couldn't just jump from a vague request to implementation. There had to be something in between.

### CASE Tools (1980s) {#case-tools}

**Computer-Aided Software Engineering** tools like Excelerator and LBMS represented the first attempt to build tooling around specifications. They promised to automate the structured analysis process.

They were expensive, complex, and required massive organizational buy-in. By the mid-1990s, most had been abandoned. The lesson: tooling that requires everyone to change how they work, all at once, tends to fail.

## The Model Era (1990s) {#the-model-era}

### The Three Amigos and UML {#uml}

In the early 1990s, the object-oriented world had a problem. [Grady Booch](/people#booch), [James Rumbaugh](/people#rumbaugh), and [Ivar Jacobson](/people#jacobson) each had their own modeling approach, and none of them were compatible.

In 1995, the three unified their methods into the **Unified Modeling Language (UML)**. The OMG adopted it as a standard in 1997. UML eventually grew to 14 diagram types.

[Martin Fowler](/people#fowler) helpfully classified three levels of UML use: as a sketch (informal communication), as a blueprint (detailed design), and as a programming language (code generation). Most teams got value from sketching. Almost nobody succeeded with code generation.

### Model-Driven Development {#model-driven-development}

**Model-Driven Development (MDD)** is the direct ancestor of today's spec-driven development. The core idea: models are the primary artifact, and code gets generated from them.

Key approaches included:

- The **Shlaer-Mellor Method** (late 1980s), one of the earliest MDD approaches.
- OMG's **Model-Driven Architecture** (2001), with its pipeline from CIM to PIM to PSM to Code.
- **Executable UML**, which took the code generation idea to its logical extreme.

MDD largely failed. The parseable spec languages were too rigid, and the code generators couldn't handle real-world complexity. But here's the thing: LLMs potentially change that equation entirely. A flexible AI that can interpret intent and generate code is exactly what MDD was missing.

### Entity-Relationship Models {#er-models}

[Peter Chen](/people#chen) introduced **Entity-Relationship diagrams** in 1976. Unlike many specification formats from this era, ER diagrams actually stuck. They remain the standard way to specify database structures today.

## The Agile Specification Revolution (2000-2011) {#agile-revolution}

The **Agile Manifesto** (2001) was partly a reaction against heavyweight specifications. Thick requirements documents that nobody read. Months of analysis before writing a single line of code.

But agile didn't eliminate specs. It transformed them. **User stories** replaced requirements documents. Conversations replaced sign-offs. And a new question emerged: could specifications be executable?

### Domain-Driven Design {#domain-driven-design}

[Eric Evans'](/people#evans) 2003 book *Domain-Driven Design* introduced ideas that reshaped how you think about specifications. **Ubiquitous Language** meant your specs should use the same words the business uses. **Bounded Contexts** meant you stop pretending one model fits the whole system. **Aggregates** gave you clear consistency boundaries.

The big insight: if your specifications don't speak the language of your business domain, they'll always be lossy translations.

### Test-Driven Development {#test-driven-development}

[Kent Beck](/people#beck) popularized **Test-Driven Development** around 2000. The red-green-refactor cycle. Write a failing test, make it pass, clean up the code.

TDD reframed testing as a design activity, not just verification. Your tests described what the code should do before the code existed. That made tests a form of specification. TDD is the direct ancestor of executable specs.

### FIT and FitNesse {#fit-and-fitnesse}

[Ward Cunningham](/people#cunningham) created **FIT** (Framework for Integrated Test) in 2001, and [Robert C. Martin](/people#martin) built **FitNesse** on top of it in 2002. This was the first true "specification by example" tooling.

Business stakeholders could write examples in simple tables, and those tables became automated tests. FitNesse added a wiki-based web interface that made specs collaborative. For the first time, the people defining requirements and the people verifying code were looking at the same artifact.

### AgileDox / TestDox {#agiledox-testdox}

In 2003, [Chris Stevenson](/people#stevenson) built a simple JUnit utility called **AgileDox** (later TestDox). All it did was print test method names as English sentences. That's it.

But this tiny tool turned out to be the spark that ignited BDD. [Dan North](/people#north) described it as his first "aha moment," the realization that test names could read as behavior descriptions.

### Behavior-Driven Development {#behavior-driven-development}

**Behavior-Driven Development** emerged between 2003 and 2006, driven by [Dan North](/people#north), [Chris Matts](/people#matts), and [Liz Keogh](/people#keogh).

North replaced the word "test" with "behavior," reframing the whole conversation. He built **JBehave** in 2004 as the first BDD framework. That same year, Matts and North proposed the **Given/When/Then** format. North's 2006 article, "Introducing BDD," gave the movement its name and manifesto. Keogh was a BDD pioneer from 2004, contributing significantly to how practitioners understood and applied the ideas.

BDD's core insight: if you describe behavior in a language everyone understands, you can align developers, testers, and business people around a single source of truth.

### Concordion, Robot Framework, RSpec {#concordion-robot-rspec}

Several tools explored different approaches to executable specs:

- **Concordion** ([David Peterson](/people#peterson), ~2005) embedded specs in free-form HTML, letting you write natural prose with executable assertions.
- **Robot Framework** ([Pekka Clark](/people#clark), ~2005) used keyword-driven tables, popular for acceptance testing.
- **RSpec** ([Aslak Hellesoy](/people#hellesoy), 2006) brought BDD into Ruby with expressive DSLs.
- **RSpec Story Runner** ([David Chelimsky](/people#chelimsky), 2007) added plain-text story support to RSpec.

### Cucumber and Gherkin {#cucumber-and-gherkin}

In 2008, [Aslak Hellesoy](/people#hellesoy) forked RSpec Story Runner into **Cucumber** and created **Gherkin** as its specification language.

Gherkin was a breakthrough: human-readable AND machine-executable. Business people could read it. Developers could run it. Testers could verify it. Cucumber became the dominant BDD tool and spawned implementations in virtually every programming language. You can learn more about Gherkin and other spec formats on the [dialects](/dialects/) page.

### Specification by Example {#specification-by-example}

[Gojko Adzic's](/people#adzic) 2011 book *Specification by Example* synthesized lessons from over 50 teams practicing executable specifications. It won the 2012 Jolt Award.

The book gave the movement a coherent framework: collaborative specification workshops, living documentation, specs as automated tests. If you want to understand the intellectual foundation that today's tools build on, this is the book.

## The DDD Renaissance (2013-2020) {#ddd-renaissance}

This period brought crucial developments in how teams discover and specify complex business domains. The focus shifted from individual specs to collaborative modeling of entire systems.

### EventStorming {#eventstorming}

In 2013, [Alberto Brandolini](/people#brandolini) introduced **EventStorming**, a collaborative workshop format he originally called "Event-based modelling." The idea is simple: teams "storm out" an entire business process using colored sticky notes on a wall.

Each color has a specific meaning:

- **Orange:** Domain Events (things that happened)
- **Blue:** Commands (decisions that triggered events)
- **Yellow:** Actors/Personas (who does what)
- **Purple:** External systems or time triggers
- **Lilac:** Policies (reactive business rules)
- **Green:** Read models/Views (what people need to see)

EventStorming became a key factor behind the DDD renaissance and the broader [Collaborative Modeling](/discovery) movement. Brandolini's unfinished book on Leanpub became a surprise hit, proving the demand for better ways to discover domain knowledge together.

### Event Modeling {#event-modeling}

[Adam Dymitruk](/people#dymitruk) developed **Event Modeling** between 2018 and 2019 at Adaptech Group. It built on [Greg Young's](/people#young) CQRS/Event Sourcing specifications and Brandolini's EventStorming.

Event Modeling produces a complete blueprint of a system. Swimlanes show UI wireframes, commands, events, and read models. Each slice uses a Given/When/Then structure, creating independently implementable vertical slices. Teams report modeling sessions as short as 15 minutes per slice.

### Narrative-Driven Development {#narrative-driven-development}

[Sam Hatoum](/people#hatoum) developed **Narrative-Driven Development (NDD)** starting around 2018, originating at Xolvio. It grew independently from Event Modeling but from the same EventStorming roots, developed through enterprise client work with companies like Audi and Volkswagen.

Teams using NDD consistently reported 3-4x faster delivery. It extends BDD's Given/When/Then with Should/Should Not patterns and uses a model-based approach with a TypeScript fluent interface. The result is a unified model that serves visual, documentation, and code audiences simultaneously. NDD is now productized through [Auto](https://on.auto). You can learn more on the [Narrative-Driven Development](/dialects/narrative-driven) page.

### Co-evolution from EventStorming {#co-evolution}

EventStorming (2013) triggered two independent evolutionary paths. Both Dymitruk and Hatoum were deeply immersed in the DDD/EventStorming community. They arrived at similar conclusions through different routes.

These are distinct approaches (you choose one, not layer them). Both are compatible with EventStorming as an upstream discovery activity. The DDD community's work during this period laid the groundwork for the AI-driven renaissance that followed.

## The AI-Driven Renaissance (2024-Present) {#ai-renaissance}

AI coding assistants created the conditions for spec-driven development to finally become mainstream. Not because AI solved the spec problem, but because AI made the spec problem impossible to ignore.

### The Vibe Coding Problem {#vibe-coding}

**"Vibe coding"** became widespread. Prompt an AI, get working code, ship it. Fast? Absolutely. Sustainable? Not even close.

The problems accumulate quickly: errors compound across generations of AI output, context gets lost between sessions, there's no persistent model of intent, and the resulting code is untraceable. You can't explain why it works, and you certainly can't explain why it breaks.

### The Spec-Driven Wave {#spec-driven-wave}

In response, multiple tools launched in rapid succession, all converging on the same insight: you need specifications before you need code.

- [Auto](/landscape/auto), productization of NDD
- [GitHub Spec Kit](/landscape/github-spec-kit) (2025), open-source, repo-native
- [Kiro](/landscape/kiro) (AWS, 2025), agentic IDE with spec-driven mode
- [Tessl](/landscape/tessl) (2025), Spec Registry + Framework
- BMAD-METHOD (2025), open-source multi-agent framework
- [OpenSpec](/landscape/openspec) (2025), lightweight, brownfield-friendly
- [Intent](/landscape/intent) (Augment Code, 2025-2026), living specs with multi-agent orchestration
- IntentSpec (2025), minimalist open standard
- Google Code Wiki (2025), AI-generated living documentation

You can explore these tools in detail on the [landscape](/landscape/) page.

### The Executability Gap {#executability-gap}

Here's the irony. Nearly every new tool in this wave regressed from executable specifications back to markdown prose. The hard-won lesson from Cucumber, FIT, and Specification by Example (that specs should prove themselves by running) has been largely forgotten.

Writing specs in markdown is better than writing no specs at all. But a spec you can't execute is a spec you can't verify. See [The Executability Gap](/landscape/#the-executability-gap) for a deeper look at this problem.

## Summary Timeline {#summary-timeline}

| Year | Development | Key People |
|------|------------|------------|
| 1960s | VDM formal specification | IBM Vienna Lab |
| 1967 | Structured programming begins | [Dijkstra](/people#dijkstra) |
| 1968 | "Software Crisis" coined at NATO Conference | NATO participants |
| 1968 | "Go To Statement Considered Harmful" | [Dijkstra](/people#dijkstra) |
| 1960s-70s | SADT hierarchical diagrams | [Douglas T. Ross](/people#ross) |
| 1972 | *A Discipline of Programming* | [Dijkstra](/people#dijkstra) |
| ~1975 | Structure charts | [Constantine](/people#constantine), [Yourdon](/people#yourdon) |
| 1976 | Entity-Relationship diagrams | [Peter Chen](/people#chen) |
| Late 1970s | Z Notation | [Abrial](/people#abrial) (Oxford) |
| 1978 | Data Flow Diagrams popularized | [Tom DeMarco](/people#demarco) |
| Early 1980s | SSADM standardized | UK Government |
| 1980s | CASE Tools era | Various vendors |
| Late 1980s | Shlaer-Mellor Method | Shlaer, Mellor |
| 1990s | B Method (successor to Z) | [Abrial](/people#abrial) |
| 1995 | UML unified | [Booch](/people#booch), [Rumbaugh](/people#rumbaugh), [Jacobson](/people#jacobson) |
| 1997 | UML adopted by OMG | OMG |
| ~2000 | Test-Driven Development | [Kent Beck](/people#beck) |
| 2001 | Agile Manifesto | Beck, Fowler, et al. |
| 2001 | MDA specification | OMG |
| 2001 | FIT framework | [Ward Cunningham](/people#cunningham) |
| 2002 | FitNesse | [Robert C. Martin](/people#martin) |
| 2003 | *Domain-Driven Design* | [Eric Evans](/people#evans) |
| 2003 | AgileDox / TestDox | [Chris Stevenson](/people#stevenson) |
| 2003-2006 | BDD emerges | [North](/people#north), [Matts](/people#matts), [Keogh](/people#keogh) |
| 2004 | JBehave (first BDD framework) | [Dan North](/people#north) |
| 2004 | Given/When/Then format proposed | [North](/people#north), [Matts](/people#matts) |
| ~2005 | Concordion | [David Peterson](/people#peterson) |
| ~2005 | Robot Framework | [Pekka Clark](/people#clark) |
| 2006 | "Introducing BDD" article | [Dan North](/people#north) |
| 2006 | RSpec | [Aslak Hellesoy](/people#hellesoy) |
| 2007 | RSpec Story Runner | [David Chelimsky](/people#chelimsky) |
| 2008 | Cucumber and Gherkin | [Aslak Hellesoy](/people#hellesoy) |
| 2011 | *Specification by Example* | [Gojko Adzic](/people#adzic) |
| 2013 | EventStorming | [Alberto Brandolini](/people#brandolini) |
| ~2018 | Narrative-Driven Development | [Sam Hatoum](/people#hatoum) |
| 2018-2019 | Event Modeling | [Adam Dymitruk](/people#dymitruk) |
| 2024-2025 | Vibe coding becomes widespread | Various |
| 2025 | Spec-driven tool wave begins | Multiple teams |
| 2025-26 | AI-driven spec renaissance | Auto, Kiro, Tessl, Intent, others |

---

*This timeline is a community resource. Something missing or inaccurate? [Submit a PR](https://github.com/BeOnAuto/specdriven.com) or [open an issue](https://github.com/BeOnAuto/specdriven.com/issues).*

*An initiative by [Auto](https://on.auto).*
