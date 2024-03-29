const test = "4\n" +
    "1 7\n" +
    "2 6\n" +
    "3 8\n" +
    "4 9";
const input = test.toString().split('\n');
const n = Number(input[0]);
const arr = [];
for (let i=1; i<=n; i++) {
    let [so, sa] = input[i].split(' ').map(Number);
    arr.push([so, sa]);
}

let minValue = 1e9;
let result = [];
let visited = new Array(n).fill(false);

dfs([], 0);
console.log(minValue);

function dfs(depth, start) {
    if (depth >= 1) {
        let totalX = 1;
        let totalY = 0;
        for (let i of result) {
            let [x, y] = arr[i];
            totalX *= x;
            totalY += y;
        }

        minValue = Math.min(minValue, Math.abs(totalX - totalY));
    }

    for (let i=start; i<n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        result.push(i);
        dfs(depth + 1, i + 1);
        visited[i] = false;
        result.pop();
    }
}
