---
title: "Fool Me Once, I Write a Spec. Fool Me Twice? There Is No Twice."
image: /images/perspectives/fool-me-once-i-write-a-spec-fool-me-twice-there-is-no-twice.png
---

# Fool Me Once, I Write a Spec. Fool Me Twice? There Is No Twice.

![Fool Me Once, I Write a Spec. Fool Me Twice? There Is No Twice.](/images/perspectives/fool-me-once-i-write-a-spec-fool-me-twice-there-is-no-twice.png)

People keep asking what my actual daily workflow looks like. Not the theory, the practice. Here it is.

**Think first.** Before I open anything, I work through the design: current state, what needs to change, constraints, trade-offs, before and after. Most of that context still lives in my head today, which is a limitation I'm actively building tools to solve, but the principle holds: design thinking before implementation.

**Collaborate with AI, alone.** Long conversations about architecture, trade-offs, and blind spots, not about code. "What am I not considering? What are the failure modes? Show me before and after as a sequence diagram." The AI's broad knowledge surfaces patterns I hadn't thought of and edge cases I forgot, and I go back and forth with it until I've got something RFC-shaped.

**Then collaborate with my colleagues.** I take that work and put it in front of humans, not to explain it but to stress-test it. My colleagues catch things the AI never will. They know our product, our customers, our history, and what the team next door is building that my work is about to touch. They push back on assumptions the AI happily accepted, and they bring judgment no amount of training data can substitute for. AI is a good pair, but my human counterparts are still far better. Solo with AI to draft, with humans to sharpen.

**Specify everything.** Before any implementation code gets written, every design decision becomes a test. My tests are my specs, the executable record of my intent. I use the AI to help me draft them so I can review, argue, and change them until they say exactly what I mean. This is where the real work happens, and everything downstream depends on it.

**Let AI implement.** Now it does what it's good at: writing code to make tests pass, fast and tireless.

I keep batches small enough to actually review. I'm personally okay with a whole feature, or several scenarios, built at once and reviewed together with batched feedback. Works for me. Smaller batches are fine too, mileage varies. The rule is simple: never bigger than you can meaningfully review.

**Guardrails verify.** This is where it gets interesting. I've got multiple layers of automated guardrails, and every one exists because I watched the AI make a specific mistake.

I pin 100% test coverage as a rule, not because coverage guarantees correctness, but because uncovered code is a decision I didn't specify, and I'd rather force every decision to be intentional than discover later that the AI made one for me.

I use commit validators, where a separate LLM reads every commit against my quality rules and approves or rejects it before anything lands. Having an impartial judge, with no attachment to the work and no reason to rationalise a shortcut, catches things my coding agent would have waved through.

I use anti-cheating checks, because AI will sometimes write meaningless tests just to hit coverage numbers. A separate validator reads each test and decides whether it's actually asserting anything, and the ones that fail that bar get sent back to be written properly.

I use architectural constraints encoded as enforceable rules. If my architecture says no business logic in the client, the validator reads the diff, spots the violation, and rejects the commit. The architecture stops being aspirational documentation and becomes something the code actually has to obey.

Every guardrail started as a mistake. AI wrote tests that didn't test anything. Guardrail. Created a data access pattern that violated the architecture. Guardrail. Modified a shared module without considering downstream effects. Guardrail.

That's guardrail engineering: observe the failure, build the constraint, make sure it never happens again. The AI gets more productive inside tighter guardrails, not less, because it knows exactly what's expected.

Compare that to the alternative. Prompt, hope, prompt, hope, manually review thousands of lines, miss half the issues, watch it turn into goulash.

Fool me once, I write a spec. Fool me twice? There is no twice.

Which workflow would you trust with your production system? The one that hopes AI got it right, or the one that proves it did.


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: When Coding Becomes Instant, Specs Are All That Matters](./when-coding-becomes-instant-specs-are-all-that-matters)

[Back to series overview](./index)


The Spec-Driven Shift | Week 4: The Future | Post 19 of 20
