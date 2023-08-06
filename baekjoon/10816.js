const test = "10\n" +
    "6 3 2 10 10 10 -10 -10 7 3\n" +
    "8\n" +
    "10 9 -5 2 3 4 5 -10";
const input = test.toString().split("\n");
const arr1 = input[1].split(" ").map(Number);
arr1.sort(function (a, b) {
    return a-b;
});

const arr2 = input[3].split(" ").map(Number);

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

function countByRange(arr, leftValue, rightValue) {
    let rightIdx = upperBound(arr, rightValue, 0, arr.length);
    let leftIdx = lowerBound(arr, leftValue, 0, arr.length);
    return rightIdx - leftIdx;
}
let result = "";
for (let i=0; i<arr2.length; i++) {
    result += countByRange(arr1, arr2[i], arr2[i]) + " ";
}

console.log(result)
