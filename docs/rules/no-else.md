# no-else

### What
This rule disallows use of the `else` keyword.

### Why

*Principles:*
 - [Immutability]('../principles/immutability.md').
 - [Small Stack]('../principles/stack.md').

The keyword isn't the enemy, but rather the patterns which arise from use of the keyword. If you're using `else`, it
most likely means that you either have mutable state, or you're writing some redundant code.

For simple asignment statements, prefer a ternary operator which still avoids mutable state.
For anything more complex, prefer a function which returns values based on input.

*Immutability*:

Avoid:

```js
let something = null;
if (foo) {
  something = 'foo';
} else {
  something = 'bar';
}
```

Prefer:

```js
const something = foo ? 'foo' : 'bar';
```

or

```js
function getSomething(foo) {
  if (foo) {
    return 'foo';
  }
  return 'bar';
}
const something = getSomething(foo);
```

*Small stack*:

Avoid:

```js
function isValidInput(foo, bar, baz) {
  if (foo === 10) {
    if (bar === 'humans') {
      if (typeof baz === 'function') {
        // doSomething
      } else {
        return INVALID_BAZ;
      }  
    } else {
      return INVALID_BAR;
    }
  } else {
    return INVALID_FOO;
  }
}
```

Prefer:

```js
function isValidInput(foo, bar, baz) {
  if (foo !== 10) {
    return INVALID_FOO;
  }
  if (bar !== 'humans') {
    return INVALID_BAR;
  }
  if (typeof baz !== 'function') {
    return INVALID_BAZ;
  }
  // doSomething
}

```
