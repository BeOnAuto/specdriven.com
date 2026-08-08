---
prev:
  text: Model-Based Specifications
  link: /guides/model-based-specs
next:
  text: Adopting Spec-Driven in a Team
  link: /guides/adopting-spec-driven
image: /images/pages/guides/context-management.png
---

# Context Management

![Context Management](/images/pages/guides/context-management.png)

Where do specs physically live? How do they stay in sync with the code? How do you organize them so AI tools can consume the right specs for the right task?

## Things That Change Together Should Live Together

This principle from software design applies directly to specs. Your specs and your code change together. When the spec updates, the code updates. When the code changes, the spec might need to change. They're coupled.

For repository-native specifications, put them near the code they guide: in the same repository and, where practical, adjacent to the relevant implementation. Product models and review systems may use a separate authoritative store, but they still need explicit versioning and traceability to delivery work.

When they're co-located, you can see them when you're working on the code. You can update them in the same commit. You can review them in the same pull request. The lifecycle is unified.

## Executable Specs Can Detect Covered Drift

When a specification is connected to a substantive check, some drift becomes visible automatically. If observed behavior no longer satisfies an encoded expectation, the check fails.

That protection is limited to what the check actually observes. A specification can still be incomplete, a test can encode the wrong assumption, and code can change outside the measured behavior. Non-executable specifications need an explicit review or reconciliation mechanism.

If you can't make all your specs executable right now, consider using LLMs as drift detectors. Point an AI at your spec file and your code file and ask: "does this code still match this specification?" It's not as reliable as a test, but it's better than nothing.

## Separating Concerns

Co-location, authoring, publishing, and drift detection are different concerns. Don't conflate them.

**Co-location:** specs live next to code in the repo. This is about where the source of truth resides.

**Authoring:** who writes specifications and how. Just because a source lives in a code repository does not mean only developers can contribute. Teams may use friendly review interfaces, structured editors, or generated files while keeping a versioned authoritative source.

**Publishing:** how specs are shared with people who need to read them but not edit them. Running tests can publish results as a readable report. Spec files can be rendered as documentation. The fact that the source lives in a repo doesn't mean that's the only way people access it.

**Drift detection:** how you know specs and code are in sync. Executable specs handle this automatically. Non-executable specs need a separate mechanism.

Solve each concern independently. Don't let the limitation of one (e.g., "product managers can't use Git") prevent you from getting the benefit of another (e.g., co-location with drift detection).

## Organizing for AI Context

When you hand a task to an AI agent, it needs the right specs in its context. Not all 20,000 spec lines. The ones relevant to the task.

Organize specs by domain and component. Use a directory structure that mirrors your domain model. When the AI is working on the loyalty discount feature, it should be able to find every spec related to loyalty discounts in one predictable location.

Keep individual spec files small and focused. One feature per file. One component per file. The AI's context window is limited. Don't make it parse a 5,000-line omnibus file to find the three specs that matter.

> 🔄 **Feedback opportunity:** Give your spec directory to a new team member (or an AI) and ask them to find the specs for a specific feature. If it takes more than 30 seconds, your organization needs work.
