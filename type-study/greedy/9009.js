const test = `4
100
200
12345
1003`;

const input = test.toString().split('\n');

let testCases = Number(input[0]);
let pibo = [];
pibo.push(0);
pibo.push(1);

while (pibo[pibo.length - 1] < 1e9) {
    pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
}

for (let tc = 1; tc <= testCases; tc++) {
    let n = Number(input[tc]);
    let result = [];
    let i = pibo.length - 1;

    while (n > 0) {
        if (n >= pibo[i]) {
            n -= pibo[i];
            result.push(pibo[i]);
        }
        i--;
    }

    let answer = '';
    for (let i = result.length - 1; i >= 0; i--) {
        answer += result[i] + ' ';

    }
    console.log(answer);
}