const test = "5\n" +
    "3 1 4 3 2";

let input = test.toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

arr.sort(function (a, b) {
    return a-b;
})

const sumArr = [];
let sum = 0;
for (let i=0; i<arr.length; i++) {
    sum += arr[i];
    sumArr.push(sum);
}

let result = 0;
for (let x of sumArr) {
    result += x;
}

console.log(result)


