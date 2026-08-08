---
prev:
  text: Why Spec-Driven?
  link: /why
next:
  text: Common Objections
  link: /objections
image: /images/pages/manifesto.png
---

# The Spec-Driven Manifesto

![The Spec-Driven Manifesto](/images/pages/manifesto.png)

We believe specifications are among the most important artifacts in software development. They can preserve intended behavior and the reasons behind important decisions—context that code alone rarely reveals.

Every piece of software is millions of decisions. What happens when the payment fails. Who has access to what, and why. Most are invisible, scattered across chat threads and meeting notes. The only record that survives is the code. And code tells you *what*, never *why*.

When humans wrote all the code, that was a problem. Now that AI can generate it at machine speed, it is urgent. Prompts contain consequential instructions and assumptions that can evaporate when the chat closes. The generated code survives; much of the reasoning does not.

AI also changed the economics. As implementation becomes faster and cheaper, clarification and verification account for more of the work that separates a demo from dependable software.

The tradeoff has always been the same: move fast or stay in control.

For the first time, you don't have to choose. Put specifications first. Move fast. Stay in control. That's what spec-*driven* means.

## The Principles

Three things separate teams that harness AI from teams that drown in it.

### 1. Capture intent. Never discard it.

Decisions are being made every day in standups, design reviews, chat threads, and pairing sessions. The problem is that important ones are communicated and then lost. The whiteboard gets erased. The conversation scrolls away. Record the decisions that define behavior, constraints, and trade-offs. Keep them inspectable.

### 2. Make every decision visible and changeable.

AI generates code at incredible speed. Even when it gets 80% right, you need control over the other 20%. Software is millions of small decisions layered on top of each other, and when AI makes those decisions for you with no visibility, you've traded speed for a system nobody understands. Visibility isn't overhead. It's how you move at AI speed without losing control.

### 3. Make specifications executable.

Where a statement can be checked by a machine, connect it to verification. Executable specifications can show whether observed behavior still satisfies encoded expectations through iteration and change. They do not prove unencoded assumptions or replace human judgment.

## The Bigger Picture

Software has always been about problem-solving. You understand a problem, you design a solution, you express that solution in code. AI hasn't changed that. It's changed how fast the last step happens. And in doing so, made the first two steps matter more than ever.

Think about how programming languages evolved. Machine code gave way to assembly. Assembly gave way to C. C gave way to higher-level languages. Each generation added abstraction, moving closer to human intent. Specifications are the next abstraction. They are the language of problem-solving itself.

Specifications benefit from the same qualities programming languages developed over decades: clear semantics, composability, versioning, and tooling. Different [approaches and formats](/dialects/) provide different levels of rigor for different decisions and audiences.

Code implements decisions. Tests and other checks provide evidence about them. Specifications make intended decisions explicit. Definition is difficult work, and the quality of everything downstream depends partly on how well it is done.

The tools exist. The practices exist. Teams can treat specifications as first-class artifacts today and learn where the approach improves clarity, control, and verification in their own context.

The gap between the two widens with every prompt.

[See it in action](/guides/see-it) | [Explore the tools](/landscape/)

---

Heard these before? "This is just waterfall." "I don't need specs for my side project." "AI will be smart enough that specs won't matter." You're not alone. [We've heard them too](/objections).

Want the deeper case? [Why specifications matter](/why) and [what they actually are](/what) go further.
