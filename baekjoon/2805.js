const test = "4 7\n" +
    "20 15 10 17";
const input = test.toString().split("\n");
const need = Number(input[0].split(' ')[1]);

const arr = input[1].split(' ').map(Number);
let start = 0;
let end = Math.max(...arr);

let result = 0;
while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (let x of arr) {
        total += Math.max(x - mid, 0)
    }
    if (total >= need) {
        result = mid; // 최대한 덜 잘랐을 ㄸ가 정답, result에 기록
        start = mid + 1;
    } else {
        end = mid - 1; // 나무 양이 부족하면 더 많이 자르기 (높이 줄임)
    }
}
console.log(result);



