---
prev:
  text: The Spec-Driven Lifecycle
  link: /guides/
next:
  text: Where Specs Come From
  link: /guides/discovery
image: /images/pages/guides/start-here.png
---

# Specify a Slice from Scratch

![Specify a Slice from Scratch](/images/pages/guides/start-here.png)

This is a guided walkthrough. One feature. Discovery to deployment. No frameworks, no tools, just the thinking process. You can apply what you learn here with any spec format, any language, any AI tool.

## The Feature

We're building an online bookstore. A customer asked: "I want to be notified when a book I wanted is back in stock."

That's our starting point. A request from a user. Let's take it through the lifecycle.

## Discovery: What's the Problem?

Before designing anything, understand the problem.

The customer wants to know when something they wanted becomes available again. Why? Because they came to buy it, it wasn't there, and they left disappointed. The problem isn't "we need a notification feature." The problem is "we're losing sales because customers can't get what they came for."

That distinction matters. The first framing leads to "build a notification." The second framing opens up more possibilities. Maybe we also need to show alternatives. Maybe we need to track what's frequently out of stock and fix our supply chain. The notification is one solution. Understanding the problem gives you options.

For this walkthrough, we'll focus on the notification solution. But notice how spending 5 minutes on problem understanding already expanded our thinking.

> 🔄 **Feedback opportunity:** State the problem to someone who isn't involved in the project. If they can't understand it in one sentence, it's not clear enough yet. "We're losing sales when items are out of stock and customers have no way to know when they're back" is clear. "We need a back-in-stock notification system" is a solution, not a problem statement.

## Design: What's the Solution?

Now we design. Several decisions need to be made:

- **How does the customer register interest?** A button on the out-of-stock product page? An email signup? A checkbox during search?
- **How do we notify them?** Email? Push notification? SMS? In-app?
- **When exactly is "back in stock"?** When inventory count goes above zero? When it's been confirmed by the warehouse? When it's available for purchase?
- **What happens if 10,000 people registered interest and we only got 5 units back?** Do we notify everyone? First-come-first-served? Do we create urgency?

Each of these is a design decision. Each one has alternatives. Each one has trade-offs. This is the work most teams skip when they go straight from "customer wants notifications" to "build it."

For this walkthrough, let's make some decisions:

- Button on the product page says "Notify me when available"
- Customer enters their email
- Notification goes via email
- "Back in stock" means inventory count goes above zero in the system
- Notify all registered customers, no limit, include current stock count

Now we need to organize the design into a hierarchy. Specs don't live as a flat list. The four levels are **capability → goal → outcome → slice**, with **business rules** and **component specs** at the slice level. For the full explanation of each level and how they compose, see [Writing Your First Spec](/guides/writing-your-first-spec).

Here's how that schema lands when applied to our example, with the rest of the system collapsed and our focus path expanded:

```
online bookstore (capability)
├── browse and search                          [...]
├── add to cart                                [...]
├── checkout and pay                           [...]
├── buy items that aren't currently in stock (goal)
│   ├── suggest in-stock alternatives          [...]
│   ├── pre-order before release               [...]
│   └── register for back-in-stock notification and
│       receive it when the item returns (outcome)
│       ├── customer registers interest (slice) ◀── we'll spec this
│       │   ├── business rule: only registerable when out of stock
│       │   ├── business rule: one registration per email per product
│       │   └── component spec: Notification Registration Button
│       └── customer is notified when stock returns (slice) ◀── and this
│           ├── business rule: notify all registered customers when count > 0
│           ├── business rule: include current stock count in the email
│           ├── business rule: remove customer from list after notify
│           └── component spec: Notification Email
├── manage account                             [...]
└── manage orders and returns                  [...]
```

For tooling that natively supports this hierarchy, see [Choosing Your Spec Format](/guides/choosing-spec-format).

> 🔄 **Feedback opportunity:** Walk through these decisions with someone who knows the domain. A product owner would immediately ask "what about the 10,000 people / 5 units scenario?" A developer would ask "what triggers the inventory count change, is it a webhook from the warehouse?" These questions refine the design before any specs are written.

## Specification: Express the Design

Now we have enough design to specify. Two slices make up the outcome. Each slice gets its own rules and examples. Component specs sit alongside.

**Slice 1: Customer registers for back-in-stock notification**

```
Rule: Customers can register for notifications on out-of-stock items

  Example: Customer registers for notification
    Given product "Domain-Driven Design" is out of stock
    When customer "jane@example.com" registers for back-in-stock notification
    Then "jane@example.com" is added to the notification list for "Domain-Driven Design"

  Example: Customer cannot register for in-stock items
    Given product "Clean Code" is in stock with 12 units
    When customer "jane@example.com" tries to register for back-in-stock notification
    Then the registration is rejected because the item is currently available
```

**Slice 2: Customer is notified when stock returns**

```
Rule: Registered customers are notified when items return to stock

  Example: Single customer notified
    Given customer "jane@example.com" is registered for "Domain-Driven Design"
    And product "Domain-Driven Design" has 0 units in stock
    When inventory for "Domain-Driven Design" is updated to 3 units
    Then "jane@example.com" receives a back-in-stock email
    And the email includes the current stock count of 3
    And "jane@example.com" is removed from the notification list

  Example: Multiple customers notified
    Given 500 customers are registered for "Domain-Driven Design"
    When inventory for "Domain-Driven Design" is updated to 5 units
    Then all 500 registered customers receive a back-in-stock email
    And each email includes the current stock count of 5
```

**Component specs (describe/it/should):**

```
describe Notification Email
  it should include the product name in the subject line
  it should include the current stock count in the body
  it should include a direct link to the product page
  it should not include pricing (price may have changed)

describe Notification Registration Button
  it should only appear on out-of-stock product pages
  it should show an email input field when clicked
  it should validate email format before submission
  it should show confirmation text after successful registration
  it should not allow duplicate registrations for the same product
```

Notice the structure: two slices that together fulfill one outcome ("the customer registers for and receives a back-in-stock notification"). Each slice has its own rules and examples. The component specs sit alongside the slices because they're horizontal. The notification email could be reused by other slices in other outcomes (order confirmations, password resets, anything that needs an email). The slices themselves are also potentially reusable. The "customer is notified" slice could appear in other outcomes that involve notifying customers about something.

Starting from "I want to be notified when a book is back in stock," we now have a precise, testable specification that any developer or AI tool can implement from. We also surfaced at least one design decision we hadn't thought of (should the email include pricing?) and resolved it (no, because the price may have changed since they registered).

> 🔄 **Feedback opportunity:** Have someone read these specs without any context other than the slice titles. Can they understand what the system should do? Can they spot anything missing? A QA person reading this would immediately ask: "what happens if the inventory goes back to zero before the emails are all sent?" That's a spec we missed. Add it.

## Implementation: Hand It to the Builder

With these specs, you can hand the feature to a developer or an AI coding agent. The specs provide clear acceptance criteria. The domain specs tell you what the system should do. The component specs tell you what the individual pieces should look like.

If you're using TDD, each Given/When/Then becomes a test. Each "it should" becomes a test. The AI or developer writes code to make those tests pass.

If you're using an AI tool like Claude Code, the spec IS the prompt. You're giving the AI a tight brief. It knows exactly what success looks like.

## Verification: Did It Work?

With executable specs, verification is automatic. Run the tests. If they pass, the system meets the specifications. If they fail, you know exactly which specification isn't being met.

But verification isn't enough on its own. You also want validation: is this the right thing? Show the working feature to a real user. Watch them interact with it. Do they understand the "Notify me" button? Do they check their email when they get the notification? Do they come back and buy the book?

That feedback loops back. Maybe the email needs to be more prominent. Maybe users want push notifications, not email. Maybe the stock count in the email causes anxiety ("only 3 left!"). Each insight is a potential spec change.

## What You Just Did

You went through the full lifecycle on one feature:

Discovery: understood the problem (losing sales from out-of-stock items).
Design: organized the work into a hierarchy (capability → goal → outcome → slices) and made specific decisions at each level.
Specification: expressed those decisions precisely (slices with rules/examples + component specs).
Implementation: handed specs to a builder as acceptance criteria.
Verification: automated testing against the specs.
Validation: user feedback revealing what to change next.

Every guide on this site goes deeper into one part of this cycle. The cycle itself never changes. It just gets more detailed as the problems get more complex.
