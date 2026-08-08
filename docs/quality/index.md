---
title: Quality & Specifications
prev:
  text: Why Spec-Driven?
  link: /why
next: false
image: /images/pages/quality/index.png
---

# Quality & Specifications

![Quality & Specifications](/images/pages/quality/index.png)

## Quality Is Care

When you love something, you spend time with it. You pay attention to the details. You notice when something's off. High quality comes from care and attention applied throughout, not inspected in at the end.

Your specifications deserve that same care. A specification written in five minutes during a standup will produce five-minute-quality software. A specification that's been discussed, challenged, refined, and made precise will produce software that actually does what you intended.

The question isn't whether you can afford to spend time on specifications. It's whether you can afford not to.

## The Three Types of Bugs

As explored in [Why Spec-Driven?](/why#where-your-bugs-really-come-from), many defects begin before coding: in missing requirements, incorrect assumptions, unclear design, or incomplete specifications. A useful working classification is:

**Type 1: Implementation Defects**

The spec was correct. The code was wrong. These include regression bugs: things that worked before but broke when code changed. They are often the most visible because the disagreement between expected and observed behavior is direct.

**Type 2: Incorrect Specifications**

The stated expectation was wrong, so code and tests built from the same assumption can agree with each other while the product still does the wrong thing.

**Type 3: Missing Specifications**

Nobody thought of this scenario. The spec wasn't wrong. It simply didn't exist. These are the unknown unknowns. Their impact ranges from embarrassing to catastrophic.

## Prevention

> "Quality has to be caused, not controlled."
> *Philip Crosby*

Specification work is one high-leverage place to prevent defects, alongside sound engineering, testing, observability, and operational learning. [See the full evidence pack on the ROI page.](/guides/roi#pre-ai-evidence-what-specifications-did-for-quality)

Two practices address all three types:

**Executable Specifications** connect selected expectations to automated checks. Whether through TDD, BDD, contract testing, or other automation, they can expose implementation drift when code changes. They cannot tell you that an agreed expectation was itself wrong.

**Deliberate Discovery** helps teams systematically explore what they don't know. Cross-functional conversations surface ambiguity and missing scenarios before they become code. When business experts, developers, and testers flesh out concrete examples together, incorrect and missing specifications emerge while they're still cheap to fix.

Improve specifications early, and many avoidable misunderstandings can be resolved before they become expensive implementation or production problems.

## Quality Starts Here

Quality isn't a phase at the end. It isn't a department. It starts the moment you decide what to build.

Every specification you write is a quality decision. A vague spec is a decision to gamble. A precise spec is a decision to be deliberate. Spec-Driven Development is the practice of making that choice consciously, every time.

## Does This Actually Work? {#evidence}

The field of spec-driven development is young. The evidence for its underlying principles is decades old.

**The BDD/TDD track record**: A controlled study across four teams at Microsoft and IBM found that test-driven development reduced defect density by 40-90%, at the cost of 15-35% more initial development time (Nagappan et al., "Realizing Quality Improvement Through Test Driven Development," *Empirical Software Engineering*, 2008). The principles aren't new. Executable specifications, collaborative discovery, and shift-left quality have been producing results since Kent Beck formalized TDD and Ward Cunningham built FIT.

**Formal methods at the extreme**: The Paris Metro Line 14 (driverless) was built using the B Method, a formal specification system. Aviation and nuclear systems have used formal specifications for decades. These are existence proofs that specification-driven approaches work at the highest stakes. They're also evidence that the cost of doing it well is justified when failure isn't an option.

**Third-party validation**: Martin Fowler's ThoughtWorks analysis provides one of the most balanced assessments of spec-driven tools, including the important parallel to Model-Driven Development's limitations. The Thoughtworks Technology Radar (Volume 33, November 2025) lists spec-driven development in the "Assess" ring, meaning it's worth exploring but not yet proven enough for broad adoption. An arXiv preprint (Piskala, "Spec-Driven Development: From Code to Contract in the Age of AI Coding Assistants," arXiv:2602.00180, 2026) surveys the emerging field.

**Honest framing**: The tooling is immature. The best practices are still being discovered. But the direction is supported by decades of evidence that getting specifications right produces better software. If you're waiting for a perfect meta-analysis, you'll be waiting a long time. The practitioners who've done this work know it works. The challenge is making it accessible to everyone else.

## What Does Coverage Actually Tell You? {#coverage}

Coverage measures what code or behavior a test suite exercised under a particular definition. It is useful, but narrower than correctness.

Test-driven development can encourage high coverage, but it does not guarantee 100% line, branch, path, or behavioral coverage. Teams can write code during refactoring, use weak assertions, miss branches, or test the wrong expectation.

A build can enforce a numeric threshold, and an agent can add tests until the number is reached. That still does not show that the tests express the right product behavior.

Even 100% line coverage means only that every measured line executed. It does not mean every branch, state, interaction, edge case, or specified behavior was verified. Coverage is supporting evidence, not a quality guarantee.

This is why [deliberate discovery](#prevention), strong assertions, mutation testing, contract checks, exploratory testing, and operational feedback all matter. Different quality functions expose different kinds of error.
