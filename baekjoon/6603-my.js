const test = "7 1 2 3 4 5 6 7\n" +
    "8 1 2 3 5 8 13 21 34\n" +
    "0";

const input = test.toString().split('\n');
const testCase = input.length -1;
let arr = [];
let n = 0;
let str = ""
let visited = new Array(50).fill(false);
for (let tc=0; tc<testCase; tc++) {
    const tcArr = input[tc].split(' ').map(Number);
    arr = [];
    n = tcArr[0];

    for (let i=1; i<=n; i++) {
        arr.push(tcArr[i])
    }
    dfs([], 0);
    str += '\n';
}
console.log(str);

function dfs (result, depth) {
    if (depth === 6) {

        for (let y of result) {
            str += y + ' ';
        }
        str += '\n';
        return;
    }

    for (let i=0; i<n; i++) {
        if (visited[i]) continue;
        if (result.length > 0 && result[result.length -1] > arr[i]) continue;
        visited[i] = true;
        result.push(arr[i]);
        dfs(result, depth + 1);
        visited[i] = false;
        result.pop();
    }
}
