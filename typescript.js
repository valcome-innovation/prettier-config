import base from './base.js';

/** @type {import("prettier").Config} */
const config = {
  ...base,
  plugins: ['prettier-plugin-classnames']
};

export default config;
