const test = "9\n" +
    "2\n" +
    "4\n" +
    "7";
const input = test.toString().split('\n');
let n = Number(input[0]);
let m = Number(input[1]);

let dp = new Array(41).fill(0);
dp[0] = 1;
dp[1] = 1;

function fibo(n){
    if(dp[n] != 0) {
        return dp[n];
    } else {
        dp[n] = fibo(n-1) + fibo(n-2);
        return dp[n];
    }
}

let arr = [];
let start = 0;
for (let i=0; i<m; i++) {
    let end = Number(input[i+2]);
    arr.push(end -1 -start);
    start = end;
}

arr.push(n - start);

// console.log(arr)
let res = 1;
for (let x of arr) {
    res *= fibo(x);
}

console.log(res);