---
prev:
  text: Kiro
  link: /landscape/kiro
next:
  text: Tessl
  link: /landscape/tessl
---

# OpenSpec (Fission AI)

**What it is:** An open-source, lightweight spec framework emphasizing fluid, iterative workflows.

**The problem it solves:** Low-ceremony spec workflow for iterative changes, especially in existing (brownfield) codebases.

## How It Works

OpenSpec uses a proposal-first workflow. The primary command is `/opsx:propose`, which creates a change folder containing:

- **proposal.md**: Why you're doing this, what's changing
- **specs/**: Requirements and scenarios
- **design.md**: Technical approach
- **tasks.md**: Implementation checklist

Key philosophy: **fluid, not rigid**. No strict phase gates. You can update any artifact at any time. This contrasts with Spec Kit's more structured sequential flow.

Changes are organized in an `openspec/changes/` directory, each with YAML frontmatter.

The "explore" workflow helps teams understand existing systems before modifying them. This makes OpenSpec particularly useful for brownfield adoption.

## Specification Format

Markdown files with YAML frontmatter, organized per-change.

## Agent Support

Works with 20+ AI assistants via slash commands: Claude Code, Cursor, Copilot, Gemini CLI, Windsurf, and others.

## Notable Strengths

Lowest-friction entry point among structured spec tools. Brownfield-friendly by design. Explicitly supports incremental adoption. The explore workflow is genuinely useful for understanding existing code before changing it.

## Notable Limitations

As with other markdown-based approaches, there's no executability. Specs are documentation, not verifiable contracts. The lightweight philosophy means less guardrailing compared to more opinionated tools.

## Open Source

Yes. [GitHub](https://github.com/Fission-AI/OpenSpec)

## Capability Analysis

**[Development Velocity](/landscape/evaluation#dim-velocity).** OpenSpec has the lowest friction entry point among structured spec tools. The fluid, non-rigid workflow means teams can start using it immediately without learning elaborate processes or phase gates.

**[Spec Durability](/landscape/evaluation#dim-durability).** Specs are plain markdown with no verification mechanism, so they drift over time unless teams actively maintain them. There is nothing built into the format that alerts you when a spec no longer reflects reality.

**[Executability](/landscape/evaluation#dim-executability).** There is no executability mechanism. Specs are documentation artifacts, not verifiable contracts. You cannot run a spec to confirm the system satisfies it.

**[Accessibility](/landscape/evaluation#dim-accessibility).** The low-ceremony markdown format is readable by anyone, technical or not. The barrier to entry is about as low as it gets for structured spec tools, though the slash-command workflow assumes some developer tooling familiarity.

**[Model Coherence](/landscape/evaluation#dim-coherence).** Each change gets its own folder with its own spec files, but there is no unified system model tying everything together. As changes accumulate, understanding the full picture requires manually connecting the dots across change folders.

**[Traceability](/landscape/evaluation#dim-traceability).** The per-change folder organization helps you find what was specified for a given change. However, there is no formal traceability mechanism linking specs to code or tracking which parts of the system a spec affects.

**[Agent Guidance](/landscape/evaluation#dim-agent-guidance).** Slash commands provide light guidance to agents, pointing them toward the right files and workflows. The guidance is minimal compared to more opinionated tools, which is a deliberate trade-off for flexibility.

**[Portability](/landscape/evaluation#dim-portability).** OpenSpec works with 20+ AI assistants and uses plain markdown files. This makes it one of the most portable options available. You are not locked into any particular agent or platform.

**[Brownfield Readiness](/landscape/evaluation#dim-brownfield).** The explore workflow is specifically designed for understanding existing code before changing it. This is one of OpenSpec's standout capabilities. Teams can adopt it gradually on an existing codebase without restructuring anything.

**[Modularity](/landscape/evaluation#dim-modularity).** The tool is lightweight with a minimal extension surface. It does what it does well, but there is not much to extend or customize beyond the basic change-folder structure.

**[Composability](/landscape/evaluation#dim-composability).** Per-change specs are self-contained, which makes them easy to understand individually but difficult to compose across changes. There is limited support for expressing how specs relate to or depend on each other.

**[Cross-Cutting](/landscape/evaluation#dim-cross-cutting).** Cross-cutting concerns are not specifically addressed. If you need to express system-wide rules (security policies, logging standards, error handling patterns), you would need to manage those outside of OpenSpec's structure.

**[Reconcilability](/landscape/evaluation#dim-reconcilability).** The explore workflow helps bootstrap understanding of existing systems, which is a useful starting point for reconciling specs with reality. Beyond that initial exploration, keeping specs aligned with code is a manual effort.

**[Scope](/landscape/evaluation#dim-scope).** OpenSpec is domain-agnostic and its lightweight approach works in virtually any context. Whether you are building a web app, a CLI tool, or a data pipeline, the framework adapts without imposing domain-specific assumptions.

[Full evaluation framework](/landscape/evaluation)

*An initiative by [Auto](https://on.auto).*
