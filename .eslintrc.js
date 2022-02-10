module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  env: { es6: true },
  plugins: [
    'simple-import-sort',
    'import',
    'security',
    'write-good-comments',
    'json',
    '@typescript-eslint',
    'unicorn',
    'jsx-a11y',
    'promise'
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:security/recommended',
    'plugin:promise/recommended',
    'plugin:json/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'next/core-web-vitals',
    'next'
  ],
  rules: {
    'import/no-unresolved': 'off',
    'lines-around-comment': [
      'error',
      {
        beforeLineComment: true,
        beforeBlockComment: true,
        allowObjectStart: true,
        allowBlockStart: true
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/autocomplete-valid': [
      2,
      {
        inputComponents: ['Input', 'FormField']
      }
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['return']
      }
    ],
    'no-param-reassign': 'off',
    'react/display-name': 'off',
    'import/no-cycle': 'off',
    'prefer-rest-params': 'error',
    'no-shadow': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/object-curly-spacing': 'off',
    'no-console': 'warn',
    'write-good-comments/write-good-comments': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
      }
    }
  }
};
