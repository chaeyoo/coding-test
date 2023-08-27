const test = "3 6\n" +
    "HFDFFB\n" +
    "AJHGDH\n" +
    "DGAGEH";
const input = test.toString().split('\n');
const [n,m] = input[0].split(' ').map(Number);
const graph = [];
for (let i=1; i<=n; i++) {
    let tmp = input[i].split("");
    graph.push(tmp);
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let visited = new Set(graph[0][0]);
let maxDepth = 0;

function dfs(depth, x, y) {
    maxDepth = Math.max(maxDepth, depth);
    for (let i=0; i<4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (visited.has(graph[nx][ny])) continue;
        visited.add(graph[nx][ny]);
        dfs(depth + 1, nx, ny);
        visited.delete(graph[nx][ny]);
    }
}

dfs(1, 0, 0);
console.log(maxDepth);






