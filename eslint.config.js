import js from '@eslint/js';
import * as eslintPluginNode from 'eslint-plugin-node';
import globals from 'globals';

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  {
    ignores: ['node_modules/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      node: eslintPluginNode,
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
