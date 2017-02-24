'use strict';

const fs = require('fs');

let config;

try {
  // this path is relative to where the application entered, which will be the git repo root
  const babelrc = fs.readFileSync('./.babelrc');
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==> ERROR: Error parsing .babelrc.');
  console.error(err);
}

require('babel-register')(config);
