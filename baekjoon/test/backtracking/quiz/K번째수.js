const test = "3\n" +
    "7";
const input = test.toString().split('\n');
const n = Number(input[0]);
const k = Number(input[1]);

let start = 1;
let end = 10 ** 10; // 10^9;
let result;
while (start <= end) {
    let total = 0;
    let mid = Math.floor((start + end) / 2);
    for (let i = 1; i <= n; i++) {
        total += Math.min(parseInt(mid / i), n);
    }
    if (total >= k) {
        result = mid;
        end = mid - 1;
    } else {
        start = mid + 1
    }
}

console.log(result)