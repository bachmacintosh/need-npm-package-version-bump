const memberTypes = [
	// Fields

	"public-static-field",
	"protected-static-field",
	"private-static-field",

	"public-decorated-field",
	"protected-decorated-field",
	"private-decorated-field",

	"public-instance-field",
	"protected-instance-field",
	"private-instance-field",

	"public-abstract-field",
	"protected-abstract-field",
	"private-abstract-field",

	"public-field",
	"protected-field",
	"private-field",

	"static-field",
	"instance-field",
	"abstract-field",

	"decorated-field",

	"field",

	// Static initialization

	"static-initialization",

	// Constructors

	"public-constructor",
	"protected-constructor",
	"private-constructor",

	"constructor",

	// Methods

	"public-static-method",
	"protected-static-method",
	"private-static-method",

	"public-decorated-method",
	"protected-decorated-method",
	"private-decorated-method",

	"public-instance-method",
	"protected-instance-method",
	"private-instance-method",

	"public-abstract-method",
	"protected-abstract-method",
	"private-abstract-method",

	"public-method",
	"protected-method",
	"private-method",

	"static-method",
	"instance-method",
	"abstract-method",

	"decorated-method",

	"method",
];

const complexity = 20;
const maxDepth = 4;
const maxLines = 1000;
const maxLinesPerFunction = 1000;
const maxParams = 4;

module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "prettier"],
	root: true,
	parserOptions: { sourceType: "module" },
	ignorePatterns: ["src/lang/**", "prod/**", "tests/**"],
	rules: {
		// Possible Problems

		"array-callback-return": "error",
		"no-await-in-loop": "error",
		"no-constant-binary-expression": "error",
		"no-constructor-return": "error",
		"no-duplicate-imports": "error",
		"no-promise-executor-return": "error",
		"no-self-compare": "error",
		"no-template-curly-in-string": "error",
		"no-unmodified-loop-condition": "error",
		"no-unreachable-loop": "error",
		"no-unused-private-class-members": "error",
		"no-use-before-define": [
			"error",
			{
				functions: false,
				classes: true,
				variables: true,
				allowNamedExports: true,
			},
		],
		"require-atomic-updates": "error",

		// Suggestions

		"accessor-pairs": "error",
		"arrow-body-style": ["error", "always"],
		"block-scoped-var": "error",
		"capitalized-comments": ["error", "always", { ignoreConsecutiveComments: true }],
		"class-methods-use-this": "error",
		complexity: ["error", complexity],
		"consistent-return": "error",
		"consistent-this": ["error", "that"],
		curly: ["error", "all"],
		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-notation": "error",
		eqeqeq: ["error", "always"],
		"func-name-matching": "error",
		"func-style": ["error", "declaration", { allowArrowFunctions: true }],
		"grouped-accessor-pairs": ["error", "getBeforeSet"],
		"guard-for-in": "error",
		"id-denylist": ["error", "cb", "callback"],
		"id-length": ["error", { exceptions: ["t"], properties: "never" }],
		"init-declarations": ["error", "always"],
		"max-depth": ["error", maxDepth],
		"max-lines": ["error", maxLines],
		"max-lines-per-function": ["error", maxLinesPerFunction],
		"max-nested-callbacks": ["error"],
		"max-params": ["error", maxParams],
		"multiline-comment-style": ["error", "bare-block"],
		"new-cap": "error",
		"no-array-constructor": "error",
		"no-bitwise": "warn",
		"no-caller": "error",
		"no-confusing-arrow": ["error", { allowParens: false }],
		"no-console": ["error"],
		"no-continue": "error",
		"no-div-regex": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-implicit-coercion": "error",
		"no-implied-eval": "error",
		"no-implicit-globals": ["error", { lexicalBindings: true }],
		"no-inline-comments": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-magic-numbers": ["error", { ignoreDefaultValues: true, ignore: [0, 1, "0n", "1n"] }],
		"no-mixed-operators": "error",
		"no-multi-assign": "error",
		"no-multi-str": "error",
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
		"no-proto": "error",
		"no-return-assign": ["error", "always"],
		"no-return-await": "error",
		"no-script-url": "error",
		"no-sequences": ["error"],
		"no-shadow": "error",
		"no-throw-literal": "error",
		"no-undef-init": "error",
		"no-undefined": "error",
		"no-unneeded-ternary": "error",
		"no-unused-expressions": "error",
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"no-warning-comments": ["error", { terms: ["fixme", "xxx"] }],
		"object-shorthand": "error",
		"one-var": ["error", "never"],
		"operator-assignment": ["error", "always"],
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": ["error", { object: true, array: false }],
		"prefer-exponentiation-operator": "error",
		"prefer-named-capture-group": "error",
		"prefer-numeric-literals": "error",
		"prefer-object-has-own": "error",
		"prefer-object-spread": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		radix: "error",
		"require-await": "error",
		"require-unicode-regexp": "error",
		"sort-imports": "error",
		"spaced-comment": ["error", "always"],
		strict: "error",
		"symbol-description": "error",
		"vars-on-top": "error",
		yoda: "error",

		// Layout & Formatting

		"line-comment-position": "error",
		"lines-around-comment": [
			"error",
			{
				beforeBlockComment: true,
				afterBlockComment: true,
				beforeLineComment: true,
				afterLineComment: true,
				allowBlockStart: true,
				allowBlockEnd: true,
				allowObjectStart: true,
				allowObjectEnd: true,
				allowArrayStart: true,
				allowArrayEnd: true,
			},
		],
		"lines-between-class-members": "error",
		"max-len": [
			"error",
			{
				code: 120,
				tabWidth: 2,
				ignoreUrls: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		"max-statements-per-line": "error",
		"no-tabs": ["error", { allowIndentationTabs: true }],
	},
	overrides: [
		{
			files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: ["./tsconfig.json"],
			},
			plugins: ["@typescript-eslint"],
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"prettier",
			],
			rules: {
				// TypeScript Rules

				"@typescript-eslint/array-type": ["error", { default: "array" }],
				"@typescript-eslint/ban-tslint-comment": "error",
				"@typescript-eslint/class-literal-property-style": ["error", "fields"],
				"@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
				"@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
				"@typescript-eslint/consistent-type-assertions": [
					"error",
					{
						assertionStyle: "as",
						objectLiteralTypeAssertions: "never",
					},
				],
				"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
				"@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: true }],
				"@typescript-eslint/consistent-type-imports": [
					"error",
					{
						prefer: "type-imports",
						disallowTypeAnnotations: true,
					},
				],
				"@typescript-eslint/explicit-function-return-type": ["error"],
				"@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "explicit" }],
				"@typescript-eslint/explicit-module-boundary-types": "error",
				"@typescript-eslint/member-ordering": ["error", { default: memberTypes }],
				"@typescript-eslint/method-signature-style": ["error", "property"],
				"@typescript-eslint/naming-convention": [
					"error",
					{
						selector: "default",
						format: ["strictCamelCase"],
						leadingUnderscore: "forbid",
						trailingUnderscore: "forbid",
					},
					{
						selector: "variable",
						modifiers: ["const"],
						format: ["strictCamelCase", "UPPER_CASE"],
						leadingUnderscore: "forbid",
						trailingUnderscore: "forbid",
					},
					{
						selector: "memberLike",
						modifiers: ["private"],
						format: ["strictCamelCase"],
						leadingUnderscore: "require",
						trailingUnderscore: "forbid",
					},
					{
						selector: ["typeLike", "enumMember"],
						format: ["PascalCase"],
						leadingUnderscore: "forbid",
						trailingUnderscore: "forbid",
					},
					{
						selector: ["property"],
						format: ["camelCase", "snake_case", "PascalCase"],
					},
					{
						selector: ["property"],
						types: ["boolean", "string", "array", "number"],
						format: ["camelCase", "snake_case", "PascalCase"],
					},
					{
						selector: ["property"],
						types: ["function"],
						format: ["strictCamelCase"],
						leadingUnderscore: "forbid",
						trailingUnderscore: "forbid",
					},
					{
						selector: ["property"],
						modifiers: ["requiresQuotes"],
						format: null,
					},
					{
						selector: ["property"],
						modifiers: ["requiresQuotes"],
						types: ["boolean", "string", "array", "number"],
						format: null,
					},
					{
						selector: ["property"],
						modifiers: ["requiresQuotes"],
						types: ["function"],
						format: ["strictCamelCase"],
						leadingUnderscore: "forbid",
						trailingUnderscore: "forbid",
					},
				],
				"@typescript-eslint/no-base-to-string": "error",
				"@typescript-eslint/no-confusing-non-null-assertion": "error",
				"@typescript-eslint/no-confusing-void-expression": "error",
				"@typescript-eslint/no-dynamic-delete": "error",
				"@typescript-eslint/no-explicit-any": "error",
				"@typescript-eslint/no-extraneous-class": "error",
				"@typescript-eslint/no-invalid-void-type": "error",
				"@typescript-eslint/no-meaningless-void-operator": "error",
				"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
				"@typescript-eslint/no-non-null-assertion": "error",
				"@typescript-eslint/no-parameter-properties": "error",
				"@typescript-eslint/no-require-imports": "error",
				"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
				"@typescript-eslint/no-unnecessary-condition": "error",
				"@typescript-eslint/no-unnecessary-type-arguments": "error",
				"@typescript-eslint/no-unused-vars": "error",
				"@typescript-eslint/prefer-enum-initializers": "error",
				"@typescript-eslint/prefer-for-of": "error",
				"@typescript-eslint/prefer-function-type": "error",
				"@typescript-eslint/prefer-includes": "error",
				"@typescript-eslint/prefer-literal-enum-member": "error",
				"@typescript-eslint/prefer-nullish-coalescing": "error",
				"@typescript-eslint/prefer-optional-chain": "error",
				"@typescript-eslint/prefer-reduce-type-parameter": "error",
				"@typescript-eslint/prefer-regexp-exec": "error",
				"@typescript-eslint/prefer-return-this-type": "error",
				"@typescript-eslint/prefer-string-starts-ends-with": "error",
				"@typescript-eslint/promise-function-async": "error",
				"@typescript-eslint/require-array-sort-compare": "error",
				"@typescript-eslint/sort-type-union-intersection-members": "error",
				"@typescript-eslint/strict-boolean-expressions": "error",
				"@typescript-eslint/switch-exhaustiveness-check": "error",
				"@typescript-eslint/unified-signatures": "error",

				// TypeScript ESLint Extensions

				curly: ["error", "all"],
				"default-param-last": "off",
				"@typescript-eslint/default-param-last": "error",
				"dot-notation": "off",
				"@typescript-eslint/dot-notation": "error",
				"init-declarations": "off",
				"@typescript-eslint/init-declarations": ["error", "always"],
				"lines-around-comment": [
					"error",
					{
						beforeBlockComment: true,
						afterBlockComment: true,
						beforeLineComment: true,
						afterLineComment: true,
						allowBlockStart: true,
						allowBlockEnd: true,
						allowObjectStart: true,
						allowObjectEnd: true,
						allowArrayStart: true,
						allowArrayEnd: true,
					},
				],
				"lines-between-class-members": "off",
				"@typescript-eslint/lines-between-class-members": "error",
				"max-len": [
					"error",
					{
						code: 120,
						tabWidth: 2,
						ignoreUrls: true,
						ignoreTemplateLiterals: true,
						ignoreRegExpLiterals: true,
					},
				],
				"no-confusing-arrow": ["error", { allowParens: false }],
				"no-dupe-class-members": "off",
				"@typescript-eslint/no-dupe-class-members": "error",
				"no-duplicate-imports": "off",
				"@typescript-eslint/no-duplicate-imports": "error",
				"no-invalid-this": "off",
				"@typescript-eslint/no-invalid-this": "error",
				"no-loop-func": "off",
				"@typescript-eslint/no-loop-func": "error",
				"no-magic-numbers": "off",
				"@typescript-eslint/no-magic-numbers": [
					"error",
					{
						ignoreDefaultValues: true,
						ignoreEnums: true,
						ignoreNumericLiteralTypes: true,
						ignoreReadonlyClassProperties: true,
						ignoreTypeIndexes: true,
						ignore: [0, 1, "0n", "1n"],
					},
				],
				"no-mixed-operators": "error",
				"no-redeclare": "off",
				"@typescript-eslint/no-redeclare": "error",
				"no-shadow": "off",
				"@typescript-eslint/no-shadow": "error",
				"no-tabs": ["error", { allowIndentationTabs: true }],
				"no-throw-literal": "off",
				"@typescript-eslint/no-throw-literal": "error",
				"no-unused-expressions": "off",
				"@typescript-eslint/no-unused-expressions": "error",
				"no-use-before-define": "off",
				"@typescript-eslint/no-use-before-define": [
					"error",
					{
						functions: false,
						classes: true,
						variables: true,
						enums: true,
						typedefs: true,
						ignoreTypeReferences: true,
						allowNamedExports: true,
					},
				],
				"no-useless-constructor": "off",
				"@typescript-eslint/no-useless-constructor": "error",
				"return-await": "off",
				"@typescript-eslint/return-await": "error",
			},
		},
	],
	reportUnusedDisableDirectives: true,
};