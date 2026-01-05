# @valcome/prettier-config

Valcome shared Prettier presets.

## Install

```bash
# npm
npm i -D prettier @valcome/prettier-config

# yarn
yarn add -D prettier @valcome/prettier-config
```

You can choose on of the following presets:

- `"@valcome/prettier-config"`
- `"@valcome/prettier-config/typescript"`
- `"@valcome/prettier-config/angular"`

Simply add one of the presets into `package.json`:

```json
{
  "prettier": "@valcome/prettier-config/angular"
}
```

or create a `.prettierrc.mjs` file:

```js
import angular from "@valcome/prettier-config/angular";

/** @type {import("prettier").Config} */
export default {
  ...angular,
  printWidth: 100,
};
```
