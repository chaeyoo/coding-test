// const test = "5 3\n" +
//     "1 2 3 1 2";
const test = "10 5\n" +
    "10 4 7 8 6 9 13 12 21 24";
const input = test.toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let sumValue = 0;
let prefixSum = [0];

// 누적합
for (let a of arr) {
    sumValue += a;
    prefixSum.push(sumValue);
}

// 누적합을 M으로 나눈 나머지
let processed = [];
for (let a of prefixSum) {
    processed.push(a % m);
}

console.log(processed)
// 나머지 각각 개수를 COUNTING
let counter = {};
for (let i=0; i<=n; i++) {
    if (processed[i] in counter) {
        counter[processed[i]] += 1;
    } else {
        counter[processed[i]] = 1;
    }
}


console.log(counter);

let result = 0;
for (let i=0; i<m; i++) {
    // counter[i]개에서 2개를 고르는 조합
    if (i in counter) {
        console.log(parseInt(counter[i] * (counter[i] - 1)/2))
        result += parseInt(counter[i] * (counter[i] - 1)/2);
    }
}

console.log(result);
//
// ** 해설
// 조건) 문제 연속 구간의 합이 M으로 나누어 떨어지는 경우의 수 구하기
// 식: (prefixSum[end] - prefixSum[start-1]) % M == 0 인 개수
// => prefixSum[end] % M - prefixSum[start-1] % M = 0
// => prefixSum[end] % M = prefixSum[start-1] % M
//
// 풀이)
// M으로 나누었을 때 나올 수 있는 나머지 별로 카운트를 해줌
// 그 카운트 한 것 중에 2개를 뽑는 경우의 수를 모두 합해줌
// ex) { '0': 4, '1': 1, '2': 1, '4': 5 }
// 누적합들을 5로 나누었을 때 나머지가 0인 경우는 4가지
// 4개중 2개를 뽑기 => 6가지
// 누적합들을 5로 나누었을 때 나머지가 4인 경우는 5가지
// 5개중 2개를 뽑기 => 10가지
// 합은 16