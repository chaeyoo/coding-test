import {Queue} from "../algorithm/bfs/index.js";

const test = "2 162";
const input = test.toString().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let flag = false;

let queue = new Queue();

let visited = new Set([n]);
queue.enqueue([n, 1]);

while(queue.getLength() != 0) {
    let [cur, depth] = queue.dequeue();
    if (cur > 1e9) continue;
    if (cur === m) {
        console.log(depth);
        flag = true;
        break;
    }
    for (let x of [Number(cur.toString()+1), cur*2]) {
        if (!visited.has(x)) {
            queue.enqueue([x, depth+1]);
            visited.add(x);
        }
    }
}

if (!flag) console.log(-1);