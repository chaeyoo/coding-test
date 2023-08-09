let n = 8; // 맵의 크기
let queens = []; // 체스판에 놓인 퀸의 위치 정보


function possible(x, y) {
    for (let [a, b] of queens) {
        if (a == x || b == y) return false;
        if (Math.abs(a - x) == Math.abs(b - y)) return false;
    }
    return true;
}
let cnt = 0;
function dfs(row) {
    if (row == n) cnt += 1;
    for (let i = 0; i < n; i++) {
        if (!possible(row, i)) continue;
        queens.push([row, i]);
        dfs(row + 1);
        queens.pop();
    }
}
dfs(0);
console.log(cnt);