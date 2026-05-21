---
prev:
  text: First Principles
  link: /first-principles/
next:
  text: Value, Quality, and Throughput
  link: /first-principles/value-quality-throughput
image: /images/pages/first-principles/information-systems.png
---

# The Nature of Information Systems

![The Nature of Information Systems](/images/pages/first-principles/information-systems.png)

## The 1912 Thought Experiment

Try this. Imagine it's 1912. There are no computers. And everybody is blind.

The blindness part matters. When people think about software systems, their visual cortex dominates. They immediately start thinking in terms of UI. Buttons, screens, navigation. When I used to coach BDD, people would always start with "given the user clicks this button, when they see that screen." They're talking about components, not about the domain.

Strip all of that away. No screens. No computers. What's left?

Information.

Humans have always had information they need to share, distribute, manage, and act on. That's what information systems are. Before computers existed, they were ledgers, filing cabinets, registers, libraries. People with specific roles managing specific information through specific procedures. The procedures were designed. The designs were specified. The specifications were communicated to the people who carried them out.

Nothing has changed.

## Three Operations

At the most fundamental level, you can do three things with information:

**Change it.** Record something new, update something existing. A customer places an order. A clerk writes an entry in the ledger. A database receives an INSERT.

**Read it.** Retrieve information that was previously recorded. A manager checks the inventory. A user views their account balance. A service queries the database.

**React to it.** Something happens as a consequence of information changing. The warehouse ships an order because a payment was confirmed. A notification fires because a threshold was crossed. An event triggers a downstream process.

Mutate, read, react. Every information system, from a Sumerian clay tablet to a modern SaaS platform, is doing some combination of these three operations. This is why event sourcing maps so naturally to information systems. Event sourcing explicitly models these operations: commands mutate, queries read, and reactors respond. It's not an architectural choice as much as it's a recognition of how information actually behaves.

## From DNA to Databases

Information storage didn't start with computers. It didn't start with writing.

DNA is one of the earliest known information storage mechanisms. Strands of genetic code storing instructions that change evolution. Information encoded in a medium that persists and replicates.

Then human language. We stored information in each other's memories and spread it through mimetics. I could modify the information in your mind by talking to you. You could query me by asking a question. Reactions happened when you heard something that demanded action. A lion nearby? React.

Then writing. The alphabet gave us a specification for encoding language. We could record information on stone, then papyrus, then paper. Historians could capture knowledge that outlived the people who generated it.

Then printing, then telegraph, then radio, then television, then the internet. Each leap was a new distribution mechanism for the same underlying thing: information being mutated, read, and reacted to.

The recording medium evolved from stone to paper to magnetic tape to silicon. The distribution mechanism evolved from walking to horses to wires to wireless. But the information operations stayed the same. And the need for designed systems around that information stayed the same.

## Why Systems Need Specifications

Information gets unruly fast. Once you have enough of it, you need mechanisms to manage it. A register to check if something has already been recorded. A filing system to retrieve things efficiently. A process to ensure the right people react to the right events.

These mechanisms are designed. Somebody looks at the problem (information is getting lost, or duplicated, or not reaching the right people) and designs a solution (a register, a routing system, a notification process).

That design needs to be communicated to whoever is going to implement and operate the mechanism. The communication of that design is the specification.

Before computers, the implementation was physical: paper, pens, filing cabinets, people following procedures. With computers, the implementation became virtual. We build virtual mechanisms that manipulate information. But the need for specification didn't change. If anything, it intensified. Virtual systems can be far more complex than physical ones, and the people operating them (or the AI generating them) need even more precise specifications to get it right.

This is the foundational point. Specifications exist because information systems need designed mechanisms, and designed mechanisms need their designs communicated. That was true in 1912. It's true today. It'll be true when AI writes all the code. The implementation medium changes. The need for specification doesn't.
