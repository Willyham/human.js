import {RuleTester} from 'eslint';

import noLoops, {message} from '../rules/no-loops';

const parserOptions = {
  ecmaVersion: 6
};

const ruleTester = new RuleTester();
ruleTester.run('no-loops', noLoops, {
  valid: [{
    parserOptions,
    code: '[1, 2, 3].forEach(() => {});'
  }, {
    parserOptions,
    code: '[1, 2, 3].map(() => {});'
  }],
  invalid: [{
    parserOptions,
    code: "for (let i = 0; i < 3; i++) { }",
    errors: [message]
  }, {
    parserOptions,
    code: "for (i in ['foo', 'bar']) { }",
    errors: [message]
  }, {
    parserOptions,
    code: "for (i of ['foo', 'bar']) { }",
    errors: [message]
  }, {
    parserOptions,
    code: "let i = 1; do { foo() } while (i < 2)",
    errors: [message]
  }, {
    parserOptions,
    code: "let i = 1; while (i < 2) { i++ }",
    errors: [message]
  }]
});
