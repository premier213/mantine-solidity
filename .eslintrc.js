module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  env: { es6: true },
  plugins: [
    'import',
    'security',
    '@typescript-eslint',
    'jsx-a11y',
    'testing-library',
    'jest-dom',
    'plugin:testing-library/react'
  ],
  extends: [
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:import/recommended',
    'plugin:security/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'prettier',
    'next/core-web-vitals'
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
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error'
  },
  overrides: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
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
