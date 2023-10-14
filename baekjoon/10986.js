const test = "5 3\n" +
    "1 2 3 1 2";
const input = test.toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let sumValue = 0;
let prefixSum = [0];

for (let a of arr) {
    sumValue += a;
    prefixSum.push(sumValue);
}
// 누적합
// console.log(prefixSum)

let processed = [];
for (let a of prefixSum) {
    processed.push(a % m);
}

// 누적합을 M으로 나눈 나머지
// console.log(processed);

let counter = {};
for (let i=0; i<=n; i++) {
    if (processed[i] in counter) {
        counter[processed[i]] += 1;
    } else {
        counter[processed[i]] = 1;
    }
}

// 나머지를 COUNTING
// console.log(counter);

let result = 0;
for (let i=0; i<m; i++) {
    // counter[i]개에서 2개를 고르는 조합
    if (i in counter) {
        result += parseInt(counter[i] * (counter[i] - 1)/2);
    }
}

console.log(result);