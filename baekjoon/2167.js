const test = "2 3\n" + "1 2 4\n" + "8 16 32\n" +
    "3\n" + "1 1 2 3\n" + "1 2 1 2\n" + "1 3 2 3\n";

const input = test.toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const k = Number(input[m]);

// 배열준비
let arr = [new Array(m+1).fill(0)];
for (let i=1; i<=n; i++) {
    arr.push([0, ...input[i].split(' ').map(Number)]);
}
// console.log(arr);

// 쿼리준비
let queries = [];
for (let line = n+2; line <= n+1+k; line++) {
    let [i, j, x, y] = input[line].split(" ").map(Number);
    queries.push([i, j, x, y]);
}


// 누적합 구하기
let sum = [];
for (let i=0; i<=n; i++) {
    sum.push(new Array(m+1).fill(0));
}
for (let i=1; i<=n; i++) {
    for (let j=1; j<=m; j++) {
        sum[i][j] = arr[i][j] + sum[i-1][j] + sum[i][j-1] - sum[i-1][j-1];
    }
}

// console.log(sum);

let answer = "";
// 구간합 계산
for (let index = 0; index<k; index++) {
    let [i, j, x, y] = queries[index];
    let current = sum[x][y] - sum[i-1][y] - sum[x][j-1] + sum[i-1][j-1];
    // console.log(current);
    answer += current + '\n';
}
console.log(answer);