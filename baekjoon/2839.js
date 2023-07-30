const test =  "11";
let input = test.toString().split('\n');

let num = Number(input[0]);
let cnt = 0;
let rest5 = num % 5;
let rest3 = num % 3;
if (rest5 % 3 === 0) {
    cnt += parseInt(num / 5);
    cnt += parseInt(rest5 / 3);
} else if (rest3 % 5 === 0 || (rest3 + 3) % 5 === 0) {
    cnt += parseInt(num /3);
    cnt += parseInt(rest5 /5);
} else {
    cnt = -1
}

console.log(cnt)
