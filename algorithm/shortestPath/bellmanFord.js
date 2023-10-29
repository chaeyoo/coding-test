
let INF = 1e9;
let n = 6;
let m = 9;
let edges = [
    [1, 2, 6],
    [1, 3, 2],
    [2, 3, 2],
    [2, 4, 2],
    [3, 5, 1],
    [4, 6, 2],
    [5, 2, 1],
    [5, 4, 3],
    [5, 6, 4]
]
let dist = new Array(n+1).fill(INF);
let negativeCycle = bf(1);
if (negativeCycle) {
    console.log(-1);
} else {
    for (let i=2; i<=n; i++) {
        if (dist[i] == INF) {
            console.log(-1);
        } else {
            console.log(dist[i]);
        }
    }
}
function bf(start) {
    dist[start] = 0;
    for (let i=0; i<n; i++) {
        // 반복마다 모든 간선 확인
        for (let j=0; j<m; j++) {
            let [cur, nextNode, cost] = edges[j];
            if (dist[cur] != INF && dist[nextNode] > dist[cur] + cost) {
                dist[nextNode] = dist[cur] + cost;
                if (i == n-1) return true;
            }
        }
    }
    return false;
}