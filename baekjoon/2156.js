const test = "6\n" +
    "6\n" +
    "10\n" +
    "13\n" +
    "9\n" +
    "8\n" +
    "1";
const input = test.toString().split('\n');
let dp = new Array(10000).fill(0);
let n = Number(input[0]);
let arr = [];
for (let i=1; i<=n; i++) {
    arr.push(Number(input[i]));
}
// console.log(arr)
dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0]+arr[1], arr[1]+arr[2], arr[0]+arr[2]);

for (let i=3; i<=n; i++) {
    // i번째 잔을 고르지 않은 경우
    dp[i] = dp[i-1];
    // i번째 잔을 고르고 i-1번째 잔을 고른 경우
    dp[i] = Math.max(dp[i], arr[i] + dp[i-2]);
    // i번째 잔을 고르고 i-1번째 잔을 고르지 않은 경우
    dp[i] = Math.max(dp[i], arr[i] + arr[i-1] + dp[i-3]);
}

console.log(dp[n-1]);