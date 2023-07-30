// const  test = "55-50+40";
// const test = "00009-00009"
const test =  "10+20+30+40";
let input = test.toString().split('\n');
const arr = input[0].split('-')
let answer = 0;
for (let i=0; i<arr.length; i++) {
    let cur = arr[i].split('+').map(Number).reduce((a,b) => a+b);
    if (i === 0) {
        answer += cur;
    } else {
        answer -= cur;
    }
}

console.log(answer)