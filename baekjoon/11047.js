let test = "10 4200\n" +"1\n" +"5\n" +
    "10\n" +"50\n" +"100\n" +"500\n" +
    "1000\n" +"5000\n" +"10000\n" +"50000"
let input = test.toString().split('\n');
let [n, price] = input[0].split(' ').map(Number);

let arr = [];
for (let i=n; i>=1; i--) {
    if (input[i] <= price)
    arr.push(Number(input[i]));
}

let cnt = 0;
let idx = 0;
while (price > 0) {
    cnt += parseInt(price / arr[idx]);
    price  %= arr[idx] // 나머지..!
    idx++;
}
console.log(cnt);


