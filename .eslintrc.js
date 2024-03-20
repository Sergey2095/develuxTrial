module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'],
    'require-jsdoc': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    'max-len': [
      'error',
      {
        ignorePattern: '^import [^,]+ from |^export | implements',
        code: 150,
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {shorthandFirst: true, noSortAlphabetically: true},
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'spaced-comment': ['error', 'always', {markers: ['/']}],
    'no-trailing-spaces': 'error',
    semi: ['error', 'always'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'jsx-quotes': ['error', 'prefer-double'],
    'arrow-parens': ['warn', 'always'],
    'no-console': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'React',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {order: 'asc', caseInsensitive: true},
      },
    ],
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {},
    },
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules', 'build'],
};
