let graph = [
    [],
    [2, 3, 4],
    [1],
    [1, 5, 6],
    [1, 7],
    [3, 8],
    [3],
    [4],
    [5]
];

let visited = new Array(9).fill(false);

function dfs(graph, v, visited) {
    visited[v] = true;
    console.log(v);
    for (let i of graph[v]) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(graph, i, visited);
        }
    }
}

dfs(graph, 1, visited);