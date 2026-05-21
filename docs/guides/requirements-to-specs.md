---
prev:
  text: From Discovery to Requirements
  link: /guides/discovery-to-requirements
next:
  text: Writing Your First Spec
  link: /guides/writing-your-first-spec
image: /images/pages/guides/requirements-to-specs.png
---

# From Requirements to Specifications

![From Requirements to Specifications](/images/pages/guides/requirements-to-specs.png)

This is the step most teams skip. They go from a requirement straight to code. Or they go from a requirement straight to a ticket with some acceptance criteria. In both cases, they skip the design.

Design is the creative act of solving the problem. The requirement says what needs to be solved. The design says how you're going to solve it. The specification communicates that design precisely enough for someone to implement it.

## Three Design Activities

Design has three concurrent activities. They inform each other and you'll move between them fluidly.

**Architecture.** Two kinds. Information architecture: how is the information in the system organized? What are the entities, their relationships, their behaviors? This is the domain model. And system architecture: how is the system structured? What services exist? How do they communicate? What constraints do they operate under?

Architecture decisions are high-level specs in themselves. "We'll use event sourcing" is a design decision that constrains everything downstream. "The system will have separate read and write models" is a specification of how data flows. These architectural specs are some of the most important in the system because everything else builds on top of them.

**Interfaces.** How will people (or other systems) interact with this system? If it's a user interface, what screens exist? What information is on each screen? What actions can a user take? If it's an API, what endpoints exist? What data do they accept and return? If it's a chat interface, what intents does it support?

Interface design is where most teams focus first because it's visual and tangible. That's fine, but don't let it dominate. A beautiful interface on top of a broken domain model is a beautiful mess.

**Domain model.** What are the things in the system? What do they do? How do they interact? What are the rules? This is where techniques like EventStorming, Example Mapping, and domain storytelling pay off. You're modeling the business, not the UI.

The domain model is the skeleton that everything hangs on. Get it wrong and you'll be fighting it for the life of the project. Get it right and the specs almost write themselves because the domain language gives you the vocabulary to be precise.

> 🔄 **Feedback opportunity:** Before writing any specs, can you draw the domain model on a whiteboard and explain it to someone in under 5 minutes? If you can't, the design isn't clear enough yet. The drawing doesn't need to be formal. Boxes and arrows on a napkin work. The test is whether someone else can understand the relationships.

## Why PRDs Don't Get You Here

A Product Requirements Document describes the problem and sometimes sketches the solution at a high level. It lives at the boundary between discovery and design. What it doesn't do is make the specific design decisions that turn "we need a returns portal" into "when a customer selects 'Return Item' on an order less than 30 days old, display eligible items with return reason dropdown, generate a prepaid label via the carrier API within 5 seconds, and send confirmation email within 60 seconds."

The difference is specificity. The PRD says WHAT. The spec says HOW, with every design decision made explicit.

When teams hand a PRD to an AI tool and say "build this," the AI makes all those design decisions silently. Hundreds of them. You won't know what those decisions were until something behaves unexpectedly.

> 🔄 **Feedback opportunity:** Count the design decisions in your PRD. If you can identify fewer than 10, you're probably not yet at the spec level. Each ambiguity is a design decision someone hasn't made. With humans, late discovery fills those gaps. With AI, assumptions fill them, silently and often incorrectly.

## The Design-Before-Spec Principle

You can't specify what you haven't designed. You can try, but what you'll produce is a requirement wearing a spec's clothing. It'll say what should happen without having thought through how, and the implementation will inherit that vagueness.

This doesn't mean you need a complete design before writing any specs. The [fractal nature of design](/first-principles/fractal-design) means you can design and specify at one level, then go deeper into the next level. But at each level, the design should precede the spec. First decide how you're going to solve this piece. Then express that decision precisely.
