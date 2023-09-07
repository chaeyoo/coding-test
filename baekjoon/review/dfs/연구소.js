
const test = "7 7\n" +
    "2 0 0 0 1 1 0\n" +
    "0 0 1 0 1 2 0\n" +
    "0 1 1 0 1 0 0\n" +
    "0 1 0 0 0 0 0\n" +
    "0 0 0 0 0 1 1\n" +
    "0 1 0 0 0 0 0\n" +
    "0 1 0 0 0 0 0";

const input = test.toString().split("\n");
let [n, m] = input[0].split(" ").map(Number);

let graph = [];
let tmp = [];
let result = 0;

for(let i=0; i<n; i++) {
    graph[i] = input[i+1].split(" ").map(Number);
    tmp[i] = [];
}
for (let i=0; i<n; i++) {
    tmp[i] = new Array(m).fill(0);
}
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

// console.log(graph);

dfs(0);
console.log(result);
function virus(x, y){
    for (let i=0; i<4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx < 0 || ny<0 || nx>=n || ny >=n) continue;
        if (tmp[nx][ny] == 0) {
            tmp[nx][ny] = 2;
            virus(nx, ny);
        }
    }
}

function getSafeZone() {
    let cnt = 0;
    for(let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (tmp[i][j] == 0) cnt++;
        }
    }
    return cnt;
}

function dfs(depth) {
    if (depth ==3) {
        for (let i=0; i<n; i++) {
            for(let j=0; j<m; j++) {
                tmp[i][j] = graph[i][j];
            }
        }

        for (let i=0; i<n; i++) {
            for(let j=0; j<m; j++) {
                if (tmp[i][j] == 2) virus(i, j);
            }
        }
        result = Math.max(result, getSafeZone());
        return;
    }

    for(let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (graph[i][j] == 0) {
                graph[i][j] = 1;
                dfs(depth+1);
                graph[i][j] = 0;
            }
        }

    }

}




