const test = `500613009`;
const input = test.split('\n');

let n = input[0]; // number가 아닌 string
let cnt = Array(10).fill(0);

for (let x of n) {
    // console.log(x);
    cnt[Number(x)]++;
}

console.log(cnt);
let answer = "";

for (let i = 9; i >= 0; i--) {
    console.log('i::', i);
    console.log(`cnt[${i}]::`, cnt[i]);
    for (let j = 0; j < cnt[i]; j++) {
        console.log(answer);
        answer += i + "";
    }
}

console.log(answer)