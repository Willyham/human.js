# no-numeric-literal-calls

### What
This rule disallows numeric string casting through literal calls

### Why

*Principles:*
 - [Quirks are Not Cool]('../principles/quirks.md').
 - [Comprehension over Keystrokes]('../principles/keystrokes.md').

Avoid:

```js
2 .toString();
2..toString();
(2).toString();
```

Prefer:


```js
String(2);
// or
Number(2).toString();
```

Not much else to say about this. Keep it clear.
