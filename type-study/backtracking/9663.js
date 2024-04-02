const input = 8;
let n = Number(input);

let cnt = 0;
let queens = [];

function possible(x, y) {
    for (let [a, b] of queens) {
        if (a == x || b == y) return false;
        if (Math.abs(a - x) == Math.abs(b - y)) return false;
    }
    return true;
}

dfs(0);
console.log(cnt);

function dfs(row) {
    if (row == n) {
        cnt += 1;
    }
    
    // 1.* x축은 row로 y축은 for문으로 체크
    for (let i = 0; i < n; i++) {
        if (!possible(row, i)) continue;
        queens.push([row, i]);
        dfs(row + 1);
        queens.pop();
    }
}

