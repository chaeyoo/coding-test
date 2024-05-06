const test = `00009-00009`;
const input = test.toString().split('\n');

let groups = input[0].split('-');
let answer = 0;

for (let i=0; i<groups.length; i++) {
    let cur = groups[i].split('+').map(Number).reduce((a, b) => a+b); // reduce 함수 사용
    if (i==0) answer += cur;
    else answer -= cur;
}

console.log(answer);