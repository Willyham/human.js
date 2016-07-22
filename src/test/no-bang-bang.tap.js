import {RuleTester} from 'eslint';

import noBangBang, {message} from '../rules/no-bang-bang';

const ruleTester = new RuleTester();
ruleTester.run('no-bang-bang', noBangBang, {
  valid: [{
    code: 'Boolean(x)'
  }, {
    code: 'Boolean(!y)'
  }, {
    code: '!x && !y'
  }, {
    code: '+x'
  }],
  invalid: [{
    code: "!!x",
    errors: [message]
  }, {
    code: "!!1",
    errors: [message]
  }, {
    code: "!!(function(){})()",
    errors: [message]
  }]
});
