'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'test'  // don't remove the appEnv property here
};

export default Object.freeze(Object.assign(baseConfig, config));

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
