---
prev:
  text: What Are Specifications?
  link: /what
next:
  text: Spec Dialects
  link: /dialects/
---

# The Spec-Driven Manifesto

## The Chain

Every piece of software that has ever worked well started the same way: someone understood a problem.

Not "had a vague idea about" a problem. *Understood* it. Sat with it. Discussed it with the people who live inside it every day. Wrestled with the contradictions and edge cases and the messy human reality that no algorithm can capture on its own.

From understanding comes design, the act of imagining a solution. Design is not wireframes. Design is not database schemas. Design is the cognitive work of figuring out how to make something better for someone. It happens in your head before it happens anywhere else.

But design trapped in your head is useless to everyone else. You need to externalize it. You need to make it concrete enough that other people (teammates, stakeholders, machines) can see what you see. That act of externalization is specification.

And from specifications comes code. Code is the final step, not the first. It's the *compilation output* of everything that came before.

The chain is: **Understanding → Design → Specification → Code.**

Every time software goes wrong, it's because someone skipped a link in that chain. Usually the first one.

## The Bandwidth Problem

You have a model of the system in your head right now. It's rich, nuanced, full of context. You know why that edge case matters. You know which user workflow is critical and which is cosmetic. You understand the business constraint that makes the obvious technical solution impossible.

Now try to transfer that model to someone else's head.

You can't. Not fully. Human communication bandwidth is brutally limited. You talk, you draw, you write documents, you wave your hands, and maybe 60% of what you meant gets through. The other 40% gets filled in by the listener's assumptions, biases, and different context.

This is not a failure of communication skills. It's a fundamental constraint of being human. Your mental models are too rich, too interconnected, too soaked in implicit knowledge to survive the compression of speech or text without loss.

Specifications are how you fight that constraint. A good specification doesn't just describe what you want. It creates a shared reference point that both sides can examine, question, and refine. It forces ambiguity into the open. It turns "I think we're on the same page" into "let's look at the same page and find out."

You will never achieve perfect synchronization. But specifications get you closer than anything else.

## The Throwaway Problem

Here's the paradox: every software team already does spec-driven development. They just do it badly.

Every standup where someone explains what they're building? That's a verbal specification. Every pull request description? A retroactive specification. Every argument about whether a feature "should" work a certain way? That's a specification negotiation happening in real time.

Specifications are everywhere. They permeate every phase of your process. The problem is that you treat them as exhaust, a byproduct of the "real work," instead of as the primary artifact.

The whiteboard gets photographed and forgotten. The Slack thread scrolls into oblivion. The meeting notes rot in a Google Doc no one will ever open again. The user story gets dragged to "Done" and becomes invisible.

What survives? The code. And so the code becomes the de facto specification, the only record of what was intended.

But code is a terrible specification. Code tells you *what* the system does, not *why* it does it. Code tells you *how* a feature was implemented, not *what problem it was solving*. Code can tell you that a timeout is set to 30 seconds, but not that it's 30 seconds because the third-party API has a known latency issue that the vendor promised to fix in Q3.

When the code is your only spec, every future decision gets made without context. You're navigating by the footprints left behind instead of the map that was drawn ahead.

## The AI Acceleration

Now add AI to this picture.

AI can write code faster than any human. That's not hype. It's measurable fact. What used to take a developer days now takes minutes. The bottleneck has shifted dramatically.

But notice what AI *cannot* do. It cannot sit in a room with your users and watch them struggle with a workflow. It cannot understand why your compliance team is nervous about a particular data flow. It cannot hold the political context of why the VP of Sales wants this feature before that one. It cannot maintain a coherent mental model of your entire system, your business domain, and every conversation you've ever had about both.

The myth of the omniscient AI, the idea that you can dump context into a prompt and the machine will just *understand*, is exactly that. A myth. Large language models are extraordinary pattern matchers. They are not domain experts. They are not your users. They are not your team.

What AI has done is compress the feedback loop. The consequences of vague specifications used to take months to materialize. Slowly, developers misinterpreted requirements and built the wrong thing. Now those consequences materialize in seconds. You type a vague prompt, you get a working app that does exactly what you asked for and absolutely nothing that you *meant*.

AI hasn't changed the fundamental problem. It's removed the buffer that used to hide it.

## The Quality Crisis

Here's a number that should keep you up at night: **50% of all software defects originate at the specification stage**, before a single line of code is written.

Not at the coding stage. Not at the testing stage. At the stage where someone decides what to build, and communicates that decision to others.

This has been true for decades. Barry Boehm documented it. The Standish Group confirmed it. Every experienced developer knows it intuitively: the hardest bugs to fix are the ones where the code works perfectly but does the wrong thing.

AI didn't create this problem. But it's pouring gasoline on it.

When you go from prompt to production with nothing in between, you skip the step where you get specific about what you actually want. You skip the step where ambiguity gets surfaced and resolved. You skip the step where someone asks "but what happens when the user does *this*?"

The result is software that's built faster than ever and fails faster than ever. Not because the code is bad (the code is often excellent) but because the specifications were absent, implicit, or wrong.

Speed without direction is just velocity toward the wrong destination.

## The Paradigm Shift

Think about how programming languages evolved.

In the beginning, you wrote machine code: raw binary instructions for the CPU. Then assembly gave you mnemonics. Then C gave you structured abstractions. Then higher-level languages gave you objects, functions, garbage collection, type systems. Each generation moved further from the hardware and closer to human intent.

Nobody writes assembly anymore. Not because assembly is bad, but because higher-order languages made it unnecessary for most purposes. The machine handles the translation. You operate at the level of abstraction where your thinking is most productive.

Code is becoming the new assembly language.

Not today, not completely. But the direction is unmistakable. AI handles the translation from human intent to working code with increasing reliability. The level of abstraction where *your* thinking is most productive is moving up, from code to specifications.

This means specifications need to grow up. They can't stay informal, ambiguous, disposable. They need the same rigor that programming languages developed over decades: clear syntax, precise semantics, composability, versioning, tooling.

That's what spec dialects are: purpose-built specification languages for different domains, different levels of abstraction, different audiences. Just as you wouldn't use the same programming language for a kernel driver and a web app, you shouldn't use the same specification format for a user workflow and a data pipeline.

Different problems need different languages. That's as true for specifications as it's always been for code.

## The Path Forward

None of this requires you to abandon your current tools or rewrite your process from scratch. It requires you to change what you value.

**Make your specifications explicit.** If it's in your head but not written down, it doesn't exist. If it was said in a meeting but not captured in a structured format, it will be lost.

**Make them persistent.** Don't erase the whiteboard. Don't let the conversation evaporate. Specifications are not overhead. They are the most durable artifact your team produces. Code gets refactored, rewritten, deleted. A good specification survives because it captures *why*, not just *what*.

**Make them structured.** Natural language is ambiguous by design. Structure removes ambiguity. Use formats that force you to be clear: Given/When/Then. Input/Output/Constraint. Actor/Action/Outcome. The format matters less than the discipline of using one.

**Make them executable.** The highest form of a specification is one that can be verified automatically. Not just read by humans, but checked by machines. When your specifications are executable, they become living documentation that tells you, at any moment, whether your code still does what you intended.

Your specifications are not a step on the way to the product. They *are* the product. The code is just the compiled output.

