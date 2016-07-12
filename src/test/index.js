const test = require('tape');

const testfoo = require('../');

test('testfoo', function t(assert) {
  assert.ok(typeof testfoo === 'function',
    'exported correctly');

  assert.end();
});
