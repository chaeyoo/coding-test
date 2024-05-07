const test = `5
4 5 2 1 4`;

const input = test.toString().split('\n');
let n = Number(input[0]);

let arr = input[1].split(' ').map(Number);

let arrow = new Array(100001).fill(0);

let cnt = 0;
for (let x of arr) {
    if (arrow[x] > 0) {
        arrow[x] -= 1;
        arrow[x-1] += 1;
    } else {
        cnt++;
        arrow[x-1] += 1;
    }
}

console.log(cnt);