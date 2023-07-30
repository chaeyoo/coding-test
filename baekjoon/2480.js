const input = "6 2 5"
let numArr = input.split(' ').map(Number);
let numbers = new Set(numArr);

if (numbers.size === 1) {
    console.log(10000 + numArr[0] * 1000)
} else if (numbers.size === 2) {
    let dup;
    if (numArr[0] === numArr[1] || numArr[0] === numArr[2]) {
        dup = numArr[0]
    } else if (numArr[1] === numArr[2]) {
        dup = numArr[1]
    }
    console.log(1000 + dup * 100)
} else if (numbers.size === 3) {
    console.log(Math.max(...numArr) * 100)
}