const test = "8 2\n" +
    "1 2 3 4 5 6 7 8";

const input = test.toString().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let result = 0;
let eraseCount = 0;
let end = 0;
for (let start=0; start < n; start++) {
    while (end < n) {
        if (arr[end] % 2 == 0) end ++;
        else {
            if (eraseCount == k) break;
            eraseCount++;
            end++;
        }
    }

    //지울수 있을 만큼 지웠을 때 최대 길이일 때 end로 계사
    result = Math.max(result, end - start - eraseCount);
    if (arr[start] % 2 == 1) eraseCount--;
}

console.log(result);