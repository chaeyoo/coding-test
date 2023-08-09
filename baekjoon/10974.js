const test = "3";
const input = test.toString().split("\n");
const n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

const selected = [];
const visited = Array(n).fill(false);

let answer = "";
function dsf(arr, depth) {

    for (let i = 0; i < n; i++) {

        if (depth == n) {
            const result = [];
            for (let x of selected) {
                result.push(arr[x]);
            }
            for (let y of result) {
                answer += y + " "
            }
            answer += "\n";
            return;
        }

        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dsf(arr, depth + 1);
        selected.pop();
        visited[i] = false;
    }
}

dsf(arr, 0);
console.log(answer);