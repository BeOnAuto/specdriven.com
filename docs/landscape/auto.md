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

Each stage validates against specs. An adaptive pipeline where deterministic tests serve as the control mechanism. Quality checks enforce 100% test coverage, type safety, and linting.

## Origin Story

NDD was not designed for the AI era. It originated at Xolvio through years of enterprise client engagements and became the team's standardized delivery approach. Clients praised its ability to capture intent and the quality of software produced. Auto (by Auto Inc) is the productization of that methodology.

## Specification Format

Model-based (Zod schema) with a TypeScript fluent interface. Given/When/Then and Should/Should Not patterns. Executable (compiles to tests). Not markdown prose. The model can also be expressed as raw JSON or DSLs in other languages.

## Notable Strengths

Carries forward the executable specification lineage from BDD into the AI era. Unified model coherence across audiences. Modular builders for multi-language targeting. Battle-tested with enterprise clients before the AI wave.

## Notable Limitations

Purpose-built for line-of-business applications (workflows, orchestration, CRUD, domain logic). Not optimized for games, infrastructure-as-code, data science pipelines. The TypeScript fluent interface, while powerful, creates a learning curve that prose-based tools avoid.

## Open Source

[Auto Engineer](https://github.com/BeOnAuto/auto-engineer) (the engine) is open source. The on.auto platform is commercial.

## Links

[on.auto](https://on.auto) | [Auto Engineer on GitHub](https://github.com/BeOnAuto/auto-engineer)

**See also:** [Sam Hatoum](/people#sam-hatoum), [Timeline: NDD](/timeline#narrative-driven-development), [NDD dialect](/dialects/narrative-driven), [Auto getting started](/auto)

## Capability Analysis

### [Development Velocity](/landscape/evaluation#dim-velocity)

Auto's AI-assisted pipeline handles much of the model investment, making initial setup comparable to prompt-to-code approaches. The structured spec foundation means iteration speed stays consistent as complexity grows rather than degrading. However, the upfront investment in learning NDD's fluent interface and model concepts is real, and for simple prototypes, less structured tools will get you to a first output faster.

### [Spec Durability](/landscape/evaluation#dim-durability)

Specs compile into executable tests that run on every build. If the implementation diverges from the spec, the build breaks. This is a fundamental advantage over prose-based specs, which inevitably drift from reality without manual effort to keep them aligned.

### [Executability](/landscape/evaluation#dim-executability)

Specs compile directly into verifiable tests. This carries forward BDD's core insight that specifications should prove themselves. Most other tools in the current landscape have moved away from executable specifications, making this a genuine differentiator. The trade-off is that executable specs require more structure than free-form prose.

### [Accessibility](/landscape/evaluation#dim-accessibility)

The model serves three audiences (code, visual, document) from a single source. In theory, product managers interact through visual views while developers work in the TypeScript interface. In practice, the code-level fluent interface is the primary authoring surface today, and the visual and document views are still maturing. Non-technical stakeholders can read the outputs but cannot yet author specs without developer assistance.

### [Model Coherence](/landscape/evaluation#dim-coherence)

A single Zod-based model serves all views. This means visual wireframes, documentation, and code artifacts cannot diverge from each other because they are derived from the same source. This is architecturally strong compared to tools that maintain separate spec/plan/task files. The downside is that the model itself must be comprehensive enough to support all three views, which adds authoring complexity.

### [Traceability](/landscape/evaluation#dim-traceability)

Every generated line traces back to a narrative. The pipeline structure (narratives to domain model to schema to scaffolds to implementation) maintains a clear chain. For enterprises needing audit trails or compliance documentation, this is valuable. The traceability is strongest within the pipeline's own artifacts and weaker at the boundaries where Auto-generated code integrates with external systems.

### [Agent Guidance](/landscape/evaluation#dim-agent-guidance)

The structured model constrains AI generation tightly. Rather than interpreting prose suggestions, agents work against a typed schema with executable assertions. This produces more predictable AI output than unstructured approaches. The constraint is deliberate: it trades creative freedom for correctness.

### [Portability](/landscape/evaluation#dim-portability)

The Auto Engineer is open source, and narratives can be expressed in raw JSON or DSLs in other languages via open-source builders. You are not locked into a single IDE or AI agent. That said, the NDD model format is specific to Auto's ecosystem. Moving specs to a completely different spec-driven tool would require translation, not just file copying.

### [Brownfield Readiness](/landscape/evaluation#dim-brownfield)

Auto can coexist with existing projects through integrations and entry/exit points. You can adopt it incrementally for new features within an existing codebase. However, the pipeline is greenfield-leaning by design. Wrapping an existing legacy system's behavior in NDD narratives is possible but not the path of least resistance.

### [Modularity](/landscape/evaluation#dim-modularity)

Pluggable builders decouple specification from implementation. Write narratives once, target TypeScript, Python, or other platforms through different builders. This architecture cleanly separates "what the system does" from "how it is built." The builder ecosystem is still growing, so language coverage is not yet comprehensive.

### [Composability](/landscape/evaluation#dim-composability)

Narratives, journeys, scenes, and messages compose at multiple levels. You can build complex specifications from smaller, reusable pieces. The composition model is well-defined within NDD's own vocabulary. Cross-project composition (referencing narratives from one project in another) is less developed.

### [Cross-Cutting](/landscape/evaluation#dim-cross-cutting)

Handling non-functional requirements like security directives, compliance constraints, and performance targets is currently a work in progress. This is a known gap. Today, cross-cutting concerns require manual specification alongside the narrative structure rather than being first-class citizens of the model.

### [Reconcilability](/landscape/evaluation#dim-reconcilability)

Reverse-engineering existing applications into NDD specs is on the roadmap but not yet available. Today, if you have an existing codebase without narratives, you start from scratch writing specs for it. This means teams with large existing codebases must write specs from scratch for any functionality they want Auto to manage.

### [Scope](/landscape/evaluation#dim-scope)

Purpose-built for line-of-business applications: web apps, mobile apps, internal tools, workflows, orchestration, CRUD, and domain logic. This focused scope allows deep optimization for those domains. It is not designed for games, infrastructure-as-code, embedded systems, data science pipelines, or systems programming. If your work falls outside its target domain, Auto is not the right tool.

[Full evaluation framework](/landscape/evaluation)

---

**Disclosure:** Auto is built by the team behind this site.

*An initiative by [Auto](https://on.auto).*
