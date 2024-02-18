import { Queue } from "../../algorithm/bfs/index.js";

const test = "7 392";
const input = test.toString().split('\n');
let [s, t] = input[0].split(' ').map(Number);

// const MAX = 100000000;
const MAX = 1e9;
let flag = false;

// let visited = new Array(MAX + 1).fill(false);
let queue = new Queue();
queue.enqueue([s, '']);

let visited = new Set([s]);
// visited[s] = true;

while (queue.getLength() != 0) {
    let [cur, str] = queue.dequeue();
    if (cur > 1e9) continue;
    if (cur === t) {
        flag = true;
        console.log(str);
        break;
    }

    for (let a of ['*', '+', '-', '/']) {
        let next = cur;
        if (a == '*') {
            next *= cur;
        }
        if (a == '+') {
            next += cur;
        }
        if (a == '-') {
            next -= cur;
        }
        // if (a == '/' && next > 0) {
        if (a == '/' && next != 0) {
            next /= cur;
        }

        if (!visited.has(next)) {
        // if (!visited[next]) {
            // visited[next] = true;
            visited.add(next);
            queue.enqueue([next, str + a]);
        }
    }
}

if (!flag) {
    console.log(-1);
}