const test = "7\n" +
    "0110100\n" +
    "0110101\n" +
    "1110101\n" +
    "0000111\n" +
    "0100000\n" +
    "0111110\n" +
    "0111000";
const input = test.toString().split('\n');
const n = Number(input[0]);
const graph = [];
let cnt = 0;
let cntArr = [];
for (let i=0; i<n; i++) {
    graph[i] = [...input[i+1].split('').map(Number)]
}

for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        let num = dfs(graph, n, n, i, j);
        if (num > 0) {
            cntArr.push(num)
            cnt++;

        }
    }
}

console.log(cnt);
for (let x of cntArr) {
    console.log(x);
}
function dfs(graph, n, m, x, y) {
    if (x<0 || y<0 || x>=n || y>=m) return 0;
    if (graph[x][y] == 1) {
        graph[x][y] = -1;
        let result = 1;
        result += dfs(graph, n, m, x-1, y);
        result += dfs(graph, n, m, x+1, y);
        result += dfs(graph, n, m, x, y-1);
        result += dfs(graph, n, m, x, y+1);
        return result;
    }
    return 0;
}