let INF = 1e9;
let n = 5;
let graph = [
    [INF, INF, INF, INF, INF],
    [INF, 0, 1, 5, INF, INF],
    [INF, 7, 0, 2, 2, INF],
    [INF, 2, INF, 0, INF, 6],
    [INF, INF, 2, INF, 0, INF],
    [INF, INF, INF, 1, INF, 0]
];

// 점화식에 따라 플로이드 워셜 알고리즘 수행
for (let k = 1; k <= n; k++) {
    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            let cost = graph[a][k] + graph[k][b];
            graph[a][b] = Math.min(graph[a][b], cost);
        }
    }
}

for (let a = 1; a <= n; a++) {
    let line = '';
    for (let b = 1; b <= n; b++) {
        if (graph[a][b] == INF) line += 'INF ';
        else line += graph[a][b] + ' ';
    }
    console.log(line);
}