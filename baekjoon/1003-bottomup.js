const test = "2\n" + "6\n" + "22";
let input = test.toString().split('\n');
let testCase = Number(input[0]);

let d = new Array(100).fill(0);

d[0] = 0;
d[1] = 1;

for (let i=2; i<=40; i++) {
    d[i] = d[i-1] + d[i-2];
}

for (let i = 1; i <= testCase; i++) {
   let n = Number(input[i]);
   if (n==0) console.log(1, 0);
   else console.log(d[n-1], d[n])
}
