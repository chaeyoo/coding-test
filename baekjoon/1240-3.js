const test = "4 2\n" +
    "2 1 2\n" +
    "4 3 2\n" +
    "1 4 3\n" +
    "1 2\n" +
    "3 2";
const input = test.toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const graph = [];
for (let i=0; i<=n; i++) {
    graph.push([]);
}

for (let i=1; i<n; i++ ){
    const [x, y, cost] = input[i].split(' ').map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
}

for (let i=0; i<m; i++) {
    const [x, y] = input[i+n].split(' ').map(Number);
    visited = new Array(n+1).fill(false);
    distance = new Array(n+1).fill(0);
    dfs(x, 0);
    console.log(distance[y]);
}

function dfs(node, cost) {
    if(visited[node]) return;
    visited[node] = true;
    distance[node] = cost;
    for (let [nextNode, nextCost] of graph[node]) {
        dfs(nextNode, cost + nextCost);
    }
}