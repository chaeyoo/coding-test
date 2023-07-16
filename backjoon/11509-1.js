const test = "5\n" +
    "2 1 5 4 3"

const input = test.toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let cnt = 1;
for (let i=0; i<arr.length; i++) {
    if (arr[i] <= arr[i+1]) {
        cnt++;
    }

}
console.log(cnt)