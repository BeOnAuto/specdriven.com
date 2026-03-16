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

## Capability Analysis

**[Development Velocity](/landscape/evaluation#dim-velocity).** The two-mode approach helps teams pick the right level of structure for each task. That said, spec mode adds noticeable overhead for small, well-understood changes where a quick prompt would suffice.

**[Spec Durability](/landscape/evaluation#dim-durability).** Specs are markdown prose with no automated verification against the codebase. Over time, specs can drift from what was actually built without anyone noticing.

**[Executability](/landscape/evaluation#dim-executability).** Acceptance criteria live in requirements.md as documentation, not as executable tests. There is no mechanism to run specs against code to confirm they still hold true.

**[Accessibility](/landscape/evaluation#dim-accessibility).** Non-technical users have demonstrated building production prototypes using spec mode. The structured workflow (requirements, design, tasks) maps well to how product people already think about features.

**[Model Coherence](/landscape/evaluation#dim-coherence).** The spec model splits across three separate markdown files (requirements, design, tasks). Each file serves a clear purpose, but there is no formal link between them, so inconsistencies can creep in as changes are made.

**[Traceability](/landscape/evaluation#dim-traceability).** There is a natural chain from requirements to design to tasks, and steering files add contextual guardrails. The trace is conceptual rather than enforced, so it depends on discipline to maintain.

**[Agent Guidance](/landscape/evaluation#dim-agent-guidance).** This is where Kiro stands out. Agent Hooks actively enforce rules on file events like save and commit, making it the only tool in the landscape with this kind of real-time enforcement. Steering files add another layer of persistent guidance.

**[Portability](/landscape/evaluation#dim-portability).** Kiro is a VS Code fork tightly coupled to the AWS ecosystem. Teams not on AWS, or those using other editors, will find limited value in the platform-specific integrations.

**[Brownfield Readiness](/landscape/evaluation#dim-brownfield).** You can use Kiro on existing projects, and the vibe coding mode works without any spec setup. Spec mode itself leans toward greenfield feature development rather than retrofitting specs onto legacy code.

**[Modularity](/landscape/evaluation#dim-modularity).** The Powers ecosystem and MCP server support provide a plugin-style architecture. Teams can add domain-specific tooling, though the catalog is still growing.

**[Composability](/landscape/evaluation#dim-composability).** Specs are scoped per feature with limited ability to compose or reference across features. Complex systems that span multiple spec files require manual coordination.

**[Cross-Cutting](/landscape/evaluation#dim-cross-cutting).** Steering files handle cross-cutting concerns like compliance standards, security policies, and coding conventions. These apply globally, which is a solid approach for enterprise teams.

**[Reconcilability](/landscape/evaluation#dim-reconcilability).** There is no mechanism to detect or resolve divergence between specs and implementation. Once code drifts from what was specified, the specs become stale documentation.

**[Scope](/landscape/evaluation#dim-scope).** Kiro covers a broad range of use cases within the AWS ecosystem. The VS Code fork and AWS-centric integrations limit its reach for teams working outside that stack.

[Full evaluation framework](/landscape/evaluation)

*An initiative by [Auto](https://on.auto).*
