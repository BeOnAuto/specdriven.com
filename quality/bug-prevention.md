---
title: Preventing Bugs Before They Exist
---

# Preventing Bugs Before They Exist

### Understanding Bugs
Rather than fighting bugs, understand them. If you understand where they come from, you can control the conditions that create them, like turning off the bedroom light and turning on the hallway light to guide a fly out of your room.

### The Three Types of Software Bugs

**Type 1: Implementation Defects (15% of all bugs)**
The spec was correct. The code was wrong.

These include regression bugs: things that worked before but broke when code changed. They're the most visible bugs but account for only 15% of all defects.

**Quality function: Test-Driven Development.** TDD reduces implementation defects by 40-90%. Developers write executable specifications before writing code, ensuring that working code stays working as others maintain it.

**Type 2: Incorrect Specifications (the largest source)**
The spec was wrong. So the code is wrong.

A Cambridge University study found that 50% of defects occur during the specification stage. Errors caught later cost 50-100x more to fix. Despite being the largest source of bugs, incorrect specifications often proceed into development unchallenged.

**Quality function: Behaviour-Driven Development.** BDD is a team-wide methodology emphasizing shared understanding. It uses deliberate discovery sessions where cross-functional participants flesh out detailed scenarios. BDD can reduce specification defects from 50% to 2%.

**Type 3: Missing Specifications**
Nobody thought of this scenario. The spec wasn't wrong. It simply didn't exist.

These are the unknown unknowns. Their impact ranges from embarrassing to catastrophic.

**Quality function: Deliberate Discovery.** By leveraging the wisdom of crowds during collaborative sessions, teams systematically uncover what they don't know they don't know.

### The Implication
If 85% of bugs come from specification problems (incorrect + missing), then the highest-leverage investment you can make isn't in better testing. It's in better specifications.

This is why Spec-Driven Development exists.

[Learn about the right testing strategy →](/quality/testing-strategy)
