const test = "4 2\n" + "2 1 2\n" + "4 3 2\n" + "1 4 3\n" + "1 2\n" + "3 2";
const input = test.toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 0; i <= n; i++) {
    graph[i] = [];
}
for (let i = 1; i < n; i++) {
    let [x, y, cost] = input[i].split(' ').map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
}

console.log(graph);
let visited = [];
let distance = [];

for (let i = 0; i < m; i++) {
    // a에서 출발했을 때 모든 노드까지 거리
    const [a, b] = input[n + i].split(' ').map(Number);
    visited = new Array(n + 1).fill(false);
    distance = new Array(n + 1).fill(0);
    dfs(a, 0);

    // b까지 최단 거리
    console.log(distance[b]);
}

function dfs(node, cost) {
    if (visited[node]) return;
    visited[node] = true;
    distance[node] = cost;

    for (let [nextNode, nextCost] of graph[node]) {
        dfs(nextNode, cost + nextCost);
    }
}
