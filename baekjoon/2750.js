let input = ['7', '5', '6','4','3','7','2','1'];

let n = Number(input[0]);
const arr = [];
for (let i=1; i<= n; i++) {
    arr.push(Number(input[i]));
}
arr.sort(function (a,b) {
    return a-b;
});

let result = "";
for (num of arr) {
    result += num + "\n"
}

console.log(result)