const test = "4 11\n" +
    "802\n" +
    "743\n" +
    "457\n" +
    "539";
const input = test.toString().split("\n");
const n = Number(input[0].split(' ')[1]);
const k = Number(input[0].split(' ')[0]);
const arr = [];
for (let i=1; i<=k; i++) {
    arr.push(Number(input[i]));
}

let start = 0;
let end = Math.max(...arr);
let result = 0;
while(start <= end) {
    let mid = parseInt((start + end) / 2);
    let cnt = 0;
    for (let x of arr) {
        cnt += parseInt((x / mid));
    }
    if (cnt >= n) {
        result = mid; // 최대 길이를 찾아야 하므로 result에 기록
        start = mid + 1;
    } else {
        end = mid - 1
    }
}
console.log(result);

