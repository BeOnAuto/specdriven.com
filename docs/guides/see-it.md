---
prev:
  text: Writing Your First Spec
  link: /guides/writing-your-first-spec
next:
  text: Discovery
  link: /guides/discovery
---

# See It In Action

Spec-driven development is easier to understand when you can see it. This page shows real examples of specs and what they produce.

Right now, the most complete example we can show is [Narrative-Driven Development](/dialects/narrative-driven), a [spec dialect](/dialects/) purpose-built for line-of-business web applications. As other dialects and tools mature, we'll add their examples here too. **Building something in this space? [Submit a PR](https://github.com/BeOnAuto/specdriven.com) to add your own examples.**

## Narrative-Driven Development: One Model, Three Views

Narrative-Driven Development is a model-based approach. The same specification renders in three ways for three audiences:

**The Visual View** (for designers and product teams):

<ThemeImage dark="/visual-canvas-dark.png" light="/visual-canvas-light.png" alt="User journey map showing the gym membership narrative as a visual timeline with moments, interfaces, and system actions" />

**The Document View** (for PMs, QA, and stakeholders):

<ThemeImage dark="/structured-doc-dark.png" light="/structured-doc-light.png" alt="Structured document showing the gym membership narrative as readable specifications with business rules, acceptance criteria, and edge cases" />

**The Code View** (for developers):

The TypeScript fluent interface below is one port into the model. You could also write the model as raw JSON or build DSLs in other languages. The model is the source of truth; languages are just interfaces.

## The Four Slice Types

Narrative-Driven Development distills complex web applications into four types of slices. These four are enough to describe any line-of-business application.

### Command Slice
Actions that change state. The user does something, the system responds.

```typescript
narrative('Gym Membership', () => {
  command('Sign up for membership')
    .client(() => {
      describe('Sign Up Form', () => {
        it('should show membership tier options')
        it('should validate email format before submission')
        it('should disable submit button while processing')
      })
    })
    .server(() => {
      specs('Membership sign-up', () => {
        rule('Valid sign-ups create a new membership', () => {
          example('New member signs up for a monthly plan')
            .given('MemberState', { memberId: 'member-1', status: 'none' })
            .when('SignUpForMembership', { tier: 'monthly', email: 'jane@example.com' })
            .then('MembershipCreated', { memberId: 'member-1', tier: 'monthly' })
        })
        rule('Duplicate emails are rejected', () => {
          example('Existing member tries to sign up again')
            .given('MemberState', { email: 'jane@example.com', status: 'active' })
            .when('SignUpForMembership', { email: 'jane@example.com' })
            .thenError('ValidationError', 'Email already registered')
        })
      })
    })
})
```

**Client specs** use `describe/it/should` for UI behavior. **Server specs** use `Given/When/Then` for business domain logic. Both are part of the same slice.

### Query Slice
Read operations. The user needs to see data.

```typescript
narrative('Gym Membership', () => {
  query('View membership dashboard')
    .client(() => {
      describe('Membership Dashboard', () => {
        it('should show current membership tier and renewal date')
        it('should show remaining guest passes')
        it('should show visit history for the current month')
      })
    })
    .server(() => {
      specs('Dashboard data', () => {
        rule('Dashboard shows current membership state', () => {
          example('Active member views their dashboard')
            .given('MembershipCreated', { memberId: 'member-1', tier: 'monthly' })
            .given('GuestPassIssued', { memberId: 'member-1', passes: 3 })
            .when('GetMemberDashboard', { memberId: 'member-1' })
            .then('MemberDashboard', { tier: 'monthly', guestPasses: 3 })
        })
      })
    })
})
```

### React Slice
Automated system responses to events. No client, just server.

```typescript
narrative('Gym Membership', () => {
  react('Send welcome email on sign-up')
    .server(() => {
      specs('Welcome email automation', () => {
        rule('New members receive a welcome email', () => {
          example('Welcome email sent after sign-up')
            .given('MembershipCreated', { memberId: 'member-1', email: 'jane@example.com' })
            .then('WelcomeEmailSent', { to: 'jane@example.com' })
        })
      })
    })
})
```

### Experience Slice
Pure UI behavior. No server, just client.

```typescript
narrative('Gym Membership', () => {
  experience('Membership tier comparison')
    .client(() => {
      describe('Tier Comparison', () => {
        it('should highlight the recommended tier')
        it('should show feature differences between tiers')
        it('should animate the selected tier card on hover')
      })
    })
})
```

## Beyond the Basics

These four slice types handle the structure. Underneath, the model supports much more:

- **Data architecture**: sinks and sources that define where data flows (event streams, databases, integrations, APIs)
- **Integrations**: external service connections (payment providers, email services, analytics)
- **Messages**: typed commands, events, states, and queries with field definitions
- **Journeys**: narratives grouped into ordered user flows
- **Scene classification**: UI patterns (page, modal, drawer, wizard-step) with routing
- **Design assets**: image metadata at every level for visual tooling
- **Progressive disclosure**: start with just narrative names, progressively add slices, then specs, then full detail

Every piece of generated code traces back to the specification. Change the narrative, and the entire stack updates.

[Learn more about Narrative-Driven Development](/dialects/narrative-driven) | [Explore all spec dialects](/dialects/)

## The Landscape in Practice

The spec-driven wave isn't just theory. Teams are testing it in the real world, and the results are instructive (both the wins and the friction).

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
