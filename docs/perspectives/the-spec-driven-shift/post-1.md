---
title: "Your AI Codebase Is a Ticking Time Bomb"
---

# Your AI Codebase Is a Ticking Time Bomb

![Your AI Codebase Is a Ticking Time Bomb](/images/perspectives/post-1.jpg)

I keep watching the same thing happen.

A team picks up Cursor or Copilot or Claude. They prompt their way to a working prototype in a few hours. It works. Everyone's buzzing. They keep going. More features, more changes, more bug fixes. Weeks pass. Months pass.

And then the codebase turns into goulash.

Not gradually. It feels gradual because every individual prompt seems fine. But at some point someone tries to change a thing and three other things break, and nobody can explain why the system works the way it does, and the whole team starts spending more time fixing regressions than building new features.

I've been working in spec-driven development for 15 years, and I've seen this pattern before. Long before AI. Teams that skip specifications always end up here eventually. But with AI, it happens at a speed I've never seen.

Here's why.

LLMs are biased for delivery. That's literally what they're built to do. Predict the next token. Ship the output. They don't stop to think about the 10,000 decisions you've made over the past three months. They don't hold your architectural constraints dear. They won't remember why you chose this pattern over that one last Tuesday. They have zero remorse for taking a shortcut.

Before AI, humans were the safety net. A developer would pause, think, push back, ask a clarifying question. "Are you sure we want to do it that way?" Late discovery was messy, sure, but it worked. People caught things.

AI doesn't do that. It just charges ahead. It doesn't ask you if you're sure. It doesn't feel uneasy about the coupling it just introduced. It has nothing in its head about your system. It treats every prompt like a standalone task while you experience a continuous system with history and intention and trade-offs.

That gap between the AI's context and yours widens with every single prompt.

The first month of AI-assisted development feels incredible. By month three, things are getting shaky. By month six, people start talking about rewrites.

There are known techniques to deal with this. They're not new. They come from decades of practice in TDD, BDD, architecture, and specification. But most teams using AI right now aren't applying any of them.

Over the next 20 posts, I'm going to lay out everything I've learned about how to fix this. All of it starts with something that sounds simple but most people get wrong: specifications.

What's the longest you've maintained an AI-generated codebase? I'm curious what happened.

*Sam Hatoum ([LinkedIn](https://www.linkedin.com/in/samhatoum/))*

---

[Back to series overview](./index)

The Spec-Driven Shift | Week 1: The Wake-Up Call | Post 1 of 20
