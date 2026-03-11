---
title: Narrative-Driven Development
---

# Narrative-Driven Development

### What Is NDD?
Narrative-Driven Development (NDD) is a spec dialect for building line-of-business web applications. It's a time-based modeling approach that unites product, design, and engineering around a single artifact — the narrative.

A narrative tells the story of how a user interacts with a system, moment by moment, through time. It captures not just what happens, but who does it, through which interface, and what the system does in response.

### Why Narratives?
Every team member holds a fragment of the truth. The product owner knows the business rules. The designer knows the interaction patterns. The developer knows the technical constraints. The user knows the pain points.

Traditional approaches scatter these fragments across user stories, Jira tickets, Figma files, Slack threads, and hallway conversations. NDD brings them together into one model that everyone can read, discuss, and evolve.

### The Core Constructs

**Outcomes** — What business objective does this narrative achieve?

**Moments** — Events that happen at specific points in time, written in active voice: "User sees their balance," "System fetches dashboard data."

**Interfaces** — How the user interacts at each moment: a screen, a button, an API endpoint.

**Actions** — What the system does: queries (retrieve data) and commands (change state).

**Lanes** — Three parallel tracks that capture different perspectives:
- **Context Lane** — the big picture (outcomes, frames)
- **Interaction Lane** — the user experience (moments, interfaces)
- **System Lane** — the technical behavior (actions, specifications)

### The Narrative DSL
NDD has a TypeScript implementation that serves as the executable format. Here's what a real narrative looks like:

```typescript
flow('Orders', () => {
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
| **React** | Event-driven automation | — | Event handlers |
| **Experience** | UI-only behavior | Interaction logic | — |

### From Narrative to Running Code
When used with Auto Engineer, narratives flow through a pipeline:
1. Narrative → Domain Model (entities, commands, events, queries)
2. Domain Model → GraphQL Schema
3. Schema → Server Scaffold (Apollo + Emmett event sourcing)
4. Schema → Frontend Scaffold (React + Tailwind)
5. AI Implementation with feedback loops
6. Quality checks (100% coverage, type safety)

The result is production-ready code that traces directly back to your specifications.

### Try It
[Get started with Auto Engineer →](/auto)

[Learn about the spec-driven philosophy →](/manifesto)
