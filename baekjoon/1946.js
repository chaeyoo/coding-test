const test = "2\n" +
    "5\n" +
    "3 2\n" +
    "1 4\n" +
    "4 1\n" +
    "2 3\n" +
    "5 5\n" +
    "7\n" +
    "3 6\n" +
    "7 3\n" +
    "4 2\n" +
    "1 4\n" +
    "5 7\n" +
    "2 5\n" +
    "6 1\n"

const input  = test.toString().split('\n');
const n = Number(input[0]);

let line = 1;
for (let tc = 0; tc < n; tc++) {
    let n = Number(input[line]);
    let arr = [];
    for (let i = line + 1; i <= line + n; i++) {
        arr.push(input[i].split(' ').map(Number));
    }

    function compare(a, b) {
        return a[0] - b[0];
    }

    arr.sort(compare);
    let num = arr.length;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][1] < arr[i + 1][1]) {
            num--;
        }
    }
    console.log(num);
    line += n + 1;
}