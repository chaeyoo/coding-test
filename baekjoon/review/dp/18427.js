const test = "3 3 5\n" +
    "2 3 5\n" +
    "3 5\n" +
    "1 2 3";

const input = test.toString().split('\n');
const [n, m, h] = input[0].split(' ').map(Number);
const graph = [];

for (let i=1; i<=n; i++) {
    graph.push(input[i].split(' ').map(Number));
}

let d = new Array(h+1).fill(0);
d[0] = 1;

for (let i=0; i<n; i++){
    let data = [];
    for (let j=0; j<=h; j++) {
        for (let k=0; k<m; k++) {
            if (d[j] !== 0 && j + graph[i][k] <= h) {
                data.push([graph[i][k] + j, d[j]])
            }
        }
    }

    for (let [height, value] of data) {
        d[height] = (d[height] + value) % 10007;
    }
}

console.log(d[h]);