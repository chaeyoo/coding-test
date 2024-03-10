const test = "6 3\n" +
    "1 2\n" + "2 3\n" + "3 4\n" +
    "6 5\n" + "1 2\n" + "2 3\n" + "3 4\n" + "4 5\n" + "5 6\n" +
    "6 6\n" + "1 2\n" + "2 3\n" + "1 3\n" + "4 5\n" + "5 6\n" + "6 4\n" +
    "0 0";

const input = test.toString().split('\n');
let line = 0;
let graph = [];
let visited = [];
let cnt = 0;
while (true) {
    let [x, y] = input[line].split(' ').map(Number);
    if (x == 0 && y == 0) break;
    for (let i = 0; i <= x; i++) {
        graph[i] = [];
    }

    for (let i = 1; i <= y; i++) {
        let [a, b] = input[line + i].split(' ').map(Number);
        graph[a].push(b);
        graph[b].push(a);
    }
    console.log(graph);
    visited = new Array(x + 1).fill(false);
    cnt = 0;

    for (let i = 1; i <= x; i++) {
        if (!visited[i] && !isCycle(i, 0)) cnt++;
    }

    console.log(cnt);
    line += y + 1;

}

function isCycle(x, prev) {
    visited[x] = true;
    for (let y of graph[x]) {
        if (!visited[y]) {
            if (isCycle(y, x)) return true;

        } else if (y != prev) {
            return true;
        }
    }
}