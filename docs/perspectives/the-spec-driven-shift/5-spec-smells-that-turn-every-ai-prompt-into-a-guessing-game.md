---
title: "5 Spec Smells That Turn Every AI Prompt Into a Guessing Game"
image: /images/perspectives/5-spec-smells-that-turn-every-ai-prompt-into-a-guessing-game.png
---

# 5 Spec Smells That Turn Every AI Prompt Into a Guessing Game

![5 Spec Smells That Turn Every AI Prompt Into a Guessing Game](/images/perspectives/5-spec-smells-that-turn-every-ai-prompt-into-a-guessing-game.png)

Just like code smells tell you something's off in your implementation, spec smells tell you your specifications are going to cause problems. And with AI in the mix, spec smells don't just cause problems for your team. They turn every AI interaction into a guessing game where the AI fills in the blanks with its own assumptions.

I see five constantly.

**The vague spec.** "The system should give discounts to loyal customers." When? At checkout? On page load? Once per session? What percentage? For how long? What defines "loyal"? If you can read it and still have ten unanswered questions, it's not a spec. It's a wish. And when you feed a wish to AI, the AI answers all ten questions for you. Silently, in code, with its own assumptions. You won't know what those assumptions were until something breaks.

**The kitchen sink.** "When the user clicks Submit, validate the email, check loyalty status, apply the discount, update the database, send a confirmation email, and show confetti." You've just welded six different concerns together. UI, validation, business logic, persistence, notifications, visual feedback, all in one spec. Your code will follow. And the AI will build one monolithic function doing everything, because that's what you asked for. Separation of concerns isn't just a code principle. If you mix UI specs with domain specs you get business logic in the client. And that's a mess you'll be cleaning up for months.

**The lossy spec.** Requirements that went straight to code without anyone actually designing the solution. The happy path is covered, sort of. What should the system NOT do? What happens on error? What about the edge case where a customer has two accounts? Half the spec is just absent. And the absent half is where most bugs live.

**The immortal ticket.** A Jira ticket trying to be a requirement, a specification, and a task all at once. Three things with three different lifecycles jammed into one text field. When the ticket closes, the spec dies with it. Good luck finding that acceptance criteria six months from now.

**The PRD-as-spec.** A product requirements document describes problems. A specification communicates designs. These are different things. If your "spec" doesn't contain design decisions, it's still a requirement. Handing a requirement to AI is like telling a contractor "I need a kitchen." You'll get one. Not the one you wanted.

The pattern across all five: lack of specificity, things getting mixed together, and absence of actual design thinking.

A good spec reads like a good note to your future self. Clear enough that in two years, you or an AI or a new hire can read it and know what the system is supposed to do.

Look at the last spec you handed to your AI. How many of these five smells does it have?


— *Sam Hatoum [[LinkedIn](https://www.linkedin.com/in/samhatoum/)]*

---

[Previous: Specs That Ignore Time Ignore Half the Story](./specs-that-ignore-time-ignore-half-the-story)

[Next: A PRD Is Not a Spec. Here's Why That Matters.](./a-prd-is-not-a-spec-heres-why-that-matters)

[Back to series overview](./index)


The Spec-Driven Shift | Week 3: The Practice | Post 11 of 20
