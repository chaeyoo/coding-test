const test = "10 10 11\n" +
    "1\n" +
    "0 2000"
function nearestSquare(x) {
    let i = 1;
    while ((2 ** i) <= x) {
        i += 1;
    }
    return i - 1;
}

const input = test.toString().split("\n");
const length = Number(input[0].split(' ')[0]);
const width = Number(input[0].split(' ')[1]);
const height = Number(input[0].split(' ')[2]);

const n = Number(input[1]);
const cubes = Array(20).fill(0);
for (let i = 2; i <= n + 1; i++) {
    let a = Number(input[i].split(' ')[0]);
    let b = Number(input[i].split(' ')[1]);
    cubes[a] = b
}

let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
    used *= 8;
    cur = (2 ** i);
    let required = parseInt(length / cur)
        * parseInt(width / cur)
        * parseInt(height / cur)
        - used;

    let usage = Math.min(required, cubes[i]);
    res += usage;
    used += usage;
}

if (used === length * width * height) {
    console.log(res);
} else {
    console.log(-1)
}