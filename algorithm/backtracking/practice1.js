const test = "3";
const input = test.toString().split('\n');

const n = Number(input[0]);
const arr = [];
const visited = Array(n).fill(false);
const selected = [];
let answer = "";
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

function dfs(arr, depth) {
    if (depth === n) {
        const result = [];
        for (let x of selected) {
            result.push(arr[x]);
        }
        for (let y of result) {
            answer += y + ' '
        }
        answer += "\n";
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(arr, depth + 1);
        visited[i] = false;
        selected.pop();
    }
}

dfs(arr, 0);
console.log(answer)