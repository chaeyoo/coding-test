const test = "5 20\n" + 
"4 42 40 26 46";
const input = test.toString().split('\n');
const [n, need] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...arr);
let result;
while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    let total = 0;
    for (let x of arr) {
        total += Math.max(x - mid, 0)
    }
    if (total >= need) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid -1
    }
}

console.log(result);