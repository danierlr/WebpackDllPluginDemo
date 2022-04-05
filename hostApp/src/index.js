console.log('host app test')

const moduleA = require('libScope/moduleA')
// const moduleA = require('libScope/src/moduleA')
// import moduleB from 'moduleB'

const el = document.getElementById('hostAppContainer')

el.innerHTML = 'changedContent: ' + moduleA// + moduleB
