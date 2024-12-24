# ✨ Spacey 🛰️
![black hole banner image with planets](./assets/banner.png)

> A style guide & coding standard for React TypeScript projects that emphasizes meticulous organization, performance optimization, best practives, explicit clarity, and generous use of whitespace, taking one giant leap for code clarity and readability.

🚧**UNDER CONSTRUCTION**🏗️

-----

## Example
**BEFORE**
```typescript jsx
function SampleSimple({test, hello, world}:{test:string, hello:number, world: boolean}){
	const handleClick = () => {console.log("clicked!")};
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
	test, hello, world
}: {
	test: string,
	hello: number,
	world: boolean
} ) {
	const handleClick = () => {
		console.log( "clicked!" );
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
Spacey uses [ESLint](https://eslint.org/) and a collection of handy plugins to help you write clean, maintainable, and performant code React TypeScript code. The majority of the rules can apply automated fixes. It's a great idea to run them on save.

## Guiding Principles
1. **Readable Code**:
    1. Each section is clearly defined, predictably laid out, and visually separate, making it easier to follow even for someone unfamiliar with the project. 
   2. Modern JavaScript features, such as template literals and arrow functions, are preferred to keep the codebase concise where possible, without sacrificing explicitness. 
   3. Cyclomatic complexity and deep nesting limits reduce overly complex logic, encouraging cleaner and more testable code.
2. **Debuggable and Maintainable**: 
   1. Explicit patterns reduce ambiguities and potential runtime bugs. 
   2. Generous whitespace and structured formatting make debugging easier by isolating logic and visualizing code flow.
3. **Performant and Predictable**: 
   1. Avoid React footguns and implicit expectations that can lead to performance bottlenecks or unexpected behavior. Even at the cost of some verbosity. Code golf is not the goal.

## Developer Guide
Want to try messing around with the code?
### Getting Started
1. Clone the repo
2. Run `pnpm install` in repo root
3. Place some unformatted code in the `/original` directory
4. Run `pnpm format` to copy the formatted code fixed by eslint to the `/formatted` directory

### Project Structure
- The example code in the `/original` directory contains the unmodified code that has not had `eslint --fix` applied yet. The fixed code will be copied to the `/formatted` directory after running `eslint --fix`.
- The eslint configuration file `eslint.config.js` in the root directory contains all of the rules and settings for the project.

## Inspiration
- [Airbnb Style Guide](https://airbnb.io/javascript/react/)
- [Prettier](https://prettier.io/)
- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [Vite React TypeScript ESLint Setup](https://vite.dev/)

## TODO
- Continue to review rules and ensure they conform the general principles of the style guide
- Create an NPX utility for easily integrating this style guide into a project
- Add a visual diffing tool to compare the original code with the formatted code

## Contributing
Feel free to open an issue or pull request if you have any suggestions, questions, debates, discussions, or improvements