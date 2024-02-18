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

const input = test.toString().split("\n");
let k = Number(input[0]);
let line = 1;
let visited = [];
while (k--) {
    let [v, e] = input[line].split(' ').map(Number);
    let graph = [];
    for (let i = 1; i <= v; i++) {
        graph[i] = [];
    }
    visited = new Array(v + 1).fill(-1);

    for (let i = 1; i <= e; i++) {
        let [x, y] = input[line + i].split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }
    
    let queue = new Queue();
    queue.enqueue(1);
    visited[1] = 1;

    while (queue.getLength() != 0) {
        let cur = queue.dequeue();
        for (let next of graph[cur]) {
            if (visited[next] == -1) {
                visited[next] = (visited[cur] +1) % 2;
                queue.enqueue(next);
            }
        }

    }

    let res = "YES";
    for (let i=1; i<=v; i++) {
        for (let x of graph[i]) {
            if (visited[x] == visited[i]) {
                res = "NO";
            }
        }
    }
    console.log(res);
    line += v;
}