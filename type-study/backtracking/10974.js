const test = "3";
const input = test.toString().split('\n');
const n = Number(input[0]);

let graph = [];
for (let i=1; i<=n; i++) {
    graph.push(i);
}
let visited = new Array(n).fill(false);
let selected = [];
let answer = "";
dfs(0);
console.log(answer);

function dfs(depth) {
    if (depth == n) {
        for (let x of selected) {
            answer += graph[x] + " ";
        }
        answer += '\n';
        return;
    }

    for (let i=0; i<n; i++) {
        if (visited[i]) continue;
        visited[i] = true
        selected.push(i);
        dfs(depth + 1);
        visited[i] = false;
        selected.pop();
    }
}