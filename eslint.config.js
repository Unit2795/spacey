import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import eslintNewlinePlugin from "eslint-plugin-import-newlines";
import reactPlugin from "eslint-plugin-react";
import noRelative from "eslint-plugin-no-relative-import-paths";

export default tseslint.config(
	{
		extends: [ js.configs.recommended, ...tseslint.configs.recommended ], // Extends recommended rules from both JS and TypeScript ESLint configs.
		files: [ "formatted/**/*.{js,jsx,mjs,cjs,ts,tsx}", "eslint.config.js" ], // Specifies the file types to lint.
		languageOptions: {
			ecmaVersion: 2020, // Sets the ECMAScript version to 2020 for parsing modern JavaScript features.
			globals: globals.browser, // Includes browser global variables.
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			"@stylistic": stylistic,
			"import-newlines": eslintNewlinePlugin,
			"react": reactPlugin,
			"no-relative-import-paths": noRelative
		},
		rules: {
			...reactHooks.configs.recommended.rules, // Inherits all recommended hook rules.
			"react-refresh/only-export-components": [ // Validate that your components can safely be updated with Fast Refresh. https://github.com/ArnaudBarre/eslint-plugin-react-refresh
				"warn",
				{
					allowConstantExport: true
				},
			],
			"no-relative-import-paths/no-relative-import-paths": [ // Do not allow relative import paths except from the same folder.
				"error",
				{
					"allowSameFolder": true
				}
			],
			"import-newlines/enforce": [ // Place imports on separate lines.
				"error",
				{
					"items": 1,
					"semi": true,
					forceSingleLine: false
				}
			],
			"@stylistic/quotes": [ "error", "double" ], // Enforce double quotes.
			"@stylistic/array-bracket-spacing": [ "error", "always" ], // Requires spaces inside array brackets.
			"@stylistic/block-spacing": [ "error", "always" ], // Requires spaces inside of curly brackets
			"@stylistic/brace-style": [ "error", "1tbs" ], // Enforces the one true brace style for block braces.
			"@stylistic/computed-property-spacing": [ "error", "always" ], // Requires spacing around computed property names.
			"@stylistic/dot-location": [ "error", "property" ], // Ensures dot notation is on the same line as the property.
			"@stylistic/eol-last": [ "error", "always" ], // Requires a newline at the end of the file.
			"@stylistic/func-call-spacing": [ "error", "never" ], // Disallows spaces between function names and the calling parenthesis.
			"@stylistic/function-paren-newline": [ "error", "multiline-arguments" ], // Requires newlines if function parameters are multiline.
			"@stylistic/function-call-argument-newline": [ "error", "always" ], // Requires newlines between function call arguments.
			"@stylistic/jsx-quotes": [ "error", "prefer-double" ], // Prefer double quotes for JSX attributes
			"@stylistic/no-extra-semi": [ "error" ], // Do not allow extra semicolons
			"@stylistic/type-annotation-spacing": [ // Require a space after the colon in type annotations
				"error",
				{
					before: false,
					after: true
				}
			],
			"@stylistic/keyword-spacing": [ // Requires consistent spacing before and after keywords (if, else, for, etc.)
				"error",
				{
					before: true,
					after: true
				}
			],
			"@stylistic/indent": [ "error", "tab", { // Enforce tabs for indentation
				"SwitchCase": 1 // Indent switch cases with	1 tab
			} ],
			"@stylistic/linebreak-style": [ "error", "unix" ], // Use Unix line endings "\n" (LF)
			"@stylistic/key-spacing": [ // Enforces spacing between keys and values in object literal properties.
				"error",
				{
					beforeColon: false,
					afterColon: true
				}
			],
			"@stylistic/rest-spread-spacing": [ "error", "never" ], // Disallows spaces between rest and spread operators and their expressions.
			"@stylistic/lines-between-class-members": [ "error", "always" ], // Requires an empty line between class members.
			"@stylistic/multiline-ternary": [ "error", "always-multiline" ], // Requires ternary expressions to be split across multiple lines.
			"@stylistic/space-infix-ops": [ "error", { "int32Hint": false } ], // Requires spaces around infix operators (+ - * / % ? etc.)
			"@stylistic/no-mixed-spaces-and-tabs": [ "error" ],
			"@stylistic/no-multi-spaces": [ "error" ], // Disallows multiple space characters
			"@stylistic/semi": [ "error", "always" ],
			"@stylistic/padding-line-between-statements": [
				"error",
				{
					blankLine: "always",
					prev: "*",
					next: "return"
				},
				{
					blankLine: "never",
					prev: "import",
					next: "import"
				},
				{
					blankLine: "always",
					prev: "import",
					next: [ "block-like", "const", "let", "var", "function", "return" ]
				}
			],
			"@stylistic/no-multiple-empty-lines": [
				"error",
				{
					max: 2,
					maxEOF: 1,
					maxBOF: 0
				}
			],
			"@stylistic/no-trailing-spaces": [ "error" ],
			"@stylistic/nonblock-statement-body-position": [ "error", "beside" ],
			"@stylistic/object-curly-spacing": [ "error", "always" ],
			"@stylistic/object-property-newline": [ "error" ],
			"@stylistic/object-curly-newline": [
				"error",
				"always"
			],
			"@stylistic/semi-style": [ "error", "last" ],
			"@stylistic/space-before-blocks": [ "error", "always" ],
			"@stylistic/space-before-function-paren": [ "error", "never" ],
			"@stylistic/space-in-parens": [ "error", "always" ],
			"@stylistic/switch-colon-spacing": [ "error" ],
			"@stylistic/template-curly-spacing": [ "error", "always" ],
			"@stylistic/template-tag-spacing": [ "error", "never" ],
			"@stylistic/semi-spacing": [
				"error",
				{
					before: false,
					after: true
				}
			],
			"@stylistic/newline-per-chained-call": [
				"error",
				{
					ignoreChainWithDepth: 2
				}
			],
			"sort-imports": [ // Sort imports alphabetically
				"error",
				{
					ignoreDeclarationSort: true
				}
			],
			"no-nested-ternary": [ "error" ],
			"prefer-template": [ "error" ],
			"prefer-const": [ "error" ],
			"no-var": [ "error" ],
			"no-lonely-if": [ "error" ],
			"no-implicit-coercion": [ "error" ],
			"no-useless-return": [ "error" ],
			"no-useless-escape": [ "error" ],
			"no-useless-catch": [ "error" ],
			"no-unneeded-ternary": [ "error" ],
			"no-regex-spaces": [ "error" ],
			"no-extra-boolean-cast": [ "error" ],
			"no-empty": [ "error" ],
			eqeqeq: [ "error" ],
			"valid-typeof": [ "error" ],
			complexity: [ "warn", 12 ],
			"dot-notation": [ "error" ],
			"no-global-assign": [ "error" ],
			"react/button-has-type": [ "error" ],
			"react/no-access-state-in-setstate": [ "error" ],
			"react/style-prop-object": [ "error" ],
			"react/void-dom-elements-no-children": [ "error" ],
			"react/self-closing-comp": [ "error" ],
			"react/no-unstable-nested-components": [ "error" ],
			"react/no-this-in-sfc": [ "error" ],
			"react/no-render-return-value": [ "error" ],
			"react/no-object-type-as-default-prop": [ "error" ],
			"react/no-namespace": [ "error" ],
			"react/no-find-dom-node": [ "error" ],
			"react/no-deprecated": [ "error" ],
			"react/no-danger-with-children": [ "error" ],
			"react/no-danger": [ "warn" ],
			"react/no-children-prop": [ "error" ],
			"react/no-array-index-key": [ "error" ],
			"react/jsx-wrap-multilines": [ "error", {
				return: "parens-new-line",
				declaration: "parens-new-line",
				assignment: "parens-new-line",
				arrow: "parens-new-line",
				condition: "parens-new-line",
				logical: "parens-new-line",
				prop: "parens-new-line"
			} ],
			"react/jsx-uses-react": [ "error" ],
			"react/jsx-sort-props": [ "error", {
				callbacksLast: true,
				ignoreCase: true,
			} ],
			"react/jsx-pascal-case": [ "error" ],
			"react/jsx-indent": [ "error", "tab", {
				indentLogicalExpressions: true
			} ],
			"react/jsx-one-expression-per-line": [ "error" ],
			"react/jsx-no-useless-fragment": [ "error", {
				allowExpressions: true
			} ],
			"react/jsx-no-undef": [ "error" ],
			"react/jsx-no-target-blank": [ "error", {
				enforceDynamicLinks: "always",
				forms: true,
				warnOnSpreadAttributes: true
			} ],
			"react/jsx-no-leaked-render": [ "error" ],
			"react/jsx-no-constructed-context-values": [ "error" ],
			"react/jsx-newline": [ "error" ],
			"react/jsx-first-prop-new-line": [ "error", "multiline" ],
			"react/jsx-max-props-per-line": [ "error" ],
			"react/jsx-max-depth": [ "warn", {
				"max": 4
			} ],
			"react/jsx-key": [ "error", {
				warnOnDuplicates: true,
				checkKeyMustBeforeSpread: true,
				checkFragmentShorthand: true
			} ],
			"react/jsx-fragments": [ "error", "syntax" ],
			"react/jsx-equals-spacing": [ "error", "never" ],
			"react/jsx-curly-spacing": [ "error", {
				"when": "always"
			} ],
			"react/jsx-curly-newline": [ "error", {
				multiline: "require",
				singleline: "consistent"
			} ],
			"react/jsx-curly-brace-presence": [ "error", {
				props: "never",
				children: "never",
				propElementValues: "always"
			} ],
			"react/jsx-closing-tag-location": [ "error" ],
			"react/jsx-closing-bracket-location": [ "error", {
				selfClosing: "line-aligned",
				nonEmpty: "line-aligned"
			} ],
			"react/jsx-boolean-value": [ "error", "never" ],
			"react/hook-use-state": [ "error", {
				"allowDestructuredState": true
			} ],
			"react/iframe-missing-sandbox": [ "error" ]
		},
	},
);
