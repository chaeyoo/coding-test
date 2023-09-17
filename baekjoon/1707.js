import {Queue} from "../algorithm/bfs/index.js";

const test = "2\n" +
    "3 2\n" +
    "1 3\n" +
    "2 3\n" +
    "4 4\n" +
    "1 2\n" +
    "2 3\n" +
    "3 4\n" +
    "4 2";
const input = test.toString().split('\n');
let testCases = Number(input[0]);
let line = 1;

while(testCases--) {
    const [v, e] = input[line].split(' ').map(Number);
    let graph = [];
    for (let i=1; i<=v; i++) {
        graph[i] = [];
    }
    for (let i=1; i<=e; i++) {
        let [x, y] = input[line + i].split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }
    let visited = new Array(v+1).fill(-1);

    for (let i=1; i<=v; i++) {
        if (visited[i] == -1) bfs(i, graph, visited);
    }
    line += e + 1;
    if (isBipartite(graph, visited)) console.log("YES");
    else console.log("NO");
}

function bfs(x, graph, visited) {
    let queue = new Queue();
    queue.enqueue(x);
    visited[x] = 0;
    while (queue.getLength() != 0) {
        let x = queue.dequeue();
        for (let y of graph[x]) {
            if (visited[y] == -1) {
                visited[y] = (visited[x] + 1) % 2;
                queue.enqueue(y);
            }
        }
    }
}

function isBipartite(graph, visited) {
    for (let x=1; x<visited.length; x++) {
        for (let y of graph[x]) {
            if (visited[x] == visited[y]) return false;
        }
    }
    return true;
}