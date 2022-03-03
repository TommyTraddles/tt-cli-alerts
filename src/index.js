#! /usr/bin/env node

const pkg = require('../package.json')
const { cliWelcome } = require('./utils')


// header
cliWelcome({
  title: pkg.name,
  version: pkg.version,
  description: pkg.description,
})

// show data on screen
const output = `

  Hello, this is Tommy Traddles

  🤖 github: https://github.com/TommyTraddles

`

console.log(output)
