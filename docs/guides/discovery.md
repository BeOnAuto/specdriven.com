---
prev:
  text: See It In Action
  link: /guides/see-it
next:
  text: Discovery Techniques Reference
  link: /guides/guides/discovery-techniques
---

# Discovery

> Specifications don't come from nowhere. They come from shared understanding. Discovery is everything that happens before you write a specification.
>
> Something missing? [Submit a PR](https://github.com/BeOnAuto/specdriven.com) or [open an issue](https://github.com/BeOnAuto/specdriven.com/issues).

## Where Do Specs Come From? {#where-specs-come-from}

Spec-driven development assumes you have specifications. But where do those specifications come from?

Not from a product manager writing requirements in isolation. Not from a developer interpreting a Slack message. The best specifications emerge from shared understanding: structured conversations where business stakeholders, developers, designers, and domain experts build a common picture of what needs to be built.

That process of building shared understanding is discovery. It's the work that happens before specifications exist.

## How Teams Work Today {#how-teams-work-today}

In practice, discovery looks different in every organization. Most teams use some combination of:

- **Product Requirements Documents (PRDs)** written in Notion, Confluence, or Google Docs
- **Roadmaps and backlogs** managed in Jira, Linear, or Shortcut
- **Design artifacts** in Figma, FigJam, or similar tools
- **Conversations** in Slack, Teams, meetings, standups, and hallway chats
- **Architecture documents** in wikis, ADRs, or diagrams
- **User research** from interviews, analytics, support tickets, and feedback channels

AI is accelerating all of these. Product managers use AI to draft PRDs faster. Designers use AI to generate wireframes. Developers use AI to scaffold prototypes. Everyone is getting individually faster.

But here's the problem.

## The Sum Is Greater Than the Parts {#sum-greater-than-parts}

Each person on a team of five uses AI to become more productive in their individual work. Everyone is faster. But individual productivity gains don't multiply. They just add up.

Now imagine those same five people align on a shared specification before they each sprint off. The rework disappears. The "that's not what I meant" conversations disappear. The two-week detour that happened because two people had different mental models of the same feature disappears. The gains compound, because you're not just adding up individual speed. You're eliminating the waste between people.

That waste, the misalignment, the rework, the duplicated effort, is where most of your time actually goes. Discovery is what eliminates it. It's the difference between optimizing the parts and optimizing the whole.

Right now, most teams are optimizing the parts. Each individual is faster than ever. But the sum isn't greater than the parts because the parts aren't connected. The PRD says one thing. The Figma file implies another. The Jira ticket captures a third interpretation. The developer's mental model is a fourth. And the AI that generates the code cheerfully implements whichever fragment it sees first.

Spec-driven development is how you capture the output of discovery in a form that everyone can share, verify, and build from. But you need discovery first.

## The Shape of Discovery Is Changing {#shape-is-changing}

The traditional approach to discovery was synchronous: get people in a room, put sticky notes on a wall, hash it out. That approach produced results. It still does.

But the medium is shifting. Remote-first teams run workshops on digital canvases. Asynchronous collaboration is replacing all-day workshops. AI is starting to participate in discovery itself, generating drafts, surfacing edge cases, and synthesizing conversations into structured artifacts.

What hasn't changed is the underlying need: before you can specify, you need to discover. Before you can discover, you need to get the right people talking about the right problems.

## Structured Discovery Techniques {#structured-techniques}

Over the past two decades, the software community has developed a rich set of structured techniques for collaborative discovery. These emerged primarily from the Domain-Driven Design (DDD), Agile, and Lean communities, and they represent some of the most thoughtful work on how teams build shared understanding.

These techniques are worth knowing. Some are widely used today. Others are more specialized. All of them address the same fundamental problem: how do you get from "we have a vague idea" to "we know exactly what to build"?

For a comprehensive reference of these techniques (EventStorming, Event Modeling, Example Mapping, User Story Mapping, Impact Mapping, Domain Storytelling, Wardley Mapping, Context Mapping, Business Model Canvas, Storystorming, and The Three Amigos), see the [Discovery Techniques Reference](/guides/discovery-techniques).

## The Future of Discovery {#future-of-discovery}

These techniques were designed for humans working together. That hasn't changed. What's changing is the medium and the integration.

AI-native tools are beginning to combine multiple discovery techniques into unified formats. [Narrative-Driven Development](/dialects/narrative-driven), for example, merges elements of EventStorming (domain events and commands), Example Mapping (concrete Given/When/Then examples), and User Story Mapping (user journey narratives) into a single model that serves visual, documentation, and code audiences.

The techniques on this page remain valuable as discovery inputs. The question for the next era is how those inputs get captured, structured, and connected to executable specifications. The tools are catching up to the practices.

## Getting Started {#getting-started}

**If you're starting from scratch:** Talk to the people who know the domain. Write down what you learn. Structure it. That's discovery. You don't need a formal technique to start.

**If you want more structure:** [Example Mapping](/guides/discovery-techniques#example-mapping) is the easiest entry point. 25 minutes, three people, one story. It works in person or remote.

**If you're tackling a large domain:** [EventStorming](/guides/discovery-techniques#eventstorming) or [Event Modeling](/guides/discovery-techniques#event-modeling) can map an entire business process in hours.

**If you need strategic alignment first:** [Impact Mapping](/guides/discovery-techniques#impact-mapping) or [Wardley Mapping](/guides/discovery-techniques#wardley-mapping) connect business goals to technical decisions.

---

> **Facilitating these workshops?** *Collaborative Software Design* by van Kelle, Verschatse, and Baas-Schwegler (Manning) is an excellent guide.
>
> **Know a technique that should be listed here?** [Submit a PR](https://github.com/BeOnAuto/specdriven.com).

*An initiative by [Auto](https://on.auto).*
