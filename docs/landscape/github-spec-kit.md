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

## Capability Analysis

**[Development Velocity](/landscape/evaluation#dim-velocity).** The CLI scaffolds spec files quickly, giving teams a fast starting point. However, there is no spec-to-code automation, so the productivity gain is front-loaded in the planning phase rather than carried through to implementation.

**[Spec Durability](/landscape/evaluation#dim-durability).** Specs are plain markdown prose with no automated verification against the codebase. Without a mechanism to check freshness, specs tend to drift from reality over time.

**[Executability](/landscape/evaluation#dim-executability).** There is no executability mechanism. Specs serve as documentation and agent prompts, not as verifiable contracts that can be run against the system.

**[Accessibility](/landscape/evaluation#dim-accessibility).** The markdown format is readable by anyone, which is a real strength. The template structure does add some friction for non-technical contributors who may find the scaffolding conventions unfamiliar at first.

**[Model Coherence](/landscape/evaluation#dim-coherence).** The spec model is spread across separate files (spec.md, plan.md, tasks). Each file has a clear role, but they can diverge from each other since there is no formal link enforcing consistency.

**[Traceability](/landscape/evaluation#dim-traceability).** A natural flow exists from spec to plan to tasks, giving teams a conceptual trace through the development process. This trace is manual, though, and depends on the team keeping artifacts in sync.

**[Agent Guidance](/landscape/evaluation#dim-agent-guidance).** The constitution.md file and structured templates do a solid job of constraining agent behavior. Templates force agents to think about user needs before jumping to code, and the constitution sets boundaries the agent must respect.

**[Portability](/landscape/evaluation#dim-portability).** This is Spec Kit's standout quality. It is agent-agnostic, repo-native, and MIT licensed. You can use it with any IDE and any coding agent, making it one of the most portable options in the landscape.

**[Brownfield Readiness](/landscape/evaluation#dim-brownfield).** Brownfield demos exist and the tool can be dropped into existing projects. That said, the workflow is primarily designed with new feature development in mind rather than retroactively specifying existing systems.

**[Modularity](/landscape/evaluation#dim-modularity).** Community extensions for Jira and Azure DevOps integration show a healthy plugin story. The open-source model encourages teams to build their own extensions when needed.

**[Composability](/landscape/evaluation#dim-composability).** Specs are scoped per feature with limited cross-referencing between them. For systems with features that interact heavily, teams need to manage those relationships manually.

**[Cross-Cutting](/landscape/evaluation#dim-cross-cutting).** The constitution.md file handles project-wide principles like testing strategy, architectural constraints, and coding standards. This is a clean approach that keeps cross-cutting concerns in one place.

**[Reconcilability](/landscape/evaluation#dim-reconcilability).** The /analyze command checks for consistency across spec artifacts, which is a step in the right direction. It can surface issues but cannot automatically reconcile them, so fixing drift is still a manual process.

**[Scope](/landscape/evaluation#dim-scope).** Spec Kit is domain-agnostic and works across any project type. It makes no assumptions about your stack, cloud provider, or application domain, which gives it the widest possible applicability.

[Full evaluation framework](/landscape/evaluation)

*An initiative by [Auto](https://on.auto).*
