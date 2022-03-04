const { cliWelcome } = require('./welcome-message')
const { error, warning, success, info } = require('./alert-handlers')

module.exports = {
  cliWelcome,
  //
  alert: {
    error,
    warning,
    success,
    info,
  }
}
