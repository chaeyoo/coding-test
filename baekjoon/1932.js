const test = "5\n" +
    "7\n" +
    "3 8\n" +
    "8 1 0\n" +
    "2 7 4 4\n" +
    "4 5 2 6 5";

const input = test.toString().split('\n');
let n = Number(input[0]);

let dp = [];
for (let i=0; i<n; i++) {
    dp[i] = input[i+1].split(' ').map(Number);
}

for (let i=1; i<n; i++) {
    for (let j=0; j<=i; j++) {
        let upLeft = 0;
        // j인덱스가 0이면 왼쪽 위는 존재하지 않음 (위만 존재)
        if (j != 0) upLeft = dp[i-1][j-1];
        let up = 0;
        // j인덱스가 i이면 윗줄이 존재하지 않음 (왼쪽 위만 존재)
        if (j != i) up = dp[i-1][j];
        dp[i][j] = dp[i][j] + Math.max(up, upLeft);
        // console.log('i:::', i, '::j:::', j, '::>>>', dp[i][j]);
        // console.log('up::::', up, 'upLeft:::', upLeft);
        // console.log('________________')
    }
}

console.log(Math.max(...dp[n-1]));