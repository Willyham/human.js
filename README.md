# human.js

**Ensure your JavaScript is readable by humans.**

human.js lays out a set of guiding [principles](docs/principles/) for writing code which is more readable. To accompy these principles and allow you to incorporate them into your work more easily, it also provides a set of eslint [rules](docs/rules/), exported as a plugin.

**NOTE**: Currently under reconstruction. I'll be adding new rules and principles as often as I can. When this becomes useful, I'll cut 1.0.0 and publish this.

## Install

```
$ npm install --save-dev human.js
```

## Usage

The project exports an eslint plugin. You should configure your `.eslintrc` or `package.json` files to use these
rules.

```json
{
  "env": {
    "es6": true
  },
  "plugins": [
    "human.js"
  ],
  "rules": {
    "human/no-loops": "error",
    "human/no-else": "error",
    "human/no-numeric-literal-calls": "error",
    "human/no-plus-new": "error",
    "human/no-tilde-floor": "error",
    "human/no-bang-bang": "error"
  }
}
```


## Rules

- [no-loops](docs/rules/no-loops.md) - Forbid the use imperitive loop constructs.
- [no-loops](docs/rules/no-else.md) - Forbid the use of the 'else' keyword.
- [no-loops](docs/rules/no-numeric-literal-calls.md) - Forbid the use of numeric quirks like 2..toString()
- [no-loops](docs/rules/no-plus-new.md) - Forbid the use of +new casting.
- [no-loops](docs/rules/no-tilde-floor.md) - Forbid the use of ~~.
- [no-loops](docs/rules/no-bang-bang.md) - Forbid the use of !! for boolean casting
