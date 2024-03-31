const test = "4 2";
let input = test.toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(i);
}

let selected = [];
let visited = new Array(n).fill(false);
dfs(0, 0);

function dfs(depth, start) {
    let answer = "";
    if (depth == m) {
        for (let x of selected) {
            answer += graph[x] + ' ';
        }
        console.log(answer);
        return;
    }

    for (let i = start; i < n; i++) {
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
}
