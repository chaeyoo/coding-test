const test = "7 1 2 3 4 5 6 7\n" + "8 1 2 3 5 8 13 21 34\n" + "0";

const input = test.toString().split('\n');
let arr = [];
let n = 0;
let answer = "";
const visitied = new Array(49).fill(false);
const selected = [];
for (let tc = 0; tc < input.length - 1; tc++) {
    arr = [];
    const tmp = input[tc].split(' ').map(Number);
    tc = tmp[0];
    arr = tmp.slice(1);
    dfs(arr, 0, 0);
    answer += '\n';
}

console.log(answer)

function dfs(arr, depth, start) {

    if (depth === 6) {
        for (let x of selected) {
            answer += x + ' ';
        }
        answer += '\n';
        return;
    }

    for (let i=start; i<tc; i++) {
        if (visitied[i]) continue;
        visitied[i] = true;
        selected.push(arr[i]);
        dfs(arr, depth+1, i+1);
        visitied[i] = false;
        selected.pop();
    }
}