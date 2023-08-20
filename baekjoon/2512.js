const test = "4\n" +
    "120 110 140 150\n" +
    "485";

const test2 = "5\n" +
    "70 80 30 40 100\n" +
    "450";

function question(test){
    const input = test.toString().split("\n");
    const arr = input[1].toString().split(' ').map(Number);
    const m = Number(input[2]);

    let start = 1;
    let end = Math.max(...arr);

    while(start <= end) {
        let mid = parseInt((start + end) / 2);
        let total = 0;
        for (x of arr) {
            total += Math.min(mid, x);
        }
        if (total <= m) {
            selected = mid; // 상한액(최대화가 목표)을 증가
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return selected;
}

console.log(question(test));
console.log(question(test2));