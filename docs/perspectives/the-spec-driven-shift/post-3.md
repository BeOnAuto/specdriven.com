---
title: "Over Half Your Bugs Aren't Code Bugs"
---

# Over Half Your Bugs Aren't Code Bugs

Every bug you've ever seen falls into one of three buckets.

Missing specification. Nobody thought of it. The design didn't account for that scenario at all.

Incorrect specification. Someone thought of it, but the design was wrong.

Incorrect implementation. The spec was right, the code didn't match. Classic coding error.

That's it. Every defect, every system, every time.

And here's the thing that most developers find hard to believe: over half the bugs in most systems are not coding errors. Studies have consistently shown that spec bugs (missing plus incorrect) account for the majority of defects. Some put it as high as 70-85%, though the exact number varies. The point is, the code was usually written correctly. It just did the wrong thing, or it didn't do something nobody thought of.

Let me make this concrete.

Missing spec. Your team ships a product listing app. Launch day, someone goes "where's the share button?" Nobody designed for sharing. It wasn't a coding error. Nobody even thought about it. That's the most common type of bug in software and it's not a bug in the code at all.

Incorrect spec. The team gets told "send a notification email every time a user signs in." They build it perfectly. Then users start screaming about 47 emails a day. The spec said "every time." It meant "once daily, max." The implementation was flawless. The spec was wrong.

Incorrect implementation. Spec says 10% discount. Code applies $10 off instead. Percentage vs absolute. Classic coding bug. And it's the minority case.

Why does this matter now?

AI is great at correct implementation. Give it a clear instruction and it'll usually nail it. But it can't invent specs you forgot to write. And it'll faithfully implement an incorrect spec faster than any human ever could.

Before AI, a missing spec meant days or weeks of rework when someone noticed the gap. With AI, the gap gets filled silently. The AI makes up its own answer, buries it in generated code nobody reviews, and moves on. You don't even know the spec was missing.

Most teams invest heavily in catching code bugs. Linting, code review, unit tests. Almost nobody invests in catching spec bugs. And spec bugs are the majority.

If you want fewer bugs, look upstream. Look at your specs.

Next time a bug lands in production, ask yourself: was the code wrong, or was the spec wrong? You might be surprised how often it's the latter.


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: Stop Calling It a Spec If It's Not Specific](./post-2) | [Next: Your AI Doesn't Know What It Doesn't Know. You Do.](./post-4)

[Back to series overview](./index)


The Spec-Driven Shift | Week 1: The Wake-Up Call | Post 3 of 20
