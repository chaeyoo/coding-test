const test = "4 7\n" +
    "20 15 10 17";
const input = test.toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...arr);
let result;
while (start <= end) {
    let total = 0;
    let mid = Math.floor((start + end) / 2);
    for (let x of arr) {
        total += Math.max(x - mid, 0);
    }
    if (total >= m) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1
    }
}

console.log(result);