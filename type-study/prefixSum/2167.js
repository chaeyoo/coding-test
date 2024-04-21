const test = `2 3
1 2 4
8 16 32
3
1 1 2 3
1 2 1 2
1 3 2 3`;

const input = test.toString().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let arr = [new Array(m + 1).fill(0)]; // 0번째 인덱스에 0 세팅

for (let i = 1; i <= n; i++) {
    arr.push([0, ...input[i].split(' ').map(Number)]); // 0번째 인덱스에 0 세팅
}

// console.log(arr);

let queryN = Number(input[n + 1]);

let query = [];
for (let i = 0; i < queryN; i++) {
    query.push(input[i + n + 2].split(' ').map(Number));
}


// console.log(query)

// (1, 1)부터의 누적합 (sum) 계산
let sum = [];
for (let i = 0; i <= n; i++) {
    sum.push(new Array(m + 1).fill(0));
}
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        sum[i][j] = arr[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
    }
}

// console.log(query)
// (i, j) 부터 (n, m) 까지의 구간 합 계산
for (let index = 0; index < queryN; index++) {
    let [i, j, x, y] = query[index];
    let current = sum[x][y] - sum[i - 1][y] - sum[x][j - 1] + sum[i - 1][j - 1];
    console.log(current);
}