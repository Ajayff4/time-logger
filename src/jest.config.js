 module.exports = {
    verbose: true,
    setupFiles: ["<rootDir>/src/setupTests.js"],
    testRegex: "/*.test.js$",
    collectCoverage: true,
    coverageReporters: ["lcov"],
    coverageDirectory: "test-coverage",
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    },
    collectCoverageFrom: [
        "!**/node_modules/**",
        "!**/coverage/**",
        "!**/serviceWorker.js",
        "!**/index.js",
        "!**/App.js"
      ],
    moduleDirectories: ["node_modules", "src"]
}