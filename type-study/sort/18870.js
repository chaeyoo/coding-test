const test = `5
2 4 -10 4 -9`;

const input = test.toString().split('\n');

const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let uniqArr = [...new Set(arr)];
uniqArr.sort(function (a, b) {
    return a-b;
})

let myMap = new Map();
for (let i=0; i<uniqArr.length; i++) {
    myMap.set(uniqArr[i], i);
}

let answer  = "";
for (let x of arr) {
    answer += myMap.get(x) + " ";
}

console.log(answer);