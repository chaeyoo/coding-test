const test = `4
1 10
3 15
1 3
4 8`;

const input = test.toString().split('\n');
let n = Number(input[0]);
let arr = [];

for (let i = 0; i < n; i++) {
    let [c, s] = input[i + 1].split(' ').map(Number);
    arr.push([c, s, i])
}

arr.sort((a, b) => a[1] - b[1]);
console.log(arr);

let sum = 0;
let colorSum = Array(n+1).fill(0);

let result = Array(n).fill(0); // 공 순서 별로 최종 결과 담는 배열

let start = 0;
while (start < n) {
    let end = start; // 끝인덱스는 시작 인덱스부터
    console.log('크기 같은 공 찾기 전 start: ', start);
    console.log('크기 같은 공 찾기 전 end: ', end);
    // 1. 크기가 같은 공 찾을 때까지 end 인덱스 찾는 부분
    while (end < n && arr[start][1] == arr[end][1]) {
        console.log('while문 안에서')
        console.log(arr[start]);
        console.log(arr[end])
        end += 1;
    }
    console.log('크기 같은 공 찾고나서 start: ', start);
    console.log('크기 같은 공 찾고나서 end: ', end);
    // 2. 결과 저장하는 부분
    // 자기보다 작은 공들의 크기 합 - 같은 색상인 공들의 크기 합
    for (let i = start; i < end; i++) {
        result[arr[i][2]] = sum - colorSum[arr[i][0]];
    }

    console.log('결과저장하고 :', result);

    //3. 누적합 구하는 부분
    for (let i = start; i < end; i++) {
        colorSum[arr[i][0]] += arr[i][1]; // 색상 별 잡아먹을 수 있는 공 크기의 누적합
        sum += arr[i][1];
    }

    console.log('전체 누적합: ', sum);
    console.log('컬러별 누적합: ', colorSum);
    console.log('------------------------------');
    start = end; // 끝인덱스가 다음의 시작인덱스
}

// 맨 첫 턴에는 start와 end 인덱스가 같아서 한 번만에 while문 탈출
// 제일 작은 공은 잡아먹을 수 있는 공이 없어서 결과 저장하는  곳 지나도 0이 저장됨
// 결과 저장하는 부분에서는 이미 나보다 전에 합쳐진 공들을 먹을 수 있기 때문에
// 누적합을 구하는 부분이 결과 저장하는 부분보다 뒤에 있어야 한다
