// 탑다운 다이내믹 프로그래밍 (재귀함수)

let memo = new Array(100).fill(0);
function fibo(x) {
    if (x == 1 || x == 2) {
        return 1;
    }
    if (memo[x] != 0) {
        return memo[x];
    } else {
        memo[x] = fibo(x - 1) + fibo(x - 2);
        return memo[x];
    }
}

console.log(fibo(99))