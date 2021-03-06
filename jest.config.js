// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: "coverage",
  // An array of file extensions your modules use
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: ["<rootDir>/src/**/*.+(test|ci-test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  forceExit: true
};
