let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // \n은 관례적으로 붙여줌, 줄마다 자름

let line = input[0].split(' '); // 첫번째 줄을 공백 기준으로 나눔
let a = parseInt(line[0]);
let b = parseInt(line[1]);

console.log(a + b)