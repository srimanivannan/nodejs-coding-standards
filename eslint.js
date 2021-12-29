module.exports = {
    plugins: ['prettier', 'filenames'],
    // Establish baseline rules using ESLint recommended settings.
    extends: ['eslint:recommended'],
    env: {
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    // Apply further rules customization based on our own coding standards.
    rules: {
        // ************* POSSIBLE ERRORS ************* //
        // disallow control flow statements in `finally` blocks
        'no-unsafe-finally': 'error',
        // require jsdoc comments to be accurate
        'valid-jsdoc': 'error',
        // hey we're writing Node.js so let's allow console
        'no-console': 'off',

        // ************* BEST PRACTICES ************* //
        // if you have a setter, you probably should have a getter, too
        'accessor-pairs': [
            'error',
            {
                setWithoutGet: true,
                getWithoutSet: false
            }
        ],
        // Array iterator builtins should have return statements.
        'array-callback-return': 'error',
        // Treat variables as block scoped
        'block-scoped-var': 'error',
        // require curly braces around everything
        curly: ['error', 'all'],
        // require dot's at the beginning of the next line, before a property name
        'dot-location': ['error', 'property'],
        // require the use of === and !==
        eqeqeq: ['error', 'always'],
        // require `hasOwnProperty()` calls in 'for-in' loops.
        'guard-for-in': 'error',
        // disallow alert(), prompt(), and confirm() in the browser
        'no-alert': 'error',
        // disallow arguments.caller and arguments.callee.  They are deprecated.
        'no-caller': 'error',
        // if an 'if' block contains a return, the `else` block becomes unnecessary.
        'no-else-return': 'error',
        // disallow empty functions unless there is a comment explaining why it's empty.
        'no-empty-function': 'error',
        // disallow null comparisons without a type checking operator
        'no-eq-null': 'error',
        // disallow eval()
        'no-eval': 'error',
        // disallow extraneous calls to bind() when manipulating `this`
        'no-extra-bind': 'error',
        // disallow unnecessary labels on loops
        'no-extra-label': 'error',
        // disallow floating decimal points
        'no-floating-decimal': 'error',
        // disallow type conversion with short notation
        'no-implicit-coercion': 'error',
        // disallow var and function statements in global scope for browsers
        'no-implicit-globals': 'error',
        // disallow I.E's implied eval() nonsense
        'no-implied-eval': 'error',
        // disallow using __iterator__
        'no-iterator': 'error',
        // disallow redundant blocks where they would create no scope
        'no-lone-blocks': 'error',
        // no functions in loops (unless it's ES6 and you're using let/const)
        'no-loop-func': 'error',
        // disallow multiple spaces in a row except to indent or declare variables
        'no-multi-spaces': [
            'error',
            {
                exceptions: {
                    VariableDeclarator: true,
                    Property: true,
                    ImportDeclaration: true
                }
            }
        ],
        // disallow using `new` without storing its value in a variable
        'no-new': 'error',
        // disallow using `new` with the builtin `Function` constructor
        'no-new-func': 'error',
        // disallow using `new` with primitive wrappers (String, Number, Boolean)
        'no-new-wrappers': 'error',
        // no octal escape sequences in strings.  Use unicode or hex instead.
        'no-octal-escape': 'error',
        // disallow __proto__ since it's been deprecated as of ES3.1
        'no-proto': 'error',
        // disallow assignment operators in return statements
        'no-return-assign': ['error', 'always'],
        // disallow `javascript:` URL's
        'no-script-url': 'error',
        // disallow pointless self comparisons
        'no-self-compare': 'error',
        // disallow the comma operator
        'no-sequences': 'error',
        // require `throw` to always use an `Error` object, as best as we can.
        'no-throw-literal': 'error',
        // disallow unused expressions
        'no-unused-expressions': 'error',
        // disallow unnecessary use of `.call()` and `.apply()`
        'no-useless-call': 'error',
        // disallow unnecessary string concatenation unless it's multiline
        'no-useless-concat': 'error',
        // disallow unnecessary escape sequences
        'no-useless-escape': 'error',
        // disallow use of the `void` operator
        'no-void': 'error',
        // disallow use of the `with` statements
        'no-with': 'error',
        // require the use of a radix parameter with parseInt
        radix: ['error', 'always'],
        // require wrapping parentheses around an IIFE
        'wrap-iife': ['error', 'outside'],
        // disallow yoda conditions
        yoda: ['error', 'never'],

        // ************* VARIABLES ************* //
        // disallow labels that share a name with a variable
        'no-label-var': 'error',
        // disallow identifiers from shadowing builtins
        'no-shadow-restricted-names': 'error',
        // disallow initializing to undefined since it's the default for variables with no value
        'no-undef-init': 'error',
        // variables must be used or removed, unless they're function arguments
        'no-unused-vars': ['error', { args: 'none' }],
        // disallow using a variable before it has been defined
        'no-use-before-define': 'error',

        // ************* NODE.JS AND COMMONJS ************* //
        // require callbacks outside of main execution scope to have a return (prevents double callbacks)
        'callback-return': ['error', ['callback', 'cb', 'next', 'done']],
        // force handling of callback errors (either do something or pass it along)
        'handle-callback-err': ['error', '^(err|error)$'],
        // requires and declarations should be seprate groups
        'no-mixed-requires': [
            'error',
            {
                grouping: false,
                allowCall: false
            }
        ],
        // disallow new for requires
        'no-new-require': 'error',
        // disallow string concatenation for path names where possible.  Use `path.join()` or `path.resolve()`
        'no-path-concat': 'error',

        // ************* STYLISTIC ISSUES ************* //
        // require spaces inside block statements
        'block-spacing': ['error', 'always'],
        // require braces to follow the one true brace style, except when on a single line
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        // require camel casing for variable names
        camelcase: ['error', { properties: 'always' }],
        // require consistent comma spacing
        'comma-spacing': ['error', { before: false, after: true }],
        // enforce a consistent style of commas at the end of the line (not the beginning)
        'comma-style': ['error', 'last'],
        // disallow spaces inside computed properties
        'computed-property-spacing': ['error', 'never'],
        // require `this` to be referenced as `self` when storing it
        'consistent-this': ['error', 'self'],
        // require newline at the end of a file (Atom will do this for you!)
        'eol-last': 'error',
        // require functions to always follow the expression style: const foo = function(){};
        'func-style': ['error', 'expression'],
        // turn off the indentation rule here because prettier handles this better
        indent: 'off',
        // prefer single quotes for JSX
        'jsx-quotes': ['error', 'prefer-double'],
        // enforce a consistent spacing style between keys and values
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'minimum' // allow more than one space for aligning values vertically.
            }
        ],
        // enforce a consistent spacing style around keywords
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        // require unix-style newlines
        'linebreak-style': ['error', 'unix'],
        // constructor functions should start with a capital letter
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: true,
                properties: true
            }
        ],
        // require parentheses when invoking a constructor with no arguments
        'new-parens': 'error',
        // don't use an array constructor
        'no-array-constructor': 'error',
        // don't allow lonely if statements inside an else block.  use else-if instead.
        'no-lonely-if': 'error',
        // disallow nested ternary operators.  confused much?
        'no-nested-ternary': 'error',
        // disallow Object constructors.  {} is cleaner.
        'no-new-object': 'error',
        // disallow spaces between a function name and its argument parentheses
        'no-spaced-func': 'error',
        // disallow whitespace trailing at the end of a line, unless it's a blank line, because it's annoying
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        // disallow ternary expressions that could be more easily expressed as simple expressions
        'no-unneeded-ternary': 'error',
        // disallow whitespace before properties, unless its a newlines
        'no-whitespace-before-property': 'error',
        // require spaces inside object curly braces
        'object-curly-spacing': ['error', 'always'],
        // require one let/const declaration per variable.
        'one-var': ['error', 'never'],
        // require one variable declaration per line.
        'one-var-declaration-per-line': ['error', 'always'],
        // if you quote (or don't quote) property names, just be consistent.
        'quote-props': ['error', 'as-needed'],
        // require quote marks to be single, unless using templates, or avoiding escape sequences
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        // semi-colons are required!  NO ASI!
        semi: ['error', 'always'],
        // enforce a standard semi-colon spacing style
        'semi-spacing': ['error', { before: false, after: true }],
        // enforce alphabetically sorted variable declarations
        'sort-vars': ['error', { ignoreCase: true }],
        // disallow a space before function arguments on function declaration
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'always',
                asyncArrow: 'always'
            }
        ],
        // disallow spaces inside parentheses
        'space-in-parens': ['error', 'never'],
        // require spaces around operators
        'space-infix-ops': 'error',
        // require space around word-based unary operators
        'space-unary-ops': ['error', { words: true, nonwords: false }],
        // require spaces at the beginning of comments
        'spaced-comment': ['error', 'always'],

        // ************* ES6 ************* //
        // allow braces for arrow bodies, even if it's a one-liner.
        'arrow-body-style': 'off',
        // don't require parens around arrow function parameters
        'arrow-parens': 'off',
        // require spaces around the arrow operator
        'arrow-spacing': ['error', { before: true, after: true }],
        // require generator stars to attach to the function keyword
        'generator-star-spacing': ['error', 'after'],
        // avoid the use of => as 'greater-than-or-equal-to' since it's also the arrow operator
        'no-confusing-arrow': 'error',
        // disallow duplicate import statements
        'no-duplicate-imports': 'error',
        // disallow computed keys when they serve no purpose
        'no-useless-computed-key': 'error',
        // disallow declaring constructors that are not necessary
        'no-useless-constructor': 'error',
        // disallow var -- use let or const instead.
        'no-var': 'error',
        // allow shorthand for object methods and properties
        'object-shorthand': 'off',
        // use arrow functions for callbacks, except when the callback is a named function
        'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
        // require const for variables that don't change after assignment
        'prefer-const': 'error',
        // enforce alphabetically sorted requires/imports
        'sort-imports': ['error', { ignoreCase: true }],
        // don't allow spaces inside template interpolation braces
        'template-curly-spacing': ['error', 'never'],

        // *********** prettier ************ //
        'prettier/prettier': [
            'error',
            { singleQuote: true, printWidth: 120, tabWidth: 4, trailingComma: 'none', arrowParens: 'avoid' }
        ],

        // *********** filenames ************ //
        // require JavaScript file names to be kebab-case
        'filenames/match-regex': ['error', '^[_]?([a-z][a-z0-9]*)(-[a-z0-9]+)*$', true],
        // require JavaScript exports to match the file name
        'filenames/match-exported': 'off',
        // don't allow index.js files.
        'filenames/no-index': 'off'
    }
};
