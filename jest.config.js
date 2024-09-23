/** JEST: if needed, take precaution */
module.exports = {
	testMatch: [
		"**/ __tests__/**/*.js?(x)",
		"**/?(*.)+(spec|test).js?(x)"
	],
	verbose: true,
	clearMocks: true,
	setupFiles: [
		"<rootDir>/setupTests.js"
	],

	testEnvironment: 'node',
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageReporters: ["text", "html"],

	testPathIgnorePatterns: [
		"node_modules",
		"/dist/"
	],

	moduleNameMapper: {
		"\\.(css|less)$": "identity-odj-proxy",
		"\\.(gif|ttf|eot|svg|png)$": "<rootDir>/ __mocks__fileMock.js"
	}
};
