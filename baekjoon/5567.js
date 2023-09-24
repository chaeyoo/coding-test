import {Queue} from "../algorithm/bfs/index.js";

const test = "6\n" + "5\n" + "2 3\n" + "3 4\n" + "4 5\n" + "5 6\n" + "2 5";
const input = test.toString().split('\n');
const n = Number(input[0]);
const m = Number(input[1]);
let visited = new Array(n+1).fill(-1);
let graph = [];
for (let i=1; i<=n; i++) {
    graph[i] = [];
}
for (let i=0; i<m; i++) {
    let [x, y] = input[i+2].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

let queue = new Queue();
visited[1] = 0;
queue.enqueue([1, 0]);

while (queue.getLength() != 0) {
    let [cur, depth] = queue.dequeue();
    for (let y of graph[cur]) {
        if(visited[y] == -1) {
            visited[y] = depth + 1;
            queue.enqueue([y, depth+1]);
        }
    }
}
let cnt = 0;
for (let x of visited) {
    if (x ===1 || x=== 2) cnt++;
}
console.log(cnt);


