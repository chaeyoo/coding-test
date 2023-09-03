const test = "7\n" +
    "3\n" + "1\n" + "1\n" + "5\n" + "5\n" + "4\n" + "6";
const input = test.toString().split('\n');
const n = Number(input[0]);
const graph = [0];
for (let i=1; i<=n; i++) {
    graph.push(Number(input[i]));
}
console.log(graph)
let visited = new Array(n+1).fill(false);
let finished = new Array(n+1).fill(false);
let result = [];
for (let i=1; i<=n; i++) {
    if (!visited[i]) dfs(i, graph, visited, finished, result);
}
result.sort(function (a, b) {
    return a-b;
});
let str = "";
str += result.length + '\n';
for (let x of result) {
    str += x + "\n"
}
console.log(str);
function dfs(node, graph, visited, finished, result) {
    visited[node] = true;
    let nextNode = graph[node];
    if (!visited[nextNode]) {
        dfs(nextNode, graph, visited, finished, result);
    }
    else if (!finished[nextNode]) {
        while (node != nextNode) {
            result.push(nextNode);
            nextNode = graph[nextNode];
        }
        result.push(node);
    }
    finished[node] = true;
}






