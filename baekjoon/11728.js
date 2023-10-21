const test = "2 2\n" +
    "3 5\n" +
    "2 9";
const input = test.toString().split('\n');

const arr1 = input[1].split(' ').map(Number);
const arr2 = input[2].split(' ').map(Number);
const result = arr1.concat(arr2).sort(function (a, b) {
    return a-b;
})


console.log(result.join(' '));