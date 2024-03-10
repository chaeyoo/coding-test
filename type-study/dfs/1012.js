const test = "2\n" + "10 8 17\n" + "0 0\n" +
    "1 0\n" + "1 1\n" + "4 2\n" + "4 3\n" +
    "4 5\n" + "2 4\n" + "3 4\n" + "7 4\n" +
    "8 4\n" + "9 4\n" + "7 5\n" + "8 5\n" +
    "9 5\n" + "7 6\n" + "8 6\n" + "9 6\n" +
    "10 10 1\n" +
    "5 5";

const input = test.toString().split('\n');
// console.log(input);

let tc = Number(input[0]);
let line = 1;
let cnt = 0;
let graph = [];
while (tc--) {
    // 가로: m, 세로: n
    let [m, n, k] = input[line].split(' ').map(Number);
    // console.log(m, '::', n, '::', k)
    graph = [];
    cnt = 0;
    for (let i = 0; i < n; i++) {
        graph[i] = new Array(m).fill(0);
    }
    for (let i = 1; i <= k; i++) {
        let [y, x] = input[line + i].split(' ').map(Number);
        graph[x][y] = 1;
    } 
    
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (dfs(graph, n, m, i, j)) cnt++;
        }
    }
    console.log(cnt);
    line += k + 1;
}

function dfs(graph, n, m, x, y) {
    if (x < 0 || y < 0 || x>=n || y >=m) return false;
    if (graph[x][y] == 1) {
        graph[x][y] = -1;
        dfs(graph, n, m, x-1, y);
        dfs(graph, n, m, x+1, y);
        dfs(graph, n, m, x, y-1);
        dfs(graph, n, m, x, y+1);
        return true;
    }
    return false;
}