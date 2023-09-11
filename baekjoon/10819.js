const test = "6\n" + "20 1 15 8 4 10";
const input = test.toString().split('\n');
const n = Number(input[0]);

const arr = input[1].split(' ').map(Number);
const visited = new Array(n).fill(false);
const selected = [];
let answer = 0;
dfs(0);
console.log(answer);
function dfs(depth) {
    if (depth === n) {
        let sum = 0;
        let nums = [];
        for (let x of selected) {
            nums.push(arr[x]);
        }
        for(let i=0; i<n-1; i++) {
            sum += Math.abs(nums[i] - nums[i+1])
        }
        answer = Math.max(sum, answer);
        return false;
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            selected.push(i);
            dfs(depth + 1);
            visited[i] = false;
            selected.pop();
        }
    }
}