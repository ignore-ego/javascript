const { readFileSync } = require('fs');
const data = readFileSync('./file.txt', 'utf8');
const message = 'This is our node script!';
console.log(data + ' ' + message);
