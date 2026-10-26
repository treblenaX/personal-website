# Elbert Website

This is the repository for the Elbert website project.

## Playwright Tests

All Playwright tests have been organized in a dedicated folder structure:

- `playwright-tests/` - Contains all Playwright test files
- `playwright.config.ts` - Playwright configuration file

## Running Tests

To run Playwright tests:
```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with HTML report
npm run test:report
```

## Development

To start the development server:
```bash
npm run dev
```

The tests expect the Astro development server to be running on `http://localhost:4173`.