# ✨ Spacey 🛰️
![black hole banner image with planets](docs/banner.png)

> A style guide & coding standard for React TypeScript projects powered by ESLint that emphasizes meticulous organization, performance optimization, best practices, explicit clarity, and generous use of whitespace, taking one giant leap for code clarity and readability. 

🚧**ALPHA - UNDER ACTIVE DEVELOPMENT**🏗️

-----

## Example
Want to see more complex examples? Compare the [/original](example/original) and [/formatted](example/formatted) directories in the project root.

**BEFORE**
```typescript jsx
function SampleSimple({test, hello, world}:{test:string, hello:number, world: boolean}){
  const handleClick = () => {console.log(test, hello, world)};
  return<div>
    <button type='button' onClick={handleClick} className={'myclass'}>Click me</button>
    <p>Hello,World!</p>
  </div>
}

export default SampleSimple;;
```

**AFTER**
```typescript jsx
function SampleSimple( {
  test,
  hello,
  world
}: {
  test: string,
  hello: number,
  world: boolean
} ) {
  const handleClick = () => {
    console.log(
      test,
      hello,
      world
    );
  };

  return (
    <div>
      <button
        className="myclass"
        type="button"
        onClick={ handleClick }
      >
        Click me
      </button>

      <p>
        Hello,World!
      </p>
    </div>
  );
}

export default SampleSimple;

```

## Introduction
Spacey uses [ESLint](https://eslint.org/) and a collection of handy plugins to help you write clean, maintainable, and performant React & TypeScript code. The majority of the rules can apply automated fixes. It's a great idea to run them on save.

## Guiding Principles
1. **Readable Code**:
    1. Each section is clearly defined, predictably laid out, and visually separate, making it easier to follow even for someone unfamiliar with the project. 
   2. Modern JavaScript features, such as template literals and arrow functions, are preferred to keep the codebase concise where possible, without sacrificing explicitness. 
   3. Cyclomatic complexity and deep nesting limits reduce overly complex logic, encouraging cleaner and more testable code.
2. **Debuggable and Maintainable**: 
   1. Explicit patterns reduce ambiguities and potential runtime bugs. 
   2. Generous whitespace and structured formatting make debugging easier by isolating logic and visualizing code flow.
3. **Performant and Predictable**: 
   1. Avoid some easier to catch React & JS footguns and implicit expectations that can lead to performance bottlenecks or unexpected behavior. Even at the cost of a little extra verbosity.

## CLI
[Spacey Install CLI](./cli/README.md) helps you set up the Spacey style guide's ESLint config in your project by optionally installing the dev dependencies and/or creating the ESLint configuration file (or a sample config file you can pick and choose from or use as inspiration).

Try it out by running the following in your terminal:
```shell
npx spacey-install
```

### Why a CLI?
Spacey is meant to be something you take and run with, extending and modifying it as you see fit. So you are given full control over the dependencies and the shared config file

### Manual Installation
If you prefer to install the dependencies and create the config file manually, follow these steps:
1. Install the dependencies:
    ```shell
    npm install -D eslint @eslint/js @stylistic/eslint-plugin eslint-plugin-import-newlines eslint-plugin-newline-destructuring eslint-plugin-no-relative-import-paths eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh globals typescript-eslint
    ```
2. Copy your desired ESLint rules from the shared config file in this repo [eslint-config-spacey.js](./eslint-config-spacey.js) to your project's ESLint config file.




## Developer Guide
Want to try messing around with the code?
### Getting Started
1. Clone the repo
2. Run `pnpm install` in `/example` directory
3. Place some unformatted code in the `/original` directory
4. Run `pnpm format` to output the formatted code fixed by eslint to the `/formatted` directory

### Project Structure
- The example code in the `/original` directory contains the unmodified code that has not had `eslint --fix` applied yet. The fixed code will be copied to the `/formatted` directory after running `eslint --fix`.
- The eslint configuration file `eslint.config.js` in the root directory contains all of the rules and settings for the project.

## Inspiration
- [Airbnb Style Guide](https://airbnb.io/javascript/react/)
- [Prettier](https://prettier.io/)
- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [Vite React TypeScript ESLint Setup](https://vite.dev/)

## Troubleshooting
- If any of the plugins/dependencies that Spacey relies on receive an update that produces breaking changes you will need to do one of the following:
  - Submit an issue to the Spacey repo requesting an update
  - Update the broken eslint rule
  - Revert to a previous dependency versio
  

## TODO
- Continue to review rules and ensure they conform the general principles of the style guide
- Add a visual diffing tool to compare the original code with the formatted code

## Contributing
Feel free to open an issue or pull request if you have any suggestions, questions, debates, discussions, or improvements
