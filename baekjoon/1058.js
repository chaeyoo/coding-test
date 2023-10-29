// 최단거리가 2이하인 모든 노드 구하기
const test = "10\n" +
    "NNNNYNNNNN\n" +
    "NNNNYNYYNN\n" +
    "NNNYYYNNNN\n" +
    "NNYNNNNNNN\n" +
    "YYYNNNNNNY\n" +
    "NNYNNNNNYN\n" +
    "NYNNNNNYNN\n" +
    "NYNNNNYNNN\n" +
    "NNNNNYNNNN\n" +
    "NNNNYNNNNN";
const input = test.toString().split('\n');
let INF = 1e9;
let n = Number(input[0]);

let graph = [new Array(n+1).fill(INF)];
// 초기 세팅
for (let i=1; i<=n; i++) {
    graph.push(new Array(n+1).fill(INF));
    let line = input[i].split('');
    for (let j=0; j<n; j++) {
        if (line[j] == 'Y') graph[i][j+1] = 1;
    }
}

// 자기 자신으로 가는 비용 0원
for (let i=1; i<=n; i++) {
    graph[i][i] = 0;
}

for (let k=1; k<=n; k++) {
    for (let a=1; a<=n; a++) {
        for (let b=1; b<=n; b++) {
            let cost = graph[a][k] + graph[k][b];
            graph[a][b] = Math.min(graph[a][b], cost);
        }
    }
}

let twoFriends = new Array(n+1).fill(0);
for (let a=1; a<=n; a++) {
    for (let b=1; b<=n; b++) {
        if (a != b && graph[a][b] <= 2) {
            twoFriends[a]++;
        }
    }
}

console.log(Math.max(...twoFriends));