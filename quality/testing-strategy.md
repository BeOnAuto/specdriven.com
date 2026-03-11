---
title: The Right Testing Strategy
prev:
  text: Preventing Bugs
  link: /quality/bug-prevention
next:
  text: Auto
  link: /auto
---

# The Right Testing Strategy

### Is Your Testing Strategy Back-to-Front?
Many teams wear their testing strategy backwards, like putting on a jacket the wrong way around. They focus quality efforts at the end of the process, when it's most expensive and least effective.

The fundamental role of automated testing is to ensure that your intended value is being delivered at the intended quality.

### The Golden Rule of Feedback
> "The longer feedback lives in a system, the more costly it is to deal with it."

A bug caught immediately costs almost nothing. The same bug found weeks later costs orders of magnitude more, not just in fix time, but in all the code built on top of the faulty assumption.

### Signs Your Strategy Is Backwards
- A QA department "owns" quality
- Heavy reliance on manual regression testing
- Only test engineers write automated tests, after development
- Developers don't test their own code
- Low test coverage, or coverage limited to unit tests

### The Right Way

**1. Quality is everyone's responsibility.** Not QA's job. Everyone's.

**2. Start quality at the specification stage.** Two of the three bug types come from specification problems. The most valuable quality function is getting specifications right before code is written.

**3. Bake value into specifications.** Use structured formats like "Given, When, Then" scenarios instead of vague bullet points. Make sure specifications communicate not just what to build, but for whom and why.

**4. Generate constant feedback from automated tests.** Real-time unit test feedback during development. Integration tests on every save. End-to-end tests validating the full value chain.

**5. Free your QA team for exploratory testing.** Automated tests handle the expected scenarios. QA engineers have a superpower for discovering the unexpected. Let them use it.

### The Perfect Test Automation Strategy
A perfect test automation strategy meets four criteria:
1. **Continuous feedback** on system conformance to requirements throughout its lifetime
2. **Reliability**: identical outputs for identical inputs, every time
3. **Easy to change**: quick and straightforward to modify as requirements evolve
4. **Fast execution**: results in seconds, not hours

These four criteria aren't aspirational. They're achievable when your testing strategy starts with specifications rather than code.

