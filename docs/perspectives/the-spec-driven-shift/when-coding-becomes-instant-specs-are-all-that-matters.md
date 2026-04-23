---
title: "When Coding Becomes Instant, Specs Are All That Matters"
image: /images/perspectives/when-coding-becomes-instant-specs-are-all-that-matters.png
---

# When Coding Becomes Instant, Specs Are All That Matters

![When Coding Becomes Instant, Specs Are All That Matters](/images/perspectives/when-coding-becomes-instant-specs-are-all-that-matters.png)

"Spec-driven development is just waterfall with extra steps." And in the same breath: "Big upfront design doesn't work." I hear these two critiques constantly, often from teams now drowning in AI-generated code they no longer recognize.

But when coding becomes instant, specs are all that matters. Both critiques miss the same thing.

## The Feedback Problem, Not the Spec Problem

Waterfall's problem was never specifications, it was feedback speed. You'd spec for weeks, build for months, and learn you were wrong long after the cost of being wrong had become catastrophic. Big upfront design failed for the same reason: the loop between intention and reality was too long to correct anything in time.

Spec-driven development with AI inverts that math. You write a spec, the AI implements it, the tests verify it, you see the result, and you adjust. Feedback takes minutes instead of months, and the cycle that made waterfall brittle is gone.

TDD, BDD, and acceptance criteria were all spec-first practices, and nobody called those waterfall because the feedback loop was tight. The same logic holds here.

## The Thought Experiment

Imagine coding was truly instant. You describe what you want and the implementation materializes in zero time. What would be left to do?

The spec, and only the spec. 100% of your effort on design, zero on implementation.

Would you call that waterfall, or pure design work?

AI is pushing us in that direction. Implementation cost is dropping toward zero, and what remains is the thinking. The record of that thinking is the specification.

## Batch Size Still Matters

Here's the nuance that's easy to miss. Even when coding becomes instant, batch size is still a constraint. It has just moved.

Batch size used to be bounded by how fast humans could implement, which is why XP, TDD, and agile practices pushed teams to slice work into the smallest units humans could reasonably ship. The constraint wasn't about feedback, it was about physically getting code out the door.

Now the bound is different. It's bounded by how much spec you can meaningfully verify, review, and course-correct on in a single cycle. If you pile a hundred behaviors into one spec, hand it to AI, and look at the output, you have no way to tell what went right and what went wrong. The result passes or fails as a blob, and debugging means re-reading the whole spec to figure out what you meant and what the AI decided on your behalf.

The small-batch discipline is still the point. What needs to catch up is the set of practices around it. A batch today is whatever you can write tightly, verify quickly, and correct confidently. For some teams that's a single behavior, for others it's a feature slice. The number depends on your review loop, not your typing speed.

## The Real Question

The question isn't "should I write specs." It's whether you can afford not to. The alternative is trusting an amnesiac AI to hold every design decision you've ever made, every constraint, every edge case, all of it maintained by something with no memory between sessions.

When coding becomes instant, the only thing left to differentiate your software is the quality of your specifications and the discipline of how you batch them. That moment is closer than most people think.

— _Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]_

---

[Previous: Most Specs Fail Because They Start Too Low. Start Here Instead.](./most-specs-fail-because-they-start-too-low-start-here-instead)

[Next: Fool Me Once, I Write a Spec. Fool Me Twice? There Is No Twice.](./fool-me-once-i-write-a-spec-fool-me-twice-there-is-no-twice)

[Back to series overview](./index)

The Spec-Driven Shift | Week 4: The Future | Post 18 of 20
