---
prev:
  text: Using Specs with LLMs
  link: /guides/specs-with-llms
next:
  text: Specs in Your SDLC
  link: /guides/specs-in-your-sdlc
image: /images/pages/guides/guardrail-engineering.png
---

# Guardrail Engineering

![Guardrail Engineering](/images/pages/guides/guardrail-engineering.png)

Having specs and tests isn't enough. You also need to ensure the process of being spec-driven is itself being followed. That's guardrail engineering.

## Every Guardrail Started as a Mistake

Here's how it works in practice. You give AI a task with specs and tests. It produces code. You look at it and discover:

The tests pass, but one test doesn't actually test anything. It's a shell that passes by default.

The code works, but it introduced a new data access pattern that contradicts your architecture.

The coverage report says 100%, but two of those tests are just asserting that true equals true.

The commit modifies a shared module that three other features depend on, and none of those features were re-verified.

Each of these is a failure mode. And each one becomes a guardrail once you've seen it.

A guardrail is a quality function that runs automatically to catch a known class of failure before it reaches the codebase. You observe a failure mode, encode a relevant constraint, and make recurrence more visible.

## Types of Guardrails

**Pre-commit hooks.** Code that runs before a commit is accepted. If the hook fails, the commit is rejected. Use these for fast checks: test coverage thresholds, linting rules, file modification restrictions.

**LLM validators.** Separate AI calls can evaluate a commit with a different instruction and context from the implementing agent. That is another perspective, not an impartial oracle. A validator can inspect a diff for architectural constraints, weak tests, and module-boundary violations; deterministic checks should enforce what can be expressed deterministically.

**Coverage thresholds.** Set a threshold appropriate to the codebase and use drops as a review signal. High line coverage does not establish high behavioral coverage, and TDD does not guarantee 100%. Inspect assertion quality, branches, mutations, and risk—not only the headline number.

**Anti-cheating checks.** AI will sometimes write tests that exist solely to satisfy coverage requirements without actually testing behavior. A separate validator can scan new tests and flag ones that don't assert anything meaningful. This is the "is the AI grading its own homework?" problem. The answer is: no. A separate, impartial agent grades the homework.

**Architectural constraints.** If your architecture says "no business logic in the client," encode that as a check. If it says "all database access goes through the repository layer," encode that. Every architectural decision that can be machine-verified should be.

## The Separation of Concerns

The implementing agent (the AI writing code) and the validating agent (the AI or system checking quality) must have different objectives. If the same agent writes the code and evaluates the quality, it's optimizing for one thing: task completion. It will rationalize its own shortcuts.

Separate them. Let them fight. The implementer tries to complete the task. The validator tries to uphold standards. The implementer adjusts when the validator rejects. Over time, the implementer learns to produce higher quality output within the guardrails because it knows what gets rejected.

This is analogous to separation of concerns in code. You don't let the same function produce data and validate it. You shouldn't let the same agent implement and evaluate.

> 🔄 **Feedback opportunity:** What's the last mistake your AI made that reached the codebase? Ask whether a deterministic check, review rule, or separate evaluation could catch the same class of mistake earlier next time.
