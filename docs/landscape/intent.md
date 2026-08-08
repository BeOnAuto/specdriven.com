---
title: Intent by Augment Code — Tool Profile
description: An editorial profile of Intent's living specifications and multi-agent workspace.
prev:
  text: GitHub Spec Kit
  link: /landscape/github-spec-kit
next:
  text: Kiro
  link: /landscape/kiro
image: /images/pages/landscape/intent.png
---

# Intent by Augment Code

![Intent by Augment Code](/images/pages/landscape/intent.png)

> **Last reviewed: August 7, 2026.** Product-scale and performance statements below are vendor claims unless otherwise noted.

## What it is

Intent is Augment Code’s workspace for coordinating coding agents around living specifications and a persistent codebase context engine. Augment positions it for changes that span services, repositories, and parallel agent work.

## Documented workflow

Intent uses living specifications as shared plans while coordinator, implementor, and verifier roles divide work. Its published integrations connect external coding agents including Claude Code, Codex, and OpenCode with Augment’s workspace and context engine.

The product is designed to update specifications as implementation progresses rather than treat them as static handoff documents.

## Relationship to verification

Verifier agents inspect work and can run project checks. That provides implementation feedback, but the living Markdown specification is not an independent executable contract with formal semantics.

Auto-updating also creates an authority question: did the intended product change, or did the document adapt to what an agent happened to build? Teams need clear review and provenance to distinguish the two.

## Editorial assessment

**Strengths:** orchestration across agents and repositories, deep code-context emphasis, and a deliberate attempt to keep specifications active during implementation.

**Limitations:** the public material is developer-centric, and much of the value depends on Augment’s proprietary context and orchestration platform. The authority of an automatically updated specification needs careful governance.

**Best fit:** engineering organizations coordinating consequential changes across a large existing codebase or several repositories.

## Primary sources

- [Intent workspace announcement](https://www.augmentcode.com/blog/intent-a-workspace-for-agent-orchestration)
- [Living specs guide](https://www.augmentcode.com/guides/living-specs-for-ai-agent-development)
- [Intent walkthrough: from prompt to merged PR](https://www.augmentcode.com/guides/intent-walkthrough-prompt-to-merge)

[Full evaluation framework →](/landscape/evaluation)
