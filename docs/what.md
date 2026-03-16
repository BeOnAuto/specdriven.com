---
prev: false
next:
  text: The Manifesto
  link: /manifesto
---

# What Are Specifications?

## Think About It

What springs to mind when you hear "specifications"? A user story? A wireframe? An architecture diagram? A Swagger file?

These are specification **mediums**, containers for specifications. But what are specifications themselves?

## The Definition

Consider the patterns in your own work:

- A product owner understands what customers want and designs a solution.
- A UI designer understands the system and designs interfaces.
- An architect understands the requirements and designs components.

They all share the same pattern: someone understands a problem, designs a solution, and needs to communicate that design to those who will build it.

**Specifications are the communication of design.**

This distinction matters more than it sounds. The quality of your specifications lies in the quality of the communication, not the quality of the design itself. A brilliant design, poorly communicated, produces broken software. A modest design, clearly communicated, produces software that works.

You've seen this play out. The architect who has the whole system in their head but can't explain it. The product owner who knows exactly what they want but writes stories that could mean three different things. The design was good. The specification was bad. And the team built the wrong thing.

## The Bandwidth Problem

You have a model of the system in your head right now. It's rich, nuanced, full of context. You know why that edge case matters. You know which user workflow is critical and which is cosmetic. You understand the business constraint that makes the obvious technical solution impossible.

Now try to transfer that model to someone else's head.

You can't. Not fully. Human communication bandwidth is brutally limited. You talk, you draw, you write documents, you wave your hands, and maybe 60% of what you meant gets through. The other 40% gets filled in by the listener's assumptions, biases, and different context.

This is not a failure of communication skills. It's a fundamental constraint of being human. Your mental models are too rich, too interconnected, too soaked in implicit knowledge to survive the compression of speech or text without loss.

Specifications are how you fight that constraint. A good specification doesn't just describe what you want. It creates a shared reference point that both sides can examine, question, and refine. It forces ambiguity into the open. It turns "I think we're on the same page" into "let's look at the same page and find out."

You will never achieve perfect synchronization. But specifications get you closer than anything else.

## High Quality vs. Low Quality

When humans communicate design to other humans, the difference between good and bad specs is stark. Compare these two specifications for the same feature:

**Low detail:**
> "Users can login to the system."

What does this tell you? Almost nothing. What kind of user? Login how? What happens on failure? You're left guessing, and every guess is a coin flip between a correct implementation and a defect.

**High detail:**
> "Online banking customers can view their login history to verify account security."
>
> - Login history shows the last 20 login attempts
> - Each entry displays date, time, IP address, and success/failure status
> - Failed login attempts are highlighted in red
> - The customer can filter by date range
> - Login history is only accessible after re-authentication
> - *(and dozens more details for a complete spec...)*

The second version communicates design. The first hopes someone guesses right. Every vague specification is a lottery ticket, and the odds aren't in your favor.

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

This isn't a test. It's a specification of how your domain behaves. Anyone can read it and know exactly what the system should do. And when it's automated, it proves the system actually does it.

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

These were the pioneers. They proved that structured, executable specifications change everything about how software gets built. Today, they're part of a growing family of [spec dialects](/dialects/) purpose-built for different domains.

## Executable Specifications

Here's where it gets powerful. When you combine specifications with automated tests, you get **executable specifications** that a machine can verify against running code.

This means your specifications are always up to date. They don't rot in a wiki somewhere, gradually drifting from reality. They're living proof that your system does what it should. Every time the code changes, the specifications run. If they pass, your system matches its design. If they fail, you know immediately, and you know exactly what broke.

Documentation lies. Code is cryptic. Executable specifications are one of the few artifacts that are both human-readable and machine-verifiable.

They also stand the test of time. People leave, context gets lost, and codebases evolve in ways no one anticipated. But executable specifications remain valid. They're institutional memory that doesn't walk out the door. Years from now, when someone asks "why does this work this way?", the specs still answer.

In the age of AI where change happens in a blink, executable specs are the most reliable way to maintain control.

