import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';
import type { Linter } from 'eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import checkFile from 'eslint-plugin-check-file';
import reactDOM from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactX from 'eslint-plugin-react-x';
import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

const OFF = 'off' as const;
const WARN = 'warn' as const;
const ERROR = 'error' as const;

const GATE_RULES: Linter.RulesRecord = {
  complexity: [ERROR, 15],
  'max-depth': [ERROR, 5],
  'max-statements': [ERROR, 20],
  'max-lines': [ERROR, { max: 500, skipBlankLines: true, skipComments: true }],
  'max-lines-per-function': [ERROR, { max: 120, skipBlankLines: true, skipComments: true }],
  'max-params': [ERROR, 5],
  'max-classes-per-file': [ERROR, 1],
  'no-nested-ternary': ERROR,
  'sonarjs/cognitive-complexity': [ERROR, 15],
  '@typescript-eslint/no-explicit-any': ERROR
};

const LOCKED_GATE_RULE_NAMES = [
  'complexity',
  'max-depth',
  'max-statements',
  'max-lines',
  'max-lines-per-function',
  'max-params',
  'max-classes-per-file',
  'no-nested-ternary',
  'sonarjs/cognitive-complexity',
  '@typescript-eslint/no-explicit-any'
];

const GUARDRAIL_RULES: Linter.RulesRecord = {
  curly: [WARN, 'all'],
  eqeqeq: [WARN, 'always'],
  'no-magic-numbers': [
    WARN,
    { ignore: [0, 1, -1, 2], ignoreEnums: true, ignoreReadonlyClassProperties: true }
  ],
  'no-console': [WARN, { allow: ['warn', 'error'] }],

  'sonarjs/no-all-duplicated-branches': WARN,
  'sonarjs/no-identical-expressions': WARN,
  'sonarjs/no-gratuitous-expressions': WARN,
  'sonarjs/no-redundant-jump': WARN,
  'sonarjs/prefer-immediate-return': WARN,
  'sonarjs/no-ignored-return': WARN,
  'sonarjs/no-collection-size-mischeck': WARN,
  'sonarjs/no-nested-conditional': WARN
};

const TYPESCRIPT_RULES: Linter.RulesRecord = {
  'no-unused-vars': OFF,
  '@typescript-eslint/consistent-type-imports': [
    ERROR,
    { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
  ],
  '@typescript-eslint/no-import-type-side-effects': ERROR,
  '@typescript-eslint/naming-convention': [
    ERROR,
    { selector: 'typeLike', format: ['PascalCase'] },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      leadingUnderscore: 'allow'
    },
    { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' }
  ],
  '@typescript-eslint/no-misused-promises': [ERROR, { checksVoidReturn: { attributes: false } }],
  '@typescript-eslint/no-restricted-imports': [
    ERROR,
    {
      paths: [
        {
          name: 'react',
          importNames: ['default'],
          message:
            "Only named imports are allowed from 'react' (e.g. import { useState } from 'react')."
        }
      ]
    }
  ],
  '@typescript-eslint/no-unused-vars': [
    ERROR,
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
  ],
  '@typescript-eslint/prefer-readonly': ERROR,
  '@typescript-eslint/restrict-template-expressions': [
    ERROR,
    { allowNumber: true, allowBoolean: true }
  ],
  '@typescript-eslint/strict-boolean-expressions': [
    ERROR,
    { allowNullableBoolean: true, allowNullableNumber: true }
  ],
  '@typescript-eslint/switch-exhaustiveness-check': ERROR,

  '@typescript-eslint/array-type': OFF,
  '@typescript-eslint/consistent-type-definitions': OFF
};

export default defineConfig(
  {
    ignores: ['dist', 'node_modules', 'skills']
  },
  reactHooks.configs.flat['recommended-latest'],
  reactX.configs['recommended-type-checked'],
  reactDOM.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
    rules: TYPESCRIPT_RULES
  },
  eslintConfigPrettier,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: { sonarjs, 'eslint-comments': eslintComments },
    rules: {
      ...GATE_RULES,
      ...GUARDRAIL_RULES,
      'eslint-comments/no-restricted-disable': [ERROR, ...LOCKED_GATE_RULE_NAMES]
    }
  },
  {
    files: ['*.config.ts', 'eslint.config.ts'],
    rules: {
      'no-magic-numbers': OFF
    }
  },
  {
    files: ['**/__tests__/**/*.{ts,tsx}'],
    rules: {
      'no-magic-numbers': OFF,
      'max-lines-per-function': OFF,
      'max-lines': OFF,
      'sonarjs/no-identical-expressions': OFF,
      'sonarjs/no-gratuitous-expressions': OFF,
      '@typescript-eslint/unbound-method': OFF,
      '@typescript-eslint/require-await': OFF,
      '@typescript-eslint/only-throw-error': OFF
    }
  },
  {
    files: [
      'src/App.tsx',
      'src/pages/**/*.tsx',
      'src/layouts/**/*.tsx',
      'src/router/**/*.tsx',
      'src/features/*/components/**/*.tsx',
      'src/components/*.tsx'
    ],
    ignores: ['src/components/ui/**', '**/__tests__/**'],
    plugins: { 'check-file': checkFile },
    rules: {
      'check-file/filename-naming-convention': [ERROR, { '**/*.tsx': 'PASCAL_CASE' }]
    }
  },
  {
    files: ['src/**/*.ts'],
    ignores: ['src/**/*.d.ts', '**/__tests__/**'],
    plugins: { 'check-file': checkFile },
    rules: {
      'check-file/filename-naming-convention': [ERROR, { '**/*.ts': 'KEBAB_CASE' }]
    }
  },
  {
    files: ['src/**/*'],
    ignores: ['**/__tests__/**'],
    plugins: { 'check-file': checkFile },
    rules: {
      'check-file/folder-naming-convention': [
        ERROR,
        {
          'src/features/*/': 'KEBAB_CASE',
          'src/features/*/components/*/': 'PASCAL_CASE'
        }
      ]
    }
  },
  {
    files: ['src/**/*.test.{ts,tsx}'],
    plugins: { 'check-file': checkFile },
    rules: {
      'check-file/folder-match-with-fex': [
        ERROR,
        {
          '*.test.{ts,tsx}': '**/__tests__/'
        }
      ]
    }
  }
);
