const test = "8\n" +
    "1.1\n" +
    "0.7\n" +
    "1.3\n" +
    "0.9\n" +
    "1.4\n" +
    "0.8\n" +
    "0.7\n" +
    "1.4";
const input = test.toString().split('\n');
const n = Number(input[0]);

let dp = [];
for (let i=1; i<=n; i++) {
    dp.push(Number(input[i]));
}

for (let i=1; i<n; i++) {
    // console.log('=============');
    // console.log('<<<i가 ', i, '일 때>>>');
    // console.log('갈아끼워지기 전 dp:::', dp);
    // 현재 dp랑 이전에꺼 곱한 것이 작다면 dp는 그대로 있어서
    // 전에꺼 상관없이 거기서부터 시작한 것이 됨
    // 현재 숫자랑 그 전 숫자 곱한게 더 작아지면 무시됨
    // console.log(dp[i],'dp[i]<<>> dp[i] * dp[i-1]', dp[i] * dp[i-1]);

    dp[i] = Math.max(dp[i], dp[i] * dp[i-1]);
    // console.log('i가 ', i, '일 때 완성된 dp배열::', dp );
    // console.log('=============');
}
console.log(Math.max(...dp).toFixed(3));