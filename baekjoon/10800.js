const test = "4\n"
    + "1 10\n"
    + "3 15\n"
    + "1 3\n"
    + "4 10";
const input = test.toString().split('\n');
const n = Number(input[0]);
let arr = [];
for (let i = 0; i < n; i++) {
    let c = Number(input[i + 1].split(' ')[0]);
    let s = Number(input[i + 1].split(' ')[1]);
    arr.push([c, s, i]);
}
arr.sort(function (a, b) {
    return a[1] - b[1];
});

// console.log(arr);
let sum = 0; // 전체 누적합
let colorSum = Array(5).fill(0); // 색상별 누적 합 (최대 20만개)
let result = Array(n).fill(0); // 최종결과 배열

let start = 0;
while (start < n) {
    console.log('====while START====')
    console.log(start, 'start');
    let end = start;
    // 크기가 같은 공의 마지막 인덱스 찾기
    // 크기가 작은 애들만 잡아먹을 수 있으니까
    // 크기가 같을 때까지 누적합에 대한 처리가 필요하기 때문에
    // 아래 while문이 필요함
    // end가 n보다 작으면서 size가 같을 때까지 end += 1
    while (end < n && arr[start][1] == arr[end][1]) {
        end += 1;
    }
    console.log(end, 'end');
    for (let i = start; i < end; i++) {
        console.log('첫번째 for::, i:::', i);
        // 크기 순서로 정렬했을 때 i번째의 원래 처음 인덱스 (결과값 저장을 위해)
        result[arr[i][2]] = sum - colorSum[arr[i][0]];
        console.log('첫번째 for::, result', result);
    }

    for (let i = start; i < end; i++) {
        console.log('두번째 for::, i:::', i);
        // 컬러 인덱스에다가 크기값을 누적합
        colorSum[arr[i][0]] += arr[i][1];
        // 전체 누적합
        sum += arr[i][1];
        console.log('두번째 for::, colorSum', colorSum);
        console.log('두번째 for::, sum', sum);
    }
    start = end;
    console.log('====while END====')
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
