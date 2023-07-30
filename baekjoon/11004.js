
let input = ['5, 2', '3 5 1 4 2']

const [n, k] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);
arr.sort(function (a, b) {
    return a-b;
});

console.log(arr[k-1]);