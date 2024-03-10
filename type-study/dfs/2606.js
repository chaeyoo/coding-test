const test = "7\n" + "6\n" +
    "1 2\n" + "2 3\n" + "1 5\n" +
    "5 2\n" + "5 6\n" + "4 7";

const input = test.toString().split('\n');
const n = Number(input[0]);
const m = Number(input[1]);
const visited = new Array(n+1).fill(false);
let cnt = 0;
const graph = [];
for (let i = 0; i <= n; i++) {
    graph[i] = [];
}

for (let i = 1; i <= m; i++) {
    let [x, y] = input[i + 1].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

// console.log(graph);

dfs(1);
console.log(cnt);

function dfs(node) {
    visited[node] = true;
    for (let x of graph[node]){
        if (!visited[x]) {
            visited[x] = true;
            cnt++;
            dfs(x);
        }
    }
}
