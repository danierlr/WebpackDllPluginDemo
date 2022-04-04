console.log('host app test')

import moduleA from 'libApp/moduleA'
import moduleB from 'libApp/moduleB'

const el = document.getElementById('hostAppContainer')

el.innerHTML = 'changedContent: ' + moduleA + moduleB
