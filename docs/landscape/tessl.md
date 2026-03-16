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

The Registry solves a real, immediate problem (agent hallucination on libraries). The Framework's spec-as-source vision would be valuable if realized. The @test directives acknowledge the importance of testing (more than most tools in this space).

## Notable Limitations

The Framework is still in private beta. The 1:1 spec-to-file mapping may prove too rigid. Test linkage is a reference mechanism rather than executable verification. The spec points to a test file, but the spec itself doesn't prove its own correctness.

## Open Source

The SDD tile is open source. The Registry is free. The Framework is in closed beta.

## Links

[tessl.io](https://tessl.io)

**See also:** [Guy Podjarny](/people#guy-podjarny), [Timeline: AI-Driven Renaissance](/timeline#ai-renaissance)

## Capability Analysis

**[Development Velocity](/landscape/evaluation#dim-velocity).** The Registry provides an immediate velocity boost by eliminating time wasted on agent hallucinations about library APIs. The Framework adds more ceremony upfront, which slows initial development but aims to pay off through more predictable code generation.

**[Spec Durability](/landscape/evaluation#dim-durability).** The @test directives link specs to test files, which gives specs some grounding in verifiable behavior. However, this linkage is a reference rather than an intrinsic property of the spec, so the connection can break without warning if tests move or change.

**[Executability](/landscape/evaluation#dim-executability).** Specs reference tests via @test directives but do not self-verify. The spec points to a test file, but the spec format itself has no execution semantics. You cannot run a spec to confirm the system satisfies it.

**[Accessibility](/landscape/evaluation#dim-accessibility).** The .spec.md files are developer-facing and assume familiarity with the directive syntax and YAML frontmatter. Non-technical stakeholders would need help interpreting them. The Registry's usage specs are somewhat more approachable since they resemble documentation.

**[Model Coherence](/landscape/evaluation#dim-coherence).** The 1:1 spec-to-file mapping means each spec describes a single code file. There is no unified system model that ties specs together into a coherent picture of the whole application. Understanding the full system requires reading many individual specs.

**[Traceability](/landscape/evaluation#dim-traceability).** The 1:1 spec-to-code mapping and @generate directive create explicit, direct links between specs and implementation files. This makes traceability at the individual file level quite strong, though cross-component tracing is not supported.

**[Agent Guidance](/landscape/evaluation#dim-agent-guidance).** The Registry provides rich contextual guidance about library usage, which measurably reduces agent errors. The Framework's directives (@generate, @describe) give agents clear instructions, though the spec format itself is loose enough that agents still have considerable room for interpretation.

**[Portability](/landscape/evaluation#dim-portability).** The Registry is MCP-based and works across agents, which is a strong portability story. The Framework is more tightly coupled to Tessl's own tooling, though MCP compatibility helps. Plain .spec.md files are readable outside the ecosystem.

**[Brownfield Readiness](/landscape/evaluation#dim-brownfield).** The @describe directive generates specs from existing code, which provides a practical on-ramp for brownfield adoption. You can incrementally add specs to an existing codebase without rewriting anything.

**[Modularity](/landscape/evaluation#dim-modularity).** The Registry is extensible, letting teams add their own usage specs for internal libraries and conventions. The Framework is more rigid due to the 1:1 mapping constraint, which limits how you can structure specs for complex components.

**[Composability](/landscape/evaluation#dim-composability).** The 1:1 spec-to-file mapping limits cross-component composition. Each spec is self-contained, which makes it hard to express relationships between components or define behavior that spans multiple files.

**[Cross-Cutting](/landscape/evaluation#dim-cross-cutting).** The Registry supports team-wide rules and conventions, which is a form of cross-cutting concern management. The Framework has limited formal support for expressing system-wide policies or patterns that apply across specs.

**[Reconcilability](/landscape/evaluation#dim-reconcilability).** The @describe directive can bootstrap specs from existing code, making it straightforward to reconcile specs with an already-built system. This is one of the more practical brownfield features in the landscape.

**[Scope](/landscape/evaluation#dim-scope).** The Registry covers any language and framework, giving it broad scope. The Framework is more constrained, currently focused on component-level specs with a 1:1 file mapping that works best for well-structured, modular codebases.

[Full evaluation framework](/landscape/evaluation)

*An initiative by [Auto](https://on.auto).*
