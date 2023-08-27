
function lowerBound(arr, target, start, end) {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] >= target) {
            end = mid
        } else {
            start = mid + 1
        }
    }
    return end;
}

function lis(arr) {
    let d = [0];
    for (let x of arr) {
        if (x > d[d.length - 1]) {
            d.push(x);
        } else {
            let idx = lowerBound(d, x, 0, d.length);
            d[idx] = x;
        }
    }
    return d;
}

const arr = [2, 4, 3, 5, 7, 6, 8];
console.log(lis(arr).slice(1)); //[ 2, 3, 5, 6, 8 ]