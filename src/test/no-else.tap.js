import {RuleTester} from 'eslint';

import noElse, {message} from '../rules/no-else';

const parserOptions = {
  ecmaVersion: 6
};

const valid = () => {
  if (true) {
    return 1;
  }
  return 2;
};

const invalidCase = () => {
  if (true) {
    return 1;
  } else {
    return 2;
  }
};

const ruleTester = new RuleTester();
ruleTester.run('no-else', noElse, {
  valid: [{
    parserOptions,
    code: valid.toString()
  }],
  invalid: [{
    parserOptions,
    code: invalidCase.toString(),
    errors: [message]
  }]
});
