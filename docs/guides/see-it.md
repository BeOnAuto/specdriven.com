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

Spec-driven development is easier to understand when you can see it. This page shows examples of specs and what they clarify.

Right now, the clearest example we can show is [Narrative-Driven Development](/dialects/narrative-driven), a product modeling method purpose-built for line-of-business web applications. As other dialects and tools mature, we'll add their examples here too. **Building something in this space? [Submit a PR](https://github.com/BeOnAuto/specdriven.com) to add your own examples.**

## Narrative-Driven Development: Model in Action

NDD organizes product intent into a narrative model:

```text
Domain -> Narrative -> Scene -> Moment
```

Here is a small gym membership example.

```text
Domain: Gym Membership

Narrative: Visitor becomes a member

Scene: Membership created

Moment: Sign up for membership
Type: Command

Rule: Valid sign-ups create a new membership.

Example: New member signs up for a monthly plan
Given Jane is not already a member
When Jane signs up for a monthly plan with jane@example.com
Then Jane has an active monthly membership
And Jane sees a membership confirmation

Rule: Duplicate emails are rejected.

Example: Existing member tries to sign up again
Given jane@example.com already belongs to an active member
When Jane tries to sign up again with jane@example.com
Then the sign-up is rejected
And no duplicate membership is created
And Jane sees an email-already-registered message
```

## What This Clarifies

The example separates:

- **Domain**: Gym Membership
- **Narrative**: Visitor becomes a member
- **Scene**: Membership created
- **Moment**: Sign up for membership
- **Moment type**: Command
- **Rules**: valid sign-ups create memberships; duplicate emails are rejected
- **Examples**: concrete Given/When/Then cases

That structure is useful before any implementation format exists. Product can review the outcome. QA can review the examples. Design can review the visible states. Engineering can ask whether the behavior is precise enough to build.

## Add Should Statements

For interaction behavior, NDD uses should statements:

```text
describe Sign Up Form
  it should show membership tier options
  it should require an email address
  it should disable submit while sign-up is in progress
  it should show an inline error when the email is already registered
```

These statements sit next to the business rules they support.

## Explain Shown Information

Important screen content should have an explained source:

```text
What the product shows:
- Membership status appears after sign-up is accepted.
- The confirmation shows the selected membership tier.
- Duplicate-email errors depend on existing member records.
```

That is enough to catch ambiguity before build.

## The Landscape in Practice

The spec-driven wave isn't just theory. Teams are testing it in the real world, and the results are instructive, both the wins and the friction.

- **[Tessl](/landscape/tessl)** built the same app twice (vibe-coded vs. spec-driven). The vibe-coded version silently fabricated data. The spec-driven version caught it.
- **[Kiro](/landscape/kiro)** showcased non-coding business owners at Delta Airlines generating production prototypes from structured specs.
- **[GitHub Spec Kit](/landscape/github-spec-kit)** demonstrates greenfield and brownfield spec-driven workflows, with critical reviews noting real adoption friction.
- **Prezi Engineering** found that developers touching code directly became "an antipattern" in their spec-driven workflow.

The field is young. The honest takes matter as much as the success stories. See the [full practitioner feedback](/landscape/#practitioner-feedback) for details.

[Explore all tools](/landscape/)

## Ready to Go Deeper?

[Read the Manifesto](/manifesto) | [Join the Community](/community)

---

*Built by the team behind [Auto](https://on.auto), for the spec-driven community.*
