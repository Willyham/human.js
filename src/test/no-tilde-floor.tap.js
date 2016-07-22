import {RuleTester} from 'eslint';

import noTildeFloor, {message} from '../rules/no-tilde-floor';

const ruleTester = new RuleTester();
ruleTester.run('no-tilde-floor', noTildeFloor, {
  valid: [{
    code: 'Math.floor(5);'
  }, {
    code: '~1'
  }, {
    code: '~-5'
  }, {
    code: '~1.5 + 5'
  }],
  invalid: [{
    code: '~~1',
    errors: [message]
  }, {
    code: '~~1.5',
    errors: [message]
  }, {
    code: '~~Number(1.5)',
    errors: [message]
  }, {
    code: '~~x',
    errors: [message]
  }]
});
