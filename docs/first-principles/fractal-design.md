---
prev:
  text: The Lifecycle of a Specification
  link: /first-principles/spec-lifecycle
next:
  text: History of Specifications in Software
  link: /timeline
image: /images/pages/first-principles/fractal-design.png
---

# The Fractal Nature of Design

![The Fractal Nature of Design](/images/pages/first-principles/fractal-design.png)

## It's Not a Pipeline

When people hear "requirements lead to design, design leads to specifications, specifications lead to implementation," they picture a pipeline. A linear progression. Phase gates. Waterfall by another name.

That's wrong.

The relationship between requirements, solutions, and specifications is fractal. It's the same activity happening at every zoom level, from the highest-level product strategy down to the lowest-level unit test. At every level, you have a problem to understand, a solution to design, and a specification to express that design. Same shape. Different depth.

## The Zoom Levels

At the top of the fractal, you're looking at the whole product. What problem does it solve? Who is it for? What are the key behaviors? The "spec" at this level might be an information architecture, a set of user journeys, a domain model. Broad strokes. Strategic decisions.

Zoom in one level and you're looking at a single goal or feature. What's the user trying to accomplish? What interactions are involved? What does the system do in response? The spec at this level might be a set of Given/When/Then scenarios, a storyboard, or interface contracts.

Zoom in again and you're looking at a single component. How does the email validator work? What are the edge cases for the payment retry logic? The spec at this level might be a set of describe/it/should statements, a property-based test, a contract on a function signature.

Zoom in one more time and you're at the TDD level. What should this function return for this input? The spec is a single failing test. The solution is the minimum code to make it pass.

At every zoom level, the same three-step activity occurs: understand the problem at this level, choose an approach, express that choice as a specification. Then zoom in and do it again.

## Why This Matters

This fractal view resolves several common arguments.

**"Is TDD a design technique or a testing technique?"** It's a design technique at the deepest level of the fractal. You're designing at the function level and expressing that design as a test. The test is a specification. It just happens to be at the most granular zoom level.

**"Is spec-driven development the same as waterfall?"** No. Waterfall treats these levels as sequential phases with handoffs. The fractal view treats them as concurrent zoom levels. You're never "done" with requirements before starting design. You're continuously moving up and down the fractal, zooming in to specify details and zooming out to check that the big picture still holds. The movement is fluid, not gated.

**"Do I need to specify everything upfront?"** No. You need to specify enough at each zoom level to move to the next level of depth. As you go deeper, earlier specs might change. That's feedback working correctly, not a process failure.

## Solution Is Not Specification

Here's a distinction that matters more than most people realize, and one that most academic work on specification doesn't make.

A solution is a design decision. "We'll use event sourcing with CQRS read models." "We'll reject negative numbers rather than handle them." "We'll embed returns in order history rather than making it a separate section."

A specification is the expression of that design decision in a form that can be communicated, implemented, and ideally verified.

These are not the same thing. In simple cases they collapse into one artifact (a precondition `x >= 0` is both the decision and the expression). But at higher levels of design, the solution exists as a decision in someone's head before it becomes a spec. The architect decides on event sourcing. Then they spec out what that means for data access, for the query model, for the event store.

Why does this separation matter? Because in the AI era, the solution is the thing the human owns. The spec is the thing handed to the agent. If you collapse solution and specification, then "the AI writes the spec from the prompt" and "the AI writes the solution from the prompt" become the same statement, and you've just delegated your most important decisions to an entity that doesn't know your context.

Keeping them separate preserves the layer where human judgment lives. The human designs the solution. The spec expresses it. The AI implements from the spec. Each has a distinct role.

## The Lineage Through the Fractal

The history of specifications in software is a history of making different levels of the fractal executable.

Hoare logic (1960s) gave us the mathematical foundation: precondition, action, postcondition. Proof that a program is correct. This operates at the contract level of the fractal.

Design by Contract and Eiffel (1986 onwards) made that foundation executable. Preconditions and postconditions in the code itself, checked at runtime. Still at the contract level, but now the spec runs.

TDD (late 1990s) made the deepest level of the fractal executable. Individual design decisions expressed as failing tests, verified continuously. Kent Beck didn't frame it this way, but TDD is specification at the function level of the fractal.

BDD (mid-2000s) moved up the fractal. Dan North took specifications out of code and into shared language. Given/When/Then. Whole-team readable. Behavioral examples at the product level, not just the function level.

Domain-Driven Design, Event Sourcing, and Event Storming filled in the upper levels of the fractal. Ubiquitous language. Facts stored as events. Time-based modeling. These gave teams tools to specify at the domain and architecture levels.

Modern connected models attempt to span several levels with shared concepts and explicit relationships. Product goals can connect to outcomes, behavior, rules, examples, contracts, and component expectations without forcing every audience into one representation.

Over six decades, more levels have become machine-checkable. Other decisions—strategy, information architecture, experience quality, and many architectural trade-offs—still depend heavily on review and judgment. The frontier is not making every statement executable; it is making each important decision inspectable and connecting the checkable parts to evidence.

For the term genealogy and the academic prior art behind this trajectory, see [Where "Spec-Driven Development" Came From](/origins). For the essay-style argument that puts the AI angle front and centre, see [Specs Are Fractal](/perspectives/specs-are-fractal) in the Perspectives section.

## Playing Asteroids

There's a game metaphor that captures the fractal perfectly.

In Asteroids, you start with a large rock. You shoot it and it breaks into smaller rocks. You shoot those and they break into even smaller rocks. You keep going until there's nothing left.

Specifying a system is the same game. You start with the big picture, then break it into capabilities, goals, outcomes, behaviors, rules, contracts, and smaller implementation decisions. Each break reveals another design choice. Each important choice needs an expression appropriate to its audience and risk.

You don't just break the big rock once and call it done. You play until every piece is small enough to implement confidently. Some pieces need to get very small (business-critical logic). Others can stay relatively large (standard UI components where a design library handles the details).

The game never truly ends. New features are new rocks. Changes to existing features break existing pieces into new configurations. Late discovery reveals rocks you didn't know were there. The fractal is alive, and spec-driven development is the practice of playing the game continuously.
