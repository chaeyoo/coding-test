const test = "5\n" +
    "14\n" +
    "1 2 2\n" +
    "1 3 3\n" +
    "1 4 1\n" +
    "1 5 10\n" +
    "2 4 2\n" +
    "3 4 1\n" +
    "3 5 1\n" +
    "4 5 3\n" +
    "3 5 10\n" +
    "3 1 8\n" +
    "1 4 2\n" +
    "5 1 7\n" +
    "3 4 2\n" +
    "5 2 4";
const input = test.toString().split('\n');
let n = Number(input[0]);
let m = Number(input[1]);
let INF = 1e9;
let graph = [new Array(n+1).fill(INF)];
for (let i=1; i<=n; i++) {
    graph.push(new Array(n+1).fill(INF));
    graph[i][i] = 0;
}

for (let i=2; i<m+2; i++) {
    let [x, y, z] = input[i].split(' ').map(Number);
    // 그래프에 거리 넣을 때 더 작은 숫자 넣기 => 중복간선 존재
    graph[x][y] = Math.min(graph[x][y], z);
}
// console.log(graph);

for (let k=1; k<=n; k++) {
    for (let a=1; a<=n; a++) {
        for (let b=1; b<=n; b++) {
            let cost = graph[a][k] + graph[k][b];
            graph[a][b] = Math.min(graph[a][b], cost);
        }
    }
}


for (let a=1; a<=n; a++) {
    let line = '';
    for (let b=1; b<=n; b++) {
        if (graph[a][b] == INF) line += '0 ';
        else line += graph[a][b] + ' ';
    }
    console.log(line);
}