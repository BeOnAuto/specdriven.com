---
prev:
  text: Choosing Your Spec Format
  link: /guides/choosing-spec-format
next:
  text: Making Specs Executable
  link: /guides/executable-specs
image: /images/pages/guides/see-it.png
---

# See It In Action

![See It In Action](/images/pages/guides/see-it.png)

Spec-driven development becomes easier to understand when one small product decision is followed through several useful forms.

Imagine a gym that wants visitors to join online. “Let people sign up” is a useful starting point, but it leaves important decisions unresolved.

## 1. State the goal and outcome

```text
Goal
A visitor can become a gym member without staff assistance.

Outcome
The visitor has one active membership for the selected plan and can see that it was created.
```

The goal explains why the slice exists. The outcome says what must become true without prescribing an implementation.

## 2. Make the rules explicit

```text
Rule
A valid sign-up creates one active membership.

Rule
An email address cannot belong to two active memberships.
```

Rules expose product decisions that a builder would otherwise have to infer.

## 3. Add concrete behavioral examples

```gherkin
Scenario: A new member chooses a monthly plan
  Given Jane has no active membership
  When Jane signs up for the monthly plan with jane@example.com
  Then Jane has one active monthly membership
  And Jane sees a membership confirmation

Scenario: An existing member tries to join again
  Given jane@example.com belongs to an active member
  When Jane tries to sign up again with that email address
  Then the sign-up is rejected
  And no second membership is created
  And Jane sees an email-already-registered message
```

The examples turn an abstract rule into cases people can challenge. They are an introduction to the shape of a behavioral specification, not a complete assurance mechanism by themselves. Written examples can clarify what should happen, but they cannot tell you when the implementation stops matching them.

For consequential behavior, connect the important scenarios to tests that run against the system. That makes them [executable specifications](/guides/executable-specs#what-executable-means): readable expectations that can also detect when the software no longer behaves as specified.

## 4. Describe the visible interface expectations

```text
The sign-up view shows:
- available membership plans and prices
- an email field
- a clear action to join
- progress while the request is being processed
- either a confirmation or an error that explains what to do next
```

This is not a finished visual design. It states the information and feedback needed to support the behavior.

## 5. Define the information boundary

```json
{
  "email": "jane@example.com",
  "plan": "monthly"
}
```

```json
{
  "membershipId": "m_123",
  "status": "active",
  "plan": "monthly"
}
```

A schema or typed contract can make this boundary stricter. The examples still carry meaning that a data shape alone cannot express.

## 6. Connect what can be checked

The duplicate-email scenario should become an automated acceptance check. The request and response shapes might be validated against a schema. A person may still need to review whether the interface makes the result understandable.

That distinction matters:

- **The written decision** can be reviewed.
- **The encoded expectation** can be checked against implementation.
- **The user experience** may still require human judgment and real-world feedback.

No single artifact proves the whole product is correct. Together, they reduce how much a builder has to guess and make disagreements easier to find.

## What changed from the vague request?

“Let people sign up” became a small, connected set of explicit decisions:

- why the behavior exists
- what outcome must become true
- which rules constrain it
- concrete examples of success and failure
- what information the interface must communicate
- what data crosses the boundary
- which expectations can be automated

That is the practical move from an idea or prompt to a specification that can guide implementation and verification.

[Compare current tools and workflows →](/landscape/)

[Explore other approaches and formats →](/dialects/)
