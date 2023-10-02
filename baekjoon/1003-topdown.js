const test = "2\n" + "6\n" + "22";
let input = test.toString().split('\n');
let testCase = Number(input[0]);
let one = 0;
let zero = 0;
let target = 0;

// 시간초과
for (let i = 1; i <= testCase; i++) {
    fibo(input[i])
    console.log(zero + ' ' + one);
    one = 0;
    zero = 0;
}

function fibo(n) {
    if (n == 0) {
        zero++;
        return 0;
    } else if (n == 1) {
        one++;
        return 1;
    } else {
        return fibo(n-1) + fibo(n-2);
    }
}