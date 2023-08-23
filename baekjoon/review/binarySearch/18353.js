const test = "7\n" + 
"15 11 4 8 5 2 4";

const input = test.toString().split('\n');

const n = Number(input[0]);
const numArr = input[1].split(' ').map(Number);
numArr.reverse();

function lowerBound(arr, target, start, end) {
    while(start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
}

let d = [0];
for (let x of numArr) {
    if (x > d[d.length -1]) {
        d.push(x);
    } else {
        let idx = lowerBound(d, x, 0, d.length);
        d[idx] = x;
    }
}

console.log(numArr.length - d.length + 1)