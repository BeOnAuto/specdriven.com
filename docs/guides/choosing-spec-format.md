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

This is the most common mistake teams make when they start with spec-driven development. They pick a tool or format and try to make everything fit. “We're a Gherkin shop now.” “Everything goes in Markdown.” “Everything must be a schema.”

That's backward. You should design the solution first, then find the right expression for it. The spec format follows the design, not the other way around.

Different things need different expressions. A user journey might be best expressed as a Given/When/Then narrative. A component's behavior might be best expressed as describe/it/should. An architectural decision might be best expressed as an ADR (Architecture Decision Record). A data contract might be best expressed as a GraphQL schema or a JSON schema.

Picking one format and forcing everything into it is like writing all your code in one programming language regardless of the problem. Sometimes that works. Often it constrains you.

## The Spectrum

Spec formats sit on a spectrum from informal to formal:

**Plain text / markdown.** Zero tooling required. Easy to write. Easy to share. No executability. Good for: architectural decisions, design rationale, informal specs that you'll make executable later. Bad for: anything that needs drift detection, anything complex enough that natural language creates ambiguity.

**Structured text (Given/When/Then, describe/it/should).** Consistent format. Readable by non-developers. Can be connected to test frameworks (Cucumber, SpecFlow, Jest). Good for: domain behaviors, component behaviors, anything that benefits from examples. Bad for: high-level architecture, visual design.

**Typed models (Zod schemas, TypeScript interfaces, GraphQL schemas, JSON schemas).** Machine-parseable. Validatable. Good for: data contracts, API definitions, domain models, anything that needs to be consistent across multiple consumers. Bad for: behavioral specifications, user journeys.

**Models and connected views (state models, event models, process maps).** Repeatable ways to organize behavior, examples, and product structure. Good for: systems where specifications serve several audiences and relationships matter across many features. Bad for: small projects where the overhead is not justified.

## When Flat Files Need Structure

The practitioner hierarchy (capability → goal → outcome → slice; see [Writing Your First Spec](/guides/writing-your-first-spec)) is one way to organize work at different levels. Other approaches organize around events, states, actors, services, or contracts.

The point is not to learn a proprietary vocabulary. Once you outgrow flat Markdown files, you need a structure that makes important relationships visible and a workflow that helps keep them current.

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

For a broader comparison, see [Approaches and Formats](/dialects/).
