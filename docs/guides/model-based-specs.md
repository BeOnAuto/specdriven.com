---
prev:
  text: Evolving Specs Over Time
  link: /guides/evolving-specs
next:
  text: Context Management
  link: /guides/context-management
image: /images/pages/guides/model-based-specs.png
---

# Model-Based Specifications

![Model-Based Specifications](/images/pages/guides/model-based-specs.png)

At small scale, flat spec files work fine. A feature file here. A test file there. Everything is findable because there isn't much of it.

At scale, flat files fall apart. You have hundreds of specs across dozens of features. Some specs reference other specs. Some features interact with other features. A change in one spec has implications for three others. And nobody can see how they all hang together.

## The Cohesiveness Problem

20,000 individual spec lines are useless if you can't see how they relate to each other.

Consider a domain spec that says "given a red car, a blue car, and a purple car were added to inventory, when a user searches for green cars, then they see no exact matches but are shown chromatically similar options." And a component spec that says the Chromatic Comparator module should return similar colors based on a color wheel algorithm.

These two specs are connected. The domain spec depends on the component spec. But in a flat file structure, that connection is implicit. It lives in someone's head. When the component spec changes, nobody automatically knows the domain spec might be affected.

A model-based approach makes these connections explicit. Specs are organized hierarchically with explicit references between them. The domain spec references the Chromatic Comparator by name. When the component changes, the model shows what domain behaviors depend on it.

## What a Model Gives You

A unified model is one source of product truth that can serve multiple audiences. Designers may work through visual journeys. Product managers may read document views. Engineers may need implementation-ready detail. The important point is that these audiences should not be reconciling three disconnected stories.

This is different from having three separate artifacts (technical notes, design files, product docs) that you try to keep in sync by hand. Separate artifacts drift unless the process gives them a shared product story.

The model also gives you inventory. You can look at it and see: how many domains do we have? How many narratives in each domain? How many scenes in each narrative? What's specified? What isn't? Where are the gaps? This is spec coverage, analogous to code coverage, and it's powerful for managing spec debt.

## When You Need a Model

You don't need a model for a side project with 10 features. You probably need one when:

Multiple people author specs and consistency becomes an issue.

Features interact with each other and changes cascade.

You need multiple audiences to work from the same source of truth.

Your spec inventory has grown beyond what anyone can hold in their head.

[Narrative-Driven Development](/dialects/narrative-driven) is one example of a model-based approach to product intent. Event Modeling is another. Both provide a way to organize specs hierarchically with explicit relationships. The choice depends on your domain and your team.
