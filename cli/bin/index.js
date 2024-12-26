#!/usr/bin/env node

import {
	Command
} from "commander";
import inquirer from "inquirer";
import chalk from "chalk";
import {
	promises as fs
} from "fs";
import path from "path";
import {
	execa
} from "execa";
import {
	fileURLToPath
} from "url";
import {
	dirname
} from "path";

const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );
const devDependencies = [
	"eslint",
	"@eslint/js",
	"@stylistic/eslint-plugin",
	"eslint-plugin-import-newlines",
	"eslint-plugin-newline-destructuring",
	"eslint-plugin-no-relative-import-paths",
	"eslint-plugin-react",
	"eslint-plugin-react-hooks",
	"eslint-plugin-react-refresh",
	"globals",
	"typescript-eslint"
];


async function detectPackageManager() {
	try {
		// Check for lock files
		const files = await fs.readdir(process.cwd());
		if (files.includes('pnpm-lock.yaml')) return 'pnpm';
		if (files.includes('yarn.lock')) return 'yarn';
		if (files.includes('package-lock.json')) return 'npm';

		// If no lock file is found, prompt the user
		const { packageManager } = await inquirer.prompt([
			{
				type: 'list',
				name: 'packageManager',
				message: 'No lock file detected. Which package manager would you like to use?',
				choices: [
					{ name: 'npm', value: 'npm' },
					{ name: 'yarn', value: 'yarn' },
					{ name: 'pnpm', value: 'pnpm' }
				],
				default: 'npm'
			}
		]);

		return packageManager;
	} catch (error) {
		console.error(chalk.red('Error detecting package manager:'), error.message);
		process.exit(1);
	}
}

async function installDependencies() {
	console.log(chalk.blue(`Installing development dependencies...`));

	try {
		const packageManager = await detectPackageManager();
		const installCommand = packageManager === 'yarn' ? 'add' : 'install';

		await execa(
			packageManager,
			[ installCommand, "-D", ...devDependencies ],
			{
				stdio: 'inherit',
				preferLocal: true
			}
		);
	} catch ( error ) {
		console.error( chalk.yellow( "Failed to install dev dependencies!" ) );
		console.error( chalk.red( error.message ) );
		process.exit( 1 );
	}
}

async function copyConfigFile( templateName, targetFileName ) {
	const templatePath = path.join(
		__dirname,
		"..",
		"template",
		templateName
	);
	const targetPath = path.join(
		process.cwd(),
		targetFileName
	);

	try {
		// Check if template exists
		await fs.access( templatePath );

		// Check if target file exists
		const exists = await fs.access( targetPath )
			.then( () => true )
			.catch( () => false );

		// If file exists, use the .spacey variant so the user may reconcile the differences manually
		const finalTargetPath = exists
			? path.join(
				process.cwd(),
				targetFileName.replace(
					".js",
					".spacey.js"
				)
			)
			: targetPath;

		// Copy the file
		await fs.copyFile(
			templatePath,
			finalTargetPath
		);

		if ( exists ) {
			console.log( chalk.yellow( `Original ${ targetFileName } exists, created ${ path.basename( finalTargetPath ) } instead` ) );
		} else {
			console.log( chalk.green( `Successfully created ${ path.basename( finalTargetPath ) }` ) );
		}
	} catch ( error ) {
		console.error(
			chalk.red( "Error copying config file:" ),
			error.message
		);
		process.exit( 1 );
	}
}

// Ensure the current directory has a package.json file
async function validateProjectDirectory() {
	try {
		await fs.access(path.join(process.cwd(), 'package.json'));
	} catch (error) {
		console.error(chalk.red('Error: No package.json found in current directory.'));
		console.error(chalk.yellow('Please run this command in a directory with a package.json file.'));
		process.exit(1);
	}
}

async function main() {
	await validateProjectDirectory();
	console.log( chalk.blue( "🚀 Setting up Spacey in your project..." ) );

	const answers = await inquirer.prompt( [ {
		type: "confirm",
		name: "installDeps",
		message: "Do you want to install development dependencies?",
		default: true
	} ] );

	if ( answers.installDeps ) {
		await installDependencies();
	} else {
		console.log( chalk.yellow( "Skipping dependency installation..." ) );
		console.log( chalk.yellow( "You can install them later by running the following:" ) );
		console.log( chalk.bold.blue( `npm install -D ${ devDependencies.join( " " ) }` ) );
	}

	// Copy eslint config file
	await copyConfigFile(
		"eslint.config.js",
		"eslint.config.js"
	);

	console.log( chalk.blue('Modify the eslint config file as necessary to ensure your files are tracked properly. Edit the "files" option to ensure the proper files are tracked. Edit the "languageOptions.parserOptions.project" option to ensure your proper tsconfig files are tracked.') );

	console.log( chalk.green( "✨ All done! Your project is ready to go!" ) );
}

const program = new Command();

program
	.action( main )
	.parse( process.argv );
