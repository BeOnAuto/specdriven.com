---
prev:
  text: The Manifesto
  link: /manifesto
next:
  text: Spec Dialects
  link: /dialects/
---

# Common Objections

> Heard these before? You're not alone. Here are the most common pushbacks against spec-driven development, and why they don't hold up.

## "This is just waterfall with extra steps" {#waterfall}

This is the most common pushback, and it misunderstands what made waterfall problematic.

Waterfall's problem was never that specifications existed. It was the feedback latency. Waterfall took months to produce specification documents, creating a massive gap between when decisions were made and when consequences were discovered. By the time developers started building, the specs were already stale.

The longer a piece of feedback lives in a system without being addressed, the harder and more expensive it becomes to fix. Waterfall maximized this latency by design.

Agile didn't eliminate specifications. It shrank them. User stories are specifications, just smaller ones designed to fit two-week sprint cycles. Every standup where someone explains what they're building is a verbal specification. Specifications permeate every agile process. Agile just made them smaller and more disposable.

AI compresses the cycle further. [What used to take a developer two weeks](/why) to implement now takes five minutes. This compression means you can afford richer specifications because the implementation cost has collapsed. And you *must* have better specifications because the AI will faithfully implement whatever you specify (including your mistakes) at machine speed.

Spec-driven development isn't about creating specifications ahead of time and then waiting. It's about recognizing that specifications are being created constantly (as PRDs, wireframes, user journeys, architecture diagrams, conversation threads) and making those specifications explicit, persistent, and ideally executable.

The cycle isn't longer. It's compressed to the point where "writing the spec" and "seeing the implementation" can happen in the same sitting.

## "I don't need specs for my side project" {#side-project}

You might not. If you're building a throwaway prototype or a tool only you will ever use, prompting and shipping might be perfectly fine.

Every prompt you gave that AI was a specification. You just didn't save it. The prompt described behavior, constraints, and expected outcomes. It was unstructured, ephemeral, and unverifiable, but it was a specification.

But consider what happens when you vibe-code your way to something successful. Now you need to maintain it. Add features. Fix bugs. Hand it to other developers. The code is the only artifact, and code is a [terrible specification](/what). It tells you what the system does but not why it does it.

Spec-driven development provides a graceful upgrade path. Even "vibe specs" (where you prompt the AI and it generates a specification for your review before implementing) create a paper trail of decisions. If the project grows, those specs become the foundation for structured development instead of forcing developers to reverse-engineer intent from code.

Think of it as a vibe-to-viable pipeline. Start fast, capture decisions as you go, and you'll have something maintainable when it matters.

## "AI will be smart enough that specs won't matter" {#omniscient-ai}

The myth of the omniscient AI (the idea that you can dump context into a prompt and the machine will just understand) is exactly that: a myth.

Large language models are extraordinary pattern matchers. But they cannot sit in a room with your users and understand their struggles. They cannot hold the political context of why one feature is prioritized over another. They cannot maintain a coherent mental model of your entire system, your business domain, and the history of every decision that shaped both.

More importantly, even if AI could infer perfect intent from minimal input, the specification would still be valuable as a communication artifact between humans. [Specifications aren't just instructions for machines](/what). They're how teams build shared understanding. That need doesn't go away regardless of how smart the AI gets.

And consider this: every prompt you write to an AI is already a specification. The question isn't whether you'll specify. You will. The question is whether your specifications will be persistent, structured, and verifiable, or whether they'll disappear the moment you close the chat window.

The smarter AI gets, the more important specifications become. Not less. Because specifications are about human communication and design intent, not just machine instructions.

## Who is this for? {#who-is-this-for}

The question isn't "who needs specs?" It's "who wants their software to survive contact with time?"

**For solo developers and vibe coders:** When you prompt an LLM and it generates code, it *did* design something. It *did* make specification decisions about architecture, data models, error handling, edge cases. It just made those decisions silently, ephemerally, and unrecoverably. Spec-driven development makes those decisions visible and persistent.

**For product managers and designers:** Specifications are the [communication of design](/what). Every wireframe, user journey, PRD, and interaction model is already a specification. Spec-driven development gives those artifacts a structured home where they connect directly to implementation.

**For CTOs and engineering leaders:** The value proposition is risk reduction. Code generated without persistent specifications is untraceable. When something goes wrong in production, you can't point to which requirement was violated because the requirements were a conversation that evaporated.

**For enterprises and regulated industries:** Compliance, auditability, and traceability aren't optional. When regulators ask "why does the system work this way?" you need an answer that isn't "because the AI decided."

**The multimodality of specifications:** There are visual specs, domain specs, component specs, non-functional specs, performance specs, security specs, accessibility specs, and [hundreds more](/quality/) depending on the vertical and use case. Everyone who participates in the software development lifecycle designs something within it. That design needs to be communicated. The communication *is* the specification.

---

> **Have an objection we haven't addressed?** [Open an issue](https://github.com/BeOnAuto/specdriven.com/issues) and let's discuss it.

*An initiative by [Auto](https://on.auto).*
