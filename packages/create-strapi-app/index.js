#!/usr/bin/env node
'use strict';

var currentNodeVersion = process.versions.node;
var semver = currentNodeVersion.split('.');
var major = semver[0];

if (major != 10) {
  console.error(`You are running Node ${currentNodeVersion}`);
  console.error('Strapi requires Node 10 only.');
  console.error('Please make sure to use the right version of Node.');
  process.exit(1);
}

require('./create-strapi-app');
