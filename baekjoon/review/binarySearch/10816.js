let test = "10\n" +
    "6 3 2 10 10 10 -10 -10 7 3\n" +
    "8\n" +
    "10 9 -5 2 3 4 5 -10";
let input = test.toString().split("\n");
let arr = input[1].split(' ').map(Number);
arr.sort(function (a, b) {
    return a-b;
})
let numArr = input[3].split(' ').map(Number);
let result = ""
for(let i=0; i<numArr.length; i++) {
    result += countByRange(arr, numArr[i],  numArr[i]) + ' ';
}

console.log(result)
function lowerBound(arr, target, start, end) {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
}

function upperBound(arr, target, start, end) {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > target) end = mid;
        else start = mid + 1;
    }
    return end;
}

function countByRange(arr, leftVal, rightVal) {
    let leftIdx = lowerBound(arr, leftVal, 0, arr.length);
    let rightIdx = upperBound(arr, rightVal, 0, arr.length);
    return rightIdx - leftIdx;
}


