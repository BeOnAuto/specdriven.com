# What Are Specifications?

## Think About It

What springs to mind when you hear "specifications"? A user story? A wireframe? An architecture diagram? A Swagger file?

These are specification **mediums** — containers for specifications. But what are specifications themselves?

## The Definition

Consider the patterns in your own work:

- A product owner understands what customers want and designs a solution.
- A UI designer understands the system and designs interfaces.
- An architect understands the requirements and designs components.

They all share the same pattern: someone understands a problem, designs a solution, and needs to communicate that design to those who will build it.

**Specifications are the communication of design.**

This distinction matters more than it sounds. The quality of your specifications lies in the quality of the communication — not the quality of the design itself. A brilliant design, poorly communicated, produces broken software. A modest design, clearly communicated, produces software that works.

You've seen this play out. The architect who has the whole system in their head but can't explain it. The product owner who knows exactly what they want but writes stories that could mean three different things. The design was good. The specification was bad. And the team built the wrong thing.

## High Quality vs. Low Quality

Compare these two specifications for the same feature:

**Low quality:**
> "As a user, I want to login so that I can use the system."

What does this tell you? Almost nothing. What kind of user? Login how? What happens on failure? What does "use the system" mean? You're left guessing — and every guess is a coin flip between a correct implementation and a defect.

**High quality:**
> "In order to keep my bank account safe, as an online banking customer, I want to access my account login history."
>
> **Acceptance Criteria:**
> - Login history shows the last 20 login attempts
> - Each entry displays date, time, IP address, and success/failure status
> - Failed login attempts are highlighted in red
> - The customer can filter by date range
> - Login history is only accessible after re-authentication

The second version communicates design. The first hopes someone guesses right. Every vague specification is a lottery ticket — and the odds aren't in your favor.

## Two Types of Specifications

### Domain Specifications

Domain specifications articulate the entities within a domain, their attributes, relationships, and the outcomes of their interactions. They describe behavior that spans multiple parts of your system.

You've likely seen the Given/When/Then format. Here's what it looks like when it's used to communicate a real domain behavior:

```gherkin
Feature: Search dealer inventory by color

  Scenario: Dealer has inventory with the desired color
    Given a dealer has a red BMW 330i and a blue Audi A4
    When Sarah searches for "red" cars
    Then she sees the BMW 330i
```

This isn't a test. It's a specification of how your domain behaves. Anyone — developer, tester, product owner, stakeholder — can read it and know exactly what the system should do. And when it's automated, it proves the system actually does it.

### Component Specifications

Component specifications communicate the behaviors and outcomes of individual modules. They describe what a single component should do in isolation:

```
Search Filter
  render
    it should show the color drop-down
    it should show the submit button
  submit
    it should show an error if no color is selected
    it should fire a search command with the selected color
```

Domain specifications tell you what the system does. Component specifications tell you how each piece contributes.

## Executable Specifications

Here's where it gets powerful. When you combine specifications with automated tests, you get **executable specifications** — specs that a machine can verify against running code.

This means your specifications are always up to date. They don't rot in a wiki somewhere, gradually drifting from reality. They're living proof that your system does what it should. Every time the code changes, the specifications run. If they pass, your system matches its design. If they fail, you know immediately — and you know exactly what broke.

Documentation lies. Code is cryptic. Executable specifications are the only artifact that is both human-readable and machine-verifiable.

---

**Next:** [Discover spec dialects — purpose-built specification languages](/dialects/)
