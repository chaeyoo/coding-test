const test = "5 5\n" +
    "IEFCJ\n" +
    "FHFKC\n" +
    "FFALF\n" +
    "HFGCF\n" +
    "HMCHH";
const input = test.toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const graph = [];
for (let i=1; i<=n; i++) {
    const tmp = input[i].split("");
    graph.push(tmp);
}
let maxDepth = 0;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// graph[0][0]을 초기에 Set에 세팅
const visited = new Set(graph[0][0]);

function dfs(depth, x, y) {
    maxDepth = Math.max(maxDepth, depth);
    for (let i=0; i<4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx < 0 || nx >= n || ny <0 || ny >=m) continue;
        if (visited.has(graph[nx][ny])) continue;
        visited.add(graph[nx][ny]);
        dfs(depth + 1, nx, ny);
        visited.delete(graph[nx][ny]);
    }
}

// depth 1부터
dfs(1, 0, 0);
console.log(maxDepth);