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

## Score Card

> Editorial assessment. [Suggest corrections](https://github.com/BeOnAuto/specdriven.com/issues)

| Dimension | Rating | Note |
|-----------|--------|------|
| [Development Velocity](/landscape/evaluation#dim-velocity) | ●●● | Lowest-friction entry point; fluid, not rigid |
| [Spec Durability](/landscape/evaluation#dim-durability) | ●○○ | Markdown drifts without verification |
| [Executability](/landscape/evaluation#dim-executability) | ○○○ | No executability mechanism |
| [Accessibility](/landscape/evaluation#dim-accessibility) | ●●○ | Low ceremony markdown readable by anyone |
| [Model Coherence](/landscape/evaluation#dim-coherence) | ●○○ | Per-change files with no unified model |
| [Traceability](/landscape/evaluation#dim-traceability) | ●○○ | Per-change organization helps but no formal trace |
| [Agent Guidance](/landscape/evaluation#dim-agent-guidance) | ●○○ | Slash commands provide light guidance |
| [Portability](/landscape/evaluation#dim-portability) | ●●● | Works with 20+ AI assistants; plain markdown |
| [Brownfield Readiness](/landscape/evaluation#dim-brownfield) | ●●● | Explore workflow specifically designed for existing code |
| [Modularity](/landscape/evaluation#dim-modularity) | ●○○ | Lightweight; minimal extension surface |
| [Composability](/landscape/evaluation#dim-composability) | ●○○ | Per-change specs with limited composition |
| [Cross-Cutting](/landscape/evaluation#dim-cross-cutting) | ●○○ | Not specifically addressed |
| [Reconcilability](/landscape/evaluation#dim-reconcilability) | ●●○ | Explore workflow helps bootstrap understanding of existing systems |
| Domain Fit | | Brownfield/iterative |

[Full evaluation framework](/landscape/evaluation)

*An initiative by [Auto](https://on.auto).*
