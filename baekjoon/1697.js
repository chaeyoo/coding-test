import {Queue} from "../algorithm/bfs/index.js";

const test = "5 17";
const input = test.toString().split('\n');
const MAX = 100001;
let [n, k] = input[0].split(' ').map(Number);
let visited = new Array(MAX).fill(0);

function bfs() {
    // process
    // 1. 최초 노드 큐에 넣기 (방문처리 필요있으면 하고 아님말고)
    // 2. 큐 길이가 0 될 때까지 디큐
    // 3. 디큐하면서 인접노드들 반복문 (디큐했을 때 그 값이 목표값이라면 리턴 거리값)
    // 4. 인접노드들의 범위가 유효한지 & 방문한적 있는지 체크
    // 5. 해당없으면 방문처리하고 인큐 (방문처리는 해당 위치까지 거리 값이라는 의미가 있음)
    const queue = new Queue();
    queue.enqueue(n);
    while (queue.getLength() !== 0) {
        let cur = queue.dequeue();
        if (cur == k) {
            return visited[cur];
        }
        for (let next of [cur - 1, cur + 1, cur *2]) {
            if (next < 0 || next >= MAX) continue;
            if (visited[next] == 0) {
                visited[next] = visited[cur] + 1; // 방문처리 && 해당 위치까지 거리값을 기록
                queue.enqueue(next);
            }
        }
    }
}
console.log(bfs());


