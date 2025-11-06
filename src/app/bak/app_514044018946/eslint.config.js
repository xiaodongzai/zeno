// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist/'],
  },

  js.configs.recommended,          
  ...tseslint.configs.recommended,     
  pluginReact.configs.flat.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // 可 fix 的常见规则
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],

      // 推荐规则
      ...pluginReactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      // TypeScript 特有规则
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
];
