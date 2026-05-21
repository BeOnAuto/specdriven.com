---
prev:
  text: Tackling Spec Debt
  link: /guides/tackling-spec-debt
next:
  text: The ROI of Spec-Driven Development
  link: /guides/roi
image: /images/pages/guides/two-entry-points.png
---

# Two Entry Points for Adoption

![Two Entry Points for Adoption](/images/pages/guides/two-entry-points.png)

You have an existing system. You want to go spec-driven. Where do you start?

## Path 1: New Feature Alongside the Existing System

Build something new. But build it spec-driven from the start, integrated with the existing system through clear entry and exit points.

The advantage: you get greenfield benefits (clean specs, clean tests, clean architecture) while delivering something that connects to reality. You're not rewriting the old system. You're building a new part that talks to it.

The entry/exit points are themselves specifications. "When an order is placed in the new system, it pushes an event to the old system's message queue in this format." That's a spec. "When the old system updates inventory, the new system receives a webhook with this payload." That's another spec.

This path works well when you have a clear feature to build that can be architecturally separated from the rest. It's lower risk because the existing system stays untouched. The new feature is the proving ground.

## Path 2: Retrofit Test Harnesses Around Existing Code

Pick a high-value area of the existing system. One that suffers from regressions, that changes often, or that's critical to the business.

Reverse-engineer the specifications from people and code. Stub out external dependencies so you can test in isolation. Build the setup, execute, verify infrastructure that lets you write specs against existing behavior.

This path is about enabling spec-driven development for the future. You're not rewriting anything. You're wrapping the existing system in a harness that gives you the ability to verify its behavior. Once that harness exists, you can change the code with confidence. And you can hand it to AI with confidence, because the AI now has acceptance criteria to work against.

This is factory work. You're investing in the production system. The immediate payoff is fewer regressions in a critical area. The long-term payoff is a system that AI can safely modify because it knows when it's succeeded and when it's failed.

## Which Path?

Path 1 is lower risk and delivers visible value quickly. You ship a new feature. The team learns spec-driven practices on something fresh. The existing system is untouched.

Path 2 is higher effort but addresses the existing system's problems directly. If your biggest pain is regressions and maintenance burden in the existing code, Path 2 tackles it head-on.

Many teams do both. Path 1 for the next new feature. Path 2 for the most critical existing area. The practices learned in each reinforce the other.

> 🔄 **Feedback opportunity:** Which path is lower risk for your team right now? Be honest. If you don't have the test harness skills yet, Path 1 lets you build them on simpler ground. If you're drowning in regressions, Path 2 addresses the immediate pain.
