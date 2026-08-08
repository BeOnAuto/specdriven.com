---
prev:
  text: The Feedback Principle
  link: /first-principles/feedback-principle
next:
  text: The Fractal Nature of Design
  link: /first-principles/fractal-design
image: /images/pages/first-principles/spec-lifecycle.png
---

# The Lifecycle of a Specification

![The Lifecycle of a Specification](/images/pages/first-principles/spec-lifecycle.png)

## Birth

A specification is born when intended design or behavior needs to become [explicit and inspectable](/what). Before it exists, there may be a requirement, an emerging solution, examples, constraints, and unresolved questions. The specification is the expression precise enough for its audience to review, implement, or check.

Specs don't come from nowhere. They come from design. And design comes from understanding the problem. Skip the problem understanding and your design will be wrong. Skip the design and your spec will be a requirement masquerading as a specification. Both are expensive mistakes.

## Refinement

A spec is rarely right the first time. The act of writing it surfaces questions. The act of sharing it surfaces more. The act of implementing it surfaces things nobody thought of.

This is normal and healthy. Quality functions applied to specs (socializing with colleagues, walking through with QA, simulating with an LLM, doing a dry run with stakeholders) refine the spec before implementation begins. Each quality function provokes feedback that makes the spec more precise, more complete, more correct.

The investment in refinement pays compound returns because every downstream activity (implementation, testing, deployment, maintenance) uses the spec as its guide. A well-refined spec makes everything downstream faster and more reliable. A poorly refined spec poisons everything it touches.

## Change

Specs change for several reasons.

Requirements change. The market shifted. Users want something different. A competitor launched something that changes the landscape. When the problem changes, the solution changes, and the specs change with it.

Late discovery. Something you didn't think of surfaces during implementation, testing, or usage. A missing edge case. An incorrect assumption about how an external system behaves. A flow that made sense on paper but falls apart in practice.

Realized value differs from estimated value. You built the feature, users encountered it, and their behavior tells you the spec was wrong. Not the code. The spec. The design decision itself needs to change.

In all these cases, the spec updates. Tests update to match. The system updates to match the new specs. This cycle is continuous. A spec that never changes is either perfect (unlikely) or abandoned (common).

## Splitting

Specs start broad and get more specific over time. This is the asteroids pattern: you have a large block, you split it into smaller blocks, and you keep splitting until each piece is atomic.

At the highest level, you might have a product outcome: “retail customers can purchase products online.” That can split into capabilities, goals, outcomes, behaviors, rules, and interface or contract decisions. Each split reveals a finer-grained question that may need its own specification.

How atomic should you go? It depends on what's at stake. Business-critical logic deserves the highest level of specificity. You want to specify every edge case, every constraint, every permutation. A UI shimmer animation? Probably not worth specifying to the nth degree. Use a design library and move on.

The key is that splitting isn't just a breakdown exercise. Each split involves a mini design decision and produces a mini specification. The [fractal nature of design](/first-principles/fractal-design) means you're doing the same activity at every zoom level: identifying a problem at this level, choosing an approach, and expressing that choice as a spec.

## Death

Specs die when the feature they describe no longer exists. If you remove a feature, you should remove its specs. Dead specs are noise. They clutter your spec inventory, confuse future readers, and can mislead AI tools that consume your spec files for context.

Most teams are bad at this. They add specs but rarely remove them. Over time, the spec inventory drifts from reality. Some specs describe features that were redesigned. Some describe features that were removed. Some describe features that were never built. This is spec drift, and it's a form of spec debt.

An executable specification may expose deliberate feature removal because its checks begin failing or are removed in the same change. That signal is useful, but not foolproof: weak tests and indirect dependencies can hide drift. Non-executable specifications need an explicit retirement process.

## Spec Debt

Spec debt is the accumulated cost of missing, outdated, or incorrect specifications in your system. It's the specification equivalent of tech debt.

If you've never written a single spec for your system, you have a maxed-out spec debt card. Every feature is undocumented. Every design decision is trapped in someone's head (or in code that doesn't explain why it works the way it does). Every AI interaction is a guessing game because there's no record of intent.

Paying down spec debt is a prioritization exercise. You don't try to specify everything at once. You identify your most valuable domains, your most critical features, and your most fragile areas. You start there. One slice at a time. Most critical first.

The divide-and-conquer approach works well: identify your domains, list the key behaviors in each, prioritize by business impact, and start writing specs for the highest-impact behaviors first. Over time, you build up a spec inventory that gives you (and your AI tools) increasing confidence and control.

## The Production System

The specifications above are for your product. Your production system (CI/CD pipeline, test harnesses, deployment process, team workflows, guardrails) is also a designed system, and that design can be specified too. Investing in specifying the production system, not just the product, is one of the highest-leverage things a team can do.
