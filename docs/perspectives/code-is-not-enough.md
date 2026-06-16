---
title: "Code Is Not Enough Because It's Too Much"
description: 'For years, the smartest thing you could say about software was "the code is the truth." That stopped being useful the moment we started generating more of it than anyone can read.'
image: /images/perspectives/code-is-not-enough.png
---

# Code Is Not Enough Because It's Too Much

![Code Is Not Enough Because It's Too Much](/images/perspectives/code-is-not-enough.png)

There is a piece of wisdom that everyone who has worked in software for more than a few years understands: the code is the source of truth. Not the comments that go out of date on the next change. Not the documentation, which describes the system as it was imagined two years ago. Not the architecture diagram on Miro, which stopped matching reality around the third iteration. The code is the thing that actually runs, and the code does not lie, so when you want to know what the system really does, you read the code.

More precisely, the code is the truth of _execution_. It tells you what runs, what the machine will actually do when someone presses the button, and in that narrow and important sense, it does not lie. But execution was never the whole truth of a product. The other half, the half that does not run, is intent. Intent is the reason a rule exists, the opportunity a workflow is meant to unlock, the risk a constraint is there to contain, and the judgment someone made and expected the product to preserve. The code is the truth of what happens. It is almost never the truth of what was meant.

The belief that the code is the ultimate source of truth is correct on its own terms, but it quietly trained generations of engineers to treat modeling as a waste of time. And they were right! Why maintain a second artifact like a model, or a spec, or a diagram, when the code is the only real thing and everything else is just a lossy copy that will rot? Write the code. The code is the model. Everything else is ceremony.

But... therein lies a major oversight.

Read any real codebase and you will find decisions sitting there as bare fact with no reason attached. The code tells you exactly what happens, but not why a decision was made to design the workflow that way.

These decisions are what you need to know if you're going to modify the system without chaos. They exist because something hurt once. Like holding a deposit for forty-eight hours after a rental comes back rather than releasing it the moment it arrives, because the platform learned the hard way that a clean return is not the same thing as a safe one. It needed time to determine the real return status.

Other decisions are enabling. Imagine a rental marketplace where two people want the same high-value item for the same weekend. One person is safer, with better reviews. The other pays more but has no reviews. The product lets the owner choose the higher-paying renter while keeping the safer one waitlisted as a fallback. The code can show that an order is waitlisted or not, but it will not tell you that the product decision is about letting owners chase the upside without throwing away safety.

One of those decisions came from pain. The other came from opportunity. Both disappear in exactly the same way the moment the reason lives only in someone's head. That is where the reason lives. Not in the code. In people. In the engineer who remembered the incident that produced the deposit rule. In the product manager who could tell you the waitlist was deliberate and not an accident. In the shared tacit knowledge a team builds up over years. The "oh, we do it that way because" that gets passed around in standups, reviews, and hallway conversations.

So the code was always a lossy compression of intent, and we got away without modeling intent because there was a layer of humans standing right next to it, decompressing it on the fly, filling the gaps from memory and conversations. The truth is, the code plus the people was the intent model! Teams never bothered to write down the second half because the people were right there, and this code-plus-tacit-knowledge system was enough.

The code carried the executable part of the product, and the team carried the rest. That worked until AI started producing code at lightspeed and by the bucketload.

THAT is the part that broke.

Code is now generated faster than anyone can read it, and not just a little bit. Pull requests are created with tens of thousands of lines, and the simple truth is that no human is reviewing all of it. Not really.

And the industry response to this is: get an AI to review the AI's code. The moment you need a machine to read the code because no person reasonably can, the code has stopped being a useful source of truth for human understanding. It still runs. It is still, in the narrow sense, the source of execution truth. But it is no longer a medium that humans can easily reason about.

And that's what this article's title means: code is not enough because there's too much of it to reasonably understand.

The dangerous part is that both halves broke at the same time. The code got too big to hold, and more and more of the work is now being handed to agents that do not provide the continuity a long-running team used to.

An agent has no lived context of your product. Not really. It may have your whole codebase, some rules files, a folder of docs, and maybe some prose specs... but those do not carry the lived memory of why the product became this shape. The lived memory of the people who sat through the incident and remember which constraints are sacred and which are leftovers. It starts cold, you tell it the problem, it scans those files and has no way to make an informed decision, so it cheerfully gets its task done and pats itself on the back, and of course shows you some happy emojis to let you know it's all safe!

When the intent that used to live in people has nowhere to live, every change is a much higher risk, and anyone using AI codegen as of the time of writing this can attest to this.

So you need something the code cannot be. Not a prettier requirements doc, not a diagram of the code, but a means to capture the intent of the product. A structured model that can express _intent_. The actors, the goals, the moments where things happen, the rules and the reasons behind them, the workflows that span time, the permissions, the facts you decided were worth keeping, and the gaps you know are still open. What the product is supposed to do, for whom, and why. Small enough that a human or group of humans can reason about it, structured enough that a machine can build from it, and most importantly, _durable_ enough that the all-important intent is not forgotten.

The model is the thing that humans and agents can collaborate on, the thing that says this is what we meant, so that when agents generate their ten thousand lines, there is something to verify they produced the right outcomes and not just more lines of code.

None of this is an argument against generating code. Generating code at lightspeed is an opportunity to seize. Code still matters, because code is what runs. But the more of it we generate, the less of the load it can carry on its own.

Code stays the truth of what runs. Intent needs a truth of its own.

And that truth, I'd argue, is a durable product model. The thing that says what the product is, who it's for, what it has to protect, what it has to stop from happening, and why any of those calls got made in the first place.

Because when there's infinite code, intent doesn't survive by implication anymore. It has to be made explicit, and it has to have somewhere durable to live.
