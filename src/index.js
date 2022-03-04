#! /usr/bin/env node

const pkg = require('../package.json')
const { cliWelcome, alert } = require('./utils')
const chalk = require('chalk')

// header
cliWelcome({
  title: pkg.name,
  version: pkg.version,
  description: pkg.description,
})

// show data on screen
const output = `

  Hello, this is Tommy Traddles

  🤖 github: ${chalk.dim('https://github.com/TommyTraddles')}

`

console.log(output)
alert.success('Thank you for downloading')
alert.error("Your task is being executed")
alert.warning('Ilegal move')
alert.info('something went wrong')

