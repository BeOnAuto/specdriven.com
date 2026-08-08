---
title: OpenSpec — Tool Profile
description: An editorial profile of OpenSpec's change-oriented specification workflow.
prev:
  text: Kiro
  link: /landscape/kiro
next:
  text: Tessl
  link: /landscape/tessl
image: /images/pages/landscape/openspec.png
---

# OpenSpec

![OpenSpec](/images/pages/landscape/openspec.png)

> **Last reviewed: August 7, 2026.** This profile is based on the project’s official repository and documentation.

## What it is

OpenSpec is an MIT-licensed, lightweight specification workflow maintained by Fission AI. It organizes work around explicit changes rather than requiring a complete system specification before a team can begin.

## Documented workflow

A change can contain:

- a proposal explaining why the change exists
- specification updates and scenarios
- design decisions
- implementation tasks

The current command family supports exploring a problem, proposing a change, applying it, verifying the implementation, and archiving the completed change. OpenSpec publishes integrations for a broad range of coding agents.

## Relationship to verification

`/opsx:verify` asks the workflow to check implementation against the change artifacts and tasks. This is a useful conformance step, but it is agent-mediated workflow verification rather than a formal executable semantics for every Markdown statement.

## Editorial assessment

**Strengths:** low ceremony, portable repository files, explicit change history, brownfield-friendly exploration, and broad agent support.

**Limitations:** the system-wide product picture is distributed across accumulated changes and maintained specs. Coherence and conformance depend on workflow discipline and the quality of agent checks.

**Best fit:** teams adding structured specification and change control to an existing coding-agent workflow without adopting a large platform.

## Primary sources

- [OpenSpec repository and documentation](https://github.com/Fission-AI/OpenSpec)

[Full evaluation framework →](/landscape/evaluation)
