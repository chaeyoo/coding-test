const test = "2\n"
    + "7\n" + "3 1 3 7 3 4 6\n"
    + "8\n" + "1 2 3 4 5 6 7 8";

const input = test.toString().split('\n');

let tc = Number(input[0]);
let line = 1;
while (tc--) {
    let n = Number(input[line]);
    let arr = [0, ...input[line + 1].split(' ').map(Number)];
    // console.log(arr);

    let visited = new Array(n + 1).fill(false);
    let finished = new Array(n + 1).fill(false);
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            dfs(arr, i, visited, finished, result);
        }
    }
    line += 2;
    console.log(n - result.length);
}

function dfs(graph, node, visited, finished, result) {
    visited[node] = true;
    let nextNode = graph[node];
    if (!visited[nextNode]) {
        dfs(graph, nextNode, visited, finished, result);
    } else if (visited[nextNode] && !finished[nextNode]) {
        while (nextNode != node) {
            result.push(nextNode);
            nextNode = graph[nextNode];
        }
        result.push(node);
    }
    finished[node] = true;
}