const test = "4\n" +
    "120 110 140 150\n" +
    "485";
const input = test.toString().split("\n");

const arr = input[1].toString().split(' ').map(Number);
const m = Number(input[2]);

let start = 1;
let end = Math.max(...arr);
let result = 0;
while (start <= end) {
    let total = 0;
    let mid = parseInt((start + end)/2);
    for (let x of arr) {
        total += Math.min(mid, x);
    }
    if (total <= m) {
        result = mid
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(result)