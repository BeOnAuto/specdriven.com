---
title: Evaluation Framework
description: Fourteen questions for evaluating spec-driven tools without reducing them to a single score.
prev:
  text: Tool Landscape
  link: /landscape/
next:
  text: Auto
  link: /landscape/auto
image: /images/pages/landscape/evaluation.png
---

# Evaluation Framework

![Evaluation Framework](/images/pages/landscape/evaluation.png)

> **Last reviewed: August 7, 2026.** These dimensions are editorial questions, not a scientific scorecard. A profile should cite current primary sources and label inferences as editorial assessments.

## The capability dimensions

### 1. Development velocity {#dim-velocity}

How quickly does the workflow produce a useful first result, and how does iteration feel as the product grows? Claims that structured work improves long-term velocity are hypotheses to test in context, not universal curves.

### 2. Specification durability {#dim-durability}

How is the maintained intent kept current as the system changes? Versioning, approval, generated artifacts, tests, and reconciliation can all help. None makes a specification correct “by definition.”

### 3. Relationship to verification {#dim-executability}

Can selected statements drive machine checks? Does the tool run tests, validate schemas, compare behavior, use verifier agents, or merely guide implementation? What exactly does a passing result establish?

### 4. Accessibility {#dim-accessibility}

Can the people responsible for product, design, domain knowledge, quality, and engineering meaningfully review and change the relevant decisions?

### 5. Model coherence {#dim-coherence}

Does the tool maintain connected concepts, or produce artifacts whose agreement depends on manual synchronization?

### 6. Traceability {#dim-traceability}

Can a reader follow an important decision to its source, approval, implementation, and evidence—and see when it was changed or superseded?

### 7. Agent guidance {#dim-agent-guidance}

How does the tool place the right approved context in front of an agent? More structure can reduce ambiguity, but no format eliminates interpretation.

### 8. Portability {#dim-portability}

Can the maintained specifications survive a change of editor, agent, repository, or platform? Which useful capabilities disappear outside the vendor’s runtime?

### 9. Brownfield readiness {#dim-brownfield}

Can the workflow begin with existing code and incomplete evidence? Does it distinguish observed behavior from intended behavior instead of treating code as automatically authoritative?

### 10. Modularity and extensibility {#dim-modularity}

Can teams extend the workflow, target several implementations, and replace parts without rebuilding the entire specification system?

### 11. Composability {#dim-composability}

Can specifications reference and reuse each other while keeping dependencies understandable at scale?

### 12. Cross-cutting expressiveness {#dim-cross-cutting}

Can the system express policies and qualities—security, access, performance, compliance, accessibility—that affect many product slices?

### 13. Reconcilability {#dim-reconcilability}

When the maintained artifact and implementation disagree, does the workflow expose the difference, preserve authority, and help a person resolve it?

### 14. Scope and fit {#dim-scope}

Which products, teams, and lifecycle stages does the tool actually support? A specialist can be excellent within a narrow scope; generality is not automatically better.

## Evidence standard

A strong evaluation distinguishes:

1. **Documented behavior** in official docs or repositories.
2. **Demonstrated behavior** visible in a reproducible example.
3. **Vendor claims** that have not been independently established.
4. **Editorial inference** drawn from the public workflow.
5. **Unknowns** that cannot be judged from public material.

Profiles on this site should include a review date and primary-source links. Readers can [submit corrections on GitHub](https://github.com/BeOnAuto/specdriven.com).

## Apply it to your context

Do not add fourteen scores and choose the highest total. Begin with the risk that made a specification necessary. A solo greenfield project, a regulated workflow, an existing codebase, and a multi-repository platform need different evidence.

Current profiles:

- [Auto](/landscape/auto)
- [GitHub Spec Kit](/landscape/github-spec-kit)
- [Intent](/landscape/intent)
- [Kiro](/landscape/kiro)
- [OpenSpec](/landscape/openspec)
- [Tessl](/landscape/tessl)
