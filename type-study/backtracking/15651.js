let test = '3 3';
let input = test.toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let graph = [];
let selected = [];

for (let i = 1; i <= n; i++) {
    graph.push(i);
}

dfs(0);
function dfs(depth) {
    let answer = "";
    if (depth == m) {
        for (let x of selected) {
            answer += graph[x] + ' ';
        }
        console.log(answer);
        return ;
    }

    for (let i=0; i<n; i++) {
        selected.push(i);
        dfs(depth + 1);
        selected.pop();
    }
}