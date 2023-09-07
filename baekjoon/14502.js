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
let tmp = [];
for (let i = 0; i < n; i++) {
    let line = input[i+1].split(' ').map(Number);
    graph.push(line);
    tmp.push(new Array(m).fill(0));
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let result = 0;

dfs(0);
console.log(result);
// 바이러스 퍼트리기
function virusDfs(x, y) {
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
// 안전지대 세기
function getSafeZone() {
    let num = 0;
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (tmp[i][j] == 0) num += 1;
        }
    }
    return num;
}

// 벽 3개 세우기
function dfs(depth) {
    if (depth === 3) {
        for(let i=0; i<n;i++) {
            for (let j=0; j<m; j++ ){
                tmp[i][j] = graph[i][j];
            }
        }
        // console.log(tmp)
        for(let i=0; i<n;i++) {
            for (let j=0; j<m; j++ ){
                if (tmp[i][j] == 2) virusDfs(i, j);
            }
        }
        result = Math.max(result, getSafeZone());
        return;
    }
   for (let i=0; i<n;i++) {
       for (let j=0; j<m; j++) {
           if (graph[i][j] == 0) {
               graph[i][j] = 1;
               dfs(depth + 1);
               graph[i][j] = 0;
           }
       }
   }
}
