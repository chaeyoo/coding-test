const test = "2 2\n" +
    "3 5\n" +
    "2 9";

const input = test.toString().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const arr1 = input[1].split(' ').map(Number);
const arr2 = input[2].split(' ').map(Number);

const arr = [];
let i=0;
let j=0;
while (i<a && j<b) {
    if (arr1[i] < arr2[j]) {
        arr.push(arr1[i]);
        i++;
    } else {
        arr.push(arr2[j]);
        j++;
    }
}

while(i<a) {
    arr.push(arr1[i]);
    i++;
}

while(j<b) {
    arr.push(arr2[j]);
    j++;
}

console.log(arr)