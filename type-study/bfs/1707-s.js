import { Queue } from "../../algorithm/bfs/index.js";

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
let k = Number(input[0]);
let line = 1;
while (k--) {
    let [v, e] = input[line].split(' ').map(Number);
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
        if (visited[i] == -1) {
            bfs(i, graph, visited);
        }
    }
    let result = "YES";
    for (let i=1; i<=v; i++) {
        if (!isResult(i, graph, visited)) {
            result = "NO";
            continue;
        }
    }
    console.log(result);
    line += e+1;
    
}

function bfs(node, graph, visited) {
    let queue = new Queue();
    queue.enqueue(node);

    while(queue.getLength() != 0) {
        let cur = queue.dequeue();
        for (let next of graph[cur]) {
            if (visited[next] == -1) {
                visited[next] = (visited[cur] + 1) % 2;
                queue.enqueue(next);
            }
        }
    }
}

function isResult(node, graph, visited) {
    for (let a of graph[node]) {
        if (visited[node] == visited[a]) {
            return false;
        }
    }
    return true;
}