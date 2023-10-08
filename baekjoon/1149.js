const test = "8\n" +
    "71 39 44\n" +
    "32 83 55\n" +
    "51 37 63\n" +
    "89 29 100\n" +
    "83 58 11\n" +
    "65 13 15\n" +
    "47 25 29\n" +
    "60 66 19";
const input = test.toString().split('\n');
const n = Number(input[0]);
let arr = [];
let d = [];

for (let i=0; i<n; i++) {
    let [r, g, b] = input[i+1].split(' ').map(Number);
    // 1000개 집에 * 1000 비용 칠하면 최대 1000000
    d.push(new Array(3).fill(1000000));
    arr.push([r, g, b]);
}

// 첫 번째 집 기록
d[0][0] = arr[0][0];
d[0][1] = arr[0][1];
d[0][2] = arr[0][2];

// console.log(arr);
// console.log(d);
// 두번째 집 부터는 앞에꺼랑 비교
for (let i=1; i<n; i++) {
    for (let j=0; j<3; j++) {
        for (let k=0; k<3; k++) {
            if (j != k) {
                d[i][j] = Math.min(d[i][j], d[i-1][k] + arr[i][j]);
            }
        }
    }
}

console.log(Math.min(...d[n-1]));