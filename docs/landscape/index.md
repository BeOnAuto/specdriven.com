---
prev:
  text: Common Objections
  link: /objections
next:
  text: Auto
  link: /landscape/auto
---

# The Spec-Driven Tool Landscape

> The spec-driven development space is young, fragmented, and evolving rapidly. This is an honest catalog of who's doing what, presented as a community resource.
>
> Building something that should be listed here? [Submit a PR](https://github.com/BeOnAuto/specdriven.com) or [open an issue](https://github.com/BeOnAuto/specdriven.com/issues).

## The Current Wave {#current-wave}

Multiple tools launched in 2025 and 2026, each tackling a different facet of the spec-driven problem. Some focus on guiding AI agents. Others focus on team collaboration. A few try to make specs executable. No single tool does everything, and the landscape is fragmenting as the community discovers what actually works.

Different tools serve different audiences and make different trade-offs. A solo developer building a greenfield prototype has different needs than an enterprise team modernizing a legacy system. The tool that's perfect for one might be completely wrong for the other.

This page summarizes every tool we're tracking. The top six have dedicated profile pages with deeper analysis. The rest are profiled briefly here.

## Tool Overview {#tool-overview}

<div class="table-scroll">

| Tool                                                          | Creator/Org      | Spec Format             | Executable? | Open Source? | Primary Domain         |
| ------------------------------------------------------------- | ---------------- | ----------------------- | ----------- | ------------ | ---------------------- |
| [Auto](/landscape/auto)                                       | Auto             | Model-based             | Yes         | Partial      | Line-of-business apps  |
| [BMAD-METHOD ↗](https://github.com/bmad-code-org/BMAD-METHOD) | Community        | Multi-artifact markdown | No          | Yes          | Full SDLC              |
| [cc-sdd](#other-notable)                                      | Community        | Markdown workflow       | No          | Yes          | Multi-agent SDD        |
| [Cursor Rules](#cursor-rules)                                 | Cursor           | MDC files               | No          | N/A          | Convention enforcement |
| [GitHub Spec Kit](/landscape/github-spec-kit)                 | GitHub/Microsoft | Markdown templates      | No          | Yes (MIT)    | General purpose        |
| [Google Code Wiki ↗](https://codewiki.google)                 | Google           | AI-generated docs       | No          | No           | Documentation          |
| [Intent](/landscape/intent)                                   | Augment Code     | Living markdown         | No          | No           | Enterprise/multi-repo  |
| [IntentSpec ↗](https://intentspec.org)                        | Community        | Markdown + YAML         | No          | Yes          | Minimal/starting point |
| [Kiro](/landscape/kiro)                                       | AWS              | Markdown (EARS)         | No          | Yes          | AWS-native apps        |
| [OpenSpec](/landscape/openspec)                               | Fission AI       | Markdown + YAML         | No          | Yes          | Brownfield/iterative   |
| [Pre.dev](#other-notable)                                     | Pre.dev          | Transferable specs      | No          | No           | Cross-tool specs       |
| [Tessl](/landscape/tessl)                                     | Tessl            | .spec.md directives     | Partial     | Partial      | Component-level        |

</div>

## The Executability Gap {#the-executability-gap}

The most striking observation about the current wave is that nearly every new tool has regressed from the executable specification achievement of the BDD era. Most use markdown prose. Readable, yes. Verifiable? No. The hard-won lesson that specifications should prove themselves has been largely forgotten in the rush to address AI-driven development.

The BDD and Specification by Example tradition (see the [Timeline](/timeline#agile-revolution)) established that specs should be executable. When a specification passes, it's not just documentation. It's verified truth. FIT, Cucumber, and RSpec all proved this worked in production at scale.

Today, Kiro, Spec Kit, OpenSpec, BMAD, and IntentSpec all use markdown prose. Tessl has `@test` directives that reference test files but don't make specs intrinsically executable. Intent has living specs that update alongside implementation but don't verify correctness independently.

This matters because markdown specs drift. Without automated verification, there's no guarantee your specs still describe your system. A spec that was accurate three months ago might be completely wrong today, and nobody knows until something breaks. For more on why this matters, see [Quality and Specifications](/quality/).

## What Practitioners Are Saying {#practitioner-feedback}

The spec-driven approach is being tested in the real world. Here's what teams are finding.

**Martin Fowler's analysis** categorizes spec-driven tools into three patterns: spec-first (write specs before code), spec-anchored (specs guide but don't generate), and spec-as-source (specs are the source of truth that drives generation). He draws an important parallel to Model-Driven Development, noting that MDD failed partly because the models were too rigid for real-world complexity. The question for this generation: do LLMs solve that flexibility problem, or do they introduce new ones?

**Tessl's "build it twice" experiment** produced one of the strongest before/after comparisons. The same application built with vibe coding silently returned fabricated data. The spec-driven version caught the issue because the specifications explicitly defined correct behavior. Their blog post "My Coding Agent Lied to Me" documents the comparison.

**Kiro's Delta Airlines showcase** at AWS re:Invent 2025 demonstrated non-coding business owners generating production prototypes using structured specifications. This validates that spec-driven tools can serve non-developers, not just engineering teams.

**GitHub Spec Kit's demo repos** cover greenfield (.NET, Spring Boot + React) and brownfield (ASP.NET) scenarios. Critical reviews from Scott Logic found "a sea of markdown" and "unexpected friction," while Marmelab titled their review "The Waterfall Strikes Back." These critiques highlight real adoption barriers worth watching.

**Prezi Engineering's case study** ("We Tried SDD So You Don't Have To") reported mixed results. Their team found that developers touching code directly became "an antipattern" in spec-driven workflows, a finding that challenges assumptions about how the approach integrates with existing development culture.

These are early signals, not definitive proof. The tools are maturing rapidly, and the landscape will look different in six months.

## The Evaluation Framework {#evaluation-framework}

With so many tools approaching from different angles, you need a way to evaluate what matters for your context. We've defined capability dimensions (development velocity, spec durability, executability, accessibility, model coherence, traceability, agent guidance, portability, brownfield readiness, modularity, composability, cross-cutting expressiveness, reconcilability, and scope) plus domain fit indicators to evaluate tools.

Each of the six profiled tools has a per-dimension analysis on its own page, describing how the tool handles each capability.

[See the full Evaluation Framework](/landscape/evaluation)

## Other Tool Profiles {#other-tools}

### BMAD-METHOD {#bmad-method}

An open-source multi-agent framework that simulates an entire agile team using specialized AI personas: Analyst, Product Manager, Architect, Developer, QA, and Scrum Master. Each agent is defined as an "Agent-as-Code" markdown file. The framework enforces a structured lifecycle from Analysis through Planning, Solutioning, and Implementation. Strong focus on traceability through Git-versioned artifacts. Works with Claude Code, Cursor, and VS Code.

[GitHub](https://github.com/bmad-code-org/BMAD-METHOD)

### IntentSpec {#intentspec}

A minimalist open standard. You commit a single `intent.md` file alongside your code with objectives, expected outcomes, constraints, and edge cases. YAML frontmatter is validated against a JSON Schema. Three steps: define your `intent.md`, reference it in your agent's context, and add a GitHub Action for validation. Zero lock-in, but it can't scale to complex systems with many interacting components.

[intentspec.org](https://intentspec.org)

### Google Code Wiki {#google-code-wiki}

AI-powered living documentation. It scans entire repositories using Gemini, generating structured wikis with architecture diagrams, class diagrams, and sequence diagrams. The wiki regenerates after every commit and includes a chat agent for answering questions about the codebase. It explains what code does and how it works, but not why decisions were made. Public preview at codewiki.google for open-source repos.

### Cursor Rules {#cursor-rules}

Project-level AI behavior configuration within the Cursor IDE. Rules live in `.cursor/rules/` with four activation patterns: always-applied, auto-attached (by file glob), agent-requested, and manual. Rules are passive guidance, not active enforcement. There's a large community ecosystem of shared rules. Not a spec tool in the strict sense, but it shapes how AI generates code for your project.

### Other Notable Approaches {#other-notable}

The landscape is fragmenting rapidly. Additional tools worth watching:

- **Pre.dev**: A system for holding and evolving specs that survive tool switching. Specs as a portable asset, not tied to any single agent or IDE.
- **DeepWiki** (Devin): AI-generated documentation for repositories, similar in concept to Google Code Wiki.
- **cc-sdd**: A community project bringing Kiro-style steering, spec, design, and tasks workflow to Claude Code, Codex, and other tools.
- **MetaGPT**: Multi-agent framework (44.8k GitHub stars) that converts requirements into complete software projects through role-based agent collaboration.

---

> **Building something in this space?** This list is intentionally incomplete and community-maintained. [Submit a PR](https://github.com/BeOnAuto/specdriven.com) to add your tool.

_Built by the team behind [Auto](https://on.auto), for the spec-driven community._
