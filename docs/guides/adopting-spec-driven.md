---
prev:
  text: Context Management
  link: /guides/context-management
next:
  text: Tackling Spec Debt
  link: /guides/tackling-spec-debt
image: /images/pages/guides/adopting-spec-driven.png
---

# Adopting Spec-Driven in a Team

![Adopting Spec-Driven in a Team](/images/pages/guides/adopting-spec-driven.png)

Changing how a team works is a change management problem. The technical part (choosing a format, setting up harnesses, configuring guardrails) is the smaller challenge. The human part is bigger.

## The First Thing That Goes Wrong

Resistance. "This is not how we do things." "This feels like extra process." "We're already behind schedule and you want us to add steps?"

This is normal. Any change in practice feels like friction before it feels like flow. The teams that get through it don't try to change everything at once. They start small, demonstrate value on one concrete thing, and let the results create pull.

## Find Your Champions

Different people gravitate to different parts of the spec-driven process. The analyst personality loves the precision of well-written specs. The completer-finisher loves the verification that everything meets the spec. The facilitator loves bringing people together to build shared understanding.

Identify who on your team naturally cares about each piece. Empower them. Give them the knowledge and tools they need. Let them lead their part.

This is the champion model. Apollo GraphQL used it when they were getting organizations to adopt GraphQL. They didn't try to convince entire companies. They found one person who got it, supported them, and let the change grow from within.

## Individual Thinking, Then Group Thinking

One facilitation principle that makes a huge difference. Before any group design session, do one-on-one conversations. Visit each person individually. Understand their perspective. Represent their concerns in the artifacts you're building.

Then when the group comes together, everyone feels disarmed. The things they were maybe afraid to say in a group have already been captured. The discussion starts at a higher level because the baseline has been established.

This is time-intensive. It's also one of the most effective facilitation techniques there is. People commit to decisions they feel heard in. They resist decisions imposed on them.

## The POC Approach

Don't try to make the entire organization spec-driven overnight. Pick one feature. Pick something that isn't business-critical (you're going to fail some things while learning). Run a pilot.

Two paths for the pilot:

**New feature:** Build something new alongside the existing system. Entry and exit integration points connect it to what exists. You get the benefits of greenfield (clean specs, clean tests, clean architecture) while delivering something that integrates with reality.

**Existing area:** Pick a high-value area of your existing system that suffers from regressions. Reverse-engineer the specs from interviews and code. Build test harnesses around it. The immediate benefit is fewer regressions. The long-term benefit is you've built the production system capability for spec-driven work.

Either way: make it cheap to fail. Celebrate what you learn from the failure. Iterate. The goal of the pilot isn't perfection. It's learning how spec-driven development works in your specific context, with your specific team, on your specific system.

> 🔄 **Feedback opportunity:** Is your pilot scoped small enough that failure won't hurt? If the pilot failing would cause real business damage, the scope is too big. Shrink it until failure is a learning opportunity, not a crisis.
