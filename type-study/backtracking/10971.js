const test = "4\n" +
    "0 10 15 20\n" +
    "5 0 9 10\n" +
    "6 13 0 12\n" +
    "8 8 9 0";

const input = test.toString().split('\n');
let n = Number(input[0]);
let minVal = 1e9;
let visited = new Array(n+1).fill(false);
let selected = [];
let graph = [];

for (let i=1; i<=n; i++) {
    graph[i] =  [0, ...input[i].split(' ').map(Number)]
}

console.log(graph);

dfs(0);
console.log(minVal);

function dfs (depth) {
    if (depth == n-1) {
        let cur = 1;
        let total = 0;
        for (let x of selected) {
            let next = x;
            let cost = graph[cur][next];
            if (cost == 0) return ;
            total += cost;
            cur = next;
        }
        let cost = graph[cur][1];
        if (cost == 0) return;
        total += cost;

        minVal = Math.min(minVal, total);
        return;
    }

    for (let i=2; i<=n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1);
        visited[i] = false;
        selected.pop();
    }
}