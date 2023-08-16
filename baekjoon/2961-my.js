const test = "1\n" + "3 10";
const input = test.toString().split('\n');
const n = Number(input[0]);
// 신거랑 짠거 배열을 따로 만듦
const sour = [];
const salty = [];
for (let i = 1; i <= n; i++) {
    let [sw, sa] = input[i].split(' ').map(Number);
    sour.push(sw);
    salty.push(sa);
}
let minValue = 1e9;

dfs([], 0);
console.log(minValue);

function dfs(result, depth) {
    if (depth === n) {
        // 모든 배열의 값이 0인 경우를 거르려고
        let flag = false;
        for (let i = 0; i < n; i++) {
            if (result[i]) flag = true;
        }
        if (!flag) return;
        let sourMul = 1;
        let saltySum = 0;
        for (let i = 0; i < n; i++) {
            sourMul *= result[i] ? sour[i] : 1;
            saltySum += result[i] ? salty[i] : 0;
        }
        minValue = Math.min(minValue, Math.abs(sourMul - saltySum))
        return;
    }
    for (let x of [0, 1]) {
        result.push(x);
        dfs(result, depth + 1);
        result.pop();
    }
}
