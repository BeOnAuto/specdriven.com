---
title: "Specs Are Fractal"
image: /images/perspectives/specs-are-fractal.png
---

# Specs Are Fractal

Specifications are the [communication of design](/what). That's the definition the rest of this site rests on, and it's the right place to start.

If specs are the communication of design, then specs go wherever design goes. Design happens at every level of a system. Therefore specs are fractal.

That's the article in three sentences. The rest unpacks why it matters and what to do about it.

## Design happens at every level.

Walk down the stack from product to test, and design appears at every layer. Each layer is a place where someone has chosen something and now has to communicate that choice to whoever will build the next layer down.

At the top, requirements space. Business processes. User journeys. The conceptual end of information architecture: what the entities are, how they relate, what value flows where, what people need from the system. This is where you specify the problem itself. The artifacts take many forms (a journey map, a value stream map, a process diagram, a glossary), but they all communicate design decisions about the shape of the problem.

Then architecture. Information architecture as exchange design (how information moves between people and systems). Systems architecture (which external systems, which internal ones, where the seams are). Both are design choices. Both warrant specs.

Then interfaces. APIs, UIs, chat UIs, the surfaces through which the system exposes the value it produces. Each surface is a designed thing.

Then modeling. The data model, the domain model, the event model, whichever fits the problem. The structural design that downstream code will hang off. Specs at this level pin down entities, attributes, relationships, invariants.

Then behavioral specs. Domain specifications attached to the model. Component specifications for individual modules. Given some state, when this happens, then this outcome. These are the executable specs that BDD and TDD have been writing for twenty years.

Then visual specs if the surface is a UI. Spacing, grid, layout, the order things appear in, what comes before what. Tied back up to the information architecture decisions made earlier.

Then the build layer. Repositories, controllers, validators, algorithms, integrations. Each has design choices. Each warrants a spec. A failing unit test is a spec at this depth.

The list is illustrative, not exhaustive. The pattern is what matters. At every level, the same question applies: do I have enough design here to communicate it? Communicate to a teammate. Communicate to your future self, six months from now, when the context has evaporated. Communicate to an AI working against the spec. The recipient varies, the test doesn't. If you have enough design to communicate, write the spec. If not, do more design first.

That is the fractal.

## Orient yourself: requirement, solution, spec.

Inside the fractal, at every level, there's a natural forward motion to the work.

You start in requirements space. What is the user trying to do, what value does the business want, what problem are you actually solving. Best guesses, often research-backed, but still guesses until something ships and gets observed.

You move into solution space. You start picking among options. You commit to an approach.

You move into spec space. You write down the design decisions in a form precise enough for someone else, your future self, or an AI to act on.

The motion is forward but non-linear. At any point, you can be bounced back. A spec exposes an ambiguity that turns out to be a real ambiguity in the solution. The solution doesn't survive contact with a constraint you didn't know existed when you were in requirements space. The requirement itself was based on a misread of the user.

The reason to keep these three distinct is to orient when something punches a hole. (This isn't a new idea. See the OODA loop.) When something is wrong, you ask: which one is broken? Each of the three breaks open further. Requirements break into "do I understand the user, the behaviors, the entities, the desired outcomes." Solutions break into "is this the right architecture, the right model, the right interface." Specs break into "is the language clear, are the examples right, is the boundary defined."

Collapse the three and you can't orient. You just know something is wrong and you can't locate it. Keep them distinct and the failure mode is locatable.

## Designs are never complete. Build in feedback loops.

A spec written at any level is a commitment to a design that is your best guess at that moment.

This matters. As you go deeper into the fractal, the lower levels routinely punch holes in the higher levels. You start writing the API contract and discover the entity model is missing a relationship. You start writing the unit tests and discover the API contract has an inconsistency. The discovery doesn't mean the higher-level design was wrong. It means it was your best guess at the time, and going deeper revealed information you couldn't have had earlier.

The job is to act on that information. Re-think the higher-level design. Re-spec it. Then continue.

This is the opposite of waterfall. Waterfall assumes each phase produces a finished artifact that the next phase consumes. Fractal spec-driven work assumes each level produces an artifact good enough to drive the next, with the explicit understanding that the next will feed back and force revisions.

Spec a bit. Build a bit. Let the building reveal where the spec was wrong. Re-spec. Move on. Repeat at the next level.

This is still spec-driven. It's still design-driven. Because if you're not designing solutions to problems, what is anyone doing here.

## A short history of where specs lived.

Different traditions parked the spec at one layer of the stack and stayed there.

Eiffel and Design by Contract (Bertrand Meyer, 1986) put specs at the method level, inside the language. TDD (Kent Beck, around 2000) parked them at the unit level as failing tests. FIT and FitNesse (Cunningham, Martin, 2001-2002) pulled them into wikis where business stakeholders could write executable specs themselves. BDD (Dan North, 2003) reframed them as Given-When-Then at the domain layer. DDD, EventStorming, Event Modeling and Domain Storytelling pushed them up to system shape, business processes, and user journeys.

Each generation moved the spec to a new layer. None of them named the recursion. Spec-driven thinking treated each layer's spec form as if it were the whole story, when in fact each was one zoom level on a fractal that had no upper or lower bound.

## What changes when AI enters.

If solution and spec are the same artifact, then "the AI writes the spec from the prompt" and "the AI writes the solution from the prompt" become the same statement. The two collapse into one, and you lose the layer where the human is supposed to be making the design decision.

That's the core failure mode of vibe coding. You hand the AI a requirement. The AI invents a solution and expresses it as code. The expression is the only artifact, and it's owned by the model. The decision was made somewhere inside the model's weights, not by you. You didn't choose between options. You weren't in the room.

Keeping requirement, solution and spec distinct puts you back in the room. Requirement comes in. You make a design decision. You express that decision as a spec. The AI implements against the spec.

The spec is the boundary between human design and AI implementation. Without that boundary, the AI is doing your design work for you, silently. With that boundary, the AI is doing the implementation work explicitly, against intent you authored.

This is true at every level of the fractal. A product owner specifying a user journey is making design decisions an AI shouldn't be making. A senior engineer specifying a component contract is making design decisions an AI shouldn't be making. A developer writing a failing unit test is making design decisions an AI shouldn't be making. The fractal repeats, the boundary holds, and the human stays in the design loop at every level.

## Closing.

Specifications are the communication of design. Design happens at every level. Therefore specs are fractal.

Wherever there's enough design at a layer to be worth communicating, write the spec. When something punches a hole, orient: which of requirement, solution or spec is broken? When the lower level reveals an upper-level mistake, re-spec upward. None of this is waterfall. All of it is design-driven, which means spec-driven, by construction.

Acutely aware that this is the actual problem space, I've been working on [Narrative-Driven Development](/dialects/narrative-driven) as an attempt to address the fractal nature explicitly, at the scene and moment levels. NDD is a work in progress that acknowledges the recursion and is trying to solve it. It hasn't fully solved it. It's still being figured out.

— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*
