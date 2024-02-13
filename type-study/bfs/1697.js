import { Queue } from "../../algorithm/bfs/index.js";


const test = "5 17";
const input = test.toString().split("\n");
const MAX = 100001; //*
const [n, m] = input[0].split(" ").map(Number); //*map(Number)

const visited = new Array(MAX).fill(0); //*

const queue = new Queue();
queue.enqueue(n);
//* visited[n] = 1
while(queue.getLength != 0) {
    let cur = queue.dequeue();
    if (cur == m) {
        console.log(visited[cur]);
    }
    for (let next of [cur+1, cur-1, cur*2]) {
        if (next >= MAX || next < 0) continue; //*
        if (visited[next] == 0) {
            queue.enqueue(next);
            visited[next] = visited[cur] + 1;
        }
        
    }
}