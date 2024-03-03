import PriorityQueue from "../../algorithm/shortestPath/priorityQueue.js";

let INF = 1e9;
let n = 7;
let start = 1;
// [노드, 비용]
let graph = [
    [],
    [[2, 3], [3, 1], [4, 2]],
    [[1, 3], [3, 1], [5, 1]],
    [[1, 1], [2, 1], [4, 3], [6, 5]],
    [[1, 2], [3, 3], [7, 1]],
    [[2, 1], [6, 2]],
    [[3, 5], [5, 2]],
    [[4, 1]]
]
let distance = new Array(n + 1).fill(INF);

function dijkstra() {
    let pq = new PriorityQueue((a, b) => b[0] - a[0]);

    // 시작노드
    pq.enq([0, start]); // 1번 노드 부터 시작 ([거리, 노드])
    distance[start] = 0; // 1번 노드 to 1번 노드 거리: 0

    while (pq.size() != 0) {
        let [dist, now] = pq.deq();
        if (distance[now] < dist) continue; // 처리된 적이 있다면 패스!
        for (let i of graph[now]) {
            let cost = dist + i[1];
            // 최단거리 경로보다 cost가 작은 경우 갱신
            if (cost < distance[i[0]]) {
                distance[i[0]] = cost;
                pq.enq([cost, i[0]]);
            }
        }
    }
}

dijkstra();
for (let i=1; i<=n; i++) {
    if (distance[i] == INF) console.log('INFINITY');
    else console.log(distance[i]);
}

