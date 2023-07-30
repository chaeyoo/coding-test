
const input = ['5', '2 4 -10 4 -9']

let numArr = input[1].split(' ').map(Number);

const set = new Set(numArr);

const uniqueArr = [...set];
uniqueArr.sort(function(a, b) {
    return a-b;
});

let myMap = new Map();
for (let i=0; i<uniqueArr.length; i++) {
    myMap.set(uniqueArr[i], i)
}

let result = "";
for (x of numArr) {
    result += myMap.get(x) + " ";
}
console.log(result)
