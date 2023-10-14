const test = "5\n" +
    "10 20 30 40 50\n" +
    "5\n" +
    "1 3\n" +
    "2 4\n" +
    "3 5\n" +
    "1 5\n" +
    "4 4";
const input = test.toString().split('\n');
const n = Number(input[0]);

const arr = input[1].split(' ').map(Number);
let sumValue = 0;
let prefixSum = [0];

for (let a of arr) {
    sumValue += a;
    prefixSum.push(sumValue);
}

let answer = '';
const m = Number(input[2]);
for (let i=0; i<m; i++) {
    let [left, right] = input[i+3].split(' ').map(Number);
    answer += (prefixSum[right] - prefixSum[left-1]) + '\n';
}

console.log(answer);