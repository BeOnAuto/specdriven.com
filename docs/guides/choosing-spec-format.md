---
prev:
  text: Using AI to Explore Solutions
  link: /guides/ai-explore-solutions
next:
  text: See It In Action
  link: /guides/see-it
image: /images/pages/guides/choosing-spec-format.png
---

# Choosing Your Spec Format

![Choosing Your Spec Format](/images/pages/guides/choosing-spec-format.png)

The format you write specs in matters less than getting the design right first. But once the design is right, format choice is the next real decision. This page is about how to make it.

## Don't Choose the Format First

This is the most common mistake teams make when they start with spec-driven development. They pick a tool or format and try to make everything fit. "We're a Gherkin shop now." "Everything goes in markdown." "We're using NDD."

That's backward. You should design the solution first, then find the right expression for it. The spec format follows the design, not the other way around.

Different things need different expressions. A user journey might be best expressed as a Given/When/Then narrative. A component's behavior might be best expressed as describe/it/should. An architectural decision might be best expressed as an ADR (Architecture Decision Record). A data contract might be best expressed as a GraphQL schema or a JSON schema.

Picking one format and forcing everything into it is like writing all your code in one programming language regardless of the problem. Sometimes that works. Often it constrains you.

## The Spectrum

Spec formats sit on a spectrum from informal to formal:

**Plain text / markdown.** Zero tooling required. Easy to write. Easy to share. No executability. Good for: architectural decisions, design rationale, informal specs that you'll make executable later. Bad for: anything that needs drift detection, anything complex enough that natural language creates ambiguity.

**Structured text (Given/When/Then, describe/it/should).** Consistent format. Readable by non-developers. Can be connected to test frameworks (Cucumber, SpecFlow, Jest). Good for: domain behaviors, component behaviors, anything that benefits from examples. Bad for: high-level architecture, visual design.

**Typed models (Zod schemas, TypeScript interfaces, GraphQL schemas, JSON schemas).** Machine-parseable. Validatable. Good for: data contracts, API definitions, domain models, anything that needs to be consistent across multiple consumers. Bad for: behavioral specifications, user journeys.

**Full spec dialects and method languages (Narrative-Driven Development, Event Models).** Repeatable ways to organize behavior, examples, and product structure. Good for: systems where specs need to serve multiple audiences (developers, designers, product), where the product story needs to stay coherent across many features. Bad for: small projects where the overhead isn't justified.

## When the Hierarchy Becomes a Dialect

The practitioner hierarchy (capability -> goal -> outcome -> slice; see [Writing Your First Spec](/guides/writing-your-first-spec) for the full explainer) describes how specs are organized at any scale. Dialects formalize that hierarchy with concrete vocabulary, structure, and tooling.

Narrative-Driven Development is one such dialect. The terms map directly:

| Practitioner term | NDD term |
|---|---|
| Capability | Domain |
| Goal | Narrative |
| Outcome | Scene |
| Slice | Moment |

Other dialects make different trade-offs. Event Modeling focuses on the temporal flow of events through a system. Some teams build their own minimal dialect on top of plain markdown with a folder convention.

The point isn't which dialect you pick. The point is that once you outgrow flat markdown files, you want something that gives the hierarchy a concrete form, with tooling or workflow support that maintains it. For NDD specifically, see [Narrative-Driven Development](/dialects/narrative-driven).

## Signals You've Outgrown Plain Text

You know it's time to move to something more structured when:

Ambiguity is causing implementation disagreements. Two developers read the same markdown spec and build different things. The spec wasn't specific enough.

Specs are drifting from the code. You update the code but forget to update the spec. Nobody catches it because the spec isn't executable. The spec becomes fiction.

Multiple people need to author specs. When it's just you, consistency is easy. When five people write specs, inconsistency creeps in without a structured format.

The system is getting complex. A few features can be held in your head. Thirty features with interactions and dependencies need a model, not a folder of markdown files.

## AI Doesn't Change the Choice

Whether a human or an AI is implementing from the specs, the choice of format stays the same. What changes is that AI demands more specificity. A human developer will ask a clarifying question when the spec is ambiguous. AI will just pick an interpretation and charge ahead.

So if you're working with AI, err toward the more structured end of the spectrum. The investment in specificity pays for itself because it reduces the number of assumptions the AI makes without telling you.

> 🔄 **Feedback opportunity:** Write a spec in your current format and hand it to an AI without any other context. Does the AI implement what you intended? If it makes surprising choices, your spec format isn't specific enough for AI-assisted development. The AI's confusion is feedback about your spec quality.

## Where to Go Next

For other dialects (NDD and the spec-as-source family), see the [Spec Dialects](/dialects/) section in Learn.
