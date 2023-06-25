//아이디어: 0~9까지 숫자의 출현 빈도만큼 출력해주기

const test = "9792382";
const input = test.toString().split("\n");

const arr = Array(10).fill(0);
for (let x of input[0]) {
    arr[Number(x)]++;
}

console.log(arr)
let result = "";
for (let i=9; i>=0; i--) {
    for (let j=0; j<arr[i]; j++) {
        result += i+ "";
    }
}

console.log(result)