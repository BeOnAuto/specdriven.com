---
title: "AI Needs History. Your Database Deletes It."
image: /images/perspectives/ai-needs-history-your-database-deletes-it.png
---

# AI Needs History. Your Database Deletes It.

![AI Needs History. Your Database Deletes It.](/images/perspectives/ai-needs-history-your-database-deletes-it.png)

Traditional databases store current state. Customer lives at 123 Main St. They move. Now it's 456 Oak Ave. The old address? Gone. Overwritten. History erased.

For most of the history of computing, that was fine. You need the current address to ship a package. You don't need the old one.

But "fine for shipping packages" and "fine for working with AI" are very different bars.

Event Sourcing flipped the model. Instead of storing the current state of things, you store facts. Immutable records of things that happened. "Customer moved to 456 Oak Ave on March 3rd." The old address is still there. Every change is a timestamped event.

Why does this matter now?

First, AI needs context to reason about your domain. Not just what IS, but what HAPPENED. Current state says a customer is flagged as high priority. Event history tells you why. Because they moved three times in six months? Upgraded twice? Contacted support twelve times? An AI working from events can reason about your domain. An AI working from current state can only observe it.

Second, when AI modifies your system and something breaks (and it will), you need to trace what happened. Event-sourced systems give you a complete audit trail. Every decision, every change, recorded. Try doing that with a database that overwrites its history.

Third, Event Sourcing forces you to name things in domain language. "CustomerUpgradedPlan" is a domain event. "UPDATE customers SET plan = 'premium'" is a database operation. When your data speaks in domain language, your specs become more natural and your AI gets richer semantic context.

And there's a structural reason too. Events are naturally decoupled. Each one stands on its own. You can build vertical slices of functionality that are cohesive internally but loosely coupled to other slices. Point AI at a specific slice with clear boundaries and say "work within this." The events define the boundaries. Way harder to do with traditional CRUD where everything is interconnected and changing one table can break six services.

Alberto Brandolini took time-based thinking even further with Event Storming. Model your entire system by placing events on a timeline, collaboratively. Get everyone in a room with sticky notes, walk through what happens from beginning to end. Surface assumptions. Find the unknowns.

We think in stories. Sequences. Cause and effect. Given. When. Then. Before. Action. After. Same pattern, everywhere.

AI needs this history. If your database deletes it, you're handicapping every AI tool you use.


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: Dan North Wasn't Talking About AI. But He Could Have Been.](./dan-north-wasnt-talking-about-ai-but-he-could-have-been) | [Next: 5 Spec Smells That Turn Every AI Prompt Into a Guessing Game](./5-spec-smells-that-turn-every-ai-prompt-into-a-guessing-game)

[Back to series overview](./index)


The Spec-Driven Shift | Week 2: The Lineage | Post 10 of 20
