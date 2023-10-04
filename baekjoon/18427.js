const test = "3 3 5\n" +
    "2 3 5\n" +
    "3 5\n" +
    "1 2 3";
const input = test.toString().split('\n');
let [n, m, h] = input[0].split(' ').map(Number);
let a = [];
let d = new Array(h+1).fill(0);

for (let i=1; i<=n; i++) {
    a.push(input[i].split(' ').map(Number));
}

// 높이가 0인 경우는 1가지
d[0] = 1;

for (let i=0; i<n; i++) {
    let data = [];
    for (let j=0; j<=h; j++) {
        for (let k=0; k<m; k++) {
            // NaN이 나올 수도 있음
            console.log(j+a[i][k]);

            if (d[j] != 0 && j+a[i][k] <= h) {
                data.push([j+ a[i][k], d[j]]);
            }
        }
    }

    for (let [height, value] of data) {
        d[height] = (d[height] + value) % 10007;
    }
}

console.log(d[h])