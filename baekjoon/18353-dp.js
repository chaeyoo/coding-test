const test = "7\n15 11 4 8 5 2 4";
const input = test.toString().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

arr.reverse();

let dp = new Array(n).fill(1);
for (let i=1; i<n; i++) {
    for (let j=0; j<i; j++) {
        if (arr[j] < arr[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }
}
console.log(n- Math.max(...dp))