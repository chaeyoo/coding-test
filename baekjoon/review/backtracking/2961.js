const test = "4\n" +
    "1 7\n" +
    "2 6\n" +
    "3 8\n" +
    "4 9";

const input = test.toString().split('\n');
const n = Number(input[0]);

const arr = [];
for (let i=1; i<=n; i++) {
    arr.push(input[i].split(' ').map(Number));
}

let minValue = 1e9;
const selected = [];
const visited = new Array(10).fill(false);

dfs(0, 0);
console.log(minValue);

function dfs(depth, start) {

    if (depth >= 1) {
        let sour = 1;
        let bit = 0;
        for (let x of selected) {
            let [n, m] = arr[x];
            sour *= n;
            bit += m;
        }
        minValue = Math.min(minValue, Math.abs(sour - bit));
        // return; ??? 리턴을 안해요
    }
    for (let i=start; i<n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1, i+1);
        visited[i] = false;
        selected.pop();
    }
}