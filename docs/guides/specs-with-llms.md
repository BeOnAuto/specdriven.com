---
prev:
  text: Test Harness Engineering
  link: /guides/test-harness-engineering
next:
  text: Guardrail Engineering
  link: /guides/guardrail-engineering
image: /images/pages/guides/specs-with-llms.png
---

# Using Specs with LLMs

![Using Specs with LLMs](/images/pages/guides/specs-with-llms.png)

When an LLM implements your code, the spec is its success criterion. Without one, the LLM decides what success looks like. With one, you do.

## The Spec as Acceptance Criteria

An LLM given a task will keep going until it believes the task is complete. Hell or high water. It will take shortcuts. It will make assumptions. It will sometimes cheat (write meaningless tests to hit coverage numbers). That's not malice. It's the nature of optimizing for task completion.

Your job is to define "complete" in a way that aligns with your actual intent. That's what specs do.

When you give an LLM a specification coupled with a test, the test becomes the acceptance criterion. The LLM writes code. The test runs. If it passes, the spec is met. If it fails, the LLM tries again. This is a tighter feedback loop than any human code review.

The key: your test must verify the OUTCOME, not the implementation path. If the test is overly specific about how the code should work, the LLM is constrained unnecessarily. If the test only checks the outcome, the LLM has freedom to implement however it wants within the bounds of correctness.

## Atomic Task Decomposition

Don't give an LLM a massive spec and say "build everything." Break it down.

Each task should be one commit, one test, no exceptions. That's the atomic unit. The LLM gets one thing to do, one way to know it's done, and one opportunity to commit.

Why this granularity? Because LLMs lose coherence over long implementation sequences. Each decision they make compounds. Ten good decisions in a row and the system is fine. But a bad decision at step 3 poisons steps 4 through 10. Small atomic tasks limit the blast radius.

## Dependency Graphs

Once you have atomic tasks, they need an order. Some tasks depend on others. The database schema has to exist before the service that queries it. The domain logic has to work before the API that exposes it.

Build a dependency graph for your tasks. Identify which can run in parallel (independent components) and which must be sequential (downstream dependencies). This graph becomes the execution plan.

If your AI tool supports sub-agents or parallel execution, the dependency graph tells it what to fire in parallel and what to wait for. If it doesn't, the graph still gives you the optimal ordering for sequential execution.

> 🔄 **Feedback opportunity:** Before starting implementation, can you list every task and its dependencies? If you can't, the design isn't broken down enough. If you can, you have a plan that AI can execute task by task, verifying each step before moving to the next.

## What AI Is Good At (and What It Isn't)

AI is good at implementation within clear bounds. Give it a spec, a test, and architectural constraints, and it'll produce code that passes the test. Often well-structured code. Sometimes brilliant code.

AI is not good at design without bounds. Give it a vague requirement and it'll produce something. But it'll make hundreds of silent design decisions you didn't sanction. Those decisions might conflict with your architecture, your team's conventions, or the decisions you made last month in a different part of the system.

The spec-driven workflow uses AI for what it's good at and keeps humans on what AI isn't: design, trade-off evaluation, architectural judgment, and domain understanding.
