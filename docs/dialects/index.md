---
title: Spec Dialects
prev:
  text: Common Objections
  link: /objections
next:
  text: Narrative-Driven Development
  link: /dialects/narrative-driven
---

# Spec Dialects

## What Is a Spec Dialect?

You wouldn't write a game engine in SQL. You wouldn't build a website in Assembly. Different programming languages exist because different problems need different tools. The same is true for specifications.

A **spec dialect** is a structured, schema-backed specification language purpose-built for a specific domain. It's not a workshop technique. It's not a meeting format. It's a specification language with syntax, structure, and machine-parseability, designed to express design intent for a particular class of problems.

A spec dialect has:

- A structured format with a defined schema or grammar
- Machine-parseable syntax that tooling can process
- A direct relationship to executable output

[Collaborative discovery techniques](/guides/discovery) (EventStorming, Example Mapping, Impact Mapping) are valuable, but they're inputs to specification, not specifications themselves. Discovery produces understanding. Dialects capture it.

## The Ancestral Spec Languages

Modern spec dialects build on two foundational spec languages from the BDD movement: **Given/When/Then (Gherkin)** for domain-level specifications and **describe/it/should** for component-level specifications. Together, they proved that specifications could be both human-readable and machine-executable.

Gherkin isn't called a "dialect" itself. It's the ancestral specification language that modern dialects extend. Its Given/When/Then pattern has become the most widely adopted structure for behavioral specifications. The describe/it/should format (from Jasmine, Mocha, RSpec) does the same for individual modules.

See [The OG Specifications](/what#the-og-specifications) for examples and a deeper look at how these formats work.

## Narrative-Driven Development (NDD)

**NDD is the first full spec dialect.** It builds on the shoulders of both Gherkin and describe/it/should, extending them into a unified specification language purpose-built for line-of-business web applications.

NDD provides:

- **Given/When/Then** patterns for specifying business domain logic (workflows, commands, queries, reactions)
- **Should/Should Not** patterns for specifying component-level and module-level contracts
- A **model-based approach** (Zod schema) with a TypeScript fluent interface that makes specifications both human-readable and machine-executable. The model can also be expressed as raw JSON or DSLs in other languages.
- A **unified model** that serves visual, documentation, and code audiences from a single source of truth
- **Multimodal access**: The same model serves developers (TypeScript fluent interface), designers (visual journey maps with Figma integration in progress), and product/QA teams (document view). One model, three audiences.

What makes NDD a full dialect (rather than just another BDD framework) is its model-based architecture (a Zod schema defining the complete system specification), its multimodal accessibility (code, visual, and document views from a single model), and its direct relationship to executable output through the [Auto](/landscape/auto) platform's pipeline.

[Learn more about NDD →](/dialects/narrative-driven)

## Archetype (Coming Soon)

**Archetype** is a dialect for expressing architecture specifications. Currently in development by the Auto team. Where NDD specifies behavioral narratives (what users do and what the system does in response), Archetype will specify structural and architectural decisions: Architecture Decision Records (ADRs), infrastructure-as-code constraints, service contracts, non-functional requirements, and multi-agent coordination patterns.

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

Just as modern software uses multiple programming languages, the future of spec-driven development is polyglot. Different dialects for different domains. Different levels of abstraction for different concerns. All structured. All executable. All persistent.

You might use NDD for your line-of-business application logic, Archetype for your architecture decisions, and another dialect for your data pipeline or infrastructure. The same way you might use TypeScript for your frontend, Python for your ML models, and Terraform for your cloud resources.

## Build Your Own

Working on a spec dialect? The ecosystem is just beginning. There's room for dialects covering games, infrastructure, data pipelines, AI/ML systems, and domains nobody has thought of yet.

The criteria: a structured format with a defined schema, machine-parseable syntax, and a path to execution.

[Submit your dialect →](/community) | [Contribute on GitHub →](https://github.com/BeOnAuto/specdriven.com)
