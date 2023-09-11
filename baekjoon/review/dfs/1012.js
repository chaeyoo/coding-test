const test = "3\n" +
    "10 8 17\n" +
    "0 0\n" + "1 0\n" + "1 1\n" + "4 2\n" + "4 3\n" + "4 5\n" +
    "2 4\n" + "3 4\n" + "7 4\n" + "8 4\n" + "9 4\n" + "7 5\n" +
    "8 5\n" + "9 5\n" + "7 6\n" + "8 6\n" + "9 6\n" +
    "10 10 1\n" +
    "5 5\n"+
    "5 3 6\n" +
    "0 2\n" + "1 2\n" + "2 2\n" + "3 2\n" + "4 2\n" + "4 0"
const input = test.toString().split('\n');
const testCase = Number(input[0]);
let line = 1;

for (let i=0; i<testCase; i++) {
    let cnt = 0;
    const [m, n, k] = input[line].split(' ').map(Number);
    // 가로 길이: m (열의 개수), 세로 길이: n (행의 개수)
    let graph = [];
    for (let i=0; i<n; i++) {
        graph.push(new Array(m));
    }

    for (let i=1; i<=k; i++) {
        console.log(input[line + i]);
        let [x, y] = input[line + i].split(' ').map(Number);
        graph[y][x] = 1
    }
    console.log(graph, 'graph');

    for(let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (dfs(graph, n, m, i, j)) cnt++;
        }
    }
    console.log(cnt);
    line += k+1;
}

function dfs(graph, n, m, x, y) {
    if (x<=-1 || y<=-1|| x>=n || y>=m) return false;
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