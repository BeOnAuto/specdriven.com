---
title: "Your AI Doesn't Know What It Doesn't Know. You Do."
image: /images/perspectives/your-ai-doesnt-know-what-it-doesnt-know-you-do.png
---

# Your AI Doesn't Know What It Doesn't Know. You Do.

![Your AI Doesn't Know What It Doesn't Know. You Do.](/images/perspectives/your-ai-doesnt-know-what-it-doesnt-know-you-do.png)

There's this meme I keep coming back to.

One panel shows a person with this massive thought bubble. Inside it, a tangled web of experience, patterns, gut feelings, past failures, architectural instincts, tribal knowledge. Out of their mouth comes one carefully chosen sentence.

Other panel. Tiny thought bubble. Enormous output.

That's AI.

A senior dev's actual superpower isn't what they produce. It's what they choose not to produce. After 15 years, I've seen systems collapse from shortcuts. I know what happens when you pick the wrong pattern in week one. I carry all of that with me. And when I make a decision, I'm filtering through thousands of these accumulated lessons. Most of my thinking is about what NOT to do.

An LLM doesn't have any of that for your system. It's got a vast statistical model of code in general, sure. But for your specific project, for your specific decisions, for the constraints you chose and why you chose them? It's got almost nothing. And it doesn't know it's got nothing. It'll just produce.

It doesn't hold anything dear. It doesn't feel uneasy about the coupling it just introduced. It won't notice that it created a new data access pattern that contradicts your architecture. It won't stop and think "wait, maybe I should check before doing this." It just does it.

And every prompt is a clean slate. Whatever context you built up in the last session is gone. The 47 architectural decisions you made last week? Gone. The shared module it should have reused instead of creating a new one? It doesn't know it exists.

You experience a continuous system with history. The AI experiences a series of unrelated tasks.

That gap widens every single day you work together.

So what's the human's job in this world? It's not writing code. It's maintaining the thought bubble. Keeping the design, the intent, the constraints, and all those accumulated decisions alive somewhere the AI can actually access them.

That somewhere is your specifications.

Without them, you're handing an infinitely productive amnesiac the keys to a complex system and hoping for the best.

Consider how much of your system's design lives only in your head right now. If you stopped working on it tomorrow, how much would survive?


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: Over Half Your Bugs Aren't Code Bugs](./over-half-your-bugs-arent-code-bugs) | [Next: Code Was Always a Hindrance. I Just Didn't Know It Yet.](./code-was-always-a-hindrance-i-just-didnt-know-it-yet)

[Back to series overview](./index)


The Spec-Driven Shift | Week 1: The Wake-Up Call | Post 4 of 20
