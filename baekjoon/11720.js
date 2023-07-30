let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const strArr = [...input[1]]
console.log(strArr.reduce((a,b) => Number(a) + Number(b)))