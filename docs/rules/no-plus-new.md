# no-plus-new

### What
This rule disallows use of unary expressions with constructors. This is most commonly seen as `+new Date()`.

### Why

*Principles:*
 - [Quirks are Not Cool]('../principles/quirks.md').
 - [Comprehension over Keystrokes]('../principles/keystrokes.md').
 - [Don't be a Performance Troll]('../principles/performance.md').

There's just no need for this. It's confusing and better methods are readily available. Performance is not a factor.

*Immutability*:

Avoid:

```js
+new Date();
```

Prefer:

```js
Date.now()
```

or

```js
new Date().getTime();
```
