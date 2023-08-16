// 중간에 console.log() 찍어서 시간초과

let test = '3 3'
let input = test.toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let answer = "";
const arr = [];
for (let i=1; i<=n; i++) {
    arr.push(i);
}
const selected = []
function dfs(arr, depth) {
    if (depth === m) {
        let str = "";
        for (let x of selected) {
            str += x + ' ';
        }
        answer += str + '\n';
        return;
    }

    for (let i=0; i<arr.length; i++) {
        selected.push(arr[i]);
        dfs(arr, depth + 1);
        selected.pop();
    }
}

dfs(arr, 0);
console.log(answer)