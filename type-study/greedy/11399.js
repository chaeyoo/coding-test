const test = `5
3 1 4 3 2`;

const input = test.toString().split('\n');

const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

arr.sort(function (a, b) {
    return a-b;
})

let anwer = 0;
let sum = 0;
for (let i=0; i<n; i++) {
    sum += arr[i];
    anwer += sum;
}

console.log(anwer)