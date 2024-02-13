import { Queue } from "../../algorithm/bfs/index.js";
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
bfs(graph, 1, visited);

function bfs(graph, start, visited) {

    let queue = new Queue();
    queue.enqueue(start);
    visited[start] = true;

    while (queue.getLength() != 0) {
        let cur = queue.dequeue();
        console.log(cur);
        for (let i of graph[cur]) {
            if (!visited[i]) {
                queue.enqueue(i);
                visited[i] = true;
            }
        }
    }
}