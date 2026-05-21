---
prev:
  text: Three Sources of Insight
  link: /guides/three-sources-of-insight
next:
  text: Model-Based Specifications
  link: /guides/model-based-specs
image: /images/pages/guides/evolving-specs.png
---

# Evolving Specs Over Time

![Evolving Specs Over Time](/images/pages/guides/evolving-specs.png)

Specs are living artifacts. They change, they split, and they die. A spec that never changes is either perfect or abandoned. Bet on abandoned.

## When Specs Change

Requirements change because the market shifted, users want something different, or a competitor changed the game. When the problem changes, the solution changes, and the specs change with it.

Late discovery surfaces things nobody thought of. An edge case. An incorrect assumption. A flow that made sense on paper but breaks in practice. This happens during implementation, during testing, and especially when real users encounter the product.

Realized value diverges from estimated value. Users behave differently than expected. The spec was correct (the system does what it says) but it doesn't solve the problem it was meant to solve. The design decision itself needs rethinking.

In all cases: update the spec, update the test, update the code. In that order. Spec first. Then the test that verifies the spec. Then the code that passes the test. This order ensures the record of intent stays current.

## When Specs Die

Remove the feature, remove the spec. This sounds obvious. Teams rarely do it. Dead specs accumulate. They clutter the codebase. They confuse AI tools that consume spec files for context. They mislead new team members.

Executable specs have a built-in death mechanism: if you remove the feature code, the test either fails (because it references deleted code) or becomes orphaned (nothing calls it). Both are signals to clean up. Non-executable specs don't have this mechanism. They just quietly rot.

## The Production System Is a Product

Your CI/CD pipeline, test harnesses, guardrails, deployment process, and team workflows were all designed, all can be specified, and all benefit from the same lifecycle of build, learn, improve. Good teams improve their product every sprint; better teams also improve their production system, with better test harnesses, faster CI pipelines, tighter guardrails, and smoother handoffs.

> 🔄 **Feedback opportunity:** When did you last invest time in your production system rather than your product? If you can't remember, the production system is stagnating.
