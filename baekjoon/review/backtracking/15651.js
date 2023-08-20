const test = "3 3";

const input = test.toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const arr = [];
let answer = "";
let selected = [];
for (let i=1; i<=n; i++) {
    arr.push(i);
}

dfs(arr, 0);
console.log(answer);

function dfs(arr, depth) {
    if (depth === m) {
        for (let x of selected) {
            answer += x + " ";
        }
        answer += '\n';
        return;
    }

    for (let i=0; i<n; i++) {
        selected.push(arr[i]);
        dfs(arr, depth + 1);
        selected.pop();
    }
}