let n = 10;
let target = 7;
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

function binarySearch(arr, target, start, end) {
    if (start > end) return -1;
    let mid = parseInt(start + end / 2);
    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, end);
    }
}

let result = binarySearch(arr, target, 0, n - 1);
if (result == -1) {
    console.log('원소가 존재하지 않음');
} else {
    console.log(result + 1, '번째 원소입니다.');
}