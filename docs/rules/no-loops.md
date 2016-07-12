# no-loops

### What
This rule disallows all traditional loops such as `for` and `while` loops.

### Why

*Principles:*
 - [Declarative Over Imperitive]('../principles/declarative.md').
 - [Immutability]('../principles/immutability.md').
 - [Communicate Itent through Concepts]('../principles/intent.md').


Avoid:

```
let results = [];
for (let i = 0; i < myItems.length; i++) {
  results.push(doSomething(i));
}
```

Prefer:

```
const results = myItems.map(doSomething);
```
