let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const scores = input[1].split(' ');
const max = Math.max(...scores);
const newScores = scores.map((v) => v / max * 100);

let sumOfNewScores = 0;
for (let score of newScores) {
    sumOfNewScores += score
}

console.log(sumOfNewScores / input[0])
