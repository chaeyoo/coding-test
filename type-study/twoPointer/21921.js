const test = "7 5\n" +
    "1 1 1 1 1 5 1";
const input = test.toString().split('\n');
const [n, x] = input[0].split(' ').map(Number);

const arr = [0, ...input[1].split(' ').map(Number)];
let sum = 0;
for (let i=1; i<=x; i++) {
    sum += arr[i];
}

let maxSum = sum;
let count = 1;

let start = 1;
let end = x;

while(end <= n) {
    start ++;
    end ++;
    sum = sum + arr[end] - arr[start - 1];
    if (maxSum < sum) {
        maxSum = sum;
        count = 1;
    } else if (maxSum == sum){
        count++;
    }
}

if (maxSum === 0) {
    console.log('SAD');
} else {
    console.log(maxSum);
    console.log(count);
}