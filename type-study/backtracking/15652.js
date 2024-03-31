const test = "4 2";
const input = test.toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let graph = [];
let selected = [];

for (let i = 1; i <= n; i++) {
    graph.push(i);
}

dfs(0, 0);
function dfs(depth, start) {
    let answer = "";
    if (depth == m) {
        for (let x of selected) {
            answer += graph[x] + " ";
        }
        console.log(answer);
        return;
    }

    for (let i = start; i < n; i++) {
        selected.push(i);
        dfs(depth + 1, i);
        selected.pop();
    }
}