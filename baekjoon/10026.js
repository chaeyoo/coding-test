const test = "5\n"
    + "RRRBB\n" + "GGBBB\n" + "BBBRR\n" + "BBRRR\n" + "RRRRR";
const input = test.toString().split('\n');
const n = Number(input[0]);
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = [...input[i + 1].split('')];
}
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let result1 = 0;
let visited = [];
for (let i=0; i<n; i++) {
    visited.push(new Array(n).fill(false));
}
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        if (dfs(arr, n, i, j)) result1++;
    }
}

for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        if (arr[i][j] == 'R') arr[i][j] = 'G';
    }
}
let result2 = 0;
visited = [];
for (let i=0; i<n; i++) {
    visited.push(new Array(n).fill(false));
}

for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        if (dfs(arr, n, i, j)) result2++;
    }
}
console.log(result1 +'\n'+result2);

function dfs(arr, n, x, y) {
    if (!visited[x][y]) {
        visited[x][y] = true;
        for (let i=0; i<4; i++) {
            let nx = x+dx[i];
            let ny = y+dy[i];
            if (nx<0 || ny<0 || nx >=n|| ny>=n) continue;
            if (arr[x][y] == arr[nx][ny]) dfs(arr, n, nx, ny);
        }
        return true;
    }
    return false;
}