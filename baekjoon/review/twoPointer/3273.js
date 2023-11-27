const test = "9\n" + "5 12 7 10 9 1 2 3 11\n" + "13";

const input = test.toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const x = Number(input[2]);

arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);
let start = 0;
let end = n-1;
let count = 0;

while(start < end) {
    // 포인트들의 합이 x보다 큰 경우 값을 줄이기
    // end 줄이기
    while (end > 0 && arr[start] + arr[end] > x) {
        end--;
    }
    // 포인트들 합이 목표값은 경우
    // end 줄이기 & count 늘이기
    if (arr[start] + arr[end] == x) {
        count++;
        end--;
    }

    // 반복문 끝에 start 인덱스 +1
    start += 1;
}
console.log(count);