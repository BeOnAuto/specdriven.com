---
title: Quality & Specifications
prev:
  text: Narrative-Driven Development
  link: /dialects/narrative-driven
next:
  text: Auto
  link: /auto
---

# Quality & Specifications

## Quality Is Care

When you love something, you spend time with it. You pay attention to the details. You notice when something's off. High quality comes from care and attention applied throughout, not inspected in at the end.

Your specifications deserve that same care. A specification written in five minutes during a standup will produce five-minute-quality software. A specification that's been discussed, challenged, refined, and made precise will produce software that actually does what you intended.

The question isn't whether you can afford to spend time on specifications. It's whether you can afford not to.

## The Three Types of Bugs

Most defects don't come from bad code. They come from bad specifications. Here's the detailed breakdown.

**Type 1: Implementation Defects (15% of all bugs)**

The spec was correct. The code was wrong. These include regression bugs: things that worked before but broke when code changed. They're the most visible bugs but account for only 15% of all defects.

**Quality function: Test-Driven Development.** TDD reduces implementation defects by 40-90%. Developers write executable specifications before writing code, ensuring that working code stays working.

**Type 2: Incorrect Specifications (the largest source)**

The spec was wrong. So the code is wrong. The code faithfully implements the wrong thing, and no amount of testing can catch it because the tests verify the wrong behavior too.

**Quality function: Behaviour-Driven Development.** Cross-functional teams flesh out detailed scenarios together, surfacing ambiguity before it becomes code. BDD can reduce specification defects from 50% to 2%.

**Type 3: Missing Specifications**

Nobody thought of this scenario. The spec wasn't wrong. It simply didn't exist. These are the unknown unknowns. Their impact ranges from embarrassing to catastrophic.

**Quality function: Deliberate Discovery.** Teams collaboratively explore what they don't know they don't know, systematically uncovering gaps before they become production incidents.

## The Math Is Clear

85% of bugs come from specification problems (incorrect + missing). The highest-leverage investment you can make isn't in better testing. It's in better specifications.

This is the core insight of Spec-Driven Development. Get the specifications right, and most of your quality problems disappear before a single line of code is written.

## Quality Starts Here

Quality isn't a phase at the end. It isn't a department. It starts the moment you decide what to build.

Every specification you write is a quality decision. A vague spec is a decision to gamble. A precise spec is a decision to be deliberate. Spec-Driven Development is the practice of making that choice consciously, every time.
