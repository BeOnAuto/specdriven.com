---
prev:
  text: The Manifesto
  link: /manifesto
next:
  text: First Principles
  link: /first-principles/
image: /images/pages/objections.png
---

# Common Objections

![Common Objections](/images/pages/objections.png)

> Heard these before? You're not alone. Here are the most common pushbacks against spec-driven development, and why they don't hold up.

## "This is just waterfall with extra steps" {#waterfall}

This is the most common pushback. SDD is not waterfall. Phased development and specification-driven development are separate choices.

TDD and BDD can support spec-driven work. Either could still be practiced with long feedback cycles; writing tests first does not by itself make a process iterative.

Waterfall was problematic, and its problem was never that specifications existed. It was the feedback latency. Waterfall took months to produce specification documents, creating a long gap between when decisions were made and when consequences were discovered. By the time developers started building, the specs were already stale.

The longer a piece of feedback lives in a system without being addressed, the harder and more expensive it becomes to fix. Waterfall maximized this latency by design.

Agile did not eliminate specification work. It often moved it into smaller artifacts and conversations. A user story or standup can contain specification material without being sufficiently explicit on its own.

[AI compresses the cycle further](/guides/specs-in-your-sdlc). Work that once took days or weeks can happen much faster. This compression can make rapid clarification loops practical. It also means an agent can confidently interpret ambiguity and generate a large amount of code before anyone notices the wrong assumption.

Spec-driven development isn't about creating a large document ahead of time and then waiting. It is about finding the consequential decisions scattered through PRDs, wireframes, journeys, diagrams, and conversations, then expressing them in maintained specifications appropriate to the work.

The cycle isn't longer. It's compressed to the point where "writing the spec" and "seeing the implementation" can happen in the same sitting.

## "I don't need specs for my side project" {#side-project}

You might not. If you're building a throwaway prototype or a tool only you will ever use, prompting and shipping might be perfectly fine.

[Every prompt you gave that AI may contain specification material](/why#your-prompts-contain-specification-material). You probably did not preserve its important decisions as a maintained reference.

But consider what happens when you vibe-code your way to something successful. Now you need to maintain it. Add features. Fix bugs. Hand it to other developers. The code is the only artifact, and [code can't tell you why it works the way it does](/manifesto#the-principles).

Spec-driven development provides a graceful upgrade path. Even "vibe specs" (where you prompt the AI and it generates a specification for your review before implementing) create a paper trail of decisions. If the project grows, those specs become the foundation for structured development instead of forcing developers to reverse-engineer intent from code.

Think of it as a vibe-to-viable pipeline. Start fast, capture decisions as you go, and you'll have something maintainable when it matters.

## "AI will be smart enough that specs won't matter" {#omniscient-ai}

The myth of the omniscient AI (the idea that you can dump context into a prompt and the machine will just understand) is exactly that: a myth.

Large language models are extraordinary pattern matchers. But they cannot sit in a room with your users and understand their struggles. They cannot hold the political context of why one feature is prioritized over another. They cannot maintain a coherent mental model of your entire system, your business domain, and the history of every decision that shaped both.

More importantly, even if AI could infer perfect intent from minimal input, the specification would still be valuable as a communication artifact between humans. [Specifications aren't just instructions for machines](/what). They're how teams build shared understanding. That need doesn't go away regardless of how smart the AI gets.

The question is whether the important decisions will be persistent, inspectable, and appropriately verifiable, or whether they will disappear when the chat closes.

The smarter AI gets, the more important specifications become. Not less. Because specifications are about human communication and design intent, not just machine instructions.

## Who is this for? {#who-is-this-for}

The question isn't "who needs specs?" It's "who wants their software to survive contact with time?"

**For solo developers and vibe coders:** When you prompt an LLM and it generates code, it *did* design something. It *did* make specification decisions about architecture, data models, error handling, edge cases. It just made those decisions silently, ephemerally, and unrecoverably. Spec-driven development makes those decisions visible and persistent.

**For product managers and designers:** Wireframes, journeys, PRDs, and interaction models can all carry specification material. Spec-driven development asks which decisions must become explicit and how they connect to implementation and review.

**For CTOs and engineering leaders:** The value proposition is risk reduction. Code generated without persistent specifications is untraceable. When something goes wrong in production, you can't point to which requirement was violated because the requirements were a conversation that evaporated.

**For enterprises and regulated industries:** Compliance, auditability, and traceability aren't optional. When regulators ask "why does the system work this way?" you need an answer that isn't "because the AI decided."

**The multimodality of specifications:** There are visual specs, behavioral examples, component contracts, performance constraints, security policies, accessibility expectations, and many other forms. A specification is the part made explicit enough to guide implementation or verification.

---

> **Have an objection that is not addressed?** [Send it to Sam](/community#suggest-a-change), along with the strongest evidence for it.
