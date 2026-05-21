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

So put them next to each other. Specs live in the codebase, in the same repository, ideally in the same directory or adjacent to the code they specify. Not in a wiki. Not in a separate repo. Not in Confluence.

When they're co-located, you can see them when you're working on the code. You can update them in the same commit. You can review them in the same pull request. The lifecycle is unified.

## Executable Specs = Built-In Drift Detection

If your specs are executable (coupled to tests), drift detection is free. The spec changes but the test doesn't update? The test fails. The code changes but the spec isn't reflected? The test fails. You know immediately.

Without executable specs, drift is silent. The spec says one thing. The code does another. Nobody knows until someone manually compares them, which they won't.

If you can't make all your specs executable right now, consider using LLMs as drift detectors. Point an AI at your spec file and your code file and ask: "does this code still match this specification?" It's not as reliable as a test, but it's better than nothing.

## Separating Concerns

Co-location, authoring, publishing, and drift detection are different concerns. Don't conflate them.

**Co-location:** specs live next to code in the repo. This is about where the source of truth resides.

**Authoring:** who writes specs and how. Just because specs are in a code repo doesn't mean only developers can edit them. Build a layer that lets product managers edit specs in a friendly interface while the source of truth remains durable. Narrative-Driven Development approaches this through readable narrative review. Others use tools that generate spec files from a visual editor.

**Publishing:** how specs are shared with people who need to read them but not edit them. Running tests can publish results as a readable report. Spec files can be rendered as documentation. The fact that the source lives in a repo doesn't mean that's the only way people access it.

**Drift detection:** how you know specs and code are in sync. Executable specs handle this automatically. Non-executable specs need a separate mechanism.

Solve each concern independently. Don't let the limitation of one (e.g., "product managers can't use Git") prevent you from getting the benefit of another (e.g., co-location with drift detection).

## Organizing for AI Context

When you hand a task to an AI agent, it needs the right specs in its context. Not all 20,000 spec lines. The ones relevant to the task.

Organize specs by domain and component. Use a directory structure that mirrors your domain model. When the AI is working on the loyalty discount feature, it should be able to find every spec related to loyalty discounts in one predictable location.

Keep individual spec files small and focused. One feature per file. One component per file. The AI's context window is limited. Don't make it parse a 5,000-line omnibus file to find the three specs that matter.

> 🔄 **Feedback opportunity:** Give your spec directory to a new team member (or an AI) and ask them to find the specs for a specific feature. If it takes more than 30 seconds, your organization needs work.
