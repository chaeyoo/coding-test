function lowerBound(arr, target, start, end) {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] >= target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
}
function upperBound(arr, target, start, end) {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

function countByRange(arr, leftValue, rightValue) {
    let leftIdx = lowerBound(arr, leftValue, 0, arr.length);
    let rightIdx = upperBound(arr, rightValue, 0, arr.length);
    console.log(rightIdx, '::::', leftIdx)
    return rightIdx - leftIdx;
}

const arr = [1, 2, 3, 4, 4, 5, 6, 7];
console.log(countByRange(arr, 4, 4))