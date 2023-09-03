const test = "7\n" +
    "6\n" +
    "1 2\n" +
    "2 3\n" +
    "1 5\n" +
    "5 2\n" +
    "5 6\n" +
    "4 7";

const input = test.toString().split('\n');
const n = Number(input[0]);
const m = Number(input[1]);
let cnt = 0;
const graph = [];
for (let i=0; i<=n; i++) {
    graph.push([]);
}

for (let i=0; i<m; i++) {
    const [x, y] = input[i+2].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}
let visited = new Array(n+1).fill(false);
visited[1] = true;
dfs(graph, 1, visited);

console.log(cnt)
function dfs(graph, node, visited) {
    for (let i of graph[node]) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(graph, i, visited);
            cnt++;
        }
    }
}