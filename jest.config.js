/* eslint-disable unicorn/prefer-module */
'use strict'

module.exports = {
  transform: {
    '^.+\\.ts$': ['ts-jest', { diagnostics: false }],
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  globals: {
    __DEV__: true,
  },
  testMatch: ['<rootDir>/packages/**/__tests__/**/*.spec.ts'],
  // CoverageProvider: 'v8',
  collectCoverageFrom: ['packages/*/src/**/*.ts', '!packages/*/src/index.ts'],
  watchPathIgnorePatterns: ['/node_modules/'],
}
