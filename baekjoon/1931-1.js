// 채형풀이 > 시간초과
const test = "11\n" +
    "1 4\n" +
    "3 5\n" +
    "0 6\n" +
    "5 7\n" +
    "3 8\n" +
    "5 9\n" +
    "6 10\n" +
    "8 11\n" +
    "8 12\n" +
    "2 13\n" +
    "12 14";
const input = test.toString().split("\n");

const n = Number(input[0]);
const arr = [];
for (let i=1; i<=n; i++) {
    arr.push(input[i].split(' ').map(Number));
}

arr.sort(function(a,b){
    return a[0] - b[0]
});

const cntArr = [];
for (let i=0; i<arr.length; i++) {
    let cnt = 1;
    let endTime = arr[i][1];
    for (let j=i+1; j<arr.length; j++) {
        if (endTime < arr[j][0]) {
            endTime = arr[j][1];
            cnt++
        }
    }
    cntArr.push(cnt);
}

console.log(Math.max(...cntArr));