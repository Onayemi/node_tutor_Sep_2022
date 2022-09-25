// GLOBALS - NO WINDOW !!!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - Info about current module (file)
// process      - Info about env where the program is being executed

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

console.log(__dirname)

const names = require('./4-names')
// const { john, peter} = require('./1-names')
const { sayHi, getDet } = require('./5-utils')
const data = require('./6-alternative-flavour')
// const sayHi = require('./utils')
// console.log(names)
console.log(data)
require('./7-mind-grenade')
sayHi('Susan')
sayHi(names.john)
// sayHi(john)
sayHi(names.peter)
// getDet(names.peter)
