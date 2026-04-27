---
title: "60 Years of Specification in 3 Minutes"
image: /images/perspectives/60-years-of-specification-in-3-minutes.png
---

# 60 Years of Specification in 3 Minutes

![60 Years of Specification in 3 Minutes](/images/perspectives/60-years-of-specification-in-3-minutes.png)

There's a lineage behind spec-driven development that most devs were never taught. Once you see it, you can't unsee it.

**1960s.** The software crisis. Programs getting complex. Expensive failures piling up. Mathematicians and computer scientists asked the foundational question: how do we prove programs are correct? Tony Hoare came up with what's now called Hoare logic. Given a precondition P, execute action Q, verify postcondition R. PQR. That was the genesis. The intersection of mathematics and programming, trying to specify what software should do and verify that it does it.

**1970s-80s.** The overreaction. Waterfall. Specify EVERYTHING upfront. Massive documents spanning hundreds of pages. Months of planning before a line of code. The intention was fine: rigor, predictability. But the feedback cycles were catastrophic. Months before you found out your specs were wrong. Waterfall didn't fail because of specs. It failed because of slow feedback.

**1986.** Bertrand Meyer publishes *Object-Oriented Software Construction* and creates Eiffel. He takes Hoare's preconditions and postconditions out of the proof system and puts them in the language itself. Design by Contract. Every method declares what it requires, what it ensures, and what invariants hold. Specs as code, checked at runtime. The first time executable specifications shipped in production. DbC never went mainstream. Eiffel didn't win. But the idea did. JML, Spec#, Code Contracts, Java's `assert`. The DNA is everywhere.

**1990s-2000s.** The correction. Extreme Programming. Kent Beck. Work in tiny increments, pair program, get feedback fast. And write the test BEFORE the implementation. TDD was born. Despite what everyone thinks, it was never really a testing technique. It was a design technique. By writing the expectation first, developers were recording their design intent as executable artifacts. First practical form of executable specifications.

**Mid-2000s.** Dan North noticed well-named test methods were basically behavioral specs in camel case. He asked: what if we stop calling these tests? What if they're behavioral specifications? BDD was born. Given-When-Then. Shared understanding. Suddenly specs weren't just for developers. Product owners could read them. QA could verify against them. The whole team could participate. And Given-When-Then was just Hoare logic from the 60s made readable by humans. Academia got there too. Ostroff, Paige and Makalsky published *Agile Specification-Driven Development* in 2004, arguing that tests and contracts are both specifications. The practitioner community wouldn't pick up the thread for another decade.

**2000s-2010s.** Eric Evans formalized Domain-Driven Design. The words you use shape the system. Greg Young introduced Event Sourcing: stop storing state, start storing facts. Everything as an immutable event. Then Alberto Brandolini created Event Storming: model your system by placing events on a timeline, collaboratively, in a room. Powerful temporal specification techniques most teams have never heard of.

**2016-now.** The convergence. TDD, BDD, DDD, time-base modeling all reaching toward the same idea from different angles. Specify before you build, in language everyone understands, and make it executable. The term "spec-driven development" started gaining traction as practitioners recognized the common thread.

Now AI has made that convergence urgent. The techniques exist. The history is there. The question is whether the industry adopts them fast enough to keep up with the speed of AI-generated code.

— _Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]_

---

[Previous: I Coined 'Spec-Driven Development' in 2016. Nobody Cared Until AI Broke Everything.](./i-coined-spec-driven-development-in-2016-nobody-cared-until-ai-broke-everything) | [Next: TDD Was Never About Testing](./tdd-was-never-about-testing)

[Back to series overview](./index)

The Spec-Driven Shift | Week 2: The Lineage | Post 7 of 20
