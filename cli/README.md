# Spacey Installation CLI

Spacey CLI helps you set up the Spacey style guide's ESLint config in your project by optionally installing the dev dependencies and/or creating the ESLint configuration file (or a sample config file you can pick and choose from or use as inspiration).

[🌐 Spacey Homepage](https://github.com/Unit2795/spacey)

## Usage
```shell
npx spacey-install
```

## Files
A number of files will be created when you run the CLI:
- `eslint-config-spacey.js`
  - The shared ESLint configuration file for Spacey that contains all of its rules
- `eslint.config.example.js`
  - *What does this file do?*
    - Imports the Spacey ESLint shared configuration file and applies it to certain file types (JSX, TS, JS)
    - Sets up TypeScript parsing so you may benefit from type-aware linting
    - Sets the ECMAScript version it should lint for
    - Imports browser specific globals that ESLint should recognize as valid
  - Remove `.example` from the filename to use the configuration, delete this file, or fold its contents into your existing ESLint configuration file