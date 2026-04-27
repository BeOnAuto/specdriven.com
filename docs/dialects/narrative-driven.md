---
title: Narrative-Driven Development
prev:
  text: Spec Dialects
  link: /dialects/
next: false
---

# Narrative-Driven Development

### What Is NDD?
Narrative-Driven Development (NDD) is a spec dialect for building line-of-business web applications. It's a time-based modeling approach that unites product, design, and engineering around a single artifact: the narrative.

A narrative tells the story of how a user interacts with a system, moment by moment, through time. It captures not just what happens, but who does it, through which interface, and what the system does in response.

### Why Narratives?
Every team member holds a fragment of the truth. The product owner knows the business rules. The designer knows the interaction patterns. The developer knows the technical constraints. The user knows the pain points.

Traditional approaches scatter these fragments across user stories, Jira tickets, Figma files, Slack threads, and hallway conversations. NDD brings them together into one model that everyone can read, discuss, and evolve.

### NDD is Model-Based and Multimodal

NDD is fundamentally a model-based approach. At its core is a schema (defined in Zod) that describes the complete system specification: narratives, slices, messages, data architecture, integrations, journeys, and design assets.

The TypeScript DSL you see on this page is a fluent interface built on top of that model. It's one port into the specification, designed for developer ergonomics. But you could equally write the model as raw JSON, or build DSLs in other languages. The model is the source of truth; languages are just interfaces.

This model-based architecture is what enables NDD to be consumed in three ways:

**As code**: The TypeScript fluent interface (or raw JSON, or future DSLs in other languages) is the executable format. Developers write and read narratives as structured specifications that drive code generation, testing, and validation.

**As visual models**: The same model renders as user journey maps, storyboards, and interactive timelines. Designers and product teams work with narratives visually, seeing the user's path through the system moment by moment. A Figma integration is in development to bridge design tools directly into the narrative model.

**As documents**: Narratives render as structured, readable documents (similar to a Notion page). Product managers, QA engineers, and stakeholders read and review narratives without touching code or visual tools.

All three views are projections of the same underlying model. Change one, and the others update. This is what makes NDD accessible beyond developers. A designer working visually and a developer working in TypeScript are editing the same specification.

### The Core Constructs

**Outcomes**: What business objective does this narrative achieve?

**Moments**: Events that happen at specific points in time, written in active voice: "User sees their balance," "System fetches dashboard data."

**Interfaces**: How the user interacts at each moment: a screen, a button, an API endpoint.

**Actions**: What the system does. Queries retrieve data, commands change state.

**Lanes**: Three parallel tracks that capture different perspectives:
- **Context Lane**: The big picture (outcomes, frames)
- **Interaction Lane**: The user experience (moments, interfaces)
- **System Lane**: The technical behavior (actions, specifications)

### The Narrative Model and TypeScript Interface
NDD's TypeScript fluent interface provides a developer-friendly way to author narratives. Here's what a real narrative looks like:

```typescript
narrative('Orders', () => {
  command('Place order')
    .server(() => {
      specs('Order placement', () => {
        rule('Valid orders are processed', () => {
          example('Customer places order for in-stock item')
            .given<InventoryState>({ itemId: 'item-1', quantity: 10 })
            .when<PlaceOrder>({ itemId: 'item-1', quantity: 2 })
            .then<OrderPlaced>({ orderId: expect.any(String), itemId: 'item-1' });
        });
      });
    });
});
```

This single narrative definition drives:
- The domain model
- The GraphQL schema
- The server scaffold (event-sourced with command/event patterns)
- The frontend scaffold (React components with data bindings)
- The test suite

### Slice Types
NDD organizes behavior into four slice types:

| Slice | Purpose | Client | Server |
|-------|---------|--------|--------|
| **Command** | Actions that change state | UI for triggering | Business logic, events |
| **Query** | Read operations | UI for displaying | Data retrieval |
| **React** | Event-driven automation | - | Event handlers |
| **Experience** | UI-only behavior | Interaction logic | - |

### From Narrative to Running Code
When used with Auto, narratives flow through a pipeline:
1. Narrative → Domain Model (entities, commands, events, queries)
2. Domain Model → GraphQL Schema
3. Schema → Server Scaffold (Apollo + Emmett event sourcing)
4. Schema → Frontend Scaffold (React + Tailwind)
5. AI Implementation with feedback loops
6. Quality checks (100% coverage, type safety)

The result is production-ready code that traces directly back to your specifications.

### NDD and the Fractal Nature of Specs

[Specifications are the communication of design](/what). Design happens at every level of a system, from product strategy down to a single method's behavior. So specs need to live at every level too. The full argument is in [Specs Are Fractal](/perspectives/specs-are-fractal).

NDD is a deliberate attempt to address this fractal nature inside a single, executable specification format. Narratives sit at the user-experience level, organising the story of how someone interacts with the system through time. Slices (command, query, react, experience) carve behavior into independently implementable units. Moments capture individual events at specific points in time. Inside a slice, specs are written as rules and examples that drop down into executable behavioral detail.

The intent is that authoring at the high level (a narrative as a story) and authoring at the low level (a precondition / postcondition example for a single behavior) are the same activity expressed at different zooms, held inside one shared model.

This is a work in progress. NDD acknowledges the fractal recursion explicitly and is trying to make every level of design specifiable from inside one model. We don't claim to have solved it. We're still working on it.

### NDD and Collaborative Discovery

NDD didn't emerge in isolation. It combines patterns from multiple [collaborative discovery](/guides/discovery) techniques into a single executable format:

- **From EventStorming**: Domain events and commands as the backbone of system behavior
- **From Example Mapping**: Concrete Given/When/Then examples as the specification unit
- **From User Story Mapping**: The narrative journey as the organizing principle

Where these techniques produce workshop artifacts (sticky notes, cards, timelines), NDD captures the same information in a structured, persistent, executable model. The discovery doesn't evaporate after the workshop. It becomes the specification.

### Try It
[Get started with Auto →](/auto)
