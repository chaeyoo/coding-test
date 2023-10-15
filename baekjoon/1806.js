// 투포인터 할때 다시 풀기
const test = "10 15\n" +
    "5 1 3 5 10 7 4 9 2 8";
const input = test.toString().split('\n');
const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let sumValue = 0;
let prefixSum = [0];

for (let d of arr) {
    sumValue += d;
    prefixSum.push(sumValue);
}

console.log(prefixSum);

