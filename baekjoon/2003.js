const test = "10 5\n" +
    "1 2 3 4 2 5 3 1 1 2"
const input = test.toString().split('\n');
let [n, m] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);

let count = 0;
let intervalSum = 0;
let end = 0;

for (let start=0; start < n; start++) {
    while(intervalSum < m && end < n) {
        intervalSum += arr[end];
        end++;
    }

    if (intervalSum == m) {
        count++;
    }

    intervalSum -= arr[start];
}

console.log(count);