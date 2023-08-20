const test = "7 1 2 3 4 5 6 7\n" + "8 1 2 3 5 8 13 21 34\n" + "0";

const input = test.toString().split('\n');
const testCase = input.length - 1;
let arr = [];
let n = 0;
let str = ""
let selected = [];
let visited = new Array(50).fill(false);
for (let tc = 0; tc < testCase; tc++) {
    const tcArr = input[tc].split(' ').map(Number);
    arr = [];
    selected = [];
    n = tcArr[0];

    for (let i = 1; i <= n; i++) {
        arr.push(tcArr[i])
    }
    dfs(arr, 0, 0);
    str += '\n';
}
console.log(str);

function dfs(arr, depth, start) {
    if (depth === 6) {
        for (let y of selected) {
            str += y + ' ';
        }
        str += '\n';
        return;
    }

    for (let i = start; i < n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(arr[i]);
        dfs(arr, depth + 1, i + 1);
        visited[i] = false;
        selected.pop();
    }
}

