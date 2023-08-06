const test = "7\n15 11 4 8 5 2 4";
const input = test.toString().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

function lowerBound(arr, target, start, end) {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] > target) {
            end = mid
        } else {
            start = mid + 1;ㄴ
        }
    }
    return end;
}

arr.reverse();
const d = [0];

for (let x of arr) {
    if (x > d[d.length - 1]) {
        d.push(x);
    } else {
        let idx = lowerBound(d, x, 0, d.length);
        d[idx] = x;
    }
}
console.log(n - (d.length - 1));

