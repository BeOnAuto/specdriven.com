---
layout: home
title: Spec-Driven Development | Sam Hatoum
description: "Sam Hatoum's publication on spec-driven development: its history, principles, practices, tools, and competing approaches."
animatedHero:
  name: Spec-Driven Development
  subhead: Specifications are becoming a new software medium.
  lead: Spec-driven development turns important product and software decisions into explicit, inspectable specifications that can guide people, AI agents, implementation, and verification.
  actions:
    - theme: brand
      text: What Is Spec-Driven?
      link: /what
    - theme: alt
      text: See It In Action
      link: /guides/see-it
features:
  - icon:
      src: /images/home/why.png
    title: "Why Spec-Driven?"
    details: "Research has long attributed many expensive defects to requirements and design problems. AI accelerates the consequences of unresolved decisions."
    link: /guides/roi
  - icon:
      src: /images/home/what.png
    title: "What Are Specs?"
    details: "A specification makes intended design or behavior explicit enough to review, implement, or check."
    link: /what
  - icon:
      src: /images/home/manifesto.png
    title: "The Manifesto"
    details: "Understanding, design, specification, implementation, and feedback are related decisions—not one irreversible phase gate."
    link: /manifesto
  - icon:
      src: /images/home/first-principles.png
    title: "First Principles"
    details: "Why specifications exist, what makes them valuable, and the principles behind how spec-driven systems work."
    link: /first-principles/
  - icon:
      src: /images/home/dialects.png
    title: "Approaches & Formats"
    details: "Prose, examples, schemas, models, and formal methods expose different decisions and carry different trade-offs."
    link: /dialects/
  - icon:
      src: /images/home/landscape.png
    title: "Tool Landscape"
    details: "An editorial catalog of spec-driven tools: Auto, Kiro, Spec Kit, Intent, OpenSpec, Tessl, and more."
    link: /landscape/
---

> **A publication by [Sam Hatoum](/about).** SpecDriven is where I document the history, practice, tools, arguments, and open questions around the field that my career has been building toward. I also founded [Auto](https://on.auto), which is covered here as one participant in the landscape.

## The New Workflow

Spec-driven development is an approach in which explicit specifications materially guide implementation and verification. Software intent is moving into a more durable medium:

`Intent → Explicit Specification → Implementation → Evidence`

The category matters because prompts can be disposable, documents can drift, and code alone rarely preserves why a system works the way it does.

## You're Already Specifying

Every team specifies, even when it does not keep a formal specification.

A whiteboard, user story, prompt, or conversation can contain specification material. None is automatically precise or complete enough to guide a consequential implementation. The problem is that the decisions inside them are often implicit, fragmented, or [thrown away](/why#the-throwaway-problem).

The whiteboard gets erased. The conversation evaporates. The code becomes the only surviving record, and code can't tell you [_why_ something works the way it does](/manifesto#the-principles). Three months later, nobody knows. You're left reverse-engineering intent from implementation.

## The Polaroid Problem

Prompt-to-app tools are the Polaroid camera of software development. You point, you shoot, you get something that looks like a photo. It's fast. It's fun. It feels like magic. But try to blow it up to billboard size and you'll see every flaw. The colors aren't true. The composition is fixed. You're stuck with what you got.

An SLR is a different machine. The lens comes off and gets swapped for the right glass. The aperture, shutter speed, and focal length are all under your control. Every setting is a deliberate decision, and the result scales from a wallet print to a billboard without falling apart. The work happens before the shot, not after it.

Spec-driven development is the SLR of software. Maintained specifications expose the settings that matter: what you are building, which choices were deliberate, and what evidence will show whether the implementation behaves as intended.

## From disposable prompts to durable specifications

Every prompt to an AI contains instructions about what to build. The problem is that a prompt is usually partial, conversational, and easy to lose when the session ends.

Spec-driven development makes the important decisions persistent and inspectable. The intent survives the session. Design and behavior become something people can review, builders can implement, and—where suitable—machines can check against running code.

## See the Difference

What does spec-driven development actually look like in practice? Current tools, concrete examples, and different relationships between intent, implementation, and checks.

The [landscape page](/landscape/) tracks what current tools claim, what their public workflows support, and how each relates specifications to implementation and verification. The [manifesto](/manifesto) states the argument for making product and software decisions explicit before generated code becomes the only surviving record.

[See It In Action](/guides/see-it) | [Explore the Landscape](/landscape/)

---

> _Code can be generated. The important decisions still have to be made._

## Ready to Take Your Specifications Seriously?

The gap between what you _meant_ and what got _built_ is a recurring source of rework and risk. Maintained specifications can narrow that gap when teams treat them as first-class artifacts instead of disposable notes.

[Explore the Landscape](/landscape/) | [Read the Manifesto](/manifesto) | [See It In Action](/guides/see-it)
