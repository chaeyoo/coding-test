const test = '5\n3 4\n1 1\n1 -1\n2 2\n3 3'
let input = test.split('\n');
const n = Number(input[0]);
const arr = [];
for (let i=1; i<=n; i++) {
    arr.push(input[i].split(' ').map(Number));
}

function compare(a, b) {
    if (a[0] != b[0]) return a[0] - b[0];
    else return a[1] - b[1];
}

arr.sort(compare);


for (let num of arr) {
    console.log(num[0] + " " + num[1])
}

// 결과: 시간초과
// 11650-1와 차이점: 1에서는 정렬을 직접해줬음
// 여기서는 비교함수를 선언 x좌표 숫자가 다른 경우 x좌표로 정렬
// x좌표 숫자가 같은 경우 y좌료포 정렬