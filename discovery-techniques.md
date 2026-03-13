---
prev:
  text: Discovery
  link: /discovery
next: false
---

# Discovery Techniques Reference

> A reference catalog of structured discovery techniques from the collaborative modeling community. These techniques help teams build shared understanding before writing specifications.
>
> For context on why discovery matters and how it fits into spec-driven development, see [Discovery](/discovery).

## EventStorming {#eventstorming}

**Creator:** [Alberto Brandolini](/people#alberto-brandolini) (2013)
**Level:** Business process discovery to software design
**Participants:** 6-30 people across business, tech, UX, domain expertise
**Medium:** Colored sticky notes on a wide surface, or collaborative tools like Miro, FigJam, and similar

The most widely adopted collaborative modeling technique. Teams "storm out" a business process as a timeline of **domain events** (orange stickies), then layer in commands (blue), actors (yellow), external systems (purple), policies (lilac), read models (green), and hotspots (pink). Works equally well in person or on a shared digital canvas.

Three levels:

- **Big Picture:** Explore an entire business line with 25-30 people. Hours, not weeks.
- **Process Modeling:** Deeper dive with enforced grammar. More rigorous.
- **Software Design:** Connect events to DDD building blocks.

**How it feeds specs:** Domain events become system behaviors. Policies become business rules. Hotspots become areas needing deeper specification. Bounded Contexts define specification boundaries.

**Key resource:** Alberto Brandolini, *Introducing EventStorming* (Leanpub)

## Event Modeling {#event-modeling}

**Creator:** [Adam Dymitruk](/people#adam-dymitruk) (~2018)
**Level:** System specification to implementation planning
**Participants:** Cross-functional teams
**Medium:** Visual timeline with swimlanes, wireframes, events, specs

Produces a complete blueprint. Shows what users see (wireframes), what happens (events), what triggers changes (commands), how data is presented (read models). Specs are Given/When/Then, tied to individual commands and views, creating independently implementable vertical slices.

**How it feeds specs:** Event Models ARE specifications. Each slice can be directly translated into executable specs. Sessions can be as short as 15 minutes. See also [Event Modeling as a spec dialect](/dialects/).

**Key resource:** [eventmodeling.org](https://eventmodeling.org)

## Example Mapping {#example-mapping}

**Creator:** [Matt Wynne](/people#matt-wynne) (~2015) at Cucumber Ltd
**Level:** User story refinement to acceptance criteria
**Participants:** Three Amigos (product owner, developer, tester, 3-5 people)
**Medium:** Colored index cards (or digital equivalents in Miro, FigJam, etc.)
**Duration:** ~25 minutes per story

Breaks down user stories into concrete, testable examples. Four colors:

- **Yellow:** The user story
- **Blue:** Business rules (acceptance criteria)
- **Green:** Concrete examples per rule
- **Red:** Questions (unknowns)

Too many red cards means you need more homework. Can't finish in 25 minutes? The story is too big.

**How it feeds specs:** Examples map directly to Given/When/Then scenarios. Rules become acceptance criteria. Questions become investigation spikes.

**Key resource:** Matt Wynne, "Introducing Example Mapping" (Cucumber blog)

## User Story Mapping {#user-story-mapping}

**Creator:** [Jeff Patton](/people#jeff-patton) (2005, book 2014)
**Level:** Product discovery to release planning
**Participants:** Cross-functional
**Medium:** Sticky notes in a 2D grid (or digital collaborative boards)

Visualizes the user journey as a horizontal narrative. Vertical depth represents increasingly detailed stories. The top row is the backbone (high-level activities). Stories are arranged by priority, creating horizontal slices for releases.

**How it feeds specs:** The backbone defines feature areas. Vertical columns define specification scope. Horizontal slices define release boundaries.

**Key resource:** Jeff Patton, *User Story Mapping* (O'Reilly, 2014)

## Impact Mapping {#impact-mapping}

**Creator:** [Gojko Adzic](/people#gojko-adzic) (2012)
**Level:** Strategic planning to goal alignment
**Participants:** Senior business and delivery stakeholders
**Medium:** Mind-map (Why, Who, How, What)

Connects business goals to deliverables. Four levels:

- **Why:** Business goal
- **Who:** Actors who can help or hinder
- **How:** Behavioral changes or impacts desired
- **What:** Deliverables (features, stories, specs)

Prevents building features nobody asked for.

**How it feeds specs:** Impact Maps define WHY specs exist. Each "What" leaf is a candidate for specification.

**Key resource:** Gojko Adzic, *Impact Mapping* (2012)

## Domain Storytelling {#domain-storytelling}

**Creators:** Stefan Hofer and Henning Schwentner
**Level:** Domain understanding to process visualization
**Participants:** Domain experts and dev team
**Medium:** Pictographic language (actors, work objects, activities)

A simple pictographic notation. Domain experts tell stories. The facilitator draws with actors (stick figures), work objects (documents, data), and numbered activities (arrows). Deliberately simple, accessible to anyone.

**How it feeds specs:** Each story is a candidate for specification. Actors map to personas. Work objects map to domain entities. Activities map to system behaviors.

**Key resource:** Hofer & Schwentner, *Domain Storytelling* (Addison-Wesley, 2021)

## Wardley Mapping {#wardley-mapping}

**Creator:** Simon Wardley
**Level:** Strategic situational awareness to technology decisions
**Participants:** Strategic and technical leadership
**Medium:** 2D map (value chain vertical, evolution horizontal)

Visualizes business components by position in the value chain and evolutionary stage (genesis to commodity). Reveals strategic differentiators vs. commodities.

**How it feeds specs:** Informs WHAT to specify in detail (differentiators) vs. buy off-the-shelf (commodities).

**Key resource:** Simon Wardley, *Wardley Maps* (free online book)

## Context Mapping {#context-mapping}

**Origin:** [Eric Evans](/people#eric-evans) (2003), further developed by the DDD community
**Level:** System architecture to integration strategy
**Participants:** Architects, team leads, domain experts
**Medium:** Diagrams showing bounded context relationships

Identifies relationships between bounded contexts. Patterns include Shared Kernel, Customer/Supplier, Conformist, Anti-Corruption Layer, Open Host Service, and others.

**How it feeds specs:** Defines specification scope boundaries. Each context has its own ubiquitous language. Integration points need their own specs.

**Key resource:** Eric Evans, *Domain-Driven Design* (2003), Chapter 14

## Business Model Canvas {#business-model-canvas}

**Creator:** Alexander Osterwalder (2008)
**Level:** Business model to value proposition
**Participants:** Business stakeholders, product owners
**Medium:** Nine-block canvas

Nine blocks: Value Propositions, Customer Segments, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, Cost Structure.

**How it feeds specs:** Identifies what value you deliver to whom. The highest-level input to specification.

**Key resource:** Osterwalder & Pigneur, *Business Model Generation* (2010)

## Storystorming {#storystorming}

**Origin:** Community-driven technique
**Level:** Cross-method integration
**Medium:** Colored sticky notes or digital equivalents (inspired by EventStorming)

A mashup that maps existing methods (Domain Storytelling, User Story Mapping, Impact Mapping, EventStorming) onto shared reusable building blocks. Makes methods more accessible and easier to link together.

**Key resource:** [storystorming.com](https://storystorming.com)

## The Three Amigos {#three-amigos}

**Origin:** BDD community practice
**Level:** Story refinement to shared understanding
**Participants:** Business, development, testing (one each)
**Duration:** 15-30 minutes

Not a specific technique but a practice pattern. Three perspectives come together before development: business (what), development (how), testing (what could go wrong). Often combined with [Example Mapping](#example-mapping).

## How These Techniques Connect {#how-they-connect}

```
Strategic Level
  └─ Business Model Canvas → What is the business?
  └─ Wardley Mapping → Where should you invest?
  └─ Impact Mapping → What outcomes do you need?

Discovery Level
  └─ EventStorming (Big Picture) → What happens in the domain?
  └─ Domain Storytelling → How do people work today?
  └─ User Story Mapping → What is the user's journey?

Specification Level
  └─ EventStorming (Process/Design) → How should the system behave?
  └─ Event Modeling → What's the complete system blueprint?
  └─ Example Mapping → What are the concrete acceptance criteria?
  └─ Context Mapping → Where are the boundaries?

Execution Level
  └─ Spec-Driven Development → Build it.
```

The flow is: **Strategy, Discovery, Specification, Execution.** Each level feeds the next.

## Running Your First Workshop {#first-workshop}

**For a brand new project:** Big Picture EventStorming, then User Story Mapping, then Example Mapping.

**For an existing project:** Focused EventStorming, then Example Mapping, then feed into your [spec dialect](/dialects/).

**For strategic decisions:** Impact Mapping, then Wardley Mapping, then EventStorming for what you build.

**For team alignment:** Domain Storytelling (today), then EventStorming (tomorrow).

---

> **Facilitating these workshops?** *Collaborative Software Design* by van Kelle, Verschatse, and Baas-Schwegler (Manning) is an excellent guide.
>
> **Know a technique that should be listed here?** [Submit a PR](https://github.com/BeOnAuto/specdriven.com).

*An initiative by [Auto](https://on.auto).*
