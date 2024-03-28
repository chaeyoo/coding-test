const test = "7 7\n" +
    "2 0 0 0 1 1 0\n" +
    "0 0 1 0 1 2 0\n" +
    "0 1 1 0 1 0 0\n" +
    "0 1 0 0 0 0 0\n" +
    "0 0 0 0 0 1 1\n" +
    "0 1 0 0 0 0 0\n" +
    "0 1 0 0 0 0 0";

const input = test.toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let graph = [];

let tmp = []; //*1-1
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(' ').map(Number));
    tmp.push(new Array(m).fill(0)); //*1-2
}
let result = 0;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
dfs(0);
console.log(result)

function virusDfs(x, y) {
    // 사방으로 이동
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
        if (tmp[nx][ny] == 0) {
            tmp[nx][ny] = 2;
            virusDfs(nx, ny);
        }
    }
}

function getSafeZone() {
    let num = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (tmp[i][j] == 0) num += 1;
        }
    }
    return num;
}
function dfs(depth) {
    if (depth === 3) {
        //*2. depth가 3이 되었을 때 tmp로 옮겨적을 수 있음
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                tmp[i][j] = graph[i][j];
            }
        }

        //옮겨적은 걸로 바이러스 퍼뜨리기
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (tmp[i][j] == 2) virusDfs(i, j);
            }
        }
        result = Math.max(result, getSafeZone());
        return;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (graph[i][j] == 0) {
                graph[i][j] = 1;
                dfs(depth + 1);
                graph[i][j] = 0;
            }
        }
    }
}