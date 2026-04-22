---
title: "Most Specs Fail Because They Start Too Low. Start Here Instead."
image: /images/perspectives/most-specs-fail-because-they-start-too-low-start-here-instead.png
---

# Most Specs Fail Because They Start Too Low. Start Here Instead.

![Most Specs Fail Because They Start Too Low. Start Here Instead.](/images/perspectives/most-specs-fail-because-they-start-too-low-start-here-instead.png)

The most common spec mistake isn't writing bad specs. It's starting at the wrong level.

Teams jump straight to component specs. "The email validator should accept RFC 5322." "The API returns 404 for missing resources." These are fine specifications on their own, specific and testable, but they're fragments without a whole.

A good spec system has two layers.

## The Information Model

This captures the holistic whole. Before you spec any component, you need to understand the overall information exchange your system handles: who the actors are, what behaviors exist, what interactions happen between them, what outcomes result.

For an e-commerce system, the actors are online customers, dealers, and the warehouse system. The behaviors are browsing, purchasing, and shipping. Interactions include customers submitting orders and the warehouse fulfilling them, and outcomes include orders being confirmed, inventory updated, and notifications sent.

Express this in domain language, so "retail customer purchases product" rather than "POST /api/orders with JSON payload." The language matters because it shapes how everyone thinks about the system, humans and AI alike. This layer is time-based and flows through the system like a story.

## Component Specs

Inside each domain behavior, technical components get their own detailed specs: email validation with all its permutations, payment integration with its timeouts and retries, inventory with its concurrency constraints. This is more technical territory, full of edge cases and error states.

Here's the thing that matters: domain specs thread the components together. You don't write "domain code," you write components, individual modules with clear boundaries, and then stitch them together into domain logic that delivers value. Domain specs are the thread and components are the beads, and without the thread you just have a pile of beads.

There's a meme that nails this. Someone doing a push-up with arms in one place, legs somewhere else, and head somewhere else, captioned "all unit tests pass." Of course the system doesn't work, because nobody specified how the pieces fit together.

Start with the whole, and slice vertically by value rather than by technical layer, so "sell used cars" instead of "build the database layer." Then spec each slice and test each spec. That's what separates specs that work from ones that don't.


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: Specs Are the Next Programming Languages](./specs-are-the-next-programming-languages)

[Next: When Coding Becomes Instant, Specs Are All That Matters](./when-coding-becomes-instant-specs-are-all-that-matters)

[Back to series overview](./index)


The Spec-Driven Shift | Week 4: The Future | Post 17 of 20
