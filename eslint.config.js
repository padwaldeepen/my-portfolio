import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'dist/**',
      'build/**',
      'eslint.config.js',
      'vite.config.ts',
      '*.config.js',
      '*.config.ts',
      '*.test.ts',
      '*.test.tsx',
    ],
  },
  // Node.js config files
  {
    files: ['eslint.config.js', 'vite.config.ts'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        __dirname: 'readonly',
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {},
  },
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setImmediate: 'readonly',
        fetch: 'readonly',
        MutationObserver: 'readonly',
        performance: 'readonly',
        FormData: 'readonly',
        AbortController: 'readonly',
        MessageChannel: 'readonly',
        __REACT_DEVTOOLS_GLOBAL_HOOK__: 'readonly',
        global: 'readonly',
        self: 'readonly',
        process: 'readonly',
        reportError: 'readonly',
        matchMedia: 'readonly',
        queueMicrotask: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: reactPlugin,
      'react-hooks': reactHooks,
      import: importPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      // Disabled at user request: allow unused variables (e.g., for prop types)
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/consistent-type-assertions': 'warn',
      '@typescript-eslint/no-useless-constructor': 'warn',
      // Add more custom rules as needed
      // Naming convention rules for components, variables, constants, hooks, etc.
      '@typescript-eslint/naming-convention': [
        'error',
        // React components: PascalCase
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        // Functions and variables: camelCase
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        // Boolean variables: is/has/should prefix
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase', 'UPPER_CASE', 'camelCase'],
          prefix: ['is', 'has', 'should'],
        },
        // Constants and enums: UPPER_SNAKE_CASE
        {
          selector: 'enum',
          format: ['UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
        // Custom hooks: use prefix
        {
          selector: 'function',
          modifiers: ['exported'],
          format: ['camelCase'],
          custom: {
            regex: '^use[A-Z].*',
            match: true,
          },
        },
      ],
    },
    settings: {
      react: { version: 'detect' },
      'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
      'import/resolver': { typescript: {} },
    },
  },
  prettier,
];
