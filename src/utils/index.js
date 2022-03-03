const chalk = require('chalk')

const clearConsole = () => {
  const curentSystem =
    process.platform === 'win32' 
      ? '\x1B[2J\x1B[0f' 
      : '\x1B[2J\x1B[3J\x1B[H'

  process.stdout.write(curentSystem)
}

const cliWelcome = (options = {}) => {
  const defaultOptions = {
    title: 'ADD A HEADING',
    version: '',
    tagLine: '',
    description: '',
    bgColor: '#fadc00',
    color: '#000',
  }

  const ops = { ...defaultOptions, ...options }
  const clr = chalk.hex(ops.color).bold
  const bg = chalk.hex(ops.bgColor).inverse.bold

  clearConsole()
  const output = `${clr(bg(` ${ops.title} `))}  v${ops.version}  ${chalk.dim(ops.tagLine || ops.description)}`

  console.log(output)
}

module.exports = {
  cliWelcome,
}
