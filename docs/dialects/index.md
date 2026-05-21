---
title: Spec Dialects
prev:
  text: Where "Spec-Driven Development" Came From
  link: /origins
next:
  text: Notable People
  link: /people
image: /images/pages/dialects/index.png
---

# Spec Dialects

![Spec Dialects](/images/pages/dialects/index.png)

## What Is a Spec Dialect?

You wouldn't write a game engine in SQL. You wouldn't build a website in Assembly. Different programming languages exist because different problems need different tools. The same is true for specifications.

A **spec dialect** is a repeatable specification language purpose-built for a specific domain. It's not just a workshop technique or meeting format. It gives teams shared vocabulary, structure, and tooling affordances for expressing design intent for a particular class of problems.

A spec dialect has:

- A structured vocabulary or grammar
- Repeatable patterns that tooling or workflow can support
- A relationship to execution, verification, or implementation

[Collaborative discovery techniques](/guides/discovery) (EventStorming, Example Mapping, Impact Mapping) are valuable, but they're inputs to specification, not specifications themselves. Discovery produces understanding. Dialects capture it.

## The Ancestral Spec Languages

Modern spec dialects build on two foundational spec languages from the BDD movement: **Given/When/Then (Gherkin)** for domain-level specifications and **describe/it/should** for component-level specifications. Together, they proved that specifications could be both human-readable and machine-executable.

Gherkin isn't called a "dialect" itself. It's the ancestral specification language that modern dialects extend. Its Given/When/Then pattern has become the most widely adopted structure for behavioral specifications. The describe/it/should format (from Jasmine, Mocha, RSpec) does the same for individual modules.

See [The OG Specifications](/what#the-og-specifications) for examples and a deeper look at how these formats work.

## Narrative-Driven Development (NDD)

**NDD is a product modeling method for line-of-business applications.** It builds on Gherkin (Given/When/Then) and describe/it/should, the ancestral spec languages from BDD, and extends them into a taxonomy for goals, outcomes, moments, rules, examples, and interaction expectations.

What sets NDD apart from a BDD framework: it gives teams a broader vocabulary for modeling product intent over time.

[Learn more about NDD →](/dialects/narrative-driven)

## Archetype (Coming Soon)

**Archetype** is a dialect for describing software architectures as graphs of nodes and edges, in development by the Auto team. Where NDD specifies systems through time, Archetype specifies them through structure: components, the relationships between them, and the constraints those relationships must satisfy.

## Emerging Dialects

### Event Modeling

[Event Modeling](/timeline#event-modeling), pioneered by [Adam Dymitruk](/people#adam-dymitruk), is close to being a full dialect. It has a visual specification format with swimlanes, wireframes, events, commands, and Given/When/Then specifications per slice. Contributors like Martin Dilger are building JSON schema-backed tooling.

What's missing for full dialect status: a standardized, machine-parseable specification format that tooling can process consistently. Event Models are typically created in visual tools (like Miro or specialized apps) rather than as structured text files. The community is actively working on this.

Event Modeling has a lot of momentum. It solves a real problem (complete system blueprints from a single visual artifact) and has a growing community of practitioners. It's the closest emerging approach to becoming a spec dialect.

## Potential Future Dialects

Several spec formats look like they could evolve into dialects, though they aren't established as such yet:

**Tessl's .spec.md format** uses structured directives (`@generate`, `@test`, `@describe`) within markdown files. The 1:1 mapping between spec files and code files, combined with the directive system, gives it more structure than pure prose. If the format matures and gains adoption beyond the Tessl ecosystem, it could become a dialect for component-level specification. See [Tessl](/landscape/tessl).

**EARS from Kiro** (Easy Approach to Requirements Syntax) is a structured format for writing requirements within Kiro's spec mode. It provides templates and patterns that constrain how requirements are expressed. Requirements are not specifications (requirements describe the problem, specifications describe the solution), but if EARS develops a formal schema and gains tooling support beyond Kiro, it could evolve toward dialect status. See [Kiro](/landscape/kiro).

**Allium** by [JUXT](https://juxt.pro/) is a formal language for capturing behavioral intent separately from implementation code. It's designed for LLM-assisted development, addressing the problem of meaning drift within AI sessions and knowledge loss across sessions. Unlike markdown, Allium's formal syntax makes contradictions and ambiguities visible. It distinguishes elicitation (forward from stakeholder intent) from distillation (backward from existing code). Open source on [GitHub](https://github.com/juxt/allium). See [Allium documentation](https://juxt.github.io/allium/).

## The Future Is Polyglot

Just as modern software uses multiple programming languages, the future of spec-driven development is polyglot. Different dialects for different domains. Different levels of abstraction for different concerns. All structured. All persistent. Each with its own relationship to execution, verification, or implementation.

You might use NDD for your line-of-business application logic, Archetype for your architecture decisions, and another dialect for your data pipeline or infrastructure. The same way you might use TypeScript for your frontend, Python for your ML models, and Terraform for your cloud resources.

## Build Your Own

Working on a spec dialect? The ecosystem is just beginning. There's room for dialects covering games, infrastructure, data pipelines, AI/ML systems, and domains nobody has thought of yet.

The criteria: structured vocabulary, repeatable form, and a path toward execution, verification, or implementation.

[Submit your dialect →](/community) | [Contribute on GitHub →](https://github.com/BeOnAuto/specdriven.com)
