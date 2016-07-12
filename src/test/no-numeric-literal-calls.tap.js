import {RuleTester} from 'eslint';

import numericCalls, {message} from '../rules/no-numeric-literal-calls';

const parserOptions = {
  ecmaVersion: 6
};

const ruleTester = new RuleTester();
ruleTester.run('no-numeric-literal-calls', numericCalls, {
  valid: [{
    parserOptions,
    code: 'Number(2).toString()'
  }, {
    parserOptions,
    code: 'const myNumber = 2; myNumber.toString()'
  }, {
    parserOptions,
    code: '40 + 2'
  }, {
    parserOptions,
    code: "2 - 'wat'"
  }, {
    parserOptions,
    code: "'test' + 'string'"
  }, {
    parserOptions,
    code: "'test'.toString()"
  }],
  invalid: [{
    parserOptions,
    code: "(1).toString()",
    errors: [message]
  }, {
    parserOptions,
    code: "2..toString()",
    errors: [message]
  }, {
    parserOptions,
    code: "3 .toString()",
    errors: [message]
  }, {
    parserOptions,
    code: "2 + ''",
    errors: [message]
  }, {
    parserOptions,
    code: "'' + 2",
    errors: [message]
  }]
});

// TODO: Should also support nested expressions, such as "2 + '' + 2" and "'test' + '' + 2"
