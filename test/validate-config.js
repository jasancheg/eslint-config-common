'use strict'

const eslint = require('eslint')
const test = require('tape')

//
const code = `// test code
const foo = 1;

function double(p) {
  return p * 2;
}

double(foo);
`

test('load config in eslint to validate all rule syntax is correct', t => {
  const CLIEngine = eslint.CLIEngine

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: './index.js'
  })

  t.ok(cli.executeOnText(code).errorCount === 0)
  t.end()
})
