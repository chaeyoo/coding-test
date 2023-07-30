let input = ['3 2 1']

const arr = input[0].split(' ').map(Number);

arr.sort(function (a, b) {
    return a-b;
});

let result = "";
for (num of arr) {
    result += num + " "
}

console.log(result)
