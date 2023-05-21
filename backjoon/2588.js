// 2차 풀이 - 맞음
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const a = input[0];
const b = input[1];

console.log(parseInt(a) * parseInt(b[2]));
console.log(parseInt(a) * parseInt(b[1]));
console.log(parseInt(a) * parseInt(b[0]));
console.log(parseInt(a) * parseInt(b));


// 1차 풀이 - 틀림
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const a = input[0];
const b = input[1];

const first = parseInt(a) * parseInt(b[2]);
const second = parseInt(a) * parseInt(b[1]) * 10;
const third = parseInt(a) * parseInt(b[0]) * 100;

console.log(first);
console.log(second);
console.log(third);
console.log(first + second + third);