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

const graph = [];
for (let i=0; i<=n; i++) {
    graph[i] = [];
}

for (let i=0; i<m; i++) {
    let [x, y] = input[i+2].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

const visited = new Array(n+1).fill(false);
let cnt = 0;
// 방문체크 -> 재귀함수 호출
visited[1] = true;
dfs(1);

console.log(cnt);

function dfs(node) {
    for (let nextNode of graph[node]) {
        if (!visited[nextNode]) {
            visited[nextNode] = true;
            dfs(nextNode);
            cnt++;
        }
    }
}