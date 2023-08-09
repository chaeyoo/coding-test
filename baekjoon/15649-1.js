const test = "4 2";
const [n, m] = test.toString().split(' ').map(Number);

let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

let visited = new Array(n).fill(false);
let selected = [];

let answer = "";
function dfs(arr, depth) {

    console.log('dfs 시작: depth::', depth)
    if (depth == m) {
        console.log('m이랑 depth랑 같아ㅏ')
        let result = [];
        for (let i of selected) result.push(arr[i]);
        console.log(result, 'resultresult')
        for (let x of result) answer += x + " ";
        answer += "\n";
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        console.log('for문: depth', depth, '::i: ', i)
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        console.log("111", selected, ':::', visited)
        dfs(arr, depth + 1);
        selected.pop();
        visited[i] = false;
        console.log("222", selected, ':::', visited)
    }
}

dfs(arr, 0);
console.log(answer);


