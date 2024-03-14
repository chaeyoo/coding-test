const test = "5 2\n" +
    "0 2 0 1 0\n" +
    "1 0 1 0 0\n" +
    "0 0 0 0 0\n" +
    "2 0 0 1 1\n" +
    "2 2 0 1 2";
const input = test.toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// console.log(n, '::', m)

let chicken = [];
let house = [];

for (let i = 1; i <= n; i++) {
    let line = input[i].split(' ').map(Number);
    for (let j = 0; j < n; j++) {
        if (line[j] == 1) house.push([i, j + 1]);
        if (line[j] == 2) chicken.push([i, j + 1]);
    }
}
// console.log(house);
// console.log(chicken);

// 치킨 집중에 m개만 남겨야 한다!

let visited = new Array(chicken.length).fill(false); // 치킨집 거리만큼 방문 배열

let selected = []; // 모든 치킨 집중 m개 선택
let answer = 1e9;

dfs(0, 0);
console.log(answer);

function dfs(depth, start) {
    if (depth === m) {
        let result = [];
        for (let i of selected) {
            result.push(chicken[i]);
        }

        // 모든 집에 대한 치킨 거리 합 담을 곳
        let sum = 0;

        // 한 집에 대해 가장 가까운 치킨 거리
        for (let [hx, hy] of house) {
            let tmp = 1e9;
            for (let [cx, cy] of result) {
                tmp = Math.min(tmp, Math.abs(hx - cx) + Math.abs(hy - cy));
            }
            sum += tmp;
        }

        // m개의 치킨집 조합들 중 가장 작은 치킨 거리 합 가리기
        answer = Math.min(answer, sum);

        return;
    }

    for (let i = start; i < chicken.length; i++) {
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
}