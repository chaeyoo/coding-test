const test = "2\n"
    + "7\n" + "3 1 3 7 3 4 6\n"
    + "8\n" + "1 2 3 4 5 6 7 8";
const input = test.toString().split('\n');
let testCase = 2;
let line = 1;
while(testCase--) {
    let n = Number(input[line]);
    let graph = [0, ...input[line + 1].split(' ').map(Number)];
    console.log(graph)
    let visited = new Array(n+1).fill(false);
    let finished = new Array(n+1).fill(false);
    let result = [];

    // 한 사람은 한 사람만 선택할 수 있으니까 1차원 배열로
    for (let x=1; x<=n; x++) {
        if(!visited[x]) dfs(graph, x, visited, finished, result);
    }
    line += 2;
    // console.log(n - result.length)
}
function dfs(graph, node, visited, finished, result) {
    visited[node] = true;
    let nextNode = graph[node];
    if (!visited[nextNode]) {
        dfs(graph, nextNode, visited, finished, result);
    } else if (visited[nextNode] && !finished[nextNode]) {
        // 방문한적 있는데 처리가 되지 않았다면 사이클 발생
        // 한 바퀴가 돌 때까지 result 배열에 넣어줌
        while (nextNode != node) {
            result.push(nextNode);
            nextNode = graph[nextNode];
        }
        result.push(node);
    }
    finished[node] = true;
}



