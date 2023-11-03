# eslint-config
An NPM package to globalize the eslint rules across an organization

## How to install?

In the project where you want to globalize the rules, install this npm package using the following command:

```bash
npm install @anshgoyalevil/eslint-config --save-dev
```

Then, create a new file named ```.eslintrc.js``` inside the root directory of your project.

Add the following boilerplate code to it:

```js
module.exports = {
  extends: ['@anshgoyalevil/eslint-config'],
  rules: {
    // add any additional or overridden rules here
  }
}
```

This package extends the following plugins:

```js
plugin:@typescript-eslint
plugin:sonarjs
plugin:security
plugin:react
plugin:jest
plugin:cypress
```

For typescript support, additional TypeScript Eslint Parser is included.

Feel free to contribute to this package.
