# human.js

**Ensure your JavaScript is readable by humans.**

human.js lays out a set of guiding [principles](docs/principles/) for writing code which is more readable. To accompy these principles and allow you to incorporate them into your work more easily, it also provides a set of eslint rules, exported as a plugin.

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
    "human/no-loops": "error"
  }
}
```


## Rules

- [no-loops](docs/rules/no-loops.md) - Forbid the use imperitive loop constructs.
