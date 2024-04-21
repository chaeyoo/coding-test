let arr = [10, 20, 30, 40, 50];

let tmpSum = 0;
let prefixSum = [0];

for (let x of arr) {
    tmpSum += x;
    prefixSum.push(tmpSum);
}

let result = prefixSum[4] - prefixSum[2-1];

console.log(result);