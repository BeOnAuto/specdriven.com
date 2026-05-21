---
prev:
  text: See It In Action
  link: /guides/see-it
next:
  text: Test Harness Engineering
  link: /guides/test-harness-engineering
image: /images/pages/guides/executable-specs.png
---

# Making Specs Executable

![Making Specs Executable](/images/pages/guides/executable-specs.png)

A specification that you can only verify by reading it is a specification that will drift from reality. An executable specification verifies itself.

## What Executable Means

An executable spec is a specification that is coupled to a test such that a machine can verify whether the system meets the specification. If the system changes in a way that violates the spec, you know immediately. If the spec changes, the test changes with it.

This is the holy trinity of spec-driven development: specifications, tests, and the system under test. The spec communicates the design. The test verifies the system meets that design. The system is the implementation. It doesn't matter how the system is built. Code, AI, pixie dust. What matters is that the spec and the test agree, and the system passes.

## Why Executability Matters

Without executable specs, you have documentation. Documentation is a promise that nobody checks. It was accurate when someone wrote it. Maybe. It's accurate now? Nobody knows without manually reviewing everything.

With executable specs, you have a continuous verification mechanism. Every time the test suite runs (locally, in CI, on every commit), every design decision you ever recorded gets re-verified. If anything violates a previous decision, you know.

This is what people mean when they say "legacy code is code without tests." Not because the code is old. Because you can't change it safely. There's no mechanism to verify that your change didn't break an existing specification. You're flying blind.

In the AI era, this matters even more. AI generates code fast. It can change hundreds of lines in a single prompt. Without executable specs, you have no way to verify that those changes didn't violate the 47 design decisions you made over the past three months. With executable specs, every change gets checked against every decision automatically.

## Two Specification Patterns

The two patterns this page works with are **Given/When/Then** for domain behavior and **describe/it/should** for component behavior. Both are specifications. Both are executable with the right test framework. They operate at different levels of the [fractal](/first-principles/fractal-design): domain specs thread components together into value, component specs define what each piece does individually. For the formats themselves and the lineage they came from, see [The OG Specifications](/what#the-og-specifications).

## Connecting Specs to Test Frameworks

Given/When/Then connects to BDD frameworks: Cucumber (multilanguage), SpecFlow (.NET), Behave (Python), Jest-Cucumber (JavaScript). The feature file is the spec. Step definitions translate the spec into executable code.

Describe/it/should connects to test frameworks directly: Jest, Mocha, RSpec, pytest. The test description IS the spec. The test body IS the verification.

The framework doesn't matter as much as the principle: the spec should be readable as a specification, not just as a test. If you can read your test file and understand what the system is supposed to do without reading the implementation code, you have an executable specification. If you have to read the code to understand the test, you have a test, not a spec.

> 🔄 **Feedback opportunity:** Open your test suite right now. Read the test names and descriptions without looking at the code. Can you tell what the system is supposed to do? If you can, you have executable specs. If you see names like `test_1`, `should_work`, `integration_test_v2`, you have tests that don't communicate intent.
