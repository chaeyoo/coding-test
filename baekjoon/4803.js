const test = "6 3\n" +
    "1 2\n" + "2 3\n" + "3 4\n" +
    "6 5\n" + "1 2\n" + "2 3\n" + "3 4\n" + "4 5\n" + "5 6\n" +
    "6 6\n" + "1 2\n" + "2 3\n" + "1 3\n" + "4 5\n" + "5 6\n" + "6 4\n" +
    "0 0";
const input = test.toString().split('\n');
let line = 0;
let testCase = 1;
let visited = [];
while (true) {
    let [n, m] = input[line].split(' ').map(Number);
    if (n == 0 && m == 0) break;
    graph = [];
    for (let i=1; i<=n; i++) {
        graph[i] = [];
    }
    for (let i=1; i<=m; i++) {
        let [x, y] = input[line+i].split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }
    // console.log(graph)
    // let visited = new Array(n+1).fill(false); (에러남)
    visited = new Array(n+1).fill(false);
    let cnt = 0;
    for (let i=1; i<=n; i++) {
        // 방문한 적 없으면서 사이클이 아니면 cnt++
        if (!visited[i] && !isCycle(i, 0)) cnt++;
    }
    console.log("testCase", testCase);
    console.log("cnt", cnt);
    line += m+1;
    testCase++;
}

function isCycle(node, prevNode) {
   visited[node] = true;
   for (let nextNode of graph[node]) {
       if (!visited[nextNode]) {
           if (isCycle(nextNode, node)) return true;
       } else if (nextNode != prevNode) return true;
   }
   return false;
}