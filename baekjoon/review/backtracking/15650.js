const test = "4 2";
const input = test.toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const arr = [];
const visited = new Array(n).fill(false);
const selected = [];
let answer = "";
for (let i=1; i<=n; i++) {
    arr.push(i);
}
dfs(arr, 0, 0);
console.log(answer);

function dfs (arr, depth, start) {
    if (depth === m) {
        for (let x of selected) {
            answer += x + ' ';
        }
        answer += '\n';
        return;
    }
    for (let i=start; i<n; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        selected.push(arr[i]);
        dfs(arr, depth+1, i+1);
        visited[i] = false;
        selected.pop();
    }
}