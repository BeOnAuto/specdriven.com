---
title: "Jira Is Where Specs Go to Die. Your AI Just Showed Up With a Shovel."
---

# Jira Is Where Specs Go to Die. Your AI Just Showed Up With a Shovel.

Three different things. Three different lifecycles. All collapsed into one Jira ticket.

Requirements: the problem to solve. Stick around until the problem itself changes.

Specifications: the communication of the design. Should live as long as the feature exists in the system. Updated when the design evolves.

Tasks: the work to do. Created, scheduled, completed, archived. Done.

A Jira ticket is one entity with a text field you can put anything in. So everything collapses.

The requirement ends up in the description, tangled with some half-baked design thinking, mixed with comments from three people who all understood the problem differently. The specification, if it exists at all, lives in the acceptance criteria. Maybe it's three bullet points someone wrote in 90 seconds. And the task is the ticket itself.

When the work is done, the ticket closes. Moved to Done. Archived. Invisible.

And here's the thing: when the ticket closes, the specification dies with it. The acceptance criteria? Buried in a closed sprint. The design decisions someone left in the comments? Gone into the archive. Whatever intent was captured there is now scattered across 200 closed tickets in 30 sprints.

If someone needs to understand what the system does six months later, whether a new hire, a QA engineer, or an AI coding assistant, they've got nothing to work from except the code. "What does this do?" "Check the code." "Why was it built this way?" "Check the git blame, I guess."

Now add AI. Your AI assistant shows up with a shovel, ready to dig in. It needs context. It needs to know what behaviors were intended, what constraints exist, what design decisions were made. Where does it look? The code, which is lossy. The Jira backlog, which is a graveyard. The team's collective memory, which AI can't access at all.

So it guesses. Infers intent from code patterns. Fills gaps with its own assumptions. And nobody catches it because nobody has a living specification to check against.

Specs need a home that outlives the task. Not stapled to a ticket that dies when the sprint ends. Not buried in a wiki nobody updates. Something alive, accessible, and current.

That's not a ticket. That's a different kind of artifact entirely.

Where do your specs live after the ticket closes?


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: A PRD Is Not a Spec. Here's Why That Matters.](./post-12) | [Next: Give Me the Freedom of a Tight Brief. Why Specs Are the Ultimate AI Prompt.](./post-14)

[Back to series overview](./index)


The Spec-Driven Shift | Week 3: The Practice | Post 13 of 20
