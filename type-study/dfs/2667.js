const test = "7\n"
    + "0110100\n" + "0110101\n" + "1110101\n" + "0000111\n"
    + "0100000\n" + "0111110\n" + "0111000";

const input = test.toString().split('\n');
const n = Number(input[0]);

const graph = [];

for (let i = 0; i < n; i++) {
    graph[i] = input[i + 1].split('').map(Number);
}

console.log(graph);

// 인접 리스트 개수와 하나의 인접 리스트 내 요소 개수
let cnt = 0;
let result = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        const res = dfs(graph, n, i, j);
        if (res > 0) {
            cnt++;
            result.push(res);
        }
    }
}

result.sort(function (a, b) {
    return a - b;
});

console.log(cnt);
for (let x of result) {
    console.log(x);
}

function dfs(graph, n, i, j) {
    if (i <= -1 || j <= -1 || i >= n || j >= n) return 0;
    if (!graph[i][j] == 1) return 0;
    if (graph[i][j] == 1) {
        graph[i][j] = -1;
        let result = 1;
        result += dfs(graph, n, i - 1, j);
        result += dfs(graph, n, i + 1, j);
        result += dfs(graph, n, i, j - 1);
        result += dfs(graph, n, i, j + 1);
        return result;
    }
    return 0;
}