/**
 * 반복문으로 이진탐색
 * @param arr 정렬된 배열
 * @param target 찾고자 하는 숫자
 * @param start 시작 인덱스
 * @param end 종료 인덱스
 */
function binarySearch2(arr, target, start, end) {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return -1;
}

let n = 10;
let target = 7;
arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

let result = binarySearch2(arr, target, 0, n-1);
if (result === -1) console.log(`원소가 존재하지 않습니다.`);
else console.log(`${result + 1}번째 원소입니다.`);

