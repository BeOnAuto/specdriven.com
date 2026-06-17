---
title: "Notes for an Amnesiac"
description: "You brief the agent, it does great work, the session ends, and the understanding is gone. So you write it down. Then the notes get ignored, and then they rot."
image: /images/perspectives/notes-for-an-amnesiac.png
---

# Notes for an Amnesiac

![Notes for an Amnesiac](/images/perspectives/notes-for-an-amnesiac.png)

Every agent session starts the same way. You spend a decent amount of effort getting the thing up to speed on your product. What this feature is for, why the deposit gets held instead of charged, and which parts the product actually depends on versus which are scratch. And once it understands, it's pretty nifty! It's fast, and capable enough to do what you needed. Then the session ends, the context window clears, and every bit of that understanding evaporates. So the next session you open a fresh chat, and the brilliant thing on the other side has never heard of your product, and you start the briefing over from zero. That's problem #1.

Do that enough times and the obvious move is to stop re-explaining out loud and write it down somewhere the agent can read it. Which is exactly what everyone is doing right now. There's an `agents.md` in the repo or similar, or perhaps a folder of prose specs, all of it an attempt to take the context you keep re-typing and park it somewhere permanent so the next session inherits it instead of starting cold. It's the right thought, the product's intent should live somewhere that outlasts a single chat.

But watch what the agent actually does with that file. Prose is unstructured and nothing enforces it, so the file is a suggestion not a constraint. The agent reads it when it feels relevant, glosses over the key details, half-applies the rule it does notice, and often ignores the line that mattered the most! You wrote "always hold the deposit, never charge on booking," and three sessions later it charges on booking anyway, because the note was advisory, and advice is easy to skip when you're an agent with a task to close and a green checkmark to earn... and most importantly no skin in the game. No skin at all for that matter! That's problem #2.

But let's set all of that aside for a second, and pretend the file gets read and followed perfectly. It still rots. Because the code changes, and the markdown gets no love, so the gap between what the file says and what the product says widens. Eventually the file describes yesterday's product. Now you've got the worst version of the problem, because the note is not merely stale, it's confidently wrong, and a confidently wrong spec is more dangerous than no spec at all. It sends the next agent that might listen off in the wrong direction, with full conviction, reflecting your own words as justification. That's problem #3.

Step back and the three problems are really just one. One place throws the intent away, one place lets the agent skip it, and one place lets it drift off from the code. You keep trying to store the product's intent somewhere that can't actually hold it.

So the fix has to do the three things those places can't. It has to be structured, so an agent reads it as rules and not loose prose it can wiggle around. It has to sit in the build path, so the product gets generated from it instead of beside it. And it has to stay tied to what actually gets deployed, so it can't drift the way a side document always does. A markdown file gives you none of that, which is the whole reason it keeps letting you down.

That structured, enforced, connected artifact is a product model. The understanding lives in one place, the agent builds from that place, and when the product changes, the model is what changed, not a file someone forgot to keep up.

You are going to keep handing the work to something that forgets. That part is not going away and we have to live with that. So the problem to solve is where the memory lives when the agent can't be entrusted to hold it.
