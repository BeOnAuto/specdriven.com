---
prev: false
next:
  text: Why Spec-Driven?
  link: /why
image: /images/pages/what.png
---

# What Are Specs?

![What Are Specs?](/images/pages/what.png)

## Think About It

What springs to mind when you hear "specifications"? A user story? A wireframe? An architecture diagram? A Swagger file?

These can all carry specification material. Whether they are sufficient specifications depends on what decision they make explicit and what someone needs to do with it.

## The Definition

A practical definition is:

> **A specification is an explicit, inspectable expression of intended design or behavior that can guide implementation or verification.**

Three related ideas are easy to collapse:

- A **requirement** describes a need, problem, constraint, or outcome.
- A **design** chooses how the product or system will address it.
- A **specification** expresses intended design or behavior precisely enough for its audience to review, implement, or check.

The boundaries are not always clean. A user story can contain requirements and specification material. A schema can be both design and specification. The distinction is useful because calling an artifact a “spec” does not make it sufficiently specific.

You've seen this play out. The architect who has the whole system in their head but can't explain it. The product owner who knows exactly what they want but writes stories that could mean three different things. The design was good. The specification was bad. And the team built the wrong thing.

## The Bandwidth Problem

You have a model of the system in your head right now. It's rich, nuanced, full of context. You know why that edge case matters. You know which user workflow is critical and which is cosmetic. You understand the business constraint that makes the obvious technical solution impossible.

Now try to transfer that model to someone else's head.

You can't. Not fully. Human communication bandwidth is limited. You talk, draw, write documents, and demonstrate behavior; whatever remains implicit gets filled in by the listener's assumptions and context.

This is not a failure of communication skills. It's a fundamental constraint of being human. Your mental models are too rich, too interconnected, too soaked in implicit knowledge to survive the compression of speech or text without loss.

Specifications are how you fight that constraint. A good specification doesn't just describe what you want. It creates a shared reference point that both sides can examine, question, and refine. It forces ambiguity into the open. It turns "I think we're on the same page" into "let's look at the same page and find out."

You will never achieve perfect synchronization. But specifications get you closer than anything else.

## High Quality vs. Low Quality

When humans communicate design to other humans, the difference between good and bad specs is stark. Compare these two specifications for the same feature:

**Low detail:**
> "Users can login to the system."

What does this tell you? Almost nothing. What kind of user? Login how? What happens on failure? You're left guessing, and every guess is a coin flip between a correct implementation and a defect.

**More explicit:**
> "Online banking customers can view their login history to verify account security."
>
> - Login history shows the last 20 login attempts
> - Each entry displays date, time, IP address, and success/failure status
> - Failed login attempts are highlighted in red
> - The customer can filter by date range
> - Login history is only accessible after re-authentication
> - Failed login attempts are visually distinguishable

The second version is still not complete, but it exposes decisions the first leaves to guesswork. Specificity is contextual: it is enough when the intended audience can act without inventing consequential behavior.

## The OG Specifications

Structured specifications aren't new. Two formats emerged from the BDD movement that proved specifications could be both human-readable and machine-executable:

### Given/When/Then (Gherkin)

The domain-level specification format. It articulates the entities within a domain, their attributes, relationships, and the outcomes of their interactions:

```gherkin
Feature: Search dealer inventory by color

  Scenario: Dealer has inventory with the desired color
    Given a dealer has a red BMW 330i and a blue Audi A4
    When Sarah searches for "red" cars
    Then she sees the BMW 330i
```

This is a readable example of intended behavior. When connected to automation, it can check whether the implementation satisfies this encoded scenario.

### describe/it/should

The component-level specification format. It communicates the behaviors and outcomes of individual modules:

```typescript
describe `Search Filter`

  describe `render`
    it `should show the color drop-down`
    it `should show the submit button`

  describe `submit`
    it `should show an error if no color is selected`
    it `should fire a search command with the selected color`
```

Domain specifications tell you what the system does. Component specifications tell you how each piece contributes.

These formats helped establish that specifications can be readable by people and connected to machine verification. They now sit among a wider set of [approaches and formats](/dialects/) used for different decisions.

## Executable Specifications

Here's where it gets powerful. When you combine specifications with automated tests, you get **executable specifications** that a machine can verify against running code.

Executable specifications can reduce drift because selected statements or examples run against the implementation. When a check fails, it exposes a disagreement between an encoded expectation and observed behavior.

A passing check is narrower than proof that the whole system matches its design. The example may be incomplete, the assertion may observe the wrong thing, and the shared assumption may itself be wrong. Executability strengthens a specification; it does not remove the need for review, discovery, or judgment.

Maintained executable specifications can become useful institutional memory. They show what selected behavior was expected and whether current code still satisfies it. Reasons and product context still need to be recorded where the check itself cannot express them.

In an age of rapid AI-generated change, that connection between an explicit expectation and observed behavior is an important control.
