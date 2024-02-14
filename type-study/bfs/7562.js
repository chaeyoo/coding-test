import {Queue} from "../../algorithm/bfs/index.js";
const test = "3\n" + "8\n" + "0 0\n" + "7 0\n" +
    "100\n" + "0 0\n" + "30 50\n" +
    "10\n" + "1 1\n" + "1 1";
    const input = test.toString().split('\n');

    let dx = [-2, -2, -1, -1, 1, 1, 2, 2];
    let dy = [-1, 1, -2, 2, -2, 2, -1, 1];
    
    let testCase = Number(input[0]);
    let line = 1;

while(testCase--) {
    let l = Number(input[line]);
    let [initX, initY] = input[line+1].split(' ').map(Number);
    let [targetX, targetY] = input[line+2].split(' ').map(Number);

    let visited = [];
    for (let i=0; i<l; i++) {
        visited.push(new Array(l).fill(0));
    }

    let queue  = new Queue();
    queue.enqueue([initX, initY]);
    visited[initX][initY] = 1;

    while(queue.getLength() != 0) {
        let [x, y] = queue.dequeue();
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