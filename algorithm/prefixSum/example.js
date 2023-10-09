let n = 8;
let data = [3, 2, 4, 1, 2, 2, 1, 5];

let sumValue = 0;
let prefixSum = [0];
for (let i of data) {
    sumValue += i;
    prefixSum.push(sumValue);
}

let left = 4;
let right = 8;

console.log(prefixSum[right] - prefixSum[left-1]);