---
prev:
  text: OpenSpec
  link: /landscape/openspec
next:
  text: Spec Dialects
  link: /dialects/
---

# Tessl

**What it is:** Two products: the **Spec Registry** (open beta) and the **Tessl Framework** (private beta). Both focused on giving AI coding agents structured, versioned context.

**The problem it solves:** Agent hallucination on library APIs and versions (Registry) and spec-as-primary-artifact development (Framework).

## The Spec Registry {#spec-registry}

Over 10,000 "usage specs" for open-source libraries. When an AI agent tries to use a library, it often hallucinates APIs, mixes up versions, or follows outdated patterns. Usage specs provide accurate, versioned documentation.

Think of it like npm for agent context rather than code packages. Install a usage spec with `tessl install`, and it becomes part of your project's context for any MCP-compatible agent.

Usage specs can also capture team-specific rules: internal libraries, APIs, security policies, tech stack conventions.

## The Tessl Framework {#tessl-framework}

More ambitious. Aspires to a **spec-as-source** approach where the specification file is the primary artifact and code is generated from it. Generated code files are marked with `// GENERATED FROM SPEC - DO NOT EDIT`.

A typical Tessl spec has three parts:
- A description of the software component
- A list of capabilities with linked tests (using `@test` directives)
- An API section defining the public interface

Key directives: `@generate` (create code from spec) and `@describe` (document existing code). Currently 1:1 mapping between spec files and code files.

Connects to agents via MCP. Two modes: carefully crafted specs and "vibe specing" where the agent proposes specs for your review before implementing.

## Specification Format

Markdown-like `.spec.md` files with YAML frontmatter and specialized directives. More structured than pure markdown. Tests are referenced rather than intrinsic to the spec format.

## The Martin Fowler Parallel

Fowler's ThoughtWorks analysis draws parallels between Tessl's spec-as-source approach and Model-Driven Development from the early 2000s. MDD used custom UML or textual DSLs with elaborate code generators. LLMs potentially remove the overhead and rigidity of MDD's parseable spec languages.

## Notable Strengths

The Registry solves a real, immediate problem (agent hallucination on libraries). The Framework's spec-as-source vision would be significant if realized. The @test directives acknowledge the importance of testing (more than most tools in this space).

## Notable Limitations

The Framework is still in private beta. The 1:1 spec-to-file mapping may prove too rigid. Test linkage is a reference mechanism rather than executable verification. The spec points to a test file, but the spec itself doesn't prove its own correctness.

## Open Source

The SDD tile is open source. The Registry is free. The Framework is in closed beta.

## Links

[tessl.io](https://tessl.io)

**See also:** [Guy Podjarny](/people#guy-podjarny), [Timeline: AI-Driven Renaissance](/timeline#ai-renaissance)

## Score Card

> Editorial assessment. [Suggest corrections](https://github.com/BeOnAuto/specdriven.com/issues)

| Dimension | Rating | Note |
|-----------|--------|------|
| [Development Velocity](/landscape/evaluation#dim-velocity) | ●●○ | Registry helps immediately; Framework adds ceremony |
| [Spec Durability](/landscape/evaluation#dim-durability) | ●●○ | @test references link specs to tests; not intrinsically verified |
| [Executability](/landscape/evaluation#dim-executability) | ●○○ | @test directives reference tests but specs don't self-verify |
| [Accessibility](/landscape/evaluation#dim-accessibility) | ●○○ | .spec.md files are developer-facing |
| [Model Coherence](/landscape/evaluation#dim-coherence) | ●○○ | 1:1 spec-to-file mapping; no unified system model |
| [Traceability](/landscape/evaluation#dim-traceability) | ●●○ | 1:1 spec-to-code mapping; @generate creates explicit links |
| [Agent Guidance](/landscape/evaluation#dim-agent-guidance) | ●●○ | Registry context + directives; spec format is still loose |
| [Portability](/landscape/evaluation#dim-portability) | ●●○ | MCP-based; Registry works across agents |
| [Brownfield Readiness](/landscape/evaluation#dim-brownfield) | ●●○ | @describe directive generates specs from existing code |
| [Modularity](/landscape/evaluation#dim-modularity) | ●●○ | Registry is extensible; Framework is more rigid |
| [Composability](/landscape/evaluation#dim-composability) | ●○○ | 1:1 mapping limits cross-component composition |
| [Cross-Cutting](/landscape/evaluation#dim-cross-cutting) | ●○○ | Team rules in Registry; limited formal support |
| [Reconcilability](/landscape/evaluation#dim-reconcilability) | ●●○ | @describe bootstraps specs from existing code |
| Domain Fit | | Component-level |

[Full evaluation framework](/landscape/evaluation)

*An initiative by [Auto](https://on.auto).*
