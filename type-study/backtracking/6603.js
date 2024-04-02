const test = "7 1 2 3 4 5 6 7\n" + "8 1 2 3 5 8 13 21 34\n" + "0";
const input = test.toString().split('\n');
let tc = input.length -1;

let selected = [];
let visited = [];
let graph = [];
let n = 0;

for (let i=0; i<tc; i++) {
    graph = [];
    selected = [];
    visited = new Array(50).fill(false);
    let arr = input[i].split(' ').map(Number);
    n = arr[0];
    for (let j=1; j<=n; j++) {
        graph.push(arr[j]);
    }

    dfs(0, 0);
    console.log();
}

function dfs(depth, start) {
    let answer = "";
    if (depth == 6) {
        for (let x of selected) {
            answer += graph[x] + " ";
        }
        console.log(answer);
    }


    for (let i=start; i<n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1, i+1);
        visited[i] = false;
        selected.pop();
    }
}