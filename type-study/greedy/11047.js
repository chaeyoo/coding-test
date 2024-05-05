const test = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`;

const input = test.toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);

console.log(n, ':', k)
let arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

console.log(arr)

let cnt = 0;
for (let i = n - 1; i >= 0; i--) {
    cnt += parseInt(k / arr[i]);
    k %= arr[i];
}

console.log(cnt);