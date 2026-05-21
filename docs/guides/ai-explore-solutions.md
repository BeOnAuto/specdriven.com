---
prev:
  text: Writing Your First Spec
  link: /guides/writing-your-first-spec
next:
  text: Choosing Your Spec Format
  link: /guides/choosing-spec-format
image: /images/pages/guides/ai-explore-solutions.png
---

# Using AI to Explore Solutions

![Using AI to Explore Solutions](/images/pages/guides/ai-explore-solutions.png)

AI isn't just an implementer. Before you write a single spec, AI can be one of the most useful design collaborators you have. The trick is using it for exploration, not execution.

## The LLM Council

When exploring a problem space or evaluating solutions, don't rely on a single AI. Use multiple frontier models. Ask all of them the same question with the same context. This is the council approach.

Why? Because different models have different training biases, different strengths, and surface different considerations. Claude might focus on architectural trade-offs. Gemini might surface a solution approach you hadn't considered. ChatGPT might flag a scaling concern. GPT-4 might find a case study from a similar domain.

The process:

1. Write your question once. Include your current understanding, your requirements, your constraints, and what you've considered so far.
2. Send the same prompt to 3-4 frontier models.
3. Don't read the individual responses yet. Take all the responses and paste them into a single conversation with one model (the "council chairman").
4. Ask the chairman to deduplicate, synthesize, and present a combined view.
5. Then ask: given these requirements and all the solutions we've found, stack-rank them. What are the trade-offs? What dimensions should I be comparing on? What question should I have asked that I didn't?

That last question is the most valuable one. "What should I have asked?" surfaces blind spots in your own thinking. AI is good at this because it has broad knowledge and can spot patterns you haven't considered.

## From Exploration to Commitment

The council approach is for exploration, not for implementation. You're gathering perspectives. You're expanding your solution space. You're stress-testing your assumptions.

At some point, you commit to a solution. That commitment is a design decision. Write it down. Capture the reasoning, the alternatives you considered, and the trade-offs you accepted. This becomes the foundation for your specifications.

The output of this phase is typically an RFC-level document. Not formal, not lengthy, just a clear record of: here's the problem, here are the solutions we considered, here's what we chose and why, here's what we're trading off.

> 🔄 **Feedback opportunity:** Share your RFC with someone who wasn't part of the exploration. Can they understand the decision without having been in the conversation? If they can't, the document isn't capturing enough. If they can challenge the decision and you have good answers, you're ready to spec.

## AI for Design, Not Just Code

Most people use AI tools to write code. That's the least interesting use of AI in a spec-driven workflow. The most interesting use is in the design phase:

"Here's my domain model. What entities am I missing?"
"Here's my architecture. What failure modes haven't I considered?"
"Here's my API contract. Does this make sense for a consumer building a dashboard?"
"Here are the trade-offs I see. Are there others I'm not seeing?"

These conversations happen before any specs are written. They refine the design. They surface problems early, when they cost a conversation to fix rather than a sprint to rework.

Once the design is solid, the specs almost write themselves. And once the specs are written, the implementation is the easy part. That's the spec-driven inversion: the hardest work happens before any code exists.
