// setTimeout(() =>{
//     console.log('hello world')
// }, 1000) 

// setInterval(() =>{
//     console.log('hello world')
// }, 1000)

const getDet = (name) => {
    setInterval(() =>{
        console.log(`Hello there ${name}`);
        // console.log('hello world')
    }, 1000)
}
const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

module.exports = { getDet, sayHi }
// module.exports = sayHi