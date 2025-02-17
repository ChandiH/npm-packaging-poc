'use strict';

const demoFrontend = require('..');
const assert = require('assert').strict;

assert.strictEqual(demoFrontend(), 'Hello from demoFrontend');
console.info('demoFrontend tests passed');
