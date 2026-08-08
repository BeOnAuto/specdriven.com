---
prev:
  text: From Requirements to Specifications
  link: /guides/requirements-to-specs
next:
  text: Using AI to Explore Solutions
  link: /guides/ai-explore-solutions
image: /images/pages/guides/writing-your-first-spec.png
---

# Writing Your First Spec

![Writing Your First Spec](/images/pages/guides/writing-your-first-spec.png)

> You don't need any tools to start writing specifications. A text file is enough. This guide walks you through writing your first structured spec, from a vague idea to something an AI (or a human) can build from.

## How Specs Are Organized

Before we write a spec, understand the hierarchy. Specs aren't a flat collection of files. They have structure that scales:

- A **capability** is a major area of business value (e.g., "online bookstore")
- A **goal** is something a user accomplishes within a capability (e.g., "buy out-of-stock items")
- An **outcome** is a single end-state from pursuing the goal (e.g., "get notified and complete the purchase")
- A **slice** is a discrete time-based unit within an outcome (e.g., "register for notification")
- **Rules** and **component specs** live at the slice level

If you're writing your very first spec, you might not have a full hierarchy yet. That's fine. Start with the slice. As you add more slices, the higher levels emerge naturally. You'll notice that several slices belong to the same outcome. Several outcomes belong to the same goal. The hierarchy gives you a place to organize them as you grow.

For tooling that natively supports this hierarchy with executable specs, see [Choosing Your Spec Format](/guides/choosing-spec-format).

## Start with What You Know

You have a feature in mind. Maybe it's a user sign-up flow, a payment integration, or a dashboard. Right now, it lives in your head as a loose collection of ideas, constraints, and assumptions.

That's normal. Every spec starts there. The goal is to get it out of your head and into a format that someone else (or an AI) can understand without asking you twenty questions.

## The Simplest Spec: Rules and Examples

The most battle-tested format for specifications is **rules and examples**. It comes from the BDD (Behavior-Driven Development) community, and it works because it maps to how people naturally think about software.

A **rule** is a business constraint. An **example** is a concrete scenario that illustrates the rule.

Here's a feature described as rules and examples in plain text:

```
Slice: Membership Sign-Up

  Rule: Valid sign-ups create a new membership
    Example: New member signs up for a monthly plan
      Given no existing membership for "jane@example.com"
      When Jane signs up with tier "monthly" and email "jane@example.com"
      Then a membership is created with tier "monthly"
      And a welcome email is sent to "jane@example.com"

  Rule: Duplicate emails are rejected
    Example: Existing member tries to sign up again
      Given an active membership for "jane@example.com"
      When someone signs up with email "jane@example.com"
      Then the sign-up is rejected with "Email already registered"

  Rule: Email format must be valid
    Example: Invalid email is rejected
      When someone signs up with email "not-an-email"
      Then the sign-up is rejected with "Invalid email format"
```

That's it. No special syntax. No tools. Just rules and examples in a text file.

## Why This Works

This format works because it forces you to answer the questions that matter:

1. **What are the rules?** Not "how does the UI look" or "what API endpoint do we need," but what are the actual business constraints?
2. **What are the concrete examples?** Not abstract descriptions, but specific scenarios with specific data.
3. **What happens at the edges?** Duplicate emails, invalid input, missing data. The examples that feel obvious until you forget them.

When you hand this to a developer (or an AI), they know exactly what to build. When you hand it to a tester, they know exactly what to verify. When you hand it to a product manager, they can read it and say "yes, that's what I meant" or "no, you missed this case."

## The Given/When/Then Pattern

The examples above use the **Given/When/Then** pattern:

- **Given** sets up the initial state (what's true before the action)
- **When** describes the action (what the user or system does)
- **Then** describes the expected outcome (what should happen)

It separates setup, action, and assertion, which is how tests work too. For the lineage and a deeper look at the format, see [The OG Specifications](/what#the-og-specifications).

## For UI Behavior: Describe/It/Should

Given/When/Then works well for business logic. For UI behavior, a different pattern is more natural:

```
Sign-Up Form
  it should show membership tier options
  it should validate email format before submission
  it should disable the submit button while processing
  it should show an error message if the email is already registered
  it should redirect to the dashboard on success
```

The **describe/it/should** pattern reads like a checklist of what the UI should do, which makes it easy for designers and front-end developers to review. See [The OG Specifications](/what#the-og-specifications) for where it came from.

## Putting Them Together

A complete spec for a feature might combine both patterns. Business logic gets Given/When/Then. UI behavior gets describe/it/should. Here's a sketch:

```
Slice: Membership Sign-Up

  UI: Sign-Up Form
    it should show membership tier options (monthly, annual)
    it should validate email format before submission
    it should disable the submit button while processing
    it should show a loading spinner during submission
    it should show an error message on failure
    it should redirect to the dashboard on success

  Rule: Valid sign-ups create a new membership
    Example: New member signs up for a monthly plan
      Given no existing membership for "jane@example.com"
      When Jane signs up with tier "monthly" and email "jane@example.com"
      Then a membership is created with tier "monthly"
      And a welcome email is sent to "jane@example.com"

  Rule: Duplicate emails are rejected
    Example: Existing member tries to sign up again
      Given an active membership for "jane@example.com"
      When someone signs up with email "jane@example.com"
      Then the sign-up is rejected with "Email already registered"
```

No framework. No tooling. Just a text file that captures what you're building and why.

## Using This with an AI

Once you have a spec like this, you can hand it to any AI coding tool and say: "Implement this feature according to this specification." The spec gives the AI:

- **Clear boundaries**: what's in scope, what's not
- **Concrete examples**: specific inputs and expected outputs
- **Edge cases**: the scenarios that vibe coding typically misses

For more on using specs effectively with AI tools, see [Using Specs with LLMs](/guides/specs-with-llms).

## What Makes a Good Spec

A few principles that hold regardless of format:

**Be concrete, not abstract.** "The system should handle errors gracefully" is not a spec. "When the payment gateway returns a timeout, the user sees 'Payment could not be processed. Please try again.' and no charge is created" is a spec.

**Cover the edges, not just the happy path.** The happy path is obvious. The value of specs is in the edges: what happens when the input is empty, when the user is unauthorized, when the network fails, when two requests arrive simultaneously.

**Keep them readable.** If a non-developer can't read your spec and tell you whether it's right, it's too technical. Specs are communication. If they don't communicate, they're not doing their job.

**Keep them small.** One feature, one file. If a spec is getting long, you're probably bundling multiple features together.

> 🔄 **Feedback opportunity:** Read your spec out loud to someone who isn't a developer. If they can't follow it, it's too technical. If they spot a missing case, you've earned cheap feedback. The cost of changing a sentence in a spec is a conversation. The cost of changing the same decision in code is a sprint.

## What's Next

This guide covered the basics: rules, examples, and the two core patterns (Given/When/Then and describe/it/should). From here:

- **[See It In Action](/guides/see-it)** for one decision expressed through several useful formats
- **[Making Specs Executable](/guides/executable-specs)** to turn these specs into automated tests
- **[Using Specs with LLMs](/guides/specs-with-llms)** for prompt patterns that get better results from AI coding tools

---
