// 채형풀이 정답판정

const test = "17 4"
const input = test.toString().split('\n');

const [n, k] = input[0].split(' ').map(Number);
if (n >= k * (k + 1) / 2) {
    if (k % 2 === 0) {
        if (n % k === k / 2) {
            console.log(k - 1);
        } else {
            console.log(k);
        }
    } else {
        if (n % k === 0) {
            console.log(k - 1);
        } else {
            console.log(k);
        }
    }
} else {
    console.log(-1);
}

