---
title: "Specs That Ignore Time Ignore Half the Story"
image: /images/perspectives/ai-needs-history-your-database-deletes-it.png
---

# Specs That Ignore Time Ignore Half the Story

![Specs That Ignore Time Ignore Half the Story](/images/perspectives/ai-needs-history-your-database-deletes-it.png)

Yesterday I said BDD introduced time-based thinking into specifications. Given some precondition, when an action occurs, then some outcome results. That pattern didn't stay inside test files.

Alberto Brandolini looked at it and asked a bigger question: what if you modeled your entire system this way? Not just individual behaviors. The whole thing. Every decision, every consequence, every reaction, laid out on a timeline.

That's Event Storming. Get everyone in a room. Walk through what happens in your system from beginning to end. Not what the database stores. What actually happens. A customer submits an order. The system validates payment. Inventory gets reserved. A confirmation gets sent. Each one is a fact. Something that happened at a point in time. And each one is caused by what came before it.

This is specification through time.

Most specs describe current state. "The system shall display the user's address." Fine. But that spec tells you nothing about how the address got there, what happens when it changes, or what other parts of the system need to know when it does. It's a snapshot. A frozen moment with no story.

Time-based specs tell you the whole story. Given a customer was created. Given they moved to a new address. When the system renders their profile, then the new address appears. The spec isn't just what you see. It's what happened to get there. And every piece of data in the system traces back through a chain of events to the decisions that caused them.

That traceability is what Brandolini was really after. Not a database technique. A thinking technique. When you model a system as a sequence of events, you surface assumptions that snapshot specs hide. You find the gaps. Where did this data come from? What triggered this reaction? Who needs to know when this changes? If you can't trace it back, something is missing from your spec.

This is the pattern that keeps showing up. Hoare logic in the 1960s: precondition, action, postcondition. TDD in the 2000s: arrange, act, assert. BDD: Given, When, Then. Event Storming: command, event, state. Different vocabulary, same insight. Systems are sequences. Specs that ignore time ignore half the story.

And here's why this matters now more than ever.

AI doesn't understand your system by looking at a database schema. A schema tells it what IS, not what HAPPENED. But when your spec captures the full sequence of events, AI can reason about causality. It can trace a bug back through the chain. It can understand why a customer is flagged as high priority, not just observe that they are.

AI needs this history. Your current-state specs delete it. They throw away the narrative and hand AI a snapshot. That's like giving someone the last page of a book and asking them to explain the plot.

Specs that model time give AI something to reason with. Specs that model snapshots give it something to guess from.


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: Dan North Wasn't Talking About AI. But He Could Have Been.](./dan-north-wasnt-talking-about-ai-but-he-could-have-been)

[Next: 5 Spec Smells That Turn Every AI Prompt Into a Guessing Game](./5-spec-smells-that-turn-every-ai-prompt-into-a-guessing-game)

[Back to series overview](./index)


The Spec-Driven Shift | Week 2: The Lineage | Post 10 of 20
