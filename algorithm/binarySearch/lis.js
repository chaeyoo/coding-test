function lowerBound(arr, target, start, end) {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
}
/**
 * LIS: Longest Increasing Subsequence LIS 알고리즘
 * 가장 긴 증가하는 부분 수열
 * @param arr
 * @returns {number[]}
 */
function lis(arr) {
    let d = [0];

    for (let x of arr) {
        if (x > d[d.length -1]) {
            d.push(x);
        } else {
            let idx = lowerBound(d, x, 0, d.length);
            d[idx] = x;
        }
    }
    return d;
}

const arr = [4, 2, 5, 8, 4, 11, 15];
console.log(lis(arr));

ㅇ