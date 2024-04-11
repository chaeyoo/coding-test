let n = 8;
let m = 5;
let data = [3, 2, 4, 1, 2, 2, 1, 5];

let cnt = 0; // 카운트 결과
let tmpSum = 0; // 중간 합 결과
let end = 0; // 끝점 변수

for (let start=0; start<n; start++) {
    console.log('start idx of front for: ', start);
    while (tmpSum < m && end < n) {
        console.log('end idx before sum: ', end);
        tmpSum += data[end];
        console.log('tmpSum: ', tmpSum)
        end++;
        console.log('end idx after sum: ', end);
    }

    if (tmpSum == m) {
        cnt++;
    }
    tmpSum -= data[start];
    console.log('start idx of rear for', tmpSum)
}

console.log();
console.log('total count: ', cnt);