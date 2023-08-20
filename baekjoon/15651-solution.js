let test = '3 3'
let input = test.toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}
let answer = "";
const selected = [];
dfs(arr, 0);
console.log(answer);

function dfs(arr, depth) {
    if (depth === m) {
        let result = [];
        for (let i of selected) result.push(arr[i]);
        for (let x of result) answer += x + ' ';
        answer += '\n';
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        selected.push(i);
        dfs(arr, depth + 1);
        selected.pop();
    }
}
