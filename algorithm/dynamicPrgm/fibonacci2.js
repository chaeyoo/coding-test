// 바텀업 다이내믹 프로그래밍 (반복문)

let memo = new Array(100).fill(0);
memo[1] = 1;
memo[2] = 1;
let n = 99;

for (let i=3; i<=n; i++){
    memo[i] = memo[i - 1] + memo[i - 2];
}

console.log(memo[n])