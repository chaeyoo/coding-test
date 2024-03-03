
let INF = 1e9;
let n = 6;
let m = 9;
// let edges = [ // [a, b, c]: a에서 b로 가는 비용이 c라는 의미
//     [1, 2, 6],
//     [1, 3, 2],
//     [2, 3, 2],
//     [2, 4, 2],
//     [3, 5, 1],
//     [4, 6, 2],
//     [5, 2, 1],
//     [5, 4, 3],
//     [5, 6, 4]
// ];
// let edges = [ // [a, b, c]: a에서 b로 가는 비용이 c라는 의미
//     [1, 2, 6],
//     [1, 3, 2],
//     [2, 3, 2],
//     [2, 4, 2],
//     [3, 5, 1],
//     [4, 6, 2],
//     [5, 2, -2],
//     [5, 4, 3],
//     [5, 6, 4]
// ];
let edges = [ // [a, b, c]: a에서 b로 가는 비용이 c라는 의미
    [1, 2, 6],
    [1, 3, 2],
    [2, 3, 2],
    [2, 4, 2],
    [3, 5, 1],
    [4, 6, 2],
    [5, 2, -4],
    [5, 4, 3],
    [5, 6, 4]
];

let dist = new Array(n + 1).fill(INF);

function bf(startNode) {
    dist[startNode] = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let [cur, nextNode, cost] = edges[j];
            // 현재 간선을 거쳐 다른 노드로 이동하는 거리가 더 짧은 경우
            if (dist[cur] != INF && dist[nextNode] > dist[cur] + cost) {
                dist[nextNode] = dist[cur] + cost;
                // n번째 라운드에서도 값이 갱신된다면 음수 순환이 존재
                if (i == n - 1) return true;
            }
        }
    }
    return false;
}

let negativeCycle = bf(1);
if (negativeCycle) console.log(-1);
else {
    // 1번 노드를 제외하고 다른 노드로 가기 위한 최단 거리 출력
    for (let i = 2; i <= n; i++) {
        if (dist[i] == INF) console.log(-1);
        else console.log(dist[i]);
    }
}