let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(" ").map(Number)

const arr = [];
for (let i=1; i<=n; i++) {
    arr.push(i);
}

const selected = [];
const visited = Array(n).fill(false);
let answer = ""
function dfs(arr, depth) {
    
    for (let i=0; i<n; i++) {

        if (depth == m) {
            const result  = [];
            for (let x of selected) {
                result.push(arr[x]);
            }

            for (let y of result) {
                answer += y + " "
            }
            answer += "\n";
            return;
        }

        if (visited[i]) {
            continue;
        } else {
            selected.push(i);
            visited[i] = true;
            dfs(arr, depth + 1);
            selected.pop();
            visited[i] = false;
        }
    }
}

dfs(arr, 0);
console.log(answer);