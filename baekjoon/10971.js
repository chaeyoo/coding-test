const test = "4\n" +
    "0 10 15 20\n" +
    "5 0 9 10\n" +
    "6 13 0 12\n" +
    "8 8 9 0";

const input = test.toString().split('\n');
let n = Number(input[0]);
let graph = [];
for (let i=0; i<=n; i++) {
    graph.push([0]);
}
for (let i=1; i<=n; i++) {
    line = input[i].split(' ').map(Number);
    for (let j=0; j<n; j++) {
        graph[i].push(line[j]);
    }
}
let visited = new Array(11).fill(false);
let result = [];
let minValue = 1e9;

dfs(0);
console.log(minValue);

function dfs(depth) {
    if (depth == n-1) {
        let total = 0;
        let cur = 1;
        for (let i=0; i<n-1; i++) {
            let nextNode = result[i]
            let cost = graph[cur][nextNode];
            if (cost == 0) return;
            total += cost;
            cur = nextNode;
        }
        let cost = graph[cur][1];
        if (cost == 0) return;
        total += cost;
        minValue = Math.min(minValue, total)
    }
    for (let i=2; i<=n; i++) {
        if(visited[i]) continue;
        result.push(i);
        visited[i] = true;
        dfs(depth + 1);
        result.pop();
        visited[i] = false;
    }
}

