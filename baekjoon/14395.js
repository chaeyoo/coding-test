import {Queue} from "../algorithm/bfs/index.js";

const test = "7 392";
const input = test.toString().split('\n');
let [s, t] = input[0].split(' ').map(Number);
let queue = new Queue();
queue.enqueue([s, ""]);
let visited = new Set([s]);
let found = false;

if (s == t) {
    console.log(0);
}
while(queue.getLength() != 0) {
    let [value, oprs] = queue.dequeue();
    if (value > 1e9) continue;
    if (value == t) {
        console.log(oprs);
        found = true;
        break;
    }
    for (let opr of ['*', '+', '-', '/']) {
        let nextVal = value;
        if (opr == '*') nextVal *= value;
        if (opr == '+') nextVal += value;
        if (opr == '-') nextVal -= value;
        if (opr == '/' && value != 0) nextVal = 1;
        if (!visited.has(nextVal)) {
            queue.enqueue([nextVal, oprs + opr]);
            visited.add(nextVal);
        }
    }
}

if (!found) console.log(-1);


