---
title: Spec Dialects
---

# Spec Dialects

### The Analogy
You wouldn't write a game engine in SQL. You wouldn't build a website in Assembly. Different programming languages exist because different problems need different tools. The same is true for specifications.

A **spec dialect** is a structured, schema-backed specification language purpose-built for a specific domain. It's not a workshop technique. It's not a meeting format. It's a specification language — with syntax, structure, and machine-parseability — designed to express design intent for a particular class of problems.

### What Qualifies as a Dialect?
Not everything is a spec dialect. Here's the distinction:

**Spec Dialects** have:
- A structured format with a defined schema
- Machine-parseable syntax
- The ability to specify behavior (not just facilitate discussion)
- A direct relationship to executable output

**Discovery Techniques** (not dialects) include:
- Event Storming — a workshop for domain discovery
- Example Mapping — a conversation technique for exploring rules and examples
- Impact Mapping — a strategic planning technique

These are valuable, but they're inputs to specification — not specifications themselves.

### The Landscape

**The OG Dialects**
The earliest spec dialects emerged from the BDD movement:
- **Gherkin** (Given/When/Then) — created by the Cucumber team, the most widely known spec dialect. Structured, parseable, executable. Purpose: domain-level behavior specification.
- **describe/it/should** (Jasmine, Mocha, RSpec style) — the component-level spec dialect. Structured, executable, widely adopted. Purpose: component behavior specification.

These were the pioneers. They proved that structured, executable specifications change everything about how software gets built.

**Emerging Dialects**
- **Event Modeling** — pioneered by Adam Dymitruk with contributors like Martin Dilger building JSON schema-backed tooling. Focused on event-driven systems.
- **Narrative-Driven Development** — a time-based modeling dialect for line-of-business web applications. The first dialect purpose-built for the AI age. [Learn more →](/dialects/narrative-driven)

**Coming Soon**
- **Archetype** — a dialect for expressing architecture specifications. Currently in development.

### The Future is Polyglot
Just as modern software uses multiple programming languages, the future of spec-driven development is polyglot. Different dialects for different domains. Different levels of abstraction for different concerns. All structured. All executable. All persistent.

### Build Your Own
Working on a spec dialect? We'd love to hear about it. The spec dialect ecosystem is just beginning, and there's room for dialects covering games, infrastructure, data pipelines, AI/ML systems, and domains nobody has thought of yet.

[Join the conversation on Discord →](https://discord.gg/onauto)
