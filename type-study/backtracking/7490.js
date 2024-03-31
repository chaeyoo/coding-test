const test = "2\n" + "3\n" + "7";
const input = test.toString().split('\n').map(Number);
const tc = input.length;
let selected = [];
let n = 0;
let anwer = '';
for (let i = 0; i < tc; i++) {
    selected = [];
    n = input[i];
    dfs(0, n, selected, anwer);
}

function dfs(depth, num, selected, answer) {
    if (depth == num - 1) {
        for (let i = 1; i <= num - 1; i++) {
            answer += i + selected[i];
        }
        answer +=num;

        // let result = answer.trim().eval();
        if (result == 0) {
            console.log(answer);
        }
        return;
    }

    for (let x of ['+', '-', ' ']) {
        selected.push(x);
        dfs(depth + 1, num, selected, answer);
        selected.pop();
    }

}