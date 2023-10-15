const test = "4\n" +
    "1 10\n" +
    "3 15\n" +
    "1 3\n" +
    "4 8";
const input = test.toString().split('\n');
const n = Number(input[0]);
let arr = [];
for (let i=0; i<n; i++) {
    let c = Number(input[i+1].split(' ')[0]);
    let s = Number(input[i+1].split(' ')[1]);
    arr.push([c, s, i]);
}
arr.sort(function (a, b) {
    return a[1] - b[1];
});

let sum = 0; // 전체 누적합
let colorSum = Array(200001).fill(0); // 색상별 누적 합 (최대 20만개)
let result = Array(n).fill(0); // 최종결과 배열

let start = 0;
while (start < n) {
    let end = start;
    while (end < n && arr[start][1] == arr[end][1]) {
        end += 1;
    }
    for (let i=start; i<end; i++) {
        result[arr[i][2]] = sum - colorSum[arr[i][0]];
    }
    for (let i=start; i<end; i++) {
        colorSum[arr[i][0]] += arr[i][1];
        sum += arr[i][1];
    }
    start = end;
}

console.log(result.join('\n'));
// 공의 색과 크기를 어떤 자료형으로 표현할 것인지?
// arr.push([c, s, i]);
// color와 size와 index를 배열로 받아서 배열로 쌓기

// 같은 색의 공의 다른 크기에 대해서는 어떻게 표현할 것인지?
// => 그냥 전부 받음

// 이 문제를 왜 누적합 알고리즘으로 분류를 했을지?
// => 공의 크기를 정렬을 해주고 나면 하나의 공보다 작은 것들의 합이 바로 누적합이기 때문이다.
// => 단, 누적합을 구할 때는 자기 공보다 색이 다른 것에 대해에서만 누적합 구해주면 된다.
// 전체 공들의 크기 누적합 - 같은 색상의 공들의 크기 누적합

// 탐색은 어떤 방식으로 진행을 할지?
