const test = "10 5\n" +
    "10 4 7 8 6 9 13 12 21 24";
let input = test.toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let prefixSum = [0];
let tmpSum = 0;

for (let x of arr) {
    tmpSum += x;
    prefixSum.push(tmpSum);
}

let processed = [];

// i를 m으로 나눈 나머지가 아니라 prefixSum[i]를 m으로 나눈 나머지
// 0번째 인덱스도 포함
for (let i = 0; i <= n; i++) {
    processed.push(prefixSum[i] % m);
    // processed.push(i % m);
}

console.log(processed);

let counter = {};
// 0번째 인덱스도 포함
for (let i = 0; i <= n; i++) {
    if (processed[i] in counter) {
        counter[processed[i]] += 1;
    } else {
        counter[processed[i]] = 1;
    }
}
console.log(counter);

let result = 0;
for (let i = 0; i < m; i++) {
    // for 돌면서 counter 안에 있는 것만 체크
    if (i in counter) {
        // parseInt
        result += parseInt(counter[i] * (counter[i] - 1) / 2);
    }
    // result += parseInt(counter[i] * (counter[i] - 1)/2);
};

console.log(result);