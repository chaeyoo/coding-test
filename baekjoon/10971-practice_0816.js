const test = "4\n" + "0 10 15 20\n" + "5 0 9 10\n" +
    "6 13 0 12\n" + "8 8 9 0";
const input = test.toString().split("\n");
const n = Number(input[0]);
const graph = [];
for (let i = 0; i <= n; i++) {
  graph.push([0]);
}
const selected = [];
const visited = new Array(11).fill(false);
for (let i = 1; i <= n; i++) {
  const nums = input[i].split(" ").map(Number);
  for (let j = 0; j < n; j++) {
    graph[i].push(nums[j]);
  }
}
let minValue = 1e9;
dfs(0);
console.log(minValue);

function dfs(depth) {
  if (depth === n - 1) {
    let totalCost = 0;
    let cur = 1;
    for (let i=0; i<n-1; i++) {
      let next = selected[i];
      let cost = graph[cur][next];
      if (cost === 0) return;
      totalCost += graph[cur][next];
      cur = next;
    }
    let cost = graph[cur][1];
    if (cost === 0) return;
    totalCost += cost;

    minValue = Math.min(minValue, totalCost);
    return;
  }
  for (let i = 2; i <= n; i++) {
    if(visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

