function lowerBound(arr, target, start, end) {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
}

function lis (arr) {
    let d = [0];
    for (let x of arr) {
        if (x > d[d.length -1]) {
            d.push(x);
        } else  {
            let idx = lowerBound(d, x, 0, d.length);
            d[idx] = x;
        }
    }
    return d;
}

const arr = [4, 2, 3, 6, 4, 7, 9];
console.log(lis(arr).slice(1));