const test = `200`;


let input = test.toString().split('\n');

let s = Number(input[0]);
let sum = 0;
let k = 0; // 0부터 시작해서
while(sum<=s) {
    k++; // 1더해서 계산
    sum += k;
}

console.log(k-1);