const test = "4 2\n" +
    "2 1 2\n" +
    "4 3 2\n" +
    "1 4 3\n" +
    "1 2\n" +
    "3 2";
const input = test.toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const graph = [];
for (let i=1; i<=n; i++) {
    graph[i] = [];
}
for (let i=1; i<n; i++) {
    const [x, y, cost] = input[i].split(' ').map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
}

for (let i=0; i<m; i++) {
    let [x, y] = input[n+i].split(' ').map(Number);
    visited = new Array(n+1).fill(false);
    distance = new Array(n+1).fill(-1);
    dfs(x, 0); // x에서 출발했을 때 모든 노드까지 거리계산
    console.log(distance[y]) // y까지 최단거리
}
// x에서 출발해서 모든 연결된 모든 노드까지 훑고 가면서
// x부터 그!노드까지의 거리를 distance에 저장하기
function dfs(node, cost) {
    if (visited[node]) return;
    visited[node] = true;
    distance[node] = cost;

    for (let [nextNode, nextCost] of graph[node]) {
        dfs(nextNode, cost + nextCost);
    }
}


