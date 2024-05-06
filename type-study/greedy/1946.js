const test = `2
5
3 2
1 4
4 1
2 3
5 5
7
3 6
7 3
4 2
1 4
5 7
2 5
6 1`;

const input = test.toString().split('\n');

let testCase = Number(input[0]);

let line = 1;
for (let tc = 0; tc < testCase; tc++) {
    let n = Number(input[line]);
    let arr = [];
    for (let i = line + 1; i <= line + n; i++) {
        let data = input[i].split(' ').map(Number);
        arr.push(data);
    }

    arr.sort((x, y) => x[0] - y[0]);
    let cnt = 0;
    let minValue = 100001; //1.*

    for (let [x, y] of arr) {
        if (y < minValue) {
            minValue = y;
            cnt++;
        }
    }
    console.log(cnt);
    line += n + 1;
}