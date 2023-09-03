const test2 = "5 2\n" +
    "0 2 0 1 0\n" +
    "1 0 1 0 0\n" +
    "0 0 0 0 0\n" +
    "2 0 0 1 1\n" +
    "2 2 0 1 2";
const input = test2.toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let chicken = [];
let house = [];
for (let i=1; i<=n; i++) {
    let line = input[i].split(' ').map(Number);
    for (let j=0; j<n; j++) {
        if (line[j] == 1) house.push([i, j]);
        if (line[j] == 2) chicken.push([i, j]);
    }
}
console.log('chicken:', chicken);
console.log('house:', house);
let visited = new Array(chicken.length).fill(false);
let selected = [];
let answer = 1e9;
dfs(0,0);
console.log(answer);

function dfs(depth, start) {
    // 뎁스가 치킨집의 개수가 되었을 때
    if (depth == m) {
        // 여기서 선택된 selected의 배열에는 치킨집 배열의 인덱스가 들어있다
        let result = []; // 조합 결과 저장 테이블 (왜냐면 selected는 그냥 인덱스조합)
        for (let i of selected) {
            result.push(chicken[i]);
        }
        // 치킨거리합
        let sum = 0;
        for (let [hx, hy] of house) {
            let tmp = 1e9;
            for (let [cx, cy] of result) {
                tmp = Math.min(tmp, Math.abs(hx-cx) + Math.abs(hy-cy));
            }
            sum += tmp; // 여기서 sum은 한 개의 집의 최소 치킨거리
        }
        answer = Math.min(answer, sum);
        return;
    }

    for (let i=start; i<chicken.length; i++) {
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
}

// ***** m개의 치킨집은 m개 이상인 치킨집 중에 중복없이 고르는 것
// 일단 치킨집의 조합을 먼저 구해야 하기 때문에
// 백트래킹으로 치킨집의 조합을 먼저 구함
// test2는 치킨집이 5개 이지만 그중 2개를 선택함
// 그래서 depth가 m일 때 거리를 구하게 된다.