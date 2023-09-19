import {Queue} from "../algorithm/bfs/index.js";

const test = "3\n" + "8\n" + "0 0\n" + "7 0\n" +
    "100\n" + "0 0\n" + "30 50\n" +
    "10\n" + "1 1\n" + "1 1";
const input = test.toString().split('\n');

let dx = [-2, -2, -1, -1, 1, 1, 2, 2];
let dy = [-1, 1, -2, 2, -2, 2, -1, 1];

let testCases = Number(input[0]);
let line = 1;
while(testCases--) {
    let l = Number(input[line]);
    let [x, y] = input[line+1].split(' ').map(Number);
    let [targetX, targetY] = input[line+2].split(' ').map(Number);

    // 거리 배열 lxl 크기로 생성
    let visited = [];
    for (let i=0; i<l; i++) {
        visited.push(new Array(l).fill(0));
    }

    // bfs process
    // 1. 최초 노드 큐에 넣고, 최초 거리를 1로 두기
    // 2. 큐 길이가 0 될 때까지 디큐
    // 3. 디큐하면서 8개 위치 반복문 (반복문 하기 위해 이전 위치가 필요하므로 변수에 저장)
    // 4. 8개 위치들의 범위가 유효한지 & 방문한적 있는지 체크
    // 5. 해당 없으면 방문 처리하고 (거리 기록하고) 인큐
    // 6. 테스트 케이스 마지막 줄에 타겟 위치의 거리값 -1 을 출력
    let queue = new Queue();
    queue.enqueue([x, y]);
    visited[x][y] = 1;
    while(queue.getLength() != 0) {
        let cur = queue.dequeue();
        let x = cur[0];
        let y = cur[1];
        for (let i=0; i<8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx < 0 || ny < 0 || nx >= l || ny >= l) continue;
            if (visited[nx][ny] == 0) {
                visited[nx][ny] = visited[x][y] + 1;
                queue.enqueue([nx, ny]);
            }
        }
    }

    line += 3;
    console.log(visited[targetX][targetY] - 1);
}