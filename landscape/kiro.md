---
prev:
  text: Intent
  link: /landscape/intent
next:
  text: OpenSpec
  link: /landscape/openspec
---

# Kiro (AWS)

**What it is:** An agentic IDE built on VS Code's open-source codebase, with spec-driven development as a core feature. Developed by AWS.

**The problem it solves:** Structured spec workflow inside the developer's IDE, with enterprise guardrails and AWS-native integration.

## How It Works

Kiro offers two modes: "Vibe coding" (classic prompt-to-code) and "Spec mode." In Spec mode, development follows a three-phase workflow:

- **requirements.md**: User stories with acceptance criteria using EARS (Easy Approach to Requirements Syntax)
- **design.md**: Technical architecture, components, data models, interfaces
- **tasks.md**: Checklist of implementation tasks

Distinctive features:

- **Agent Hooks**: Automated workflows triggered by file events (save, commit, delete). Auto-generate tests, update docs, run security scans. This is active enforcement, not passive guidance.
- **Steering Files**: Markdown docs describing compliance requirements, security standards, coding conventions. AI references these automatically.
- **Powers**: Curated repository of pre-packaged MCP servers and domain-specific tooling. AWS provides Powers for CloudWatch, Aurora, Bedrock, and other services.
- **CLI**: Terminal-based agentic development with conversation persistence.
- **Deep AWS Integration**: CloudWatch, Lambda, DynamoDB, IAM as first-class citizens.

## Specification Format

Markdown files with structured sections. Prose-based, not executable. Acceptance criteria function as documentation rather than automatically verifiable contracts.

## Notable Strengths

Agent Hooks provide active enforcement (unique in the landscape). Deep AWS integration for teams on that stack. Two-mode approach lets teams gradually adopt spec-driven practices. Open source.

## Notable Limitations

Some developers report spec mode feels heavy for small tasks. AWS-native focus limits appeal for non-AWS teams. Model selection is limited compared to agent-agnostic tools. Specs are not executable.

## Open Source

Yes. [kiro.dev](https://kiro.dev)

**See also:** [Timeline: AI-Driven Renaissance](/timeline#ai-renaissance)

## Score Card

> Editorial assessment. [Suggest corrections](https://github.com/BeOnAuto/specdriven.com/issues)

| Dimension | Rating | Note |
|-----------|--------|------|
| [Development Velocity](/landscape/evaluation#dim-velocity) | ●●○ | Two modes help; spec mode adds overhead for small tasks |
| [Spec Durability](/landscape/evaluation#dim-durability) | ●○○ | Markdown prose with no automated verification |
| [Executability](/landscape/evaluation#dim-executability) | ○○○ | Acceptance criteria are documentation, not tests |
| [Accessibility](/landscape/evaluation#dim-accessibility) | ●●● | Non-coders demonstrated building production prototypes |
| [Model Coherence](/landscape/evaluation#dim-coherence) | ●○○ | Three separate markdown files (requirements/design/tasks) |
| [Traceability](/landscape/evaluation#dim-traceability) | ●●○ | requirements to design to tasks chain; steering files add context |
| [Agent Guidance](/landscape/evaluation#dim-agent-guidance) | ●●● | Agent Hooks provide active enforcement (unique in landscape) |
| [Portability](/landscape/evaluation#dim-portability) | ●○○ | VS Code fork with AWS-centric ecosystem |
| [Brownfield Readiness](/landscape/evaluation#dim-brownfield) | ●●○ | Usable on existing projects; spec mode is greenfield-leaning |
| [Modularity](/landscape/evaluation#dim-modularity) | ●●○ | Powers ecosystem and MCP server support |
| [Composability](/landscape/evaluation#dim-composability) | ●○○ | Per-feature specs with limited composition |
| [Cross-Cutting](/landscape/evaluation#dim-cross-cutting) | ●●○ | Steering files handle compliance and security standards |
| [Reconcilability](/landscape/evaluation#dim-reconcilability) | ○○○ | No reconciliation mechanism |
| Domain Fit | | AWS-native applications |

[Full evaluation framework](/landscape/evaluation)

*An initiative by [Auto](https://on.auto).*
