---
title: Tessl — Tool Profile
description: An editorial profile of Tessl's current agent enablement platform and its earlier spec-as-source work.
prev:
  text: OpenSpec
  link: /landscape/openspec
next: false
image: /images/pages/landscape/tessl.png
---

# Tessl

![Tessl](/images/pages/landscape/tessl.png)

> **Last reviewed: August 7, 2026.** Tessl remains active, but its current product should not be described as the same spec-as-source Framework it introduced in 2025.

## What it is now

Tessl currently presents an agent enablement platform centered on reusable skills and registry packages, agent tooling, and evaluations. Its changelog documents support across coding-agent environments including Claude Code, Codex, Cursor, and Gemini.

This remains adjacent to spec-driven development because structured skills and evaluations influence what agents know and how their behavior is assessed. It is not the same as maintaining a product specification as the source of application code.

## What changed

Tessl previously promoted a Framework built around `.spec.md` files, directives such as `@generate`, and generated code. In version 0.50.3, Tessl said the Framework functionality had been removed while it rebuilt the product around agent enablement. Some older workflow documentation remains online, so readers should use the changelog to distinguish historical material from the current product.

## Relationship to verification

The present platform uses evaluations to assess reusable agent capabilities and context packages. That is verification of agent enablement assets, not proof that a software product conforms to a maintained product specification.

## Editorial assessment

**Strengths:** reusable agent context, a public registry ecosystem, cross-agent support, and evaluation infrastructure.

**Limitations:** the current value proposition is no longer a direct example of spec-as-source application development. Historical articles should not be used to describe the shipped 2026 product without qualification.

**Best fit:** teams standardizing and evaluating reusable instructions, skills, and technical context across coding agents.

## Primary sources

- [Tessl changelog](https://docs.tessl.io/changelog)
- [Historical spec-driven workflow](https://docs.tessl.io/common-workflows/spec-driven-development-with-tessl)
- [Tessl documentation](https://docs.tessl.io/)

[Full evaluation framework →](/landscape/evaluation)
