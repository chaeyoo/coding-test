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

let arr = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9, ];
console.log(countByRange(arr, 4, 4, ));
console.log(countByRange(arr, -1, 3));