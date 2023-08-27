const test = "3\n" +
    "10 8 17\n" +
    "0 0\n" +
    "1 0\n" +
    "1 1\n" +
    "4 2\n" +
    "4 3\n" +
    "4 5\n" +
    "2 4\n" +
    "3 4\n" +
    "7 4\n" +
    "8 4\n" +
    "9 4\n" +
    "7 5\n" +
    "8 5\n" +
    "9 5\n" +
    "7 6\n" +
    "8 6\n" +
    "9 6\n" +
    "10 10 1\n" +
    "5 5"+
    "10 10 1\n" +
    "5 5";
const input = test.toString().split('\n');
let testCase = Number(input[0]);
let line = 1;
while(testCase --) {
    let [m, n, k] = input[line].split(' ').map(Number);
    let graph = [];
    for (let i=0; i<n; i++) {
        graph[i] = new Array(m);
    }
    for (let i=1; i<=k; k++) {
        let [y, x] = input[line + 1].split(' ').map(Number);
        graph[x][y] = 1;
    }
    let answer = 0;
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (dfs(graph, n, m, i, j)) answer++;
        }
    }

    line += k+1;
    console.log(answer)
}

function dfs(graph, n, m, x, y) {
    if (x<=-1 || x>=n||y<=-1 || y>=m) return false;
    if (graph[x][y] == 1) {
        graph[x][y] = -1;
        dfs(graph, n, m, x-1, y);
        dfs(graph, n, m, x, y-1);
        dfs(graph, n, m, x+1, y);
        dfs(graph, n, m, x, y+1);

        return true;
    }
    return false;
}
