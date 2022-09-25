const path = require('path')
console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
// const filePath2 = path.join('/content/subfolder/test.txt')
console.log(filePath)

const base = path.basename(filePath);
console.log(`Third ${base}`)

const absolute = path.resolve(__dirname, '/content', 'subfolder', 'test.txt')
console.log(`Final Result ${absolute}`)