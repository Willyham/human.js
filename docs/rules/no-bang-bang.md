# no-bang-bang

### What
This rule disallows use of the double not operator (`!!`). This is used as a shorthand to cast to boolean.

### Why

*Principles:*
 - [Quirks are Not Cool]('../principles/quirks.md').
 - [Comprehension over Keystrokes]('../principles/keystrokes.md').

This is simple enough that the discussion is covered solely by the principles.

Avoid:

```js
return !!foo;
```

or

```js
if (!!bar) {
  // ...
}
```

Prefer:

```js
return Boolean(foo);
```

or

```js
if (bar) {
  // ...
}
```
