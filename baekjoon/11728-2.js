const test = "4 2\n" +
    "2 3 5 9\n" +
    "1 4"
const input = test.toString().split('\n');

let [n,m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

let result = [];
let i = 0;
let j = 0;

while(i < n && j < m) {
    if (a[i] < b[j]) {
        result.push(a[i]);
        i += 1;
    } else {
        result.push(b[j]);
        j += 1;
    }
}

while (i<n) {
    result.push(a[i]);
    i += 1;
}

while(j<m) {
    result.push(b[j]);
    j += 1;
}
console.log(result)

console.log(result.join(" "));

