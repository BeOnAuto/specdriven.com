---
title: Auto — Tool Profile
description: An editorial profile of Auto's product-modeling workflow for software built with agents.
prev:
  text: Evaluation Framework
  link: /landscape/evaluation
next:
  text: GitHub Spec Kit
  link: /landscape/github-spec-kit
image: /images/pages/auto.png
---

# Auto

![Auto](/images/pages/auto.png)

> **Disclosure:** Auto was founded by Sam Hatoum, who publishes SpecDriven. This profile is Sam’s assessment of a product in which he has a direct commercial interest. **Last reviewed: August 7, 2026.**

## What it is

Auto describes itself as product modeling for software built with agents. Its public workflow turns product context into a reviewable model, keeps proposed changes separate until approval, builds supported applications, and checks supported behavior against what was approved.

The visible product language includes capabilities, goals, outcomes, behaviors, rules, examples, requirements, flows, screens, and product decisions.

## Documented workflow

1. Bring a workflow, prototype, prompts, feedback, screenshots, examples, and delivery context.
2. Review what Auto believes the product should do through its product and screen views.
3. Correct and approve important decisions.
4. Build the approved application using Auto’s supported delivery path.
5. Check supported behavior against the approved model and use it as the reference for later changes.

The human remains responsible for product judgment and approval. Auto’s role is to make the relevant decisions inspectable and operational.

## Relationship to verification

Auto connects approved rules and examples to checks of supported implementation behavior. This is stronger than treating the model only as planning prose, but it is not a blanket guarantee that every property of an application has been specified or verified.

The meaningful questions are which scope has been modeled, which behaviors Auto currently supports checking, and what evidence a particular result provides.

## Editorial assessment

**Strengths:** Auto gives non-code stakeholders visible review surfaces, distinguishes proposed changes from approved product decisions, and carries one maintained product definition into build and later change.

**Limitations and boundaries:** Its public offer is narrower than arbitrary mature-application adoption. Auto does not claim that it can preserve every implementation decision, migrate every production data set, support every stack, or reconstruct complete intent from existing code automatically.

**Best fit:** Workflow-heavy applications where goals, user paths, rules, roles, information, and later change matter enough to review before implementation.

## Historical note

Auto previously used Narrative-Driven Development as a public method name. It retired that name and the specialist vocabulary in 2026. The current product uses ordinary product language. [Read Auto’s explanation](https://on.auto/narrative-driven-development).

## Primary sources

- [Auto product website](https://on.auto)
- [How Auto works](https://on.auto/how-it-works)
- [Product modeling](https://on.auto/product-model)
- [What happened to NDD](https://on.auto/narrative-driven-development)

[Full evaluation framework →](/landscape/evaluation)
