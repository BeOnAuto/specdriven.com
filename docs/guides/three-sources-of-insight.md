---
prev:
  text: Specs in Your SDLC
  link: /guides/specs-in-your-sdlc
next:
  text: Evolving Specs Over Time
  link: /guides/evolving-specs
image: /images/pages/guides/three-sources-of-insight.png
---

# Three Sources of Insight

![Three Sources of Insight](/images/pages/guides/three-sources-of-insight.png)

The delivery phase produces two things: a product and a production system. The learning phase asks: what can we learn from both?

There are three distinct channels and most teams only pay attention to one.

## Learn from Your Product

Analytics, user behavior, feature usage, conversion funnels, support tickets, NPS scores, user interviews, A/B test results.

This is where estimated value meets realized value. You thought users would love advanced search. They ignore it. You thought the onboarding would take 3 minutes. It takes 12. You thought the back-in-stock notification would drive repeat purchases. It drives email unsubscribes because you're notifying 500 people for 5 items.

Each of these is feedback about your requirements and design. The specs might be perfectly implemented (verification passes) but the wrong specs for the actual problem (validation fails). This feedback loops back to Discovery: the requirement needs rethinking, or back to Design: the solution needs adjustment.

## Learn from Your System

Logs, metrics, observability, incident reports, error rates, response times, queue depths, memory usage.

This tells you whether the system is healthy. It's not about whether you built the right thing (that's product learning). It's about whether the thing you built is working correctly under real conditions.

A response time that's 3x what you specified is a specification gap. Either the spec didn't include performance requirements (missing spec), or the implementation doesn't meet them (incorrect implementation), or the real-world conditions differ from what was assumed (incorrect spec).

System learning often reveals non-functional specification gaps that nobody thought about during design.

One warning: too much observability is noise. If you're drowning in dashboards and alerts, you can't detect meaningful feedback because the signal-to-noise ratio is wrong. Invest in filtering and prioritization. The goal is to detect feedback, not to collect data.

## Learn from Your Process

Retrospectives, team health checks, cycle time analysis. Where did things go smoothly? Where did they get stuck? Where did the handoff between phases lose context?

This is about improving the production system, not the product. The Toyota parallel: invest in the factory, not just the car.

Process learning asks questions like: did the discovery sessions produce usable requirements? Did the specs have enough detail for the developers (or AI) to implement without constant clarification? Did the test harnesses catch the right things? Did guardrails prevent the mistakes they were built for?

The insights from process learning go back into how you run the next cycle. Maybe you need better facilitation in discovery sessions. Maybe your spec format needs to be more structured. Maybe your CI pipeline needs to be faster. Each insight is a feedback opportunity for improving the production system.

> 🔄 **Feedback opportunity:** Which of the three channels are you actually monitoring? If you only watch product metrics, system issues surprise you. If you only watch system health, user problems surprise you. If you never retrospect on process, the same inefficiencies repeat forever.
