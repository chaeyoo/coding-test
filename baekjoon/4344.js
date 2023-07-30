const test = "5\n" +
    "5 50 50 70 80 100\n" +
    "7 100 95 90 80 70 60 50\n" +
    "3 70 90 80\n" +
    "3 70 90 81\n" +
    "9 100 99 98 97 96 95 94 93 91";

let input = test.toString().split('\n');
const len = input[0];
for (let i=1; i<=len; i++) {
    let cases = input[i].split(" ").map(Number);
    let sum = 0;
    for (let j=1; j<=cases[0]; j++) {

        sum += cases[j];
    }
    let avg = sum / cases[0];
    let cnt = 0;
    for (let j=1; j<=cases[0]; j++) {
        if (cases[j] > avg) cnt++;
    }
    console.log((cnt / cases[0] * 100).toFixed(3) + "%")
}