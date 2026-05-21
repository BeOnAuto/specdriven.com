---
title: Narrative-Driven Development
prev: false
next: false
image: /images/pages/dialects/narrative-driven.png
---

# Narrative-Driven Development

![Narrative-Driven Development](/images/pages/dialects/narrative-driven.png)

### What Is NDD?

Narrative-Driven Development (NDD) is a product modeling method for describing line-of-business web applications.

It organizes product intent as a narrative model through time: domains, narratives, scenes, moments, rules, examples, and should statements. The goal is to make product behavior clear enough for humans to review before implementation.

### Why Narratives?

Every team member holds a fragment of the truth. The product owner knows the business rules. The designer knows the interaction patterns. The developer knows the technical constraints. The user knows the pain points.

Traditional approaches scatter these fragments across user stories, Jira tickets, Figma files, Slack threads, and hallway conversations. NDD brings them together into one readable product model that everyone can discuss and evolve.

### The Taxonomy

The narrative model centers on this taxonomy:

- Domain
- Narrative
- Scene
- Moment
- Command, query, react, and experience moment types
- Given/When/Then examples
- Should statements
- Outcome and scene-worthiness review

### The Structural Hierarchy

NDD organizes a system into four nested levels. Each level has one job. Each level answers one question.

```text
Domain
└── Narrative
    └── Scene
        └── Moment
```

Read it as **business capability -> goal thread -> outcome -> step toward that outcome**.

**Domain.** A coherent business capability area that groups related narratives sharing the same core concepts, rules, and outcomes. _Examples: Billing, Scheduling, Identity and Access, Team Timesheet Management._ A domain answers: _what business area are we in?_

**Narrative.** A cohesive thread of related scenes that together fulfill one broader user or business goal within a domain. A narrative is wider than a single outcome but narrower than the whole capability. _Examples within Billing: Customer starts a subscription, Customer updates payment method, Admin issues a refund._ A narrative answers: _what broader goal is being fulfilled?_

**Scene.** A self-contained outcome achieved through one or more moments. The scene is the primary review unit in NDD: concrete, outcome-centered, independently understandable, and verifiable. _Examples: Subscription created, Appointment booked, Timesheet submitted, Entry validated._ A scene answers: _what single outcome is being achieved?_

**Moment.** A single interaction or system step that moves a scene toward its outcome. A moment is the smallest meaningful unit. Moment types are **command** (something changes), **query** (something is read), **react** (the system responds automatically), and **experience** (interface behavior without a direct business-state change). _Examples: User selects a plan, Submitter clicks submit, System sets entry status to validated._ A moment answers: _what step happens here?_

Why this matters: vague structures create vague systems. When teams collapse business capability, user goal, outcome, and step into one mush, the resulting specs are hard to reason about. Keeping the four levels separate gives the product model clarity.

### Rules and Examples

NDD carries behavior through examples.

```text
Rule: Tickets cannot be reserved beyond remaining capacity.

Given a show has 1 ticket remaining
When a fan tries to book 2 tickets
Then the booking is rejected
And no tickets are reserved
```

This keeps business rules concrete. Product, QA, design, and engineering can inspect the same behavior before implementation.

### Should Statements

NDD also uses should statements for component and interaction expectations.

```text
describe BookingForm
  it should show remaining ticket count
  it should disable submit while booking is in progress
  it should show an inline error when the requested quantity is unavailable
```

These statements sit near the business rule they support, so product behavior and interface behavior are not split across unrelated documents.

### Moment Types

| Moment type | Use it when | Example |
| --- | --- | --- |
| **Command** | Something changes | Book tickets |
| **Query** | Something is read | Browse available shows |
| **React** | The system responds automatically | Promote waitlisted fan after cancellation |
| **Experience** | The user moves through the interface | Open booking detail panel |

Moment types give teams a shared way to talk about behavior without exposing implementation details.

### Data Completeness

NDD asks a simple review question:

> If the product shows data, has the narrative explained where that data comes from?

If a confirmation screen shows a booking reference, the narrative should say when that reference exists. If a list shows remaining tickets, the narrative should explain what product facts affect that number. This catches phantom data before implementation.

### NDD and the Fractal Nature of Specs

[Specifications are the communication of design](/what). Design happens at every level of a system, from product strategy down to a single component's behavior. So specs need to live at every level too. The full argument is in [Specs Are Fractal](/perspectives/specs-are-fractal).

NDD addresses that fractal nature with a hierarchy. Teams can start at the domain, drill into a narrative, inspect a scene, and then clarify a moment with rules, examples, should statements, and the information the product shows. Each level has a different scope of decision.

### NDD and Collaborative Discovery

NDD didn't emerge in isolation. It combines patterns from multiple [collaborative discovery](/guides/discovery) techniques into one language:

- **From EventStorming**: discovering meaningful business changes over time
- **From Example Mapping**: concrete Given/When/Then examples as a clarification tool
- **From User Story Mapping**: the journey as an organizing principle
- **From Domain-Driven Design**: shared language and domain boundaries

Where these techniques produce workshop materials, NDD gives teams a stable vocabulary for carrying the discovery forward.

### Try It

[Read the NDD site](https://www.narrativedriven.org).
