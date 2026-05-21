---
prev:
  text: Making Specs Executable
  link: /guides/executable-specs
next:
  text: Using Specs with LLMs
  link: /guides/specs-with-llms
image: /images/pages/guides/test-harness-engineering.png
---

# Test Harness Engineering

![Test Harness Engineering](/images/pages/guides/test-harness-engineering.png)

Having specs is one thing. Having the infrastructure to verify them is another. Test harness engineering is the practice of building the machinery that lets your specs run against your system reliably.

## The Right Frame for Testing

Most testing discussions start with the testing pyramid: lots of unit tests at the bottom, some integration tests in the middle, few end-to-end tests at the top. That's a description of what you end up with, not a thinking framework.

The right frame is: does my system achieve its intended value? Engineer the harness to verify that. Using whatever combination of techniques the problem requires.

Sometimes that means a unit test is enough. Sometimes you need a test that spans five services, stubs an external payment provider, and verifies that a customer receives a confirmation email within 60 seconds. The testing pyramid doesn't tell you which. Your specifications do.

Start with the valuable outcome you need to verify. Then figure out what infrastructure you need to make that verification happen. That's test harness engineering.

## The Four Test Doubles

When your system talks to external services, databases, message queues, or other components, you need test doubles: things that stand in for the real dependencies during testing. Most people call all of them "mocks." They're not all mocks. There are four types, and knowing the difference matters.

**Stubs** return predetermined responses. They don't verify how they were called. You use them to control the test environment: "when the payment service is called, return success." Stubs are the workhorse of test harness engineering. They're simple, predictable, and easy to maintain.

**Fakes** are working implementations that take shortcuts. A fake email service that writes to an in-memory list instead of sending real emails. A fake database that uses an in-memory store. Fakes are more realistic than stubs because they actually process input, but they're simpler and faster than the real thing. Extremely useful for testing complex interactions.

**Mocks** verify that specific calls were made with specific arguments. "Verify that the email service was called with recipient 'jane@example.com' and subject 'Your item is back in stock'." Mocks are the most commonly used term, and also the most overused test double. They create tight coupling between the test and the implementation. If you change how the system achieves its outcome (even if the outcome is the same), mock-based tests break. Use mocks sparingly.

**Spies** record calls made to them so you can verify after the fact. Less common than the other three. Most useful in legacy system migrations where you need to observe existing behavior before changing it.

The hierarchy of preference for most teams: stubs first (simplest, most stable), fakes when you need realism (more work upfront but more reliable tests), mocks when you specifically need to verify a call was made (use sparingly), spies rarely.

## Three Properties of Good Test Strategy

Your test harness needs three things. If any of them is missing, developers (and AI agents) will start skipping tests.

**Fast.** If your test suite takes 45 minutes, nobody runs it before committing. Invest in making tests fast. Use fakes instead of real databases. Run tests in parallel. Keep the suite under a few minutes for the full run if possible. This is an investment in your production system.

**Predictable.** The same test should produce the same result every time. Flaky tests are worse than no tests because they train people to ignore failures. If a test depends on timing, network availability, or external state, it will be flaky. Use stubs and fakes to remove non-determinism.

**Easy to write.** If writing a new test requires 200 lines of setup, developers won't write tests. Invest in fixtures, factories, and helpers that make the setup cheap. A test should be: set up the state, perform the action, verify the outcome. If the setup is longer than the verification, your harness needs work.

## Domain Tests vs Shrink-Wrap Tests

There's a difference between testing value and testing implementation.

A domain test verifies a valuable outcome: "given a customer placed an order and their birthday is tomorrow, then they receive a birthday discount." This test survives refactoring. It survives redesign. It survives reimplementation. As long as the business rule holds, the test holds.

A shrink-wrap test verifies implementation details: "click the submit button, wait for the spinner to disappear, check that the div with class 'success-message' contains the text 'Order placed'." This test breaks when you move the button, rename a CSS class, change the loading animation, or refactor the component. The value is unchanged but the test fails.

Shrink-wrap tests are a maintenance burden. They create a brittle layer that punishes change. Every refactor means updating tests that aren't verifying value, just verifying that the implementation looks the same as before.

Aim for domain tests. Test the outcomes that matter to the business. Test them through the appropriate seam (sometimes the API, sometimes a service layer, sometimes a domain function). Let the implementation flex underneath.

> 🔄 **Feedback opportunity:** Look at your last 10 test failures. How many were because the system stopped meeting a specification (real bugs)? How many were because the implementation changed but the behavior didn't (shrink-wrap breaks)? If more than half are shrink-wrap, your test harness is working against you.
