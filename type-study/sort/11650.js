const test = `5
3 4
1 1
1 -1
2 2
3 3`;
const input = test.toString().split('\n');
const n = Number(input[0]);
const arr = [];
for (let i=1; i<=n; i++) {
    arr.push(input[i].split(' ').map(Number));
}

// console.log(arr);
arr.sort(function (a, b) {
    if (a[0] == b[0]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
})
let answer = "";
for (let i=0; i<n; i++) {
    answer+= arr[i][0] +" "+ arr[i][1]+ '\n';
}
console.log(answer)