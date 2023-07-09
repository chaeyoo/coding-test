const test = "2";
const input = test.toString().split('\n');

let num = Number(input[0]);
let a = 1;
while (num-a >= 0) {
    if (num-(a+a+1) <0) {
        break;
    }

    num -= a;
    a++;
}
console.log(a)