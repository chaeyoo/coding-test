let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [a,b] = input[0].split(" ");

const reversedA = Number(a.split("").reverse().join(""));
const reversedB = Number(b.split("").reverse().join(""));

const ans = reversedA > reversedB ? reversedA : reversedB;

console.log(ans);