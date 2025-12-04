import js from '@eslint/js';
import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default [
	js.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-explicit-any': 'warn',
		},
	},
	{
		files: ['scripts/**/*.{js,ts}'],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: ['.astro'],
			},
			globals: {
				...globals.browser,
			},
		},
		plugins: {
			astro: astroPlugin,
		},
		rules: {
			...astroPlugin.configs.recommended.rules,
		},
	},
	{
		ignores: ['dist/**', '.astro/**', 'node_modules/**'],
	},
];

