const test = "4 2";
const input = test.toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);

let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}
console.log(arr);

let visited = new Array(n).fill(false);
let selected = [];
let answer = "";
function dfs(depth) {
    if (depth == m) {
        for (let x of selected) {
            answer += arr[x] +" ";
        }
        answer += "\n";
        return;
    }

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1)
        visited[i] = false;
        selected.pop();
    }
}

dfs(0);
console.log(answer);