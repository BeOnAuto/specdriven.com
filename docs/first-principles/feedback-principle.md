---
prev:
  text: Value, Quality, and Throughput
  link: /first-principles/value-quality-throughput
next:
  text: The Lifecycle of a Specification
  link: /first-principles/spec-lifecycle
image: /images/pages/first-principles/feedback-principle.png
---

# The Feedback Principle

![The Feedback Principle](/images/pages/first-principles/feedback-principle.png)

## One Sentence

The sooner you detect feedback, the cheaper it is to deal with it.

That's the entire theory of quality in software, in one sentence. Everything else is application.

## Quality Functions Provoke Feedback

A quality function is any activity you perform in order to provoke feedback. Not to produce an artifact. Not to check a box. To provoke feedback so you can detect it and deal with it.

Pair programming is a quality function. Two people working together catch things that one person alone misses. The feedback is immediate: your partner says "wait, what about the error case?"

Code review is a quality function. A second set of eyes on the code provokes feedback before it reaches production.

Showing a mockup to a user is a quality function. Their confusion or excitement is feedback about your design.

Running a test suite is a quality function. A failing test is feedback that the system no longer meets a specification.

EventStorming is a quality function. Getting people in a room to model a system on sticky notes provokes feedback about misunderstandings, missing pieces, and wrong assumptions.

Sleeping on a problem is a quality function. Your subconscious processes the problem overnight and sometimes surfaces insights your conscious mind missed.

Every practice you know by name (TDD, BDD, CI/CD, user testing, retrospectives, linting, architecture review) is a quality function. They all exist for the same reason: to provoke feedback that you can then detect and deal with.

## The Cost Curve

Barry Boehm's research documented the cost curve across decades of software projects. A defect caught at the specification stage costs almost nothing to fix. It's a conversation, a clarification, a rewritten scenario. The same defect caught in production costs orders of magnitude more. Boehm found ratios of 1:5:10:50 across requirements, design, coding, and testing phases, with later work moderating the range from 5x for small agile projects to over 100x for large mission-critical systems. Empirical NASA observations across spacecraft programs and a 20-year aircraft program found ratios of 29x to 186x for requirements errors found in operations. [See the full evidence pack on the ROI page.](/guides/roi#pre-ai-evidence-what-specifications-did-for-quality)

You know this intuitively. You've lived it. The bug that would have been a 5-minute conversation at the whiteboard stage becomes a 3-day incident with a hotfix, a rollback, a post-mortem, and a customer apology.

The question is whether your process reflects it.

## Shifting Left

"Shift left" is one of those terms that's been repeated so often it's lost its meaning. Here's what it actually means.

Your development process has phases. Discovery, design, delivery, learning. Quality functions can be applied at any phase. Shifting left means moving quality functions to earlier phases, where feedback is cheaper to deal with.

If you only test after the code is written, you're applying quality functions late. Feedback is expensive: the code exists, it might need to be rewritten, other code might depend on it.

If you test the specification before any code is written (by walking through it with QA, by simulating scenarios, by socializing the design with stakeholders), you're applying quality functions early. Feedback is cheap: the spec is a document, changing it costs a conversation.

Shifting QA left doesn't mean making QA write unit tests. It means getting the QA mindset (the "what could go wrong?" thinking, the exploratory testing instinct, the "did we miss anything?" question) into the discovery and design phases, before code exists.

## Verification vs Validation

These sound similar but they're different quality functions.

**Verification** asks: does the system meet the specifications? This is automated. Deterministic. You run the tests, they pass or fail. The system either meets the specs or it doesn't.

**Validation** asks: is this the right thing? This is human judgment: exploratory testing, focus groups, user interviews, showing the product to stakeholders and asking "is this what you meant?"

Both are necessary. A system can pass all its specs and still be the wrong product. A system can be the right product and still fail its specs. Verification tells you the system is built right. Validation tells you you're building the right system.

Specs enable verification. Discovery and learning enable validation. You need both, applied at every phase.

## The Feedback Opportunity Pattern

Throughout the [Practice](/guides/) section on this site, you'll encounter recurring callouts marked as **feedback opportunities**. These are moments in the workflow where applying a quality function would provoke useful feedback.

Each one is specific to the phase you're in and answers three questions: what feedback should you be seeking right now? How do you provoke it? And what's the cost differential between catching it here versus catching it later?

These aren't rules. They're opportunities. The more of them you take, the higher the quality of your output. The fewer you take, the more you're relying on luck and late discovery to catch what you missed.
