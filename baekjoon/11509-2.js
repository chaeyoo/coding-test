const test = "5\n" +
    "2 1 5 4 3"

const input = test.toString().split('\n');
const arr = input[1].split(' ').map(Number);

// 화살 백만개 + 0까지 들어갈 수 있는 배열 방 만들기
let arrow = new Array(1000001).fill(0);
let result = 0;

for (let x of arr) {
    // 해당 위치에 화살이 있다면 하나 깎고 -1방에 하나 더하고
    if (arrow[x] > 0) {
        arrow[x] -= 1;
        arrow[x-1] += 1;

    // 해당 위치에 화살이 없다면 result에 하나 더하고 -1방에 하나 더하고
    } else {
        result += 1;
        arrow[x-1] += 1;
    }
}

console.log(result);