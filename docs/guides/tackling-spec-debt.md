---
prev:
  text: Adopting Spec-Driven in a Team
  link: /guides/adopting-spec-driven
next:
  text: Two Entry Points for Adoption
  link: /guides/two-entry-points
image: /images/pages/guides/tackling-spec-debt.png
---

# Tackling Spec Debt

![Tackling Spec Debt](/images/pages/guides/tackling-spec-debt.png)

If you've never written a single spec for your system, you have a maxed-out spec debt card. Every feature is undocumented. Every design decision is trapped in someone's head or in code that can't explain itself. Every AI interaction is a guessing game.

## What Spec Debt Looks Like

"What does this do?" "Check the code." "Why was it built this way?" "Check the git blame."

When the only record of intent is the code itself, you're navigating by footprints instead of by a map. New developers take weeks to understand the system. AI tools make wild assumptions because they have no context. QA tests by guessing because there are no specs to verify against.

In extreme cases, the tacit knowledge has died. The original developers left. The COBOL system runs but nobody alive understands all of it. You can't even reverse-engineer the specs because there's nobody to ask.

## Divide and Conquer Through Value

You can't specify everything at once. You can specify one slice at a time.

Start by identifying your domains. What are the major areas of business value your system supports? Five domains? Ten? Name them.

Within each domain, identify the key behaviors. What are the most important things the system does? The most critical? The most fragile? The most frequently changing?

Prioritize by business impact. Your most valuable domain with your most critical behaviors comes first. The domain that rarely changes and never breaks can wait.

Now you have a plan. Start with Domain 1, Behavior 1. Write the spec. Build the test harness. Verify. Move to Behavior 2. Over time, you build up coverage of your most critical value streams.

This is inventory work. You're building a map of what exists, what has been specified, and what remains uncertain. Capability maps, value streams, user journeys, and event or state models can all help divide and track the work. Pick the lightest structure that makes the risk visible.

## Mining Knowledge

Where do the specs come from when the system already exists?

**People.** Interview the developers, the product owners, the QA engineers, the support team. They carry tacit knowledge about what the system does and why. Get it out of their heads and into specs before it walks out the door.

**Tickets.** Your Jira backlog, your closed tickets, your pull request descriptions. These are fragments of intent, scattered and buried, but mineable. LLMs are helpful here: dump 200 closed tickets into a conversation and ask "what are the key behaviors this system supports based on these tickets?"

**Chat history.** Slack messages, team conversations, design discussions. More fragments. More context.

**Code.** The code itself tells you what the system does (the HOW). It doesn't tell you why, but it gives you a starting point. Reading the code and inferring the spec, then validating with people, is a common reverse-engineering pattern.

**Analytics.** How users actually use the system. Which features get traffic. Which flows complete. Which ones break. This tells you what's valuable in practice, not just in theory.

**LLMs.** Point an AI at the codebase, the tickets, and the chat history. Ask it to describe what the system does. It won't be perfectly accurate, but it'll give you a draft that people can correct. This is dramatically faster than writing specs from scratch.

> 🔄 **Feedback opportunity:** For your most critical feature, can you explain what the system does without reading the code? If you can't, that's your first spec to write. Not because it's technically interesting, but because it's where your spec debt is most dangerous.
