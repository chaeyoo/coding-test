const test = "9\n" + "5 12 7 10 9 1 2 3 11\n" + "13";

const input = test.toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const x = Number(input[2]);

arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);
let start = 0;
let end = n-1;
let count = 0;

while(start < end) {
    while (end > 0 && arr[start] + arr[end] > x) {
        end--;
    }
    if (arr[start] + arr[end] == x) {
        count++;
        end--;
    }
    start += 1;
}
console.log(count);