const test = "3 3 5\n" +
    "2 3 5\n" +
    "3 5\n" +
    "1 2 3";
const input = test.toString().split('\n');
let [n, m, h] = input[0].split(' ').map(Number);
let a = [];
let d = new Array(h+1).fill(0);

for (let i=1; i<=n; i++) {
    a.push(input[i].split(' ').map(Number));
}

console.log(a)
// 높이가 0인 경우는 1가지
d[0] = 1;

for (let i=0; i<n; i++) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log(`🟢i: ${i}번 학생 반복문 시작`)
    let data = [];
    console.log(`⭐0부터 모든 높이에 대해 반복문 시작`)
    for (let j=0; j<=h; j++) {
        console.log(`🟠높이 j: ${j}에 대해 처리>> 현재 경우의 수 : ${d[j]}가지`);
        console.log(`🟢i: ${i}번째 학생이 가지는 블록 반복문 시작`)
        for (let k=0; k<m; k++) {
            // NaN이 나올 수도 있음
            console.log(`🔵현재 높이(${j}) 
            + ${i}번째 학생이 가지는 ${k}번째 블록 값(${a[i][k]})의 합(${j+a[i][k]})`);

            // d[j]가 한 가지라도 있어야 다음 블록 쌓을 때 이용할 수 있음
            if (d[j] != 0 && j+a[i][k] <= h) {
                console.log(`🟣height로 ${j+ a[i][k]} / value로 ${d[j]} data 푸시`)
                // d[j]를 사용해서 특정 height까지 도달했다면,
                // d[height]에 d[j] 경우의 수를 누적
                data.push([j+ a[i][k], d[j]]);
            }
        }
        console.log(`🟤i: ${i}번째 학생이 가지는 블록 반복문 끝`)
    }

    console.log(`${i}번째 학생에 대해 0부터 모든 높이에 대해 반복문 종료`)
    console.log(data)
    for (let [height, value] of data) {

        d[height] = (d[height] + value) % 10007;
    }
    console.log(`${i}번째 학생 처리 끝나고 나서 d배열 결과: ${d}`)
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
}

console.log(d[h])