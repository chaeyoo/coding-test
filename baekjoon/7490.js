const test = "2\n" + "3\n" + "7";
const input = test.toString().split("\n");

let testCase = Number(input[0]);
let n = 0;
let arr = [];
for (let tc = 1; tc <= testCase; tc++) {
    n = Number(input[tc]);
    arr = []; // 반복문 돌면서 초기화
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    dfs([], 0);
    console.log();
}

function dfs(result, depth) {

    if (depth == n - 1) {
        let str = "";
        for (let i = 0; i < n - 1; i++) {
            str += arr[i] + result[i];
        }
        str += arr[n - 1] + "";
        current = eval(str.split(" ").join(""));
        if (current == 0) console.log(str);
        return;
    }

    for (let x of [' ', '+', '-']) {
        result.push(x);
        dfs(result, depth + 1);
        result.pop();
    }

}

