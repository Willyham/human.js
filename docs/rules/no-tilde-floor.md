# no-tilde-floor

### What
This rule disallows use of double bitwise NOT (the tilde character / `~`).

### Why

*Principles:*
 - [Quirks are Not Cool]('../principles/quirks.md').
 - [Comprehension over Keystrokes]('../principles/keystrokes.md').
 - [Don't be a Performance Troll]('../principles/performance.md').

This is heralded as a 'faster Math.floor', but only serves to obfuscate the code. What's more, it behaves differently
to Math.floor for negative numbers.

Avoid:

```js
~~x
```

Prefer:

```js
Math.floor(x);
```
