---
prev:
  text: GitHub Spec Kit
  link: /landscape/github-spec-kit
next:
  text: Kiro
  link: /landscape/kiro
---

# Intent (Augment Code)

**What it is:** A developer workspace with "living specs" and multi-agent orchestration, built on Augment Code's Context Engine.

**The problem it solves:** Cross-service spec synchronization and multi-agent coordination for large, complex codebases.

## How It Works

Intent introduces **living specs**, specifications that update as agents implement features. When an agent completes work, the spec updates to reflect what was actually built. When requirements change, updates propagate to all active agents.

Multi-agent architecture:
- **Coordinator**: Breaks down specs into tasks, delegates to specialists
- **Implementors**: Execute tasks in parallel across services and repositories
- **Verifier**: Checks results against the spec

The **Context Engine** maintains persistent understanding of the entire codebase (reportedly 400,000+ files), providing semantic search that surfaces functionally equivalent code and prevents duplication.

## Specification Format

Living markdown specs that auto-update during implementation. The spec evolves as a shared artifact between human intent and agent execution.

## Agent Support

BYOA (Bring Your Own Agent). Supports Claude Code, Codex, OpenCode alongside native Auggie agents.

## Notable Strengths

The living spec concept addresses the fundamental problem of spec drift. Cross-repository architectural understanding is useful for enterprise-scale systems. Multi-agent orchestration with parallel execution.

## Notable Limitations

Auto-updating specs risk blurring the line between "what we intended" and "what we happened to build." Living specs could become retrospective documentation rather than forward-looking intent if not carefully managed. Enterprise pricing may be prohibitive for smaller teams.

## Links

[augmentcode.com/product/intent](https://www.augmentcode.com/product/intent)

## Score Card

> Editorial assessment. [Suggest corrections](https://github.com/BeOnAuto/specdriven.com/issues)

| Dimension | Rating | Note |
|-----------|--------|------|
| [Development Velocity](/landscape/evaluation#dim-velocity) | ●●● | Multi-agent parallel execution across services |
| [Spec Durability](/landscape/evaluation#dim-durability) | ●●○ | Living specs auto-update; risk of becoming retrospective |
| [Executability](/landscape/evaluation#dim-executability) | ○○○ | Specs update but do not independently verify |
| [Accessibility](/landscape/evaluation#dim-accessibility) | ●○○ | Developer-focused; requires Context Engine understanding |
| [Model Coherence](/landscape/evaluation#dim-coherence) | ●●○ | Context Engine provides coherence across repos |
| [Traceability](/landscape/evaluation#dim-traceability) | ●●○ | Living specs maintain connection; auto-update can blur lineage |
| [Agent Guidance](/landscape/evaluation#dim-agent-guidance) | ●●● | Coordinator/implementor/verifier architecture |
| [Portability](/landscape/evaluation#dim-portability) | ●○○ | BYOA supported but living specs depend on Context Engine |
| [Brownfield Readiness](/landscape/evaluation#dim-brownfield) | ●●● | Context Engine built for 400k+ file codebases |
| [Modularity](/landscape/evaluation#dim-modularity) | ●●○ | Multi-agent, multi-repo orchestration |
| [Composability](/landscape/evaluation#dim-composability) | ●●○ | Cross-repo specs compose through Context Engine |
| [Cross-Cutting](/landscape/evaluation#dim-cross-cutting) | ●○○ | Not specifically addressed in current offering |
| [Reconcilability](/landscape/evaluation#dim-reconcilability) | ●●● | Living specs auto-reconcile; Context Engine detects drift |
| Domain Fit | | Enterprise/multi-repo |

[Full evaluation framework](/landscape/evaluation)

*An initiative by [Auto](https://on.auto).*
