---
title: "A PRD Is Not a Spec. Here's Why That Matters."
---

# A PRD Is Not a Spec. Here's Why That Matters.

This confusion costs teams months. And most don't even realize they're confused.

There are three levels of progressive specificity:

**Level 1. Requirements.** Problem space. "We're losing customers because they can't easily return products." That's the problem. No design decisions have been made. Nobody's solved anything yet.

**Level 2. Design.** The creative bit. "We'll add a self-service returns portal accessible from order history, with automated label generation and refund tracking." Now someone's made decisions. Self-service instead of phone-based. Embedded in order history instead of standalone. Automated labels. These are design choices.

**Level 3. Specifications.** The communication of those choices. "When a customer selects 'Return Item' on an order less than 30 days old, display eligible items with return reason dropdown (required, 6 options). On submission, generate a prepaid label via the carrier API within 5 seconds. Create a return record with status 'initiated.' Send confirmation email with tracking within 60 seconds." Every ambiguity resolved. Every decision explicit.

A PRD lives at Level 1. Maybe Level 2 if you're lucky. It says WHAT needs to happen. It rarely says HOW it's been designed to happen with enough precision to build from.

When teams hand a PRD to an AI tool and say "build this," they're asking the AI to make all the design decisions. Hundreds of them. And the AI will happily do that. It'll decide the data model, the error handling, the component structure, the edge case behavior. Fast. Confidently. And you won't know what any of those decisions were until something behaves in a way you didn't expect.

It's the difference between telling a contractor "I need a kitchen" and handing them actual drawings with plumbing specs, electrical layouts, and material choices. Both produce a kitchen. One produces the kitchen you wanted.

The gap between PRD and spec is where design lives. That gap is where you think about trade-offs, consider alternatives, and make actual choices. Skipping it doesn't save time. It just hands your most important decisions to something that doesn't know your context.

Next time someone hands you a PRD and says "build this," ask yourself: who made the design decisions? If the answer is "nobody yet," you're not ready to build.


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: 5 Spec Smells That Turn Every AI Prompt Into a Guessing Game](./post-11) | [Next: Jira Is Where Specs Go to Die. Your AI Just Showed Up With a Shovel.](./post-13)

[Back to series overview](./index)


The Spec-Driven Shift | Week 3: The Practice | Post 12 of 20
