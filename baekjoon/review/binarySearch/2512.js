const test = "4\n" +
    "120 110 140 150\n"+
"485";
const input = test.toString().split('\n');

const n = Number(input[0]);
const m = Number(input[2]);

const arr = input[1].split(' ').map(Number);
let result;
let start = 1;
let end = Math.max(...arr);
while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let total = 0;
    for (let x of arr) {
        total += Math.min(mid, x);
    }
    if (total <= m) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }

}

console.log(result)

