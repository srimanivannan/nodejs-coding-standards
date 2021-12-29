# nodejs-coding-standards
Commands specfic to this module
```
// To Se list of comands in scripts section
npm run or npm run-script

// To build
npm install

// This will automatically reformat the staged code.
// do some ugly format change by purpose and then do `git add -A`
// Then run below command

npm run format

npm run test or npm test
```

This project module executes rules of linter and formatter configuration files that you have in your project.  
Currently, it supports [ESLint](http://eslint.org/) and uses [prettier](http://prettier.io/).  
To use this project, Add the following to your `package.json` (using `*` makes sure you always get the latest version when you `npm install`):

```json
{
    "devDependencies": {
        "@mirnis/nodejs-coding-standards": "*",
    },
    "eslintConfig": {
        "extends": "./node_modules/@mirnis/nodejs-coding-standards/eslint.js"
    }
}
```

## Automatically Run ESLint and Prettier Pre-Commit

If you want to run ESLint and prettier in a pre-commit hook, you should modify your `package.json` to include the following:

```json
{
    "scripts": {
        "lint": "lint-staged"
    },
    "pre-commit": ["lint"],
    "lint-staged": {
        "*.js": [
            "eslint --fix",
            "git add"
        ]
    },
    "devDependencies": {
        "@@mirnis/nodejs-coding-standards": "*",
        "lint-staged": "^12.x.x",
        "pre-commit": "^1.x.x"
    },
    "eslintConfig": {
        "extends": "./node_modules/@mirnis/nodejs-coding-standards/eslint.js"
    }
}
```

You can easily add more npm scripts to the `pre-commit` setting, too.  For example, if you want it to run the linter and also unit tests, just add `"test"` to the array:

```json
{
    "pre-commit": ["lint", "test"]
}
```
