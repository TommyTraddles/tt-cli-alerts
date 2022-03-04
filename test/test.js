const alert = require('../src')

// default

console.log('\n\n> default alerts\n')

alert.success('This is a success message')
alert.error('This is an error message')
alert.warning('This is a warning message')
alert.info('This is an information message')

// alert overrides

console.log('\n\n> override default alerts\n')

alert.warning(
  'should return: ☺︎ icon 🔴 | color: yellow | bg: solid | title: WARNING',
  {
    icon: '☺︎',
  }
)

alert.warning(
  'should return: ⚠ icon | color: yellow | bg: solid | title: DONE 🔴',
  {
    title: 'done',
  }
)

alert.warning(
  'should return: ⚠ icon | color: #EC98F8 🔴 | bg: solid | title: WARNING',
  {
    color: '#EC98F8',
  }
)

alert.warning(
  'should return: ⚠ icon | color: yellow | bg: transparent 🔴 | title: WARNING',
  {
    transparent: true,
  }
)

alert.warning(
  'should return: ☺︎ icon 🔴 | color: #EC98F8 🔴 | bg: transparent 🔴 | title: DONE 🔴',
  {
    icon: '☺︎',
    title: 'done',
    color: '#EC98F8',
    transparent: true,
  }
)

// custom alerts

console.log('\n\n> custom alert | name\n')

const foo = alert.alertFactory('foo')
foo('should return: icon: ★ | color: white | bg: solid | title: FOO')

console.log('\n\n> custom alert | name | color \n')

const bar = alert.alertFactory('bar', '#32a852')
bar('should return: icon: ★ | color: #32a852 | bg: solid | title: BAR')

console.log('\n\n> custom alert | name | color | icon \n')

const baz = alert.alertFactory('baz', '#eb4034', '🤖')
baz('should return: icon: 🤖 | color: #eb4034 | bg: solid | title: BAZ')
