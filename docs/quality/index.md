---
title: Quality & Specifications
prev:
  text: Why Spec-Driven?
  link: /why
next: false
---

# Quality & Specifications

## Quality Is Care

When you love something, you spend time with it. You pay attention to the details. You notice when something's off. High quality comes from care and attention applied throughout, not inspected in at the end.

Your specifications deserve that same care. A specification written in five minutes during a standup will produce five-minute-quality software. A specification that's been discussed, challenged, refined, and made precise will produce software that actually does what you intended.

The question isn't whether you can afford to spend time on specifications. It's whether you can afford not to.

## The Three Types of Bugs

As explored in [Why Spec-Driven?](/why#where-your-bugs-really-come-from), most defects don't come from bad code. They come from bad specifications. Here's the detailed breakdown.

**Type 1: Implementation Defects (15% of all bugs)**

The spec was correct. The code was wrong. These include regression bugs: things that worked before but broke when code changed. They're the most visible bugs but account for only 15% of all defects.

**Type 2: Incorrect Specifications (50% of all bugs)**

The spec was wrong. So the code is wrong. The code faithfully implements the wrong thing, and no amount of testing can catch it because the tests verify the wrong behavior too.

**Type 3: Missing Specifications (35% of all bugs)**

Nobody thought of this scenario. The spec wasn't wrong. It simply didn't exist. These are the unknown unknowns. Their impact ranges from embarrassing to catastrophic.

## Prevention

> "Quality has to be caused, not controlled."
> — Philip Crosby

85% of bugs come from specification problems (incorrect + missing). The highest-leverage investment you can make isn't in better testing. It's in better specifications.

Two practices address all three types:

**Executable Specifications** turn your specs into automated checks. Whether through TDD, BDD, or other test automation approaches, the key is that specifications become living verification, catching implementation defects when code changes and ensuring incorrect specs fail visibly rather than silently producing wrong behavior.

**Deliberate Discovery** helps teams systematically explore what they don't know. Cross-functional conversations surface ambiguity and missing scenarios before they become code. When business experts, developers, and testers flesh out concrete examples together, incorrect and missing specifications emerge while they're still cheap to fix.

Get the specifications right, and most quality problems disappear before a single line of code is written.

## Quality Starts Here

Quality isn't a phase at the end. It isn't a department. It starts the moment you decide what to build.

Every specification you write is a quality decision. A vague spec is a decision to gamble. A precise spec is a decision to be deliberate. Spec-Driven Development is the practice of making that choice consciously, every time.

## Does This Actually Work? {#evidence}

The field of spec-driven development is young. The evidence for its underlying principles is decades old.

**The BDD/TDD track record**: A controlled study across four teams at Microsoft and IBM found that test-driven development reduced defect density by 40-90%, at the cost of 15-35% more initial development time (Nagappan et al., "Realizing Quality Improvement Through Test Driven Development," *Empirical Software Engineering*, 2008). The principles aren't new. Executable specifications, collaborative discovery, and shift-left quality have been producing results since Kent Beck formalized TDD and Ward Cunningham built FIT.

**Formal methods at the extreme**: The Paris Metro Line 14 (driverless) was built using the B Method, a formal specification system. Aviation and nuclear systems have used formal specifications for decades. These are existence proofs that specification-driven approaches work at the highest stakes. They're also evidence that the cost of doing it well is justified when failure isn't an option.

**Third-party validation**: Martin Fowler's ThoughtWorks analysis provides one of the most balanced assessments of spec-driven tools, including the important parallel to Model-Driven Development's limitations. The Thoughtworks Technology Radar (Volume 33, November 2025) lists spec-driven development in the "Assess" ring, meaning it's worth exploring but not yet proven enough for broad adoption. An arXiv preprint (Piskala, "Spec-Driven Development: From Code to Contract in the Age of AI Coding Assistants," arXiv:2602.00180, 2026) surveys the emerging field.

**Honest framing**: The tooling is immature. The best practices are still being discovered. But the direction is supported by decades of evidence that getting specifications right produces better software. If you're waiting for a perfect meta-analysis, you'll be waiting a long time. The practitioners who've done this work know it works. The challenge is making it accessible to everyone else.

## Is 100% Coverage Really Possible? {#coverage}

Yes. With a caveat.

If you practice strict test-driven development (write the test first, then write the code to pass it), 100% code coverage is the natural outcome. Every line of code exists because a test required it. There's no untested code because there's no code without a test.

AI makes this more achievable, not less. When the AI writes implementation code to satisfy specifications, you can fail the build if coverage drops below 100%. The AI retries until the coverage target is met. The human never has to chase coverage manually.

The caveat: 100% coverage means 100% of specified behavior is verified. It does not mean 100% of all possible behavior. If you didn't specify an edge case, no test covers it, and 100% coverage won't save you. Coverage is necessary but not sufficient. Your specifications must be complete.

This is why [deliberate discovery](#prevention) and [collaborative techniques](/guides/discovery) matter. Coverage tells you that your specified behavior works. Discovery helps you find the behavior you forgot to specify.
