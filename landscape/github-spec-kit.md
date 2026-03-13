---
prev:
  text: Auto
  link: /landscape/auto
next:
  text: Intent
  link: /landscape/intent
---

# GitHub Spec Kit (Microsoft/GitHub)

**What it is:** An open-source CLI toolkit and set of templates for structured spec-driven development. Developed by GitHub (Microsoft).

**The problem it solves:** A portable, repo-native spec workflow that works with whatever coding agent you already use, without locking you into a proprietary IDE.

## How It Works

The `specify` CLI (Python-based) scaffolds a `.specify` folder with templates and agent-specific prompt files. Three phases:

- **/specify**: Define the feature in spec.md (what and why, not how)
- **/plan**: Create plan.md with architecture, data models, dependencies
- **/tasks**: Break into actionable, testable tasks by user story

Additional commands:
- **/clarify**: Structured clarification with up to 5 targeted questions
- **/analyze**: Non-destructive cross-artifact consistency check

Key concept: **constitution.md** establishes non-negotiable principles (testing approaches, architectural constraints). Acts as persistent rules the AI must respect.

## Specification Format

Markdown files with structured templates that constrain LLM behavior. Templates force the AI to focus on user needs rather than jumping to implementation. Ambiguities marked with `[NEEDS CLARIFICATION]` tags.

## Agent Support

Agent-agnostic by design. Works with GitHub Copilot, Claude Code, Gemini CLI, Cursor, Windsurf, Kilo Code, Roo Code, Tabnine, and others.

## Notable Strengths

Everything is repo-native markdown and scripts. No proprietary platform, no lock-in. Portable across IDEs and agents. Active community with extensions (Jira, Azure DevOps integrations).

## Notable Limitations

Specs are prose markdown with no executability. No formal mechanism to detect when implementation diverges from spec. The separation of functional requirements from technical details is difficult for many teams to maintain in practice.

## Open Source

Yes, MIT license. [GitHub](https://github.com/github/spec-kit)

**See also:** [Timeline: AI-Driven Renaissance](/timeline#ai-renaissance)

## Score Card

> Editorial assessment. [Suggest corrections](https://github.com/BeOnAuto/specdriven.com/issues)

| Dimension | Rating | Note |
|-----------|--------|------|
| [Development Velocity](/landscape/evaluation#dim-velocity) | ●●○ | Quick scaffold; no spec-to-code automation |
| [Spec Durability](/landscape/evaluation#dim-durability) | ●○○ | Markdown prose drifts without verification |
| [Executability](/landscape/evaluation#dim-executability) | ○○○ | No executability mechanism |
| [Accessibility](/landscape/evaluation#dim-accessibility) | ●●○ | Readable markdown; template structure adds some friction |
| [Model Coherence](/landscape/evaluation#dim-coherence) | ●○○ | Separate spec/plan/tasks files can diverge |
| [Traceability](/landscape/evaluation#dim-traceability) | ●●○ | spec to plan to tasks flow exists but is manual |
| [Agent Guidance](/landscape/evaluation#dim-agent-guidance) | ●●○ | constitution.md + templates constrain agent behavior |
| [Portability](/landscape/evaluation#dim-portability) | ●●● | Agent-agnostic, repo-native, MIT licensed |
| [Brownfield Readiness](/landscape/evaluation#dim-brownfield) | ●●○ | Brownfield demos exist but not primary focus |
| [Modularity](/landscape/evaluation#dim-modularity) | ●●○ | Community extensions for Jira, Azure DevOps |
| [Composability](/landscape/evaluation#dim-composability) | ●○○ | Per-feature specs with limited cross-referencing |
| [Cross-Cutting](/landscape/evaluation#dim-cross-cutting) | ●●○ | constitution.md handles project-wide principles |
| [Reconcilability](/landscape/evaluation#dim-reconcilability) | ●○○ | /analyze checks consistency but cannot reconcile |
| Domain Fit | | General purpose |

[Full evaluation framework](/landscape/evaluation)

*An initiative by [Auto](https://on.auto).*
