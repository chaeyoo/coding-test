const test = "4 11\n" +
    "802\n" +
    "743\n" +
    "457\n" +
    "539\n";

const input = test.toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = [];
for (let i=1; i<=n; i++) {
    arr.push(Number(input[i]));
}

let start = 0;
let end = Math.max(...arr);

let cnt = 0;
let result = 0;
while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    let cnt = 0;
    for (let x of arr) {
        cnt += Math.floor(x / mid);
    }

    if (cnt >= m) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(result)