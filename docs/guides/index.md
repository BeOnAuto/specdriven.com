---
prev:
  text: Resources
  link: /resources
next:
  text: "Start Here: Specify a Slice"
  link: /guides/start-here
image: /images/pages/guides/index.png
---

# The Spec-Driven Lifecycle

![The Spec-Driven Lifecycle](/images/pages/guides/index.png)

Everything on this site connects to the same lifecycle. If you understand it, every guide, every technique, and every practice snaps into place.

## The Flywheel

Software delivery is a cycle with four phases. Each phase takes an input, does work, and produces an output that feeds the next phase.

**Discover** takes insights (or, at the beginning, a hunch) and produces requirements. You're figuring out the problem. The activities here are ideation, research, and conceptualization.

**Design** takes requirements and produces specifications. You're solving the problem and communicating that solution. The activities here are architecture, interface design, and domain modeling.

**Deliver** takes specifications and produces a product AND a production system. You're building the thing and the factory that builds it. The activities here are build, verify, and deploy.

**Distill** takes the product and production system and produces insights. You're finding out what actually happened. The activities here are learning from the product (analytics, user feedback), from the system (logs, observability), and from the process (retrospectives).

Those insights feed back into Discover. And the cycle continues.

## It's Not Linear

This looks like a pipeline when drawn as a list. It's not. The general movement is forward (you want to be progressing, not stuck), but feedback constantly pings you back to earlier phases.

You're in Deliver, building a feature, and you find the spec missed an edge case. That's feedback from Deliver jumping back to Design. You fix the spec, update the test, and continue.

You're in Distill, looking at analytics, and you realize users aren't using the feature the way you expected. That's feedback jumping all the way back to Discover, because the requirement itself might need rethinking.

If your general movement is backward more than forward, you're stuck. Something upstream is wrong. The requirements are too vague. The design is too fragile. The specs are too incomplete. Find the source and fix it.

## It's Fractal

Here's the part most people miss. Each phase contains the same cycle at a smaller scale.

When you're in the Design phase doing domain modeling, you're doing mini-discovery (what are the entities in this domain?), mini-design (how do they interact?), mini-specification (express those interactions as specs), and mini-learning (walk through the model, does it hold up?). Same pattern. Smaller scale.

When you're in Deliver doing TDD, you're doing micro-discovery (what should this function do?), micro-design (how will I implement it?), micro-specification (write a failing test), and micro-distillation (does the code pass? what did I learn?). Same pattern. Even smaller scale.

This fractal nature means you're never "done" with one phase before starting the next. You're continuously zooming in and out. High-level strategic decisions and low-level implementation decisions are happening concurrently, each at their own zoom level of the same cycle.

For the theory behind this, see [The Fractal Nature of Design](/first-principles/fractal-design).

## Feedback Opportunities

Throughout every guide on this site, you'll encounter callouts marked as **feedback opportunities**. These are moments where applying a quality function would provoke useful feedback.

Each one is specific to the phase you're in. They answer: what feedback should you be seeking here? How do you provoke it? What does it cost to catch this now versus later?

These aren't rules. They're opportunities. Take them and your quality goes up. Skip them and you're relying on late discovery to catch what you missed.

For the theory behind feedback opportunities, see [The Feedback Principle](/first-principles/feedback-principle).

## Where to Start

If you're new to spec-driven development, start with the tutorial: [Specify a Slice from Scratch](/guides/start-here). It walks one concrete example through the full lifecycle.

If you know the basics and want depth on a specific phase, jump directly to [Discover](/guides/discovery), [Design](/guides/requirements-to-specs), [Deliver](/guides/executable-specs), or [Distill](/guides/three-sources-of-insight).

If you're working with an existing codebase, see [Brownfield](/guides/tackling-spec-debt).

If you need to justify the investment to leadership, see [The ROI of Spec-Driven Development](/guides/roi).
