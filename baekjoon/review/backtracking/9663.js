const test = "8";
const input = test.toString().split('\n');
const n = Number(input[0]);
const queens = [];

let cnt = 0;
function possible(a, b) {
    for (let [x, y] of queens) {
        if (a==x || b==y) return false;
        if (Math.abs(a-x) == Math.abs(b-y)) return false;
    }
    return true;
}
dfs(0);
console.log(cnt);

function dfs(row) {
    if (row == n) {
        cnt++;
    }
    for (let i=0; i<n; i++) {
        if (!possible(row, i)) continue;
        queens.push([row, i]);
        dfs(row + 1);
        queens.pop();
    }
}