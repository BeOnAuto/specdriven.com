---
title: Kiro — Tool Profile
description: An editorial profile of Kiro's requirements, design, tasks, and agent delivery workflow.
prev:
  text: Intent
  link: /landscape/intent
next:
  text: OpenSpec
  link: /landscape/openspec
image: /images/pages/landscape/kiro.png
---

# Kiro

![Kiro](/images/pages/landscape/kiro.png)

> **Last reviewed: August 7, 2026.** This profile is based on Kiro’s official documentation.

## What it is

Kiro is an agentic development environment and CLI with a built-in specification workflow. It turns a feature description into maintained requirements, design, and task documents, then lets agents execute the tasks within the same environment.

## Documented workflow

Kiro’s current specs workflow separates:

1. **Requirements**, commonly written with EARS-style acceptance statements.
2. **Design**, including architecture and technical decisions.
3. **Tasks**, the implementation plan.
4. **Execution and verification**, with agents working through tasks and running checks between them.

Kiro documents the same specifications across its desktop, web, and CLI surfaces.

## Relationship to verification

Agents can run tests and verification steps while completing tasks. The requirements and design Markdown are not themselves an executable language. Confidence depends on the checks generated or selected for the project and on whether they represent the intended behavior.

## Editorial assessment

**Strengths:** an integrated path from requirement to implementation, structured requirements, steering context, and verification within the delivery loop.

**Limitations:** the workflow primarily serves developers inside Kiro’s product surface. Markdown artifacts still require maintenance, and the available checks do not make every requirement automatically verifiable.

**Best fit:** teams that want specification work embedded directly in an agentic IDE or CLI rather than assembled from separate tools.

## Primary sources

- [Kiro specs documentation](https://kiro.dev/docs/cli/v3/specs/)
- [Kiro CLI](https://kiro.dev/docs/cli/)
- [Kiro web](https://kiro.dev/docs/web/)

[Full evaluation framework →](/landscape/evaluation)
