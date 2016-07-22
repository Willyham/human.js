# no-unary-index-of

### What
This rule disallows use of the bitwise NOT operator with `indexOf`.

### Why

*Principles:*
 - [Quirks are Not Cool]('../principles/quirks.md').
 - [Comprehension over Keystrokes]('../principles/keystrokes.md').

Most commonly seen as a shortcut for testing membership in expressions like `~'test'.indexOf('t')`. However, it
is not at all clear what this is doing. Most people, even when learning that this is a way to get a falsy value for
a miss, still don't understand it. For those interested:

indexOf returns the index that the item was found at, or returns -1 when the item is not present.
-1 in 2s complement is `1111 1111 1111 1111 1111 1111 1111 1111`. When you apply the bitwise NOT operator to this,
you end up with all 0s, which is just 0, which is falsy.

Avoid:

```js
if (~foo.indexOf('bar')) {}
```

Prefer:

```js
if (~foo.indexOf('bar') !== -1) {}
```

or better, if using ES6+:

```js
if (foo.includes('bar')) {}
```
