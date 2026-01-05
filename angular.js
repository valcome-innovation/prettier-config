import ts from './typescript.js';

/** @type {import("prettier").Config} */
const config = {
  ...ts,

  htmlWhitespaceSensitivity: 'ignore',

  plugins: [
    'prettier-plugin-organize-attributes',
    'prettier-plugin-tailwindcss'
  ],

  overrides: [
    {
      files: ['**/*.component.html', 'src/**/*.html'],
      options: { parser: 'angular' }
    }
  ],

  attributeGroups: [
    '^(id|name)$',
    '$ANGULAR_ELEMENT_REF',
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    '$ANGULAR_INPUT',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_OUTPUT',
    '$DEFAULT',
    '^class$',
    '$ANGULAR_ANIMATION_INPUT',
    '$ANGULAR_ANIMATION',
    '^i18n$'
  ]
};

export default config;
