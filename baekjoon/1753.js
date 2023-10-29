import PriorityQueue from "../algorithm/shortestPath/priorityQueue.js";


let test = "5 6\n" +
    "1\n" +
    "5 1 1\n" +
    "1 2 2\n" +
    "1 3 3\n" +
    "2 3 4\n" +
    "2 4 5\n" +
    "3 4 6";
let input = test.toString().split('\n');
let INF = 1e9;
let [n, m] = input[0].split(' ').map(Number);
let start = Number(input[1]);
let graph = [];
for (let i=0; i<=n+1; i++) {
    graph.push([]);
}
for (let i=2; i<=m+1; i++) {
    let [a, b, c] = input[i].split(' ').map(Number);
    // a에서 b까지 이동하는 비용이 c
    graph[a].push([b, c]);
}

let distance = new Array(n+1).fill(INF);
dijkstra();

for (let i=1; i<=n; i++) {
    if (distance[i] == INF) console.log('INF');
    else console.log(distance[i]);
}

function dijkstra() {
    let pq = new PriorityQueue((a, b) => b[0] - a[0]);
    pq.enq([0, start]);
    distance[start] = 0;
    while (pq.size() != 0) {
        let [dist, now] = pq.deq();
        if (distance[now] < dist) continue;
        for (let i of graph[now]) {
            let cost = dist + i[1];
            if (cost < distance[i[0]]) {
                distance[i[0]] = cost;
                pq.enq([cost, i[0]]);
            }
        }
    }
}
