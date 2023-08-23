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

function countByRange(arr, startNum, endNum) {
    let leftIdx = lowerBound(arr, startNum, 0, arr.length);
    let rightIdx = upperBound(arr, endNum, 0, arr.length);
    return rightIdx - leftIdx;
}

const arr = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8];
console.log(countByRange(arr, 4, 4))