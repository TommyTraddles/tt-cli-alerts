#! /usr/bin/env node

const chalk = require('chalk')
const logSymbols = require('./utils/alert-icons')

const alertFactory =
  (defaultType, defaultColor, defaultIcon) =>
  (message, { icon, title = '', color, transparent } = {}) => {
    if (!message) throw new Error('Message cannot be empty')

    const alertIcon = icon
      ? icon
      : defaultIcon
      ? defaultIcon
      : logSymbols[defaultType.trim()]
      ? logSymbols[defaultType.trim()]
      : '★'

    const alertTitle = title.toUpperCase() || defaultType.toUpperCase()

    const alertColor = color
      ? chalk.hex(color)
      : defaultColor
      ? typeof defaultColor === 'string'
        ? chalk.hex(defaultColor)
        : defaultColor
      : chalk.white

    const alertStyle = transparent ? alertColor.bold : alertColor.bold.inverse

    return process.stdout.write(
      `\n ${alertColor(alertIcon)} ${alertStyle(
        ` ${alertTitle} `
      )} ${chalk.dim(message)}\n`
    )
  }

// customs alerts
const error = alertFactory('error', chalk.red)
const warning = alertFactory('warning', chalk.yellow)
const success = alertFactory('success', chalk.green)
const info = alertFactory('info', chalk.blue)

module.exports = {
  alertFactory,
  success,
  warning,
  error,
  info,
}
