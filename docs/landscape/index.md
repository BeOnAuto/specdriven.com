---
title: The Spec-Driven Tool Landscape
description: An editorial comparison of current tools that use specifications to guide AI-assisted software development.
prev:
  text: Approaches and Formats
  link: /dialects/
next:
  text: Evaluation Framework
  link: /landscape/evaluation
image: /images/pages/landscape/index.png
aside: false
---

# The Spec-Driven Tool Landscape

![The Spec-Driven Tool Landscape](/images/pages/landscape/index.png)

The current wave of spec-driven tools does not share one definition or workflow. Some turn a brief into planning artifacts. Some coordinate coding agents. Some maintain a product or codebase model. Some use tests, verifier agents, schemas, or evaluations to check selected results.

The table describes those relationships without treating “executable” as a binary badge.

## Maintained profiles

<div class="table-scroll">

| Tool | Primary maintained artifact | Main workflow | Relationship to verification | Availability |
| --- | --- | --- | --- | --- |
| [Auto](/landscape/auto) | Approved product model | Define, review, approve, build, check | Checks supported behavior against the approved scope; coverage depends on what has been modeled and supported | Commercial |
| [GitHub Spec Kit](/landscape/github-spec-kit) | Repository Markdown artifacts | Specify, plan, tasks, implement | Guides implementation and supports quality checklists; Markdown has no universal execution semantics | MIT open source |
| [Intent](/landscape/intent) | Living specifications plus code context | Coordinate agents across a workspace | Uses verifier agents and implementation feedback; the spec is not an independent executable contract | Commercial |
| [Kiro](/landscape/kiro) | Requirements, design, and task documents | Plan, execute, verify between tasks | Agents can run tests and verification steps during delivery; the documents themselves are not executable | Commercial tools with public specs documentation |
| [OpenSpec](/landscape/openspec) | Change proposals, specs, design, and tasks | Explore, propose, apply, verify, archive | `/opsx:verify` compares implementation with change artifacts; this is workflow verification, not a formal executable spec language | MIT open source |
| [Tessl](/landscape/tessl) | Agent skills, registry packages, and evaluations | Install and improve reusable agent context | Current product uses evaluations for agent capabilities; its earlier spec-as-source Framework was paused | Commercial platform with public packages and tooling |

</div>

## Three relationships worth separating

### Specifications guide implementation

The specification is read by a person or agent and used to decide what to build. Most Markdown-first tools begin here. The value is planning, persistence, and a better handoff; conformance still depends on review and testing.

### Specifications are reconciled with implementation

The workflow compares the maintained artifact with code or observed results and helps resolve divergence. This may use an agent, change review, generated documentation, or explicit approval states. Reconciliation is useful, but it can also blur intended behavior with whatever happened to be built.

### Specifications drive machine checks

Selected expectations have executable semantics through tests, schemas, model checking, contracts, or evaluations. A passing check supports the encoded claim. It does not establish that every important behavior was specified or that the underlying decision was correct.

Many products combine all three relationships in different proportions.

## How to read the profiles

Each maintained profile separates:

- **Documented capability:** what the vendor or project says the current product supports.
- **Editorial assessment:** what follows from the published workflow, including limitations and unresolved questions.
- **Primary sources:** official documentation, changelogs, and repositories readers can inspect.

Marketing claims are not treated as independent evidence. Superlatives such as “the only” or “fully verified” are excluded unless a narrowly defined comparison can support them.

The landscape changes quickly. A review date is a snapshot, not a promise that every product will look the same next month.

## Other projects worth examining

This site does not maintain a full profile for every adjacent project. Useful starting points include:

- [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD), a multi-agent planning and delivery framework.
- [IntentSpec](https://intentspec.org), a lightweight `intent.md` convention with schema validation.
- [cc-sdd](https://github.com/gotalab/cc-sdd), a community implementation of steering and spec workflows for several coding agents.
- [Allium](https://github.com/juxt/allium), a formal language for describing behavioral intent.
- [Google Code Wiki](https://codewiki.google), generated repository documentation rather than a forward product specification.

Inclusion means the project is relevant to the field, not that Sam endorses it.

[Read the evaluation framework →](/landscape/evaluation)

[Suggest a correction or addition →](/community#suggest-a-change)
