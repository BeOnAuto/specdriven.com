---
prev:
  text: Guardrail Engineering
  link: /guides/guardrail-engineering
next:
  text: Three Sources of Insight
  link: /guides/three-sources-of-insight
image: /images/pages/guides/specs-in-your-sdlc.png
---

# Specs in Your SDLC

![Specs in Your SDLC](/images/pages/guides/specs-in-your-sdlc.png)

Spec-driven development changes what each role does in the software delivery lifecycle. Not their title. Not their place in the org chart. Their daily work.

## How Each Role Shifts

**Developers** stop going straight from requirement to code. They design first, specify second, then implement from specs with test harnesses. The implementation might be done by them or by AI. The design and specification is their primary contribution. Code becomes a byproduct of specifications, not the primary artifact.

**Designers** find that their wireframes, mockups, and interaction designs are already specifications in a different medium. The gap between design artifacts and developer artifacts shrinks because both are now explicitly about communicating design intent. Contracts between designers and developers (this screen shows these fields, this button triggers this action, this state shows this message) become first-class specs that can be verified.

**QA shifts left.** Instead of testing the built product to find bugs, QA participates in the specification process to prevent bugs. They bring the "what could go wrong?" mindset to the spec review. They do exploratory testing anchored by the specs rather than searching an infinite space. When QA has specs, their search space gets dramatically smaller. They start with the specified behavior and vary from there, looking for edges the specs missed.

**Architects** think about constraints more explicitly. Architecture is a set of constraints. In a spec-driven team, those constraints are specified and enforced. An architect's decisions become executable specs: "all services communicate via events," "no direct database access from the API layer," "response times under 300ms for all read operations." These aren't just slides in a deck anymore. They're guardrails.

**Product managers** start distinguishing requirements from specifications. Their job is the problem space. They define what needs to be solved and why it matters. They don't write specs (that requires design), but they validate that the specs, once written, actually address the requirement they articulated.

## Verification vs Validation

Two different quality activities that teams often conflate.

**Verification** asks: does the system meet the specifications? This is automated. Tests run. They pass or fail. Binary. You can verify continuously, on every commit, with zero human effort once the harness is built.

**Validation** asks: is this the right thing? This is human judgment. You can't automate "is this what the user wanted?" You have to show it to them. Watch them use it. Listen to their feedback.

Both are quality functions. Both produce feedback. Verification catches implementation bugs and specification drift. Validation catches requirement errors and design misjudgments.

The most common failure pattern: a team that verifies everything and validates nothing. The system passes all its tests. The tests match the specs. The specs match the design. And the design doesn't solve the actual problem. Everything is correct. Nothing is useful.

> 🔄 **Feedback opportunity:** When was the last time someone outside the dev team used the product and gave feedback that changed a spec? If you can't remember, your validation cycle might be too long. Shortening it is one of the highest-value investments you can make.

## The Facilitator Role

One role that most teams don't name but desperately need: the facilitator. Someone who brings people together, runs the discovery and design sessions, ensures everyone's voice is heard, and drives toward shared understanding.

Good facilitation is the difference between an EventStorming session that produces actionable specs and one that produces photographed sticky notes that nobody looks at again. Good facilitation means individual thinking before group thinking. One-on-one conversations before all-hands meetings. Making sure the quiet analyst's concerns are represented alongside the loud architect's opinions.

This role often falls to a team lead, a scrum master, or an external coach. It doesn't matter who fills it. It matters that someone does. Without facilitation, the design phase becomes dominated by whoever is loudest, and the specs reflect their biases rather than the team's shared understanding.
