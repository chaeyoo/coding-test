const test = `4 4 8
3
0 10
1 10
2 1`;

const input = test.toString().split('\n');

let [length, width, height] = input[0].split(' ').map(Number);
let cubes = Array(20).fill(0);

// 큐브 종류 개수
let n = Number(input[1]);
for (let i = 2; i <= n + 1; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    cubes[a] = b;
}

console.log(length, '::', width, "::", height)
console.log(cubes);

function nearestSquare(x) {
    console.log(x, ":LLLL")
    let i = 1;
    while ((2 ** i) <= x) {
        i += 1;
    }
    console.log('return:::', i - 1);
    return i - 1;
}

// 박스의 높이, 너비, 길이 중에 짧은 2의 지수를 찾는 과정
let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

console.log(size);
let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
    used *= 8;
    console.log(i); // 큰 큐브 부터 채우기
    let cur = (2 ** i);
    let required = parseInt(length / cur)
        * parseInt(width / cur)
        * parseInt(height / cur) - used;
    console.log(required, 'required');

    // required : 2, cubes[2]: 1
    let usage = Math.min(required, cubes[i]);
    // usage = 1
    res += usage;
    // used = 1
    used += usage;
}

// 위 for문이 다 끝났을 시점의 used는
// 1x1x1의 큐브로 만든 박스이다.
if (used == length * width * height) {
    console.log(res);
} else {
    console.log(-1);
}