const test = "2\n" + "10 8 17\n" + "0 0\n" +
    "1 0\n" + "1 1\n" + "4 2\n" + "4 3\n" +
    "4 5\n" + "2 4\n" + "3 4\n" + "7 4\n" +
    "8 4\n" + "9 4\n" + "7 5\n" + "8 5\n" +
    "9 5\n" + "7 6\n" + "8 6\n" + "9 6\n" +
    "10 10 1\n" +
    "5 5" ;
const input = test.toString().split('\n');
let testCase = Number(input[0]);
let line = 1;
for (let tc=testCase; tc>0; tc--) {
    let [m, n, k] = input[line].split(' ').map(Number);
    let graph = [];

    // 세로가 m, 가로가 n인 배열
    for (let i=0; i<n; i++) {
        graph[i] = new Array(m);
    }

    for (let i=1; i<=k; i++) {
        let [y, x] = input[line + i].split(' ').map(Number);
        graph[x][y] = 1;
    }

    // dfs
    let answer = 0;
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (dfs(graph, n, m, i, j)) answer++;
        }
    }
    console.log(answer);
    line += k+1;
}

// 깊이 우선 탐색
function dfs(graph, n, m, x, y) {
    // 범위를 벗어나면 즉시 종료
    if (x <= -1 || x>=n || y<= -1 || y >=m) return false;
    // 현재 노드를 아직 처리하지 않았다면?
    if (graph[x][y] == 1) {
        // 해당 노드 방문 처리
        graph[x][y] = -1;
        // console.log(graph)
        //상하좌우를 재귀적으로 호출
        dfs(graph, n, m, x-1, y);
        dfs(graph, n, m, x, y-1);
        dfs(graph, n, m, x+1, y);
        dfs(graph, n, m, x, y+1);
        return true;
    }
    return false;
}



