const { defaults } = require('jest-config');

/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  rootDir: 'src',
};

module.exports = config;
