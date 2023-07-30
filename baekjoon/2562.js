let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numArr = input.map(Number);
const maxNum = Math.max(...numArr);

const maxIdx = numArr.findIndex((el) => el === maxNum);

console.log(maxNum + '\n' + (maxIdx + 1))