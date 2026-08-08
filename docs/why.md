---
prev:
  text: What Are Specs?
  link: /what
next:
  text: The Manifesto
  link: /manifesto
image: /images/pages/why.png
---



# Why Spec-Driven?

![Why Spec-Driven?](/images/pages/why.png)

## The Forgotten First Principle

You measure velocity. You measure throughput. You optimize for speed at every turn. But here's the equation nobody puts on the dashboard:

**Throughput = Quality(Value) / Time**

You cannot go faster by ignoring quality. Poor quality is the drag on your wings. Every shortcut you take in understanding what to build shows up later as rework, missed deadlines, and frustrated users. Speed without quality is just faster failure.

## Where Your Bugs Really Come From

It is easy to treat defects as coding mistakes. Many begin earlier.

Research across decades of software engineering attributes a substantial share of expensive defects to requirements and design problems: omissions, incorrect assumptions, ambiguity, and decisions discovered too late. Studies use different categories and report different ranges, so it is more accurate to say that many defects are created before implementation than to assign one universal percentage.

These are not all “spec bugs” in a narrow sense. They are evidence that the decisions surrounding what to build and how it should behave deserve the same discipline as the code.

[See the evidence and its limits on the ROI page.](/guides/roi#pre-ai-evidence-what-specifications-did-for-quality)

## The Golden Rule of Feedback

Here's a principle that will change how you think about quality:

> "The longer feedback lives in a system, the more costly it is to deal with it."

A bug caught at specification time costs almost nothing to fix. It's a conversation, a clarification, a rewritten scenario. The same bug caught in production costs orders of magnitude more. Boehm's original research found ratios of 1:5:10:50 across requirements, design, coding, and testing phases, with later work moderating the range from 5x for small agile projects to over 100x for large mission-critical systems. Empirical NASA observations across spacecraft programs and a 20-year aircraft program found ratios of 29x to 186x for requirements errors found in operations (*Software Engineering Economics*, 1981; NASA JSC Report 20100036670). It's a hotfix, a rollback, an incident report, a customer apology, and a post-mortem. [See the full evidence pack on the ROI page.](/guides/roi#pre-ai-evidence-what-specifications-did-for-quality)

You already know this intuitively. You've lived it. The question is whether your process reflects it.

## AI Made It Worse

AI didn't create the quality problem. But it accelerated it.

What used to decay over months and years can now rot in days. Prompt-to-app tools can turn a vague idea into running code before important product and design decisions have been made explicit.

You're not building faster. You're accumulating defects faster. And the codebase that AI generated in a weekend becomes the codebase you spend months debugging by hand.

## Your Prompts Contain Specification Material

Every prompt to an AI can contain instructions about what to build, what it should do, and how it should behave. That makes it an input to specification—not automatically a sufficient specification.

The difference is that your prompts are ephemeral (gone after the session), unstructured (natural language with implicit assumptions), and unverifiable (no way to prove the output matches the intent).

Spec-driven development takes the important decisions in that exchange and makes them persistent, inspectable, and appropriately connected to implementation or verification.

## The Throwaway Problem

Here's the paradox: every software team already does spec-driven development. They just do it badly.

Standups, pull request descriptions, and arguments about how a feature “should” work all contain decisions that may belong in a specification.

Specifications are everywhere. They permeate every phase of your process. The problem is that you treat them as exhaust, a byproduct of the "real work," instead of as the primary artifact.

The whiteboard gets photographed and forgotten. The Slack thread scrolls into oblivion. The meeting notes rot in a Google Doc no one will ever open again. The user story gets dragged to "Done" and becomes invisible.

What survives? The code. And so the code becomes the de facto specification, the only record of what was intended.

But code is a terrible specification. Code tells you *what* the system does, not *why* it does it. Code tells you *how* a feature was implemented, not *what problem it was solving*. Code can tell you that a timeout is set to 30 seconds, but not that it's 30 seconds because the third-party API has a known latency issue that the vendor promised to fix in Q3.

When the code is your only spec, every future decision gets made without context. You're navigating by the footprints left behind instead of the map that was drawn ahead.

## The Way Out

The answer isn't to slow down. You don't need to choose between speed and quality. That's a false trade-off.

The answer is to apply quality functions at the right time, starting with the decisions that will guide implementation. Better specifications do not make implementation automatic, but they reduce avoidable guesswork and give people and agents a stable reference for building and checking the result.

Spec-Driven Development puts specifications first, making them explicit, persistent, and executable. Not as bureaucratic overhead, but as the shortest path to software that actually does what you intended.
