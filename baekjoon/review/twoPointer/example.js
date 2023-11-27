let n = 8;
let m = 5;
let data = [3, 2, 4, 1, 2, 2, 1, 5];

let count = 0;
let intervalSum = 0;

// 합이 5가 되는 연속되는 수열의 개수를 구하기
let end = 0;
for (let start=0; start<n; start++) {
    // intervalSum이 작을 때 까지만 더해줘야 함!!
    while (intervalSum <m && end < n) {
        intervalSum += data[end];
        end ++;
    }
    if (intervalSum == m) {
        count++;
    }
    intervalSum -= data[start];
}

console.log(count);
