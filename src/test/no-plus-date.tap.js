import {RuleTester} from 'eslint';

import noPlusNew, {dateMessage, genericMessage} from '../rules/no-plus-new';

const parserOptions = {
  ecmaVersion: 6
};

const ruleTester = new RuleTester();
ruleTester.run('no-plus-new', noPlusNew, {
  valid: [{
    parserOptions,
    code: 'new Date().getTime()'
  }, {
    parserOptions,
    code: 'Date.now()'
  }, {
    parserOptions,
    code: '+5'
  }, {
    parserOptions,
    code: '-0'
  }],
  invalid: [{
    parserOptions,
    code: '+new Date()',
    errors: [dateMessage]
  }, {
    parserOptions,
    code: '+new Foo()',
    errors: [genericMessage]
  }]
});
