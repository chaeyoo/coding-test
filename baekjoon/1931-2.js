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

// ** 오답포인트: 종료시점을 우선순위로 정렬
arr.sort(function(a,b){
   if (a[1] != b[1]) return a[1] - b[1];
   else return a[0] - b[0]
});

let cnt = 1;
let cur = 0;
for (let i=1; i<n; i++) {
    // 전회의 종료시간이 다음 회의의 시작시간과 같거나 큰 경우
    // cur에 index 할당, cnt에 ++
    if (arr[cur][1] <= arr[i][0]) {
        cur = i;
        cnt += 1;
    }
}

console.log(cnt);