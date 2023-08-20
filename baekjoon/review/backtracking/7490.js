const test = "2\n" +
    "3\n" +
    "7";

const input = test.toString().split('\n').map(Number);
const testCase = input[0];

let arr = [];
let n = 0;
let answer = "";
for (let tc=1; tc<=testCase; tc++) {
    arr = [];
    n = input[tc];
    for (let i=1; i<=n; i++) {
        arr.push(i);
    }

    dfs([], 0);
    answer += '\n';
}

console.log(answer);
function dfs(result, depth) {
    if (depth === n-1) {
        let str = "";
        for (let i=0; i<n-1; i++) {
            str += arr[i] + result[i];
        }
        str += arr[n-1];
        if (eval(str.toString().split(' ').join('')) === 0) {
            answer += str + '\n';
        }
        return;
    }

    for (let x of [' ', '+', '-']) {
        result.push(x);
        dfs(result, depth + 1);
        result.pop();
    }
}