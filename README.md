eslint-config-styleguide
----------
# eslint config for common javascript coding style

Usual ESLint config for common JavaScript coding style. An eslint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs).


## How to use

[1]. Install config with eslint and eslint plugins

```sh
npm install --save-dev eslint-config-styleguide eslint@^3.13.1 eslint-plugin-promise eslint-plugin-fetch eslint-plugin-import eslint-plugin-no-require-lodash eslint-plugin-prefer-spread eslint-plugin-react eslint-plugin-more
```


[2]. Create own `.eslintrc` and add this to your file:

```json
{
    "extends": "styleguide"
}
```


Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.


*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

[3]. Overwrite or extend rules (optional):

```json
{
    "extends": "styleguide",
    "rules": {
      "indent": [2, 4, { "SwitchCase": 1 }],
      "react/jsx-indent": [2, 4],
      "func-style": [2, "declaration", { "allowArrowFunctions": true }],
      ...
    }
}
```


## Run test

[1]. Run your task on a command shell:

```sh
eslint folder-name --ext js, jsx
```

or use `--fix` to fix global errors

```sh
eslint client server --ext js, jsx --fix
```

[2]. Add your own npm scripts to your package.json:

```json
{
  "scripts": {
    "start": "node service",
    "test": "npm run lint",
    "lint": "eslint client server --ext js,jsx; exit 0",
    "lint:fix": "eslint client server --ext js,jsx --fix; exit 0"
  },
}
```


## Learn more

The rules of the common coding style are based and/or inspired by:

 * [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
 * [Google's JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
 * [Felix's Node.js Style Guide](https://github.com/felixge/node-style-guide)
 * [Feross's JavaScript Standard Style](http://standardjs.com)


## LICENSE

[MIT](https://github.com/jasancheg/eslint-config-styleguide/blob/master/LICENSE) (c) 2017, Jose Antonio Sanchez.
