const test = "9\n" +
    "5 12 7 10 9 1 2 3 11\n" +
    "13";
const input = test.toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const x = Number(input[2]);

let result = 0;

arr.sort((a, b) => a-b);

let start = 0;
let end = n-1;

while (true) {
    while (end > 0 && arr[start] + arr[end] > x) {
        end -= 1; // 합을 감소 시켜보기
    }
    if (arr[start] + arr[end] == x) {
        result += 1;
        end -= 1;
    }
    start += 1; // 합을 다시 증가 시켜보기
    if (start >= end) break; // i와 j는 서로 다른 숫자
}

console.log(result);