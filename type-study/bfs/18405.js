import { Queue } from "../../algorithm/bfs/index.js";

const test = "3 3\n" + "1 0 2\n" + "0 0 0\n" + "3 0 0\n" + "2 3 2";

const input = test.toString().split('\n');
let [n, k] = input[0].split(' ').map(Number);

let graph = [];
let data = [];

for (let i = 0; i < n; i++) {
    graph[i] = input[i + 1].split(' ').map(Number);
    for (let j = 0; j < n; j++) {
        if (graph[i][j] != 0) {
            data.push([graph[i][j], 0, i, j]);
        }
    }
}

// console.log(graph);

data.sort((a, b) => a[0] - b[0]);
let queue = new Queue();
for (let x of data) {
    queue.enqueue(x);
}

// console.log(queue);
let [trgtS, trgtX, trgtY] = input[n + 1].split(' ').map(Number);

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

while (queue.getLength() != 0) {
    let [virus, s, x, y] = queue.dequeue();
    if (trgtS === s) break;
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
            if (graph[nx][ny] == 0) {
                graph[nx][ny] = virus;
                queue.enqueue([virus, s + 1, nx, ny]);
            }
        }
    }
}

console.log(graph[trgtX - 1][trgtY - 1]);