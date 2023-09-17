import {Queue} from "../algorithm/bfs/index.js";

const test = "3 3\n" + "1 0 2\n" + "0 0 0\n" + "3 0 0\n" + "2 3 2";
const input = test.toString().split('\n');
let [n, k] = input[0].split(' ').map(Number);
let graph = []; // 전체 정보
let data = []; // 바이러스에 대한 정보

for (let i = 0; i < n; i++) {
    graph[i] = input[i+1].split(' ').map(Number);
    for (let j = 0; j < n; j++) {
        if (graph[i][j] != 0) {
            // 초기에 들어있던 바이러스 정보들 담기
            data.push([graph[i][j], 0, i, j]);
        }
    }
}

// 낮은 번호 부터 바이러스가 퍼져 나가도록 정렬!!!!
data.sort((a, b) => a[0] - b[0]);
let queue = new Queue();

// 번호가 낮은 바이러스 부터 인큐
// 최초 상태 바이러스 초기에 한번에 인큐
for (let x of data) {
    queue.enqueue(x);
}
let [targetS, targetX, targetY] = input[n + 1].split(' ').map(Number);

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

while (queue.getLength() != 0) {
    let [virus, s, x, y] = queue.dequeue();
    if (s == targetS) break;
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
            if (graph[nx][ny] == 0) {
                graph[nx][ny] = virus;
                queue.enqueue([virus, s+1, nx, ny]);
            }
        }
    }
}

console.log(graph[targetX - 1][targetY - 1]);