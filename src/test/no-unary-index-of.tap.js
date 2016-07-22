import {RuleTester} from 'eslint';

import noUnaryIndexOf, {message} from '../rules/no-unary-index-of';

const ruleTester = new RuleTester();
ruleTester.run('no-unary-index-of', noUnaryIndexOf, {
  valid: [
    '~1',
    '~-5',
    'foo.indexOf("test")',
    'if (foo.indexOf(a) !== -1) {}',
    '~foo.something()',
    '~Boolean(5)'
  ],
  invalid: [{
    code: 'if (~foo.indexOf(a)) {}',
    errors: [message]
  }, {
    code: 'if (~"foo".indexOf(a)) {}',
    errors: [message]
  }]
});
