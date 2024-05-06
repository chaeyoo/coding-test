const test = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`;
const input = test.toString().split('\n');
let n = Number(input[0]);

let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(input[i + 1].split(' ').map(Number));
}

arr.sort(function (a, b) {
    if (a[1] != b[1]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
})

console.log(arr);
let cnt = 1;
let cur = 0;
for (let i = 1; i < n; i++) {
    if (arr[cur][1] <= arr[i][0]) {
        cnt++;
        cur = i;
    }
}

console.log(cnt)