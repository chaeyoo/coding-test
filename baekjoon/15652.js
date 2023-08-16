let test = '3 3'
let input = test.toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);

const arr = [];
let answer = "";
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

function dfs(result, depth) {
    if (depth === m) {
        for (let x of result) {
            answer += x + ' ';
        }
        answer += '\n';
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if (result.length > 0 && result[result.length -1] > arr[i]) continue;
        result.push(arr[i]);
        dfs(result, depth + 1);
        result.pop();
    }
}


dfs([], 0);
console.log(answer);