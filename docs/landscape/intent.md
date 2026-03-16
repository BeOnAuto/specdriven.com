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

## Capability Analysis

**[Development Velocity](/landscape/evaluation#dim-velocity).** Intent's multi-agent parallel execution is a genuine speed advantage. The coordinator breaks work into tasks that run simultaneously across services and repositories, which can reduce wall-clock time on large changes.

**[Spec Durability](/landscape/evaluation#dim-durability).** Living specs auto-update as agents work, which keeps them current but introduces a risk. If specs always reflect what was built rather than what was intended, they can quietly drift from the original requirements without anyone noticing.

**[Executability](/landscape/evaluation#dim-executability).** Specs update alongside implementation, but they do not independently verify correctness. There is no mechanism for a spec to prove that the system actually satisfies it. The verifier agent checks results, but the spec itself is not executable.

**[Accessibility](/landscape/evaluation#dim-accessibility).** Intent is developer-focused and assumes familiarity with the Context Engine and multi-agent workflows. Non-technical stakeholders would find it difficult to participate directly in the spec process.

**[Model Coherence](/landscape/evaluation#dim-coherence).** The Context Engine provides a form of cross-repository coherence by maintaining semantic understanding of the entire codebase. This is valuable for large systems, though coherence depends on the engine's accuracy rather than a formally unified model.

**[Traceability](/landscape/evaluation#dim-traceability).** Living specs maintain a connection between intent and implementation. However, the auto-update mechanism can blur the lineage between what was originally specified and what changed during implementation.

**[Agent Guidance](/landscape/evaluation#dim-agent-guidance).** The coordinator/implementor/verifier architecture provides strong, structured guidance to agents. Each agent has a well-defined role, and the coordinator ensures tasks are scoped and delegated clearly.

**[Portability](/landscape/evaluation#dim-portability).** BYOA support means you can plug in different agents, which is a plus. However, living specs depend on the Context Engine to function properly, so moving away from Augment Code's platform would be difficult.

**[Brownfield Readiness](/landscape/evaluation#dim-brownfield).** The Context Engine was built for existing codebases at scale (400,000+ files). This is one of Intent's core strengths, as it can reason about and navigate large, established systems without requiring a greenfield start.

**[Modularity](/landscape/evaluation#dim-modularity).** The multi-agent, multi-repo orchestration model supports modular work. Different agents can operate on different parts of the system. The architecture is flexible enough to scale across services.

**[Composability](/landscape/evaluation#dim-composability).** Cross-repo specs can compose through the Context Engine, which understands relationships between services. This works well for enterprise systems where changes span multiple repositories.

**[Cross-Cutting](/landscape/evaluation#dim-cross-cutting).** Cross-cutting concerns like security policies, logging, or error handling are not specifically addressed in the current offering. You would need to manage these through conventions rather than built-in mechanisms.

**[Reconcilability](/landscape/evaluation#dim-reconcilability).** This is where living specs shine. Because specs auto-reconcile with implementation and the Context Engine detects drift, the system actively works to keep specs and code in sync.

**[Scope](/landscape/evaluation#dim-scope).** Intent is enterprise-grade and designed to work across repos and domains. It handles large-scale, multi-service systems well. Smaller projects may find it more tooling than they need.

[Full evaluation framework](/landscape/evaluation)

*An initiative by [Auto](https://on.auto).*
