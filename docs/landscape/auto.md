---
prev:
  text: Tool Landscape
  link: /landscape/
next:
  text: GitHub Spec Kit
  link: /landscape/github-spec-kit
---

# Auto

**What it is:** A spec-driven platform for building software, implementing [Narrative-Driven Development](/dialects/narrative-driven) (NDD) as its first specification dialect. Auto is the platform. NDD is the dialect. They are distinct.

**The problem it solves:** Executable, multi-audience specifications that compile into verifiable tests and serve visual, documentation, and code audiences from a single underlying model.

**How it works:** NDD is a model-based approach with a TypeScript fluent interface (you can also write raw JSON or build DSLs in other languages). Two specification patterns:
- **Given/When/Then** for business domain logic (workflows, commands, queries, reactions)
- **Should/Should Not** for component-level and module-level contracts

These compile into verifiable tests automatically. When narratives pass, the system is correct. The spec IS the test.

Underneath sits a unified model serving multiple audiences:
- **Visual:** UI/UX wireframes, storyboards, interaction flows
- **Documentation:** Product specs, technical docs, business rules
- **Code:** Implementation, tests, deployment artifacts

**Modular architecture:** Pluggable builders decouple specification from implementation. Write narratives once, target TypeScript, Python, or any other platform.

## The Pipeline

```
Narratives → Domain Model → GraphQL Schema → Server Scaffold → Frontend Scaffold → AI Implementation → Quality Checks → Production Code
```

Each stage validates against specs. Self-correcting feedback loops (up to 5 attempts). Quality checks enforce 100% test coverage, type safety, linting.

## Origin Story

NDD was NOT designed for the AI era. It originated at Xolvio through years of real client engagements with enterprise brands including Audi, Volkswagen, and others. Teams consistently delivered 3-4x faster. Auto (by Auto Inc) is the productization of a proven methodology.

## Specification Format

Model-based (Zod schema) with a TypeScript fluent interface. Given/When/Then and Should/Should Not patterns. Executable (compiles to tests). Not markdown prose. The model can also be expressed as raw JSON or DSLs in other languages.

## Notable Strengths

The only current approach maintaining the executable specification lineage from BDD. Unified model coherence. Modular builders for multi-language targeting. Battle-tested with enterprise clients before the AI wave.

## Notable Limitations

Purpose-built for line-of-business applications (workflows, orchestration, CRUD, domain logic). Not optimized for games, infrastructure-as-code, data science pipelines. Currently being productized (the on.auto platform is in waitlist stage).

## Open Source

[Auto Engineer](https://github.com/BeOnAuto/auto-engineer) (the engine) is open source. The on.auto platform is commercial.

## Links

[on.auto](https://on.auto) | [Auto Engineer on GitHub](https://github.com/BeOnAuto/auto-engineer)

**See also:** [Sam Hatoum](/people#sam-hatoum), [Timeline: NDD](/timeline#narrative-driven-development), [NDD dialect](/dialects/narrative-driven), [Auto getting started](/auto)

## Score Card

> Editorial assessment of Auto + NDD. Auto + Archetype will have a different profile. [Suggest corrections](https://github.com/BeOnAuto/specdriven.com/issues)

| Dimension | Rating | Note |
|-----------|--------|------|
| [Development Velocity](/landscape/evaluation#dim-velocity) | ●●● | AI handles model investment (similar to vibe coding); fast to start, iteratively improvable |
| [Spec Durability](/landscape/evaluation#dim-durability) | ●●● | Executable specs verified on every build |
| [Executability](/landscape/evaluation#dim-executability) | ●●● | Only tool maintaining executable spec lineage from BDD |
| [Accessibility](/landscape/evaluation#dim-accessibility) | ●●● | Three audiences (code, visual, document) from one model |
| [Model Coherence](/landscape/evaluation#dim-coherence) | ●●● | Single Zod model serves all views |
| [Traceability](/landscape/evaluation#dim-traceability) | ●●● | Every generated line traces to a narrative |
| [Agent Guidance](/landscape/evaluation#dim-agent-guidance) | ●●● | Structured model constrains AI tightly |
| [Portability](/landscape/evaluation#dim-portability) | ●●● | Open-source Auto Engineer; narratives writable in any language through open-source builders |
| [Brownfield Readiness](/landscape/evaluation#dim-brownfield) | ●●○ | Can coexist with existing projects through integrations and entry/exit points |
| [Modularity](/landscape/evaluation#dim-modularity) | ●●● | Pluggable builders target multiple languages from one spec |
| [Composability](/landscape/evaluation#dim-composability) | ●●● | Narratives, journeys, scenes, and messages compose at multiple levels |
| [Cross-Cutting](/landscape/evaluation#dim-cross-cutting) | ●●● | NFRs, security directives, and compliance constraints currently in progress |
| [Reconcilability](/landscape/evaluation#dim-reconcilability) | ●○○ | Reverse-engineering existing apps to specs is on the roadmap |
| Domain Fit | | Line-of-business applications |

[Full evaluation framework](/landscape/evaluation)

*An initiative by [Auto](https://on.auto).*
