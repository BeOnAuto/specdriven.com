---
prev:
  text: The Nature of Information Systems
  link: /first-principles/information-systems
next:
  text: The Feedback Principle
  link: /first-principles/feedback-principle
image: /images/pages/first-principles/value-quality-throughput.png
---

# Value, Quality, and Throughput

![Value, Quality, and Throughput](/images/pages/first-principles/value-quality-throughput.png)

## The Triangle

Three things are always in play when you're building anything. Value, quality, and throughput. They're interconnected, and most teams only pay attention to one of them at a time.

**Value** is: are we building the right thing? Are we solving a real problem? Will someone actually use this and benefit from it?

**Quality** is: does it work well? Is it reliable? Does it do what it's supposed to do, consistently, without falling apart?

**Throughput** is: how fast can we deliver? What's our velocity? How quickly does value reach the people who need it?

Most teams optimize for throughput. They measure velocity, track sprint points, count deploys per week. Speed is visible and speed is rewarded. But throughput without quality is just faster failure, and quality without value is a beautifully engineered solution to a problem nobody has.

## Quality Wraps Around Value

Here's a way to think about the relationship. Imagine a glass of water. If the glass is well designed, water flows smoothly to your mouth when you drink. That's value being delivered through quality. If the glass is poorly designed and water spills before you can drink it, the value is lost. The water is there. You just can't get to it.

Quality wraps around value. It's the set of things you do to ensure that the value you're building actually reaches the people who need it in the form they need it. Without quality, value leaks.

This has a direct consequence for specifications. Specs are the [communication of design](/what). If your specs are low quality (vague, incomplete, contradictory, missing edge cases), then the designs they communicate will be implemented incorrectly or incompletely. The value you intended won't be the value that gets delivered. Quality at the specification level determines quality at every level downstream.

## Estimated Value vs Realized Value

There's a trap in the word "value." When you're building something, you don't know if it's actually valuable yet. You're estimating. You believe this feature will solve this problem for these people. You've done research. You've talked to users. You're making an informed bet. But it's still a bet.

Estimated value is what you think will happen. Realized value is what actually happens when the product meets real users in real conditions.

The gap between estimated and realized value is where most of the interesting feedback lives. You estimated that customers would love the advanced search feature. They ignore it and use the simple filter instead. You estimated that the onboarding flow would take 3 minutes. It takes 12 because people get stuck on step 4.

This gap is normal. It's not a failure of planning. It's the nature of building things for other people. But it has consequences for specifications. When realized value diverges from estimated value, the requirements change. When requirements change, designs change. When designs change, specifications change.

Specs are not static. They're alive. They evolve with every piece of feedback from real usage. Teams that treat specs as carved-in-stone documents miss the point. Teams that treat them as living artifacts that update when reality teaches them something new are the ones that build things people actually use.

## The Throughput Equation

Here's the equation nobody puts on the dashboard:

**Throughput = Quality(Value) / Time**

You cannot go faster by ignoring quality. Poor quality is drag on your wings. Every shortcut in understanding what to build shows up later as rework, missed deadlines, and frustrated users. Speed without quality is just faster failure.

This is especially true now that AI can generate code at unprecedented speed. If you can produce code 10x faster but that code has 1.7x more defects and requires 2x more churn and 4x maintenance costs by year two (all documented in current research), you haven't increased throughput. You've increased output. Output and throughput are not the same thing. Throughput is value delivered. Output is stuff produced. A lot of stuff produced with low quality is low throughput, no matter how fast it came out.

## The Toyota Parallel

Toyota became the world's most successful automaker not by building cars faster than everyone else. They invested as much in their factory as they invested in their cars. Maybe more.

The Toyota Production System is legendary because it treated the production system as a product in its own right. They designed it. They specified how it should work. They iterated on it. They applied quality functions to the factory, not just to the cars.

The parallel to software is direct. You don't just build your product, you build the production system that produces it: your CI/CD pipeline, your test harnesses, your spec formats, your team processes, your review practices, your guardrails. All of it is a designed system that produces another system, and all of it can be specified.

A good craftsman sharpens their tools. A great team invests in their factory. And specifying your production system, not just your product, is one of the highest-leverage quality investments you can make.
