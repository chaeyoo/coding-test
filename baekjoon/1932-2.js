const test = "5\n" + "7\n" + "3 8\n" + "8 1 0\n" + "2 7 4 4\n" + "4 5 2 6 5";

const input = test.toString().split('\n');
let n = Number(input[0]);

let dp = [];
for (let i = 0; i < n; i++) {
    dp[i] = input[i + 1].split(' ').map(Number);
}

for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        if (j == 0) {
            dp[i][j] = dp[i][j] + dp[i - 1][j]
        } else if (j == i) {
            dp[i][j] = dp[i][j] + dp[i - 1][j - 1]
        } else {
            dp[i][j] = Math.max(dp[i][j] + dp[i - 1][j], dp[i][j] + dp[i - 1][j - 1])
        }
    }
}

console.log(Math.max(...dp[n - 1]));