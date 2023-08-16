const test = "3 1";
const [n, m] = test.toString().split(' ').map(Number);
const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

let answer = "";
const visited = Array(n).fill(false);

dfs([], 0);
console.log(answer);

function dfs(r, depth) {
    if (depth === m) {
        for (let x of r) {
            answer += x + ' ';
        }
        answer += '\n'
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if (visited[i]) continue;
        if (r.length > 0 && r[r.length - 1] > arr[i]) continue;
        visited[i] = true;
        r.push(arr[i]);
        dfs(r, depth + 1);
        visited[i] = false;
        r.pop();
    }
}
