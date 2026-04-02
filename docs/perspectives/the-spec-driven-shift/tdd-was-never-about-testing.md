---
title: "TDD Was Never About Testing"
image: /images/perspectives/tdd-was-never-about-testing.png
---

# TDD Was Never About Testing

![TDD Was Never About Testing](/images/perspectives/tdd-was-never-about-testing.png)

The most misunderstood thing about Test-Driven Development is right there in the name. Everyone fixates on "test." The important word is "driven."

Before TDD, the flow was simple: understand the requirement, design a solution in your mind, write the code, run it, see what happens. The design lived entirely in the developer's head. Code was the first time it became real. If the mental design was wrong or drifted during implementation, you only found out after the fact.

TDD reversed that. Record your design decision as a failing test first. Then write the minimum code to make it pass.

That reversal changed the nature of the test. It stopped being verification after the fact. It became specification before the fact. The developer wasn't testing. They were expressing their design as an executable expectation.

When you write a test first, you're making a decision: "this is how I intend this thing to behave." That decision is now captured in something durable and executable. And because it's executable, it doesn't just document your intent once. It verifies it continuously. Every time the suite runs, every design decision you ever recorded gets re-verified. If anything changes the system in a way that violates a previous decision, you know right away.

That's what people mean when they say "TDD is a design technique, not a testing technique." The value isn't catching bugs after the fact. The value is recording design decisions before implementation and verifying them forever.

But TDD had a limitation. It lived in code. It spoke in code. The business couldn't participate. A product owner couldn't verify that the test actually captured the right intent. The specification was executable but it wasn't shared.

That gap between executable and shared is exactly what BDD solved. That's tomorrow.

The next time you're about to write code, try writing the expectation first. Not as a test. As a design decision. See what happens to the way you think.


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: 60 Years of Specification in 3 Minutes](./60-years-of-specification-in-3-minutes)

[Back to series overview](./index)


The Spec-Driven Shift | Week 2: The Lineage | Post 8 of 20
