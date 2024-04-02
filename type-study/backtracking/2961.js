const test = "4\n" +
    "1 7\n" +
    "2 6\n" +
    "3 8\n" +
    "4 9";

const input = test.toString().split('\n');
let n = Number(input[0]);
let minvVal = 1e9;

let visited = new Array(n+1).fill(false);
let selected = [];
let arr = [];
for (let i=0; i<n; i++) {
    arr.push(input[i+1].split(' ').map(Number));
}

console.log(arr);

dfs(0, 0);
console.log(minvVal);

function dfs(depth, start) {

    if (depth >= 1) {
        let sour = 1;
        let bit = 0;

        for (let x of selected ) {
            let [s, b] = arr[x];
            sour *= s;
            bit += b;
        }
        minvVal = Math.min(minvVal, Math.abs(sour-bit));
        
        // 1.* 모든 길이에 대해 경우의 수를 볼 때는 return 구문이 없어야 한다.
        // return; 
    }
    for (let i=start; i<n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(depth+1, i+1);
        visited[i] = false;
        selected.pop();
    }
}

