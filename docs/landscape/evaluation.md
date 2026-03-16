---
prev:
  text: Tool Landscape
  link: /landscape/
next: false
---

# Evaluation Framework

> Fourteen dimensions for evaluating spec-driven tools. Use this framework to assess any tool against what matters for your context. Each profiled tool in the [landscape](/landscape/) includes a per-dimension analysis using these dimensions.
>
> **Think a dimension is missing or mislabeled?** This framework is community-driven. [Open an issue](https://github.com/BeOnAuto/specdriven.com/issues) to discuss.

## The Capability Dimensions {#dimensions}

These are independent capabilities, not forced trade-offs. A well-designed tool can be strong across many of them. But most tools make design choices that favor some dimensions over others.

### 1. Development Velocity {#dim-velocity}

How fast you get from idea to working output. There are two sub-dimensions here: first output speed (where prompt-to-code approaches excel) and iteration speed (where the curves cross). Spec-driven approaches tend to stay flat or improve over time as complexity grows, while unstructured approaches degrade.

### 2. Spec Durability {#dim-durability}

Do specs remain valid as the system evolves? Markdown specs without a connection to the running system diverge quickly. Executable specs that are part of the test suite remain valid by definition, because the build breaks when they don't.

### 3. Executability {#dim-executability}

Can specs automatically verify themselves? Does the system continuously prove its own correctness? This is where the [historical lineage](/timeline) matters most. Most current tools have moved away from the executable specification model that the BDD generation proved worked.

### 4. Accessibility {#dim-accessibility}

Can non-developers meaningfully participate? Product managers, designers, and business analysts all need to read and contribute to specs. A code-level interface is powerful but excludes some stakeholders. Markdown is approachable but vague. Model-based approaches that offer multiple views (code, visual, document) can serve both audiences.

### 5. Model Coherence {#dim-coherence}

Does the tool maintain a single underlying model serving all audiences (visual, documentation, code), or does it produce disconnected artifacts that drift apart over time?

### 6. Traceability {#dim-traceability}

Can you follow the thread from business intent to implementation and back? This is critical for enterprises, compliance, audit trails, and debugging production issues.

### 7. Agent Guidance {#dim-agent-guidance}

How effectively does the spec format constrain AI to produce faithful output? Loose prose is a suggestion. A structured DSL with executable assertions is a contract.

### 8. Portability {#dim-portability}

Can you take your specs across different tools, agents, and environments without lock-in? If you switch from one AI coding assistant to another, do your specs survive?

### 9. Brownfield Readiness {#dim-brownfield}

Does it work on existing codebases, not just greenfield projects? Most real-world software is brownfield. A tool that only works from scratch has a limited audience.

### 10. Modularity and Extensibility {#dim-modularity}

How decoupled is the spec from the implementation? Can you target multiple languages or platforms from the same specification?

### 11. Composability {#dim-composability}

Can specs reference, build on, and reuse each other without duplication at scale? As systems grow, you need specifications that compose cleanly.

### 12. Cross-Cutting Expressiveness {#dim-cross-cutting}

Can the spec format handle non-functional requirements like security, compliance, and performance that span multiple features?

### 13. Reconcilability {#dim-reconcilability}

When spec and implementation diverge, does the system help bring them back into alignment? Can you bootstrap specs from existing code?

### 14. Scope {#dim-scope}

How broad is the tool's applicability? A specialized tool (purpose-built for a specific domain like web, mobile, and internal tools) can optimize deeply for that domain but won't cover others. A general-purpose tool works across domains but may lack depth in any single one. Neither is better. It depends on what you're building.

## Domain Fit {#domain-fit}

Beyond capability dimensions, each tool has a natural domain:

- **Line-of-business applications**: Workflows, CRUD, commands/queries, business rules
- **APIs and services**: Backend, integrations, data pipelines, microservices
- **Frontend-heavy applications**: Rich UI, design systems, interactive experiences
- **Infrastructure and DevOps**: Cloud provisioning, IaC, CI/CD
- **Greenfield prototypes**: Zero-to-one, proof of concept, rapid experimentation
- **Legacy modernization**: Brownfield migration, refactoring, strangler pattern
- **General purpose**: No specific domain constraint

Capability profile and domain fit are separate layers. A tool might be strong on executability but only for line-of-business apps. Another might be general purpose but weak on traceability. You need both lenses.

## Applying the Framework {#applying}

Each profiled tool in the [landscape](/landscape/) has been analyzed against these dimensions with descriptive assessments explaining how the tool handles each capability. Browse the tool profiles to see how they compare:

- [Auto](/landscape/auto)
- [GitHub Spec Kit](/landscape/github-spec-kit)
- [Intent](/landscape/intent)
- [Kiro](/landscape/kiro)
- [OpenSpec](/landscape/openspec)
- [Tessl](/landscape/tessl)

---

*An initiative by [Auto](https://on.auto).*
