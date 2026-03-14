---
prev:
  text: What Are Specs?
  link: /what
next:
  text: Common Objections
  link: /objections
---

# The Spec-Driven Manifesto

## The Manifesto

AI removed the bottleneck. The thing that defined software development for sixty years, translating human thinking into working code, now happens in minutes. That changes everything.

But every piece of software is still millions of decisions. Which fields go on the form. What happens when the payment fails. Whether to retry or circuit-break when a service goes down. Who has access to what, and why.

Most of those decisions are invisible. They're scattered across Slack threads, buried in meeting notes, lost in pull request descriptions. The only record that survives is the code. And code tells you *what* the system does, never *why*.

When humans wrote all the code, that was a problem. Now that AI writes it at machine speed, it's a crisis.

Every prompt you write to an AI is a specification. You're describing what to build, how it should behave, what matters. But those specifications evaporate the moment you close the chat window. The intent vanishes. The decisions disappear. All that remains is generated code that nobody fully understands, produced at a speed that makes the problem orders of magnitude worse.

People have always treated specifications as disposable. In the age of AI, that's unforgivable.

We believe specifications are the most important artifact in software development. Not code. Not tests. Not documentation. Specifications. They capture the *why* behind every decision, and *why* is the one thing you can never reverse engineer.

## The Principles

Three things separate teams that harness AI from teams that drown in it.

### 1. Capture intent. Never discard it.

Decisions are being made every day in standups, in design reviews, in Slack threads, in pairing sessions. The problem isn't that they stay locked away. The problem is that they're communicated and then lost. The whiteboard gets erased. The conversation scrolls away. The meeting notes rot in a doc no one reopens. Treat every decision as a specification. Record it. Keep it alive.

### 2. Make every decision visible and changeable.

AI generates code at incredible speed. Even when it gets 80% right, you need control over the other 20%. Software is millions of small decisions layered on top of each other, and when AI makes those decisions for you with no visibility, you've traded speed for a system nobody understands. Visibility isn't overhead. It's how you harness AI's power without losing your grip.

### 3. Make specifications executable.

The highest form of a specification is one that machines can verify. When your specifications are executable, they don't just describe intent, they prove it. Through every iteration, every refactor, every change, executable specifications tell you whether your software still does what you intended. They survive the test of time.

## The Bigger Picture

Software has always been about problem-solving. You understand a problem, you design a solution, you express that solution in code. The bottleneck was always that last step: how fast you can translate your thinking into working software.

AI removed that bottleneck. But the problem-solving didn't go away. The need for clear thinking, clear communication, and clear decisions didn't go away. It just moved up.

Think about how programming languages evolved. Machine code gave way to assembly. Assembly gave way to C. C gave way to higher-level languages. Each generation added abstraction, moving closer to human intent. Specifications are the next abstraction. They are the language of problem-solving itself.

Code is becoming a derived output. Specifications have always been the source of truth. We just kept throwing them away. Now that AI handles the translation, we can't afford to do that anymore.

Specifications need to grow up. They need the same rigor that programming languages developed over decades: clear syntax, precise semantics, composability, versioning, tooling. That's what [spec dialects](/dialects/) are: purpose-built specification languages for different domains and audiences.

Your specifications are not a step on the way to the product. They *are* the product.

The tools exist. The practices exist. Teams that treat specifications as first-class artifacts are already building with AI at full speed and full control. Teams that don't are generating code they can't explain, can't maintain, and can't trust.

The only question is whether you start now or spend the next year reverse-engineering intent from generated code.

[See it in action](/see-it) | [Explore the tools](/landscape/)

---

Heard these before? "This is just waterfall." "I don't need specs for my side project." "AI will be smart enough that specs won't matter." You're not alone. [We've heard them too](/objections).

Want the deeper case? [Why specifications matter](/why) and [what they actually are](/what) go further.
