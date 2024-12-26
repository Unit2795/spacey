import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigSpacey from "./cli/template/eslint-config-spacey.js";

export default tseslint.config(
	{
		extends: [ ...eslintConfigSpacey ],
		files: [ "formatted/**/*.{js,jsx,mjs,cjs,ts,tsx}", "eslint.config.js" ],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				project: [ "./formatted/tsconfig.json" ],
				tsconfigRootDir: import.meta.dirname,
			}
		},
	},
	// Disable type checking for the eslint file, which is not included in the tsconfig's "include" scope
	{
		files: [ "**/*.js" ],
		extends: [ tseslint.configs.disableTypeChecked ],
	},
);
