/**
 * N개의 창고가 있을 때, 얻을 수 있는 식량의 최댓값
 * 이때, 최소한 한 칸 이상 떨어진 창고들만 선택하여 털 수 있다.
 */

let n = 4;
let arr = [1, 3, 1, 5];
let d = new Array(100).fill(0);

d[0] = arr[0];
d[1] = Math.max(arr[0], arr[1]);

for (let i=2; i<n; i++) {
    d[i] = Math.max(d[i-1], d[i-2] + arr[i]);
}
console.log(d[n-1]);