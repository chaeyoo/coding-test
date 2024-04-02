const test = "3 6\n" +
    "HFDFFB\n" +
    "AJHGDH\n" +
    "DGAGEH";

let input = test.toString().split('\n');
let [r, c] = input[0].split(' ').map(Number);
let arr = [];

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let maxDepth = 0;

for (let i=0; i<r; i++) {
    arr[i] = input[i+1].split('');
}

console.log(arr);
let visited = new Set(arr[0][0]);
dfs(0, 0, 1);
console.log(maxDepth);

function dfs(x, y, depth) {
    maxDepth = Math.max(maxDepth, depth);

    for (let i=0; i<4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(nx < 0 || ny <0 || nx >=r || ny >= c) continue;
        if (visited.has(arr[nx][ny])) continue;
        visited.add(arr[nx][ny]);
        dfs(nx, ny, depth + 1);
        visited.delete(arr[nx][ny]);
    }
}