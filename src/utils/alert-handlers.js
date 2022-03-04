const chalk = require('chalk')
// const logSymbols = require('log-symbols')

// ✅ check if unicode supported
const isUnicodeSupported = () => {
  if (process.platform !== 'win32') {
    return true
  }

  return (
    Boolean(process.env.CI) ||
    Boolean(process.env.WT_SESSION) || // Windows Terminal
    process.env.TERM_PROGRAM === 'vscode' ||
    process.env.TERM === 'xterm-256color' ||
    process.env.TERM === 'alacritty'
  )
}

// ✅ icons for each alert
const sym = () => {
  const main = {
    info: chalk.blue('ℹ'),
    success: chalk.green('✔'),
    warning: chalk.yellow('⚠'),
    error: chalk.red('✖'),
  }

  const fallback = {
    info: chalk.blue('i'),
    success: chalk.green('√'),
    warning: chalk.yellow('‼'),
    error: chalk.red('×'),
  }

  return isUnicodeSupported() ? main : fallback
}

const logSymbols = sym()

// ✅ alerts
const alertFactory = (type, style) => {
  return (msg) =>
    console.log(`${style(`${logSymbols[type]} ${type}:`)} ${msg}\n`)
}

const error = alertFactory(`error`, chalk.red.bold)
const warning = alertFactory(`warning`, chalk.yellow.bold)
const success = alertFactory(`success`, chalk.green.bold)
const info = alertFactory(`info`, chalk.blue.bold)

// ✅ exports
module.exports = {
  error,
  warning,
  success,
  info,
}
