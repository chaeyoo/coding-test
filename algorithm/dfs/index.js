function index(graph, v, visited) {
    visited[v] = true;
    console.log(v);
    for (let i of graph[v]) {
        if (!visited[i]) {
            index(graph, i, visited)
        }
    }
}


const graph = [
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

visited = new Array(9).fill(false);
index(graph, 1, visited);