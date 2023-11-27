const test = "8 2\n" +
    "1 2 3 4 5 6 7 8";

const input = test.toString().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let end = 0;
let delCnt = 0;
let maxLength = 0;
for (let start=0; start<n; start++) {

    while(end < n) {
        if (arr[end] % 2 == 0) {
            end++;
        } else {
            if (delCnt == k) break;
            delCnt++;
            end++;
        }
    }
    maxLength = Math.max(maxLength, end - start - delCnt);
    if (arr[start] % 2 == 1) {
        delCnt --;
    }

}

console.log(maxLength)