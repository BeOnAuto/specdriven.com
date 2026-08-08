---
title: Approaches and Formats
description: A practical guide to the different forms specifications can take and how each relates to implementation and verification.
prev:
  text: Where "Spec-Driven Development" Came From
  link: /origins
next:
  text: Tool Landscape
  link: /landscape/
image: /images/pages/dialects/index.png
---

# Approaches and Formats

![Approaches and Formats](/images/pages/dialects/index.png)

There is no universal specification format. Different decisions need different forms, and most consequential products use several together.

The useful question is not “Which dialect should we adopt?” It is:

> What must people be able to understand, what must a builder be able to implement, and what must a machine be able to check?

## Common forms

### Plain-language briefs and structured Markdown

Useful for goals, scope, constraints, decisions, and the reasoning behind them. These formats are easy to review and version, but prose alone leaves room for interpretation. Add examples, contracts, or checks when precision matters.

### Behavioral examples

Given/When/Then, Example Mapping, and specification-by-example formats make expected behavior concrete. They are especially useful when several plausible interpretations exist.

```gherkin
Given a show has 1 ticket remaining
When a customer tries to reserve 2 tickets
Then the reservation is rejected
And no tickets are held
```

Some behavioral examples can be automated. A passing check demonstrates the encoded example, not every possible behavior of the product.

### Acceptance criteria and user stories

Stories and acceptance criteria help teams discuss a slice of value in familiar language. Their quality depends on specificity: a short sentence can start a conversation, but it may not contain enough information to guide implementation or verification by itself.

### Schemas and contracts

OpenAPI, JSON Schema, GraphQL schemas, database constraints, and typed interfaces express the shape and boundaries of information precisely. They are strong at structural compatibility and weaker at explaining the product goal or business reason behind a rule.

### Models and diagrams

State models, sequence diagrams, event models, process maps, and architecture views make relationships and change over time easier to inspect. Their value depends on whether they remain connected to implementation and current decisions.

### Formal specifications

Languages such as TLA+, Alloy, Z, and the B Method support mathematical reasoning about selected system properties. They can provide exceptional confidence for high-risk concerns, but require specialist skill and do not replace product discovery.

## Relationships to implementation

The format is only one choice. Teams also decide how specifications relate to code:

- **Spec-first:** write and review the specification before implementation.
- **Spec-anchored:** keep a maintained specification as a durable reference while code evolves.
- **Spec-as-source:** generate some or all implementation artifacts from a sufficiently structured specification.
- **Executable specification:** connect selected statements or examples to automated verification.

These relationships can coexist. A product brief may be spec-anchored, an API contract spec-as-source, and behavioral examples executable.

## Choose by decision, not fashion

Use the lightest form that makes the important decision inspectable and sufficiently precise. Ask:

1. Who must review it?
2. What ambiguity would be costly?
3. Does a builder need prose, examples, structure, or all three?
4. What can be checked automatically, and what still requires judgment?
5. How will the specification remain current when the product changes?

The goal is not a stack of artifacts. It is a coherent, reviewable expression of what should be built and how anyone will know it is right.

## Historical note

[Narrative-Driven Development](/dialects/narrative-driven) was an earlier named method developed by Sam Hatoum. The name was retired in 2026; its history remains documented without presenting it as a current approach readers need to learn.

[Suggest an approach or correction →](/community#suggest-a-change)
