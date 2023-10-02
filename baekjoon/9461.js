const test = "2\n" +
    "6\n" +
    "12";
const input = test.toString().split('\n');
let testCase = Number(input[0]);
let dp = new Array(101).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
let n = 0;
for (let i=1; i<=testCase; i++) {
    n = Number(input[i]);
    for (let x=4; x<=n; x++) {
        dp[x] = dp[x-3] + dp[x-2];
    }
    console.log(dp[n])
}