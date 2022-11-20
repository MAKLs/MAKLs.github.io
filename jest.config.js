const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
}

module.exports = createJestConfig(customJestConfig)
