---
prev:
  text: Tool Landscape
  link: /landscape/
next:
  text: GitHub Spec Kit
  link: /landscape/github-spec-kit
image: /images/pages/landscape/auto.png
---

# Auto

![Auto](/images/pages/landscape/auto.png)

**What it is:** A spec-driven platform for building line-of-business software. Auto productizes [Narrative-Driven Development](/dialects/narrative-driven), the product modeling method for describing software as domains, narratives, scenes, and moments.

**The problem it solves:** Prompt-to-code workflows lose product intent as the app grows. Auto puts a reviewable narrative between the prompt and implementation, then supports the team through an AI-assisted build workflow.

**How it works:** users describe the product, review the resulting NDD narrative, refine rules and examples, and use Auto's product workflow to move from reviewed intent toward implementation.

For the method itself, see [Narrative-Driven Development](/dialects/narrative-driven).

## Product Workflow

Auto's workflow is built around the NDD narrative model:

1. Capture product intent.
2. Draft a narrative using domains, narratives, scenes, and moments.
3. Review outcomes, rules, examples, should statements, and the information the product shows.
4. Use Auto's workflow to support AI-assisted implementation.
5. Keep the narrative updated as the product changes.

Auto handles the product workflow. The team reviews intent before build.

## Origin Story

NDD originated at Xolvio through years of enterprise client engagements and became the team's standardized delivery approach. Clients praised its ability to capture intent and the quality of software produced. Auto is the productization of that methodology.

## Specification Format

NDD is a product model and review method: Domain -> Narrative -> Scene -> Moment, plus moment types, Given/When/Then examples, and should statements.

Auto carries the product workflow around that method.

## Notable Strengths

Carries forward the executable specification lineage from BDD into the AI era. Strong outcome framing. Clear vocabulary. Useful for line-of-business products where workflows, business rules, interface behavior, and important screen content need to stay aligned.

## Notable Limitations

Purpose-built for line-of-business applications: workflows, orchestration, CRUD, domain logic, dashboards, forms, and internal tools. It is not optimized for games, infrastructure-as-code, data science pipelines, embedded systems, or low-level systems programming.

Because Auto uses a richer product workflow than plain markdown, teams should expect more modeling discipline than prompt-to-code tools require.

## Links

[on.auto](https://on.auto)

**See also:** [Sam Hatoum](/people#sam-hatoum), [Timeline: NDD](/timeline#narrative-driven-development), [NDD dialect](/dialects/narrative-driven), [Auto getting started](/auto)

## Capability Analysis

### [Development Velocity](/landscape/evaluation#dim-velocity)

Auto is designed to help teams move quickly without losing intent. Initial setup asks teams to clarify the narrative, but the payoff is that iteration has a durable product story to return to instead of a disappearing chat thread.

### [Spec Durability](/landscape/evaluation#dim-durability)

The narrative remains a living review surface. When the product changes, the team updates the narrative first: goals, outcomes, moments, rules, examples, and the information the product shows.

### [Executability](/landscape/evaluation#dim-executability)

Auto is built for AI-assisted implementation from reviewed intent. The narrative gives the team a stable product surface before implementation work begins.

### [Accessibility](/landscape/evaluation#dim-accessibility)

The NDD vocabulary is readable by product, design, QA, and engineering. Non-technical stakeholders can review goals, outcomes, moments, rules, and examples without learning an implementation format.

### [Model Coherence](/landscape/evaluation#dim-coherence)

Auto's product workflow keeps teams oriented around one narrative model, not separate prompt threads, design notes, tickets, and implementation assumptions. The method emphasizes shared vocabulary and review coherence.

### [Traceability](/landscape/evaluation#dim-traceability)

NDD improves traceability at the product level: features trace back to narratives, scenes, moments, rules, and examples. Auto uses that reviewed intent as the coordination surface for implementation.

### [Agent Guidance](/landscape/evaluation#dim-agent-guidance)

Auto guides AI-assisted implementation through reviewed product intent. The method gives the team clearer language for the product behavior being built.

### [Portability](/landscape/evaluation#dim-portability)

The NDD vocabulary is portable: teams can use domains, narratives, scenes, moments, rules, examples, and should statements in documents, workshops, issues, and prompts. Auto's product workflow is the commercial implementation of that method.

### [Brownfield Readiness](/landscape/evaluation#dim-brownfield)

Auto is most natural when introducing new behavior or restructuring behavior that can be described as narratives. Existing products can adopt the vocabulary incrementally by modeling one behavior slice at a time.

### [Modularity](/landscape/evaluation#dim-modularity)

NDD's hierarchy encourages modular thinking: domains contain narratives, narratives contain scenes, scenes contain moments. That gives teams a way to discuss scope without flattening everything into a feature list.

### [Composability](/landscape/evaluation#dim-composability)

Narratives compose through shared product language, related outcomes, and consistent rules. Cross-project composition remains a product and process question rather than a file-format promise.

### [Cross-Cutting](/landscape/evaluation#dim-cross-cutting)

Handling non-functional requirements like security, compliance, and performance is still a work in progress. Today, teams capture those concerns as rules, permissions, or open questions alongside the relevant narratives.

### [Reconcilability](/landscape/evaluation#dim-reconcilability)

Reverse-engineering existing applications into narratives is a natural direction for Auto, but teams can already use NDD manually to document and review important existing behavior.

### [Scope](/landscape/evaluation#dim-scope)

Purpose-built for line-of-business applications: web apps, mobile apps, internal tools, workflows, orchestration, CRUD, dashboards, forms, and domain logic. If your work falls outside that target domain, Auto may not be the right tool.

[Full evaluation framework](/landscape/evaluation)

---

**Disclosure:** Auto is built by the team behind this site.

*An initiative by [Auto](https://on.auto).*
