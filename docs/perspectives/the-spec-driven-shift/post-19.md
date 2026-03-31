---
title: "Fool Me Once, I Write a Spec. Fool Me Twice? There Is No Twice."
---

# Fool Me Once, I Write a Spec. Fool Me Twice? There Is No Twice.

People ask what my actual daily workflow looks like. Not the theory. The practice.

Here it is.

**Think first.** Before I open anything, I think about the design. Current state of the system. What needs to change. Constraints. Trade-offs. Before and after. Right now this context mostly lives in my head. That's a limitation I'm actively building tools to solve. But the principle holds: design thinking before implementation.

**Collaborate on design.** I have long conversations with AI. Not about code. About trade-offs. Architecture. Blind spots. "What am I not considering? What are the failure modes? Show me before and after as a sequence diagram." The AI's broad knowledge is really useful for this. It surfaces patterns I haven't thought of, trade-offs I missed, edge cases I forgot. I go back and forth until I've got a solid RFC-level document.

**Specify everything.** Before implementation code gets written, every design decision becomes a test. My tests are my specs. They're the executable record of my intent. This is where the real work happens. Translating design into precise, testable expectations. It takes effort. But everything downstream depends on it.

**Let AI implement.** Now it does what it's good at. Writing code to make tests pass. Fast. Tireless.

**Guardrails verify.** This is where it gets interesting. I've got multiple layers of automated guardrails, and every single one exists because I watched the AI make a specific mistake.

100% test coverage pinned as a rule. Not because coverage guarantees correctness, but because uncovered code is a decision I didn't specify. Forces everything to be intentional.

Commit validators powered by separate LLMs that check every commit against my quality rules. An impartial judge.

Anti-cheating checks. Because AI will sometimes write meaningless tests to hit coverage numbers. I have separate validators that catch that.

Architectural constraints encoded as enforceable rules. If the architecture says no business logic in the client, the validator enforces it.

Every guardrail started as a mistake. The AI wrote tests that didn't test anything. Guardrail. Created a data access pattern that violated the architecture. Guardrail. Modified a shared module without considering downstream effects. Guardrail.

That's guardrail engineering. Observe a failure mode, build a constraint, make sure it never happens again. The AI gets more productive inside these guardrails, not less. Because it knows exactly what's expected.

Compare that to the alternative. Prompt, hope, prompt, hope, manually review thousands of lines, miss half the issues, watch it become goulash.

Fool me once, I write a spec. Fool me twice? There is no twice.

Think about which workflow you'd trust with your production system. The one that hopes AI got it right, or the one that proves it did.


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: When Coding Becomes Instant, Specs Are All That Matters](./post-18) | [Next: The Question Isn't Whether AI Can Code. It's Whether You Can Specify.](./post-20)

[Back to series overview](./index)


The Spec-Driven Shift | Week 4: The Future | Post 19 of 20
