import {Queue} from "../algorithm/bfs/index.js";

// 정답 풀이 process
// distance 배열을 visited 배열로 사용함
// queue에 집어넣을 때 node만 넣고 최초에 distance[x]에 0을 넣어놓음
// dequeue한 값으로 인접리스트 반복문 돌 때 distance[cur] + 1해서 거리를 기록

const test = "4 3 2 1\n" +
    "1 2\n" +
    "1 3\n" +
    "1 4";
const input = test.toString().split('\n');

let [n, m, k, x] = input[0].split(' ').map(Number);
let graph = [];
let distance = new Array(n+1).fill(-1);
distance[x] = 0;

for (let i=0; i<=n; i++) {
    graph[i] = [];
}

for (let i=1; i<=m; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
}

// console.log(graph);
// console.log(distance);

let queue = new Queue();
queue.enqueue(x);

while(queue.getLength() != 0) {
    let cur = queue.dequeue();
    for (let next of graph[cur]) {
        if (distance[next] == -1) {
            distance[next] = distance[cur] + 1;
            queue.enqueue(next);
        }
    }
}
let result = ""
distance.map((v, i) => {
    if (v == k) {
        result += i + '\n';
    }
});

console.log(result ? result : -1)