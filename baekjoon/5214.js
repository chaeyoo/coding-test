import {Queue} from "../algorithm/bfs/index.js";

const test = "9 3 5\n" + "1 2 3\n" + "1 4 5\n" +
    "3 6 7\n" + "5 6 7\n" + "6 8 9";
const input = test.toString().split('\n');

let [n, k, m] = input[0].split(' ').map(Number);

let graph = [];
// 하이퍼튜브도 노드로 만들기
// 인접리스트 형태로 만드는데, 인접리스트 요소 개수를 역개수 + 하이퍼튜브 개수
for (let i=1; i<=n+m; i++) {
    graph[i] = [];
}

// 역 다음 번호 (10)부터 하이퍼 튜브에 할당
for(let i=1; i<=m; i++) {
    let arr = input[i].split(' ').map(Number);
    for (let x of arr) {
        graph[x].push(n+i);
        graph[n+i].push(x);
    }
}

let visited = new Set([1]);
let queue = new Queue();

queue.enqueue([1, 1]); // [거리, 노드번호]
let found = false;

while (queue.getLength() != 0) {
    let [dist, cur] = queue.dequeue();
    if (cur == n) {
        // 역1-하-역2-하-역3 => 답은 3
        console.log(parseInt(dist/2) + 1);
        found = true;
        break;
    }

    // 역 -> 인접 하이퍼튜브 -> 역 -> 인접 하이퍼튜브.. 순서로
    for (let y of graph[cur]) {
        if (!visited.has(y)) {
            queue.enqueue([dist + 1, y]);
            visited.add(y);
        }
    }
}

if (!found) console.log(-1);




