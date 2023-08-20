let test = '3 3'
let input = test.toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

let selected = [];
let answer = "";
dfs(arr, 0, 0);
console.log(answer);

function dfs(arr, depth, start) {
    if (depth === m) {
        for (let x of selected) {
            answer += x + ' ';
        }
        answer += '\n';
        return;
    }

    for (let i = start; i < arr.length; i++) {
        selected.push(arr[i]);
        dfs(arr, depth + 1, i);
        selected.pop();
    }
}

