const test = "7\n" + "6\n" +
    "1 2\n" + "2 3\n" +
    "1 5\n" + "5 2\n" +
    "5 6\n" + "4 7";
const input = test.toString().split('\n');
let n = Number(input[0]);
let m = Number(input[1]);
let graph = [...new Array(n + 1)].map(() => []);
let visited = [...new Array(n + 1)].fill(0);
let ans = 0;

for (let i = 0; i < m; i++) {
    let x = Number(input[i + 2].split(" ")[0]);
    let y = Number(input[i + 2].split(" ")[1]);
    graph[x].push(y);
    graph[y].push(x);
}

visited[1] = 1;
function dfs(x) {
    for (let y of graph[x]) {
        if (!visited[y]) {
            visited[y] = 1;
            ans++;
            dfs(y);
        }
    }
}
dfs(1);
console.log(ans);



