const fs = require('fs')

// const book = {
//     title:'Why we sleep',
//     author: 'Ryan Reynolds'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Jonno'
data.age = 1000000002020

const newJSON = JSON.stringify(data)
console.log(newJSON)
fs.writeFileSync('1-json.json', newJSON)