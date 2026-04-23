---
title: "Fool Me Once, I Write a Spec. Fool Me Twice? There Is No Twice."
image: /images/perspectives/fool-me-once-i-write-a-spec-fool-me-twice-there-is-no-twice.png
---

# Fool Me Once, I Write a Spec. Fool Me Twice? There Is No Twice.

![Fool Me Once, I Write a Spec. Fool Me Twice? There Is No Twice.](/images/perspectives/fool-me-once-i-write-a-spec-fool-me-twice-there-is-no-twice.png)

People ask what my actual daily workflow looks like. Not the theory. The practice.

Here it is.

**Think first.** Before I open anything, I think about the design. Current state of the system. What needs to change. Constraints. Trade-offs. Before and after. Right now this context mostly lives in my head. That's a limitation I'm actively building tools to solve. But the principle holds: design thinking before implementation.

**Collaborate with AI, alone.** Long conversations about trade-offs, architecture, and blind spots. Not about code. "What am I not considering? What are the failure modes? Show me before and after as a sequence diagram." The AI's broad knowledge is genuinely useful here. It surfaces patterns I hadn't thought of, trade-offs I missed, edge cases I forgot. I go back and forth until I've got something RFC-shaped, a solid document that represents my best thinking on the problem.

**Then collaborate with my colleagues.** I take the work I did with the AI and put it in front of humans, not to explain it but to stress-test it. My colleagues catch things the AI never will. They know our product, our customers, our history, and what the team next door is building that my work is about to touch. They push back on assumptions the AI happily accepted, and they bring judgment that no amount of training data can substitute for. AI is a good pair, but my human counterparts are still far better, and the pairing is the point: solo with AI to draft, with humans to sharpen.

**Specify everything.** Before any implementation code gets written, every design decision becomes a test. My tests are my specs, the executable record of my intent. This is where the real work happens, translating design into precise, testable expectations. I use the AI to help me draft the specs so I can review them, argue with them, and change them until they say exactly what I mean. It takes effort, but everything downstream depends on it.

**Let AI implement.** Now it does what it's good at. Writing code to make tests pass. Fast. Tireless.

I do keep the batches small enough for me to actually review. I'm personally okay with a whole feature, or several scenarios, being built at once and reviewed together with a batch of feedback at the end. Works for me. Other people's mileage may vary, and smaller batches are fine too. The rule is: never bigger than you can meaningfully review.

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

[Previous: When Coding Becomes Instant, Specs Are All That Matters](./when-coding-becomes-instant-specs-are-all-that-matters)

[Back to series overview](./index)


The Spec-Driven Shift | Week 4: The Future | Post 19 of 20
