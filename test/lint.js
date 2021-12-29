'use strict';
const test = require('ava');
const { CLIEngine } = require('eslint');
const lintConfig = require('../eslint');

const codingStandards = new CLIEngine({
    useEslintrc: false,
    baseConfig: lintConfig
});

test('Should be able to validate correct formatting.', t => {
    const code = `const aTest = '123';\nconsole.log(aTest);\n`;
    const {
        results: [result]
    } = codingStandards.executeOnText(code);

    t.is(result.errorCount, 0);
});

test(`Should enforce 'off' on 'no-console'.`, t => {
    const code = `console.log(3);\n`;
    const {
        results: [result]
    } = codingStandards.executeOnText(code);

    t.is(result.errorCount, 0);
});

test(`Should enforce 'error, always' on 'semi colon'.`, t => {
    const code = `console.log('semicolon is not required at the end')\n`;
    const {
        results: [result]
    } = codingStandards.executeOnText(code);

    t.not(result.errorCount, 0);
    t.truthy(result.messages.length > 0);
    t.truthy(result.messages[0].message.includes(';'));
});

test(`Should enforce 'error, single' on 'quotes'.`, t => {
    const code = `console.log("message is with in double quotes");\n`;
    const {
        results: [result]
    } = codingStandards.executeOnText(code);

    t.not(result.errorCount, 0);
    t.truthy(result.messages.length > 0);
    t.truthy(result.messages[0].message.includes('double'));
});

test(`Should enforce 'error, always' on check equals '==='.`, t => {
    const code = `const test = true;\nif (test == 'true') {\n    console.log(2);\n}\n`;
    const {
        results: [result]
    } = codingStandards.executeOnText(code);

    t.not(result.errorCount, 0);
    t.truthy(result.messages.length > 0);
    t.truthy(result.messages[0].message.includes('==='));
});

test(`Should enforce 'error' on 'use const instead of var'.`, t => {
    const code = `var test = true;\n`;
    const {
        results: [result]
    } = codingStandards.executeOnText(code);

    t.not(result.errorCount, 0);
    t.truthy(result.messages.length > 0);
    t.truthy(result.messages[0].message.includes('const'));
});

test(`Should enforce 'error' on 'camelcase'.`, t => {
    const code = `const snake_case_variable = true;\nconsole.log(snake_case_variable);\n`;
    const {
        results: [result]
    } = codingStandards.executeOnText(code);

    t.not(result.errorCount, 0);
    t.truthy(result.messages.length > 0);
    t.truthy(result.messages[0].message.includes('camel case'));
});
