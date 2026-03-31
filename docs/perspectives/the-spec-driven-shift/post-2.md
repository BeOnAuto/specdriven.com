---
title: "Stop Calling It a Spec If It's Not Specific"
---

# Stop Calling It a Spec If It's Not Specific

![Stop Calling It a Spec If It's Not Specific](/images/perspectives/post-2.png)

People hear "specification" and they picture a dusty binder from some waterfall project in 2004. That's not what I'm talking about.

A specification is the communication of design. Somebody designed something and they need to tell somebody else about it so it can be built. The way they communicate that design is the specification.

This happens everywhere, not just in software. A visual designer specifies shadows and spacing. An architect specifies load tolerances. A shipbuilder specifies propeller dimensions. A software team specifies behaviors and data flows. Different domains, same act: getting a design out of someone's head and into a form that someone else can implement from.

Here's where most teams trip up though. They don't distinguish between requirements and specifications.

Requirements live in the problem space. They say what needs to be solved.

Specifications live in the solution space. They communicate how the solution has been designed.

Here's the difference in practice:

Requirement: "Customers need to receive loyalty discounts."

Specification: "When a customer with 24+ months tenure reaches checkout, apply a 10% discount to the subtotal. One-time per calendar year. Displayed as a line item before tax calculation. Not combinable with promotional codes."

The requirement tells you the problem exists. The specification tells you somebody sat down, thought about it, made a bunch of decisions, and wrote those decisions down precisely enough for someone to implement them.

If it's not specific, it's not a spec. That's not wordplay. That's the whole point.

And here's a thing people miss. A good spec also tells you what the system should NOT do. If you specify that it should write to the database, you probably also need to specify that it shouldn't write to the database more than once. If you leave that out, neither a human nor an AI will think to implement the constraint. The AI especially won't. It just builds whatever you describe, at machine speed, without asking questions.

Specifications don't arrive fully formed either. They evolve. Requirements lead to rough designs. Rough designs get refined. Low fidelity wireframes become high fidelity screens. The level of detail goes up over time, through feedback and iteration, until there's enough fidelity to guide an implementation.

Whether that implementation takes a human two weeks or an AI two minutes, the spec is what makes the output match the intent.

What's the biggest gap you've seen between what someone asked for and what actually got built?


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: Your AI Codebase Is a Ticking Time Bomb](./post-1)

[Back to series overview](./index)


The Spec-Driven Shift | Week 1: The Wake-Up Call | Post 2 of 20
