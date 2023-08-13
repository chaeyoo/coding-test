const test = "2\n3\n7";

const input = test.toString().split('\n');
const testCase = Number(input[0]);

let n = 0;
let arr = [];
for (let tc=1; tc<=testCase; tc++) {
    arr = [];
    n = Number(input[tc]);
    for (let i=1; i<=n; i++) {
        arr.push(i);
    }
    dfs([], 0);
    console.log();
}

function dfs(result, depth) {

    if (depth === n-1) {
        let str = "";
        for (let i=0; i<n-1; i++) {
            str += arr[i] + result[i]
        }
        str += arr[n-1];
        if (eval(str.split(' ').join('')) === 0) console.log(str);
        return;
    }
    for (let x of [' ', '+', '-']) {
        result.push(x);
        dfs(result, depth + 1);
        result.pop();
    }
}