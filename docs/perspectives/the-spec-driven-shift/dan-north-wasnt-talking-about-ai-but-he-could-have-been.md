---
title: "Dan North Wasn't Talking About AI. But He Could Have Been."
image: /images/perspectives/dan-north-wasnt-talking-about-ai-but-he-could-have-been.png
---

# Dan North Wasn't Talking About AI. But He Could Have Been.

![Dan North Wasn't Talking About AI. But He Could Have Been.](/images/perspectives/dan-north-wasnt-talking-about-ai-but-he-could-have-been.png)

BDD's origin story is less dramatic than you'd think and more useful than most people realize.

Somebody built a tool called [AgileDox](https://agiledox.sourceforge.net) that took Java test method names like `testCustomerCanLogIntoTheirAccount` and separated the camelCase into readable English. Dan North looked at those readable test names and had the insight: what if we stop thinking of these as tests? What if they're behavioral specifications?

Not "test that the discount applies." But "a customer with 24+ months tenure receives a 10% discount at checkout."

That reframing changed who could participate. A product owner can read a behavioral spec. QA can verify against it. A developer can implement from it. Everyone working from the same understanding.

And Given-When-Then introduced something deeper. Time-based thinking. Given some precondition, when an action occurs, then some outcome results. Which is Hoare logic from the 1960s, precondition-action-postcondition, made readable by humans. The same mathematical foundation that underpins formal verification, expressed in plain English.

But here's what resonates most right now.

Dan once said something I keep coming back to. The idea that it doesn't matter whether it's computer code or pixie dust that makes a system work, as long as it meets the specifications. The implementation is secondary. The specification is primary.

He wasn't talking about AI. This was years before LLMs wrote a single line of code.

But he could have been. Because AI IS the pixie dust. We don't fully understand how it produces output. The internals are opaque. But if you have clear, executable behavioral specifications, then the mechanism doesn't matter. Code, AI, pixie dust. Whatever meets the spec.

BDD's real contribution wasn't better tests. It was shared understanding: specs the whole team can read. Time-based modeling: Given-When-Then, sequences, narrative flow. And outcome-driven thinking: not how the code works, but what the system does.

All three of those are exactly what AI-assisted development needs. AI can't do corridor conversations. It can't do late discovery. It needs shared understanding pre-baked. It needs the spec.

Dan wasn't talking about AI. But he was describing the mindset that makes AI development actually work.


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: TDD Was Never About Testing](./tdd-was-never-about-testing)

[Back to series overview](./index)


The Spec-Driven Shift | Week 2: The Lineage | Post 9 of 20
