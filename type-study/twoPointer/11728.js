const test = "2 2\n" +
    "3 5\n" +
    "2 9";

const input = test.toString().split('\n');
const [a, b] = input[0].split(' ').map(Number);

const arrA = input[1].split(' ').map(Number);
const arrB = input[2].split(' ').map(Number);

const arr = [];
let i=0; 
let j=0;

while(i<a && j<b) {
    if (arrA[i]< arrB[j]) {
        arr.push(arrA[i]);
        i++;
    } else {
        arr.push(arrB[j]);
        j++;
    }
}

while(i<a) {
    arr.push(arrA[i]);
    i++;
}

while(j<b) {
    arr.push(arrB[j]);
    j++;
}

console.log(arr);