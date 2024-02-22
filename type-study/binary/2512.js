const test = "4\n" +
    "120 110 140 150\n" +
    "485";
const input = test.toString().split('\n');
let n = Number(input[0]);
let val = Number(input[2]);
let arr = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...arr);
let result = 0;
while(start <= end) {
    let total = 0;
    let mid = parseInt((start + end) / 2);
    for (let x of arr) {
        total += Math.min(mid, x);
    }
    if (total <= val) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(result);
