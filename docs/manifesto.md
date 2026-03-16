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

We believe specifications are the most important artifact in software development. Not code. Not tests. Not documentation. Specifications. They capture the *why* behind every decision, and *why* is the one thing you can never reverse engineer.

Every piece of software is millions of decisions. What happens when the payment fails. Who has access to what, and why. Most are invisible, scattered across chat threads and meeting notes. The only record that survives is the code. And code tells you *what*, never *why*.

When humans wrote all the code, that was a problem. Now that AI writes it at machine speed, it's a crisis. Every prompt is a specification that evaporates the moment you close the chat window. All that remains is code nobody fully understands.

But AI also changed the equation. When implementation is nearly free, the specification isn't a tax on your speed. It *is* your speed.

The tradeoff has always been the same: move fast or stay in control.

For the first time, you don't have to choose. Put specifications first. Move fast. Stay in control.

## The Principles

Three things separate teams that harness AI from teams that drown in it.

### 1. Capture intent. Never discard it.

Decisions are being made every day in standups, in design reviews, in chat threads, in pairing sessions. The problem isn't that they stay locked away. The problem is that they're communicated and then lost. The whiteboard gets erased. The conversation scrolls away. The meeting notes rot in a doc no one reopens. Treat every decision as a specification. Record it. Keep it alive.

### 2. Make every decision visible and changeable.

AI generates code at incredible speed. Even when it gets 80% right, you need control over the other 20%. Software is millions of small decisions layered on top of each other, and when AI makes those decisions for you with no visibility, you've traded speed for a system nobody understands. Visibility isn't overhead. It's how you move at AI speed without losing control.

### 3. Make specifications executable.

The highest form of a specification is one that machines can verify. When your specifications are executable, they don't just describe intent, they prove it. Through every iteration, every refactor, every change, executable specifications tell you whether your software still does what you intended. They survive the test of time.

## The Bigger Picture

Software has always been about problem-solving. You understand a problem, you design a solution, you express that solution in code. AI hasn't changed that. It's changed how fast the last step happens. And in doing so, made the first two steps matter more than ever.

Think about how programming languages evolved. Machine code gave way to assembly. Assembly gave way to C. C gave way to higher-level languages. Each generation added abstraction, moving closer to human intent. Specifications are the next abstraction. They are the language of problem-solving itself.

Specifications need the same rigor that programming languages developed over decades: clear syntax, precise semantics, composability, versioning, tooling. That's what spec dialects are: purpose-built specification languages for different domains and audiences.

Code implements decisions. Tests verify them. Specifications *define* them. Definition is the hardest part of software. It always has been. That's why specifications are the most important artifact you'll ever produce. Everything else flows from getting them right.

The tools exist. The practices exist. Teams that treat specifications as first-class artifacts are already building with AI at full speed and full control. Teams that don't are generating code they can't explain, can't maintain, and can't trust.

The gap between the two widens with every prompt.

[See it in action](/guides/see-it) | [Explore the tools](/landscape/)

---

Heard these before? "This is just waterfall." "I don't need specs for my side project." "AI will be smart enough that specs won't matter." You're not alone. [We've heard them too](/objections).

Want the deeper case? [Why specifications matter](/why) and [what they actually are](/what) go further.
