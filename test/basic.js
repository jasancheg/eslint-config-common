'use strict'

const baseConfig = require('../rules/base')
const test = require('tape')

const isObject = obj => typeof obj === 'object' && obj !== null

test('test basic properties of config', t => {
  t.ok(isObject(baseConfig.env))
  t.ok(isObject(baseConfig.globals))
  t.ok(isObject(baseConfig.rules))
  t.end()
})

