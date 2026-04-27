---
prev:
  text: Timeline
  link: /timeline
next:
  text: Resources
  link: /resources
---

# SDD Origins

> *Curated by [Sam Hatoum](/people#sam-hatoum), founder of [Auto](https://on.auto). For the personal narrative behind the 2016 industrial coining, see [I Coined 'Spec-Driven Development' in 2016](/perspectives/the-spec-driven-shift/i-coined-spec-driven-development-in-2016-nobody-cared-until-ai-broke-everything). For the receipts and proof points that back it, see [Proof and Prior Art](/perspectives/the-spec-driven-shift/i-coined-spec-driven-development-proof). For the full chronological history of the broader practice, see the [Timeline](/timeline).*

This page tracks the actual occurrences of the phrase *"spec-driven development"* (and its near-synonyms) in the public record. The conceptual antecedents are noted briefly. The full practice lineage lives on the Timeline. This page is scoped to the term itself.

## 1969. Hoare's logic. The conceptual antecedent.

[Tony Hoare](/people#car-hoare) publishes *An Axiomatic Basis for Computer Programming* in CACM. The precondition / action / postcondition triple becomes the foundation for every subsequent attempt to specify what a piece of software is supposed to do.

Mathematical, formal, largely confined to academia. The word "specification" enters the engineering vocabulary as something rigorous. The phrase "spec-driven" is decades away.

## 1986. Meyer's Design by Contract. Specs become executable.

[Bertrand Meyer](/people#bertrand-meyer) publishes *Object-Oriented Software Construction* and creates Eiffel. He takes Hoare's preconditions and postconditions out of the proof system and puts them in the language itself. Design by Contract.

Specs as code, checked at runtime. The first time executable specifications shipped in production. DbC never went mainstream. Eiffel didn't win the language wars. But the idea did. JML, Spec#, Code Contracts, Java's `assert`, Python's typing decorators. The DNA is everywhere.

The phrase "spec-driven" is still not in use. The concept now exists in executable form.

## 2004. The first published use of the term.

[Jonathan Ostroff, Richard Paige, and David Makalsky](/people#ostroff-paige-makalsky) publish *Agile Specification-Driven Development* at the XP 2004 conference (Springer LNCS). This is the earliest known published use of the phrase **"specification-driven development"** in the academic record.

The argument: tests and contracts are both specifications, just at different granularities. A unit test specifies behavior at the example level. A contract specifies behavior at the method boundary. Their proposed practice was to intertwine analysis, design and implementation, with executable artifacts at every level.

A companion paper by Paige and Ostroff at TFM 2004, *Specification-Driven Design with Eiffel and Agents for Teaching Lightweight Formal Methods*, makes the same case in a teaching context.

The phrase exists in the academic record from 2004 onward, primarily within the formal methods and Eiffel teaching communities. It does not cross over into mainstream practitioner usage during the next decade.

## 2016. The first sustained industrial use.

Sam Hatoum begins using the phrase "spec-driven development" inside enterprise consulting engagements at Xolvio. The phrase enters his commercial product line publicly in 2018 with [xspecs.io](https://web.archive.org/web/20180829191612/https://www.xspecs.io/), where the homepage states: *"these specifications are used as the single source of truth to drive development."* By 2023 the [xspecs site](https://web.archive.org/web/20230331055318/https://www.xspecs.io/) is openly framing the work as the *"spec-driven revolution."* Sam purchases specdriven.com in 2020.

As far as the public record reflects, this is the earliest sustained use of the phrase outside the academic SDD community. Hatoum has consistently disclaimed any "inventor" framing; the position is first sustained industrial use, not invention. For receipts and the full provenance trail, see [Proof and Prior Art](/perspectives/the-spec-driven-shift/i-coined-spec-driven-development-proof).

The term does not cross over into widespread industry adoption until the AI-driven coding wave of 2025.

## 2025. The term enters mainstream tooling.

The arrival of capable AI coding assistants creates the commercial conditions for spec-driven development to become a recognized category. A wave of products launches in 2025, most adopting the spec-driven framing explicitly:

- **[GitHub Spec Kit](/landscape/github-spec-kit)** (GitHub/Microsoft, 2025), open-source toolkit codifying a `Specify → Plan → Tasks → Implement` pipeline. Surpassed 16,000 GitHub stars in its first week.
- **[Kiro](/landscape/kiro)** (AWS, 2025), an agentic IDE structured around "vibe mode" vs "spec mode." Demonstrated by Clare Liguori at AWS re:Invent 2025.
- **Tessl** (2025), launched the Tessl Framework and Spec Registry with explicit spec-driven messaging. (Tessl repositioned around agent skills in January 2026; see [Came and Went](/landscape/#came-and-went).)
- **[OpenSpec](/landscape/openspec)** (Fission AI, 2025), brownfield-friendly spec workflow.
- **[Intent](/landscape/intent)** (Augment Code, 2025-2026), positioning around "living specifications" for enterprise / multi-repo development.
- **[Auto](/landscape/auto)** (founded by Sam Hatoum, productizing the [Narrative-Driven Development](/dialects/narrative-driven) dialect of spec-driven development).
- **Community projects** including BMAD-METHOD, IntentSpec, cc-sdd, and others adopting spec-driven framing.

By the close of 2025, "spec-driven development" is a recognized commercial category with multiple competing implementations. Public discourse covers tradeoffs (Marmelab's "The Waterfall Strikes Back," Scott Logic's "a sea of markdown"), case studies (Tessl's "build it twice" experiment, Kiro's Delta Airlines showcase, Prezi Engineering's "We Tried SDD So You Don't Have To"), and analysis ([Martin Fowler](/people#martin-fowler)'s spec-first / spec-anchored / spec-as-source taxonomy).

For per-tool analysis and the broader landscape, see the [Tool Landscape](/landscape/).

## Where the lineage stands today.

Two threads now meet in the AI-driven moment.

The academic thread, traceable from Hoare (1969) through Meyer's Design by Contract (1986) to Ostroff/Paige/Makalsky (2004), established that specifications can be executable, that contracts and tests are both specifications, and that analysis, design and implementation can be intertwined.

The practitioner thread, traceable through TDD (~2000), BDD (2003-2006), DDD (2003), EventStorming (2013), Event Modeling (2018), Narrative-Driven Development (2018) and into the 2025 commercial wave, established that specifications can be readable by cross-functional teams, that they can describe systems at multiple zoom levels, and that they can drive AI-assisted code generation.

Both threads now use the same term. Different communities, same vocabulary, broadly compatible substance. The lineage is older and deeper than most of the current discourse acknowledges.

## Further reading

- Ostroff, J., Makalsky, D., Paige, R. (2004). *Agile Specification-Driven Development*. XP 2004, Springer LNCS.
- Paige, R., Ostroff, J. (2004). *Specification-Driven Design with Eiffel and Agents for Teaching Lightweight Formal Methods*. TFM 2004, Springer LNCS 3294.
- Meyer, B. (1988, 1997). *Object-Oriented Software Construction*. Prentice Hall.
- Meyer, B. (1997). *Design by Contract: The Lessons of Ariane*. IEEE Computer 30(1), pp 129-130.
- Hoare, C.A.R. (1969). *An Axiomatic Basis for Computer Programming*. CACM.
- Beck, K. (2003). *Test-Driven Development: By Example*. Addison-Wesley.

For the conceptual move that the academic SDD lineage didn't articulate (the fractal recursion of design and the separation of solution from spec) see [Specs Are Fractal](/perspectives/specs-are-fractal).
