---
title: "Most Specs Fail Because They Start Too Low. Start Here Instead."
---

# Most Specs Fail Because They Start Too Low. Start Here Instead.

![](/images/perspectives/post-17.png)

The most common spec mistake isn't writing bad specs. It's starting at the wrong level.

Teams jump straight to component specs. "The email validator should accept RFC 5322." "The API returns 404 for missing resources." Fine specifications. Specific. Testable. But they're fragments without a whole.

A good spec system has two layers.

**The information model.** The holistic whole. Before you spec any component, you need to understand the overall information exchange your system handles. Who are the actors? What behaviors exist? What interactions happen between them? What outcomes result?

For an e-commerce system: actors are online customers, dealers, the warehouse system. Behaviors are browsing, purchasing, shipping. Interactions: customer submits order, warehouse fulfills it. Outcomes: order confirmed, inventory updated, notification sent.

Express this in domain language. "Retail customer purchases product." Not "POST /api/orders with JSON payload." The language matters because it shapes how everyone thinks about the system, humans and AI alike. This layer is time-based. It flows. It reads like a story.

**Component specs.** Within each domain behavior, technical components need their own detailed specs. Email validation with its permutations. Payment integration with its timeout and retry logic. Inventory with its concurrency constraints. More technical. Edge cases. Error states.

Here's the thing that matters: domain specs THREAD components together. You don't write "domain code." You write components, individual modules with clear boundaries. Then you stitch them together into domain logic that delivers value.

Domain specs are the thread. Components are the beads. Without the thread, you have a pile of beads.

There's a meme that nails this. Someone doing a push-up with their arms in one place, their legs somewhere else, their head somewhere else. "All unit tests pass." Of course the system doesn't work. Nobody specified how the pieces fit together.

Start with the whole. Slice vertically by value, not by technical layer. "Sell used cars" not "build the database layer." Spec each slice. Test each spec. That's what separates specs that work from ones that don't.


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: Specs Are the Next Programming Languages](./post-16) | [Next: When Coding Becomes Instant, Specs Are All That Matters](./post-18)

[Back to series overview](./index)


The Spec-Driven Shift | Week 4: The Future | Post 17 of 20
