const test = "2\n" + "3\n" + "7";
const input = test.toString().split('\n').map(Number);
const testCase = input.length;
let selected = [];
let n = 0;
let answer = '';
let graph = [];
for (let tc = 0; tc < testCase; tc++) {
    // 3.* 테스트 케이스마다 초기화 해줘야 하는 부분 놓치지 말기
    graph = []
    selected = [];
    n = input[tc];
    // console.log(n)
    // 4.* 숫자 재료들은 graph로 따로 빼서 만들어주기
    for (let i=1; i<=n; i++) {
        graph.push(i);
    }
    // console.log(graph)
    dfs(selected, 0);
    console.log();
}

// 1.* 재귀함수 파라미터는 재귀함수 호출에 쓰이는 것만 작성
// selected에서 push, pop 해야하므로 selected는 작성
// depth도 체크해야 하므로 depth 작성
function dfs(selected, depth) {
    if (depth == n-1) {
        answer = '';
        
        // 2.* 반복문에서 어디까지 필요한지 제대로 체크 i<=n-1이라고 했음
        for (let i = 0; i < n - 1; i++) {
            answer += graph[i] + selected[i];
        }
        answer += graph[n-1];
        
        // 5.* eval의 활용법
        let cur = eval(answer.split(" ").join(""));
        if (cur == 0) console.log(answer);

        return;
    }

    for (let x of ['+', '-', ' ']) {
        selected.push(x);
        dfs(selected, depth+1);
        selected.pop();
    }

}