const test = `4
3 3 4
1 1 1 1`;

const input = test.toString().split('\n');

const n = Number(input[0]);

let dis = input[1].split(' ').map(Number);
let cost = input[2].split(' ').map(Number);

let tmpCost = cost[0]
let total = 0;
for (let i = 0; i < n-1 ; i++) {
    if (tmpCost <= cost[i]) {
        total += tmpCost * dis[i]
        tmpCost = Math.min(tmpCost, cost[i+1]);
    } else {
        console.log(cost[i] * dis[i])
        total += cost[i] * dis[i];
    }
}

console.log(total)