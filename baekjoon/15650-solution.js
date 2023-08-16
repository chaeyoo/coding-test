
let input = '4 2'

const [n, m] = input.toString().split(' ').map(Number);
const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

const selected = [];
const visited = Array(n).fill(false);

dfs(arr, 0, 0);

function dfs(arr, depth, start) {
    let answer = ""
    if (depth === m) {
        const result = [];
        for (let x of selected) {
            result.push(arr[x])
        }
        for (let y of result) {
            answer += y + ' ';
        }
        console.log(answer)
        return;
    }

    for (let i = start; i < arr.length; i++) {

        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(arr, depth + 1, i+1);
        visited[i] = false;
        selected.pop();
    }
}