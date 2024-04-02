const test = "2\n" +
    "< >";
const input = test.toString().split('\n');
let k = Number(input[0]);
let arr = input[1].split(' ');

let visited = new Array(10).fill(false);
let selected = [];
let graph = [];
for (let i = 0; i < 10; i++) {
    graph.push(i);
}

let start = "";
let end = "";

dfs(0);
console.log(end + '\n' + start);

function dfs(depth) {
    let answer = "";
    if (depth == k + 1) {
        let check = true;
        for (let i = 0; i < k; i++) {
            if (arr[i] == '<' && selected[i] > selected[i + 1]) {
                check = false;
            }
            if (arr[i] == '>' && selected[i] < selected[i + 1]) {
                check = false;
            }
        }

        if (check) {
            for (let x of selected) {
                answer += x + "";
            }
            if (start == "") start = answer;
            end = answer;

        }
    }

    for (let i = 0; i < 10; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1);
        visited[i] = false
        selected.pop();
    }
}