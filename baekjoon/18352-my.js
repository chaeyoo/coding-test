import {Queue} from "../algorithm/bfs/index.js";

// 내 풀이 process
// visited 배열이랑 distance 배열을 따로 둠
// queue에 집어넣을 때 node랑 cost를 같이 넣고
// dequeue 할 때 distance에 기록
const test = "4 3 2 1\n" + "1 2\n" + "1 3\n" + "1 4";
const input = test.toString().split('\n');
let [n, m, k, x] = input[0].split(' ').map(Number);
let graph = [];
let distance = [];
let visited = new Array(n+1).fill(false);
for (let i=0; i<=n; i++) {
    graph[i] = [];
    distance[i] = [];
}
for (let i=1; i<=m; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
}
let queue = new Queue();
queue.enqueue([x, 0]);
visited[x] = true;

while(queue.getLength() != 0) {
    let [cur, dis] = queue.dequeue();
    distance[cur] = dis;
    for (let next of graph[cur]) {
        if (!visited[next]) {
            visited[next] = true;
            queue.enqueue([next, dis+1]);
        }
    }
}
let result = ""
distance.map((v, i) => {
    if (v == k) result += i + '\n';
});

console.log(result ? result : -1)