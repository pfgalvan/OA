/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  coverageDirectory: 'coverage',

  collectCoverage: true,
  //['<rootDir>/src/**/*.ts'],

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/'],
  testEnvirionment: 'node',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  transform: {'.+\\.ts$': 'ts-jest'},
};
