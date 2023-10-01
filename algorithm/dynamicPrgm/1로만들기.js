let x = 26;
let d = new Array(30001).fill(0);
for (let i=2; i<=x; i++) {
    d[i] = d[i-1] + 1;
    if (i%2 == 0) {
        d[i]= Math.min(d[i], d[parseInt(i/2)] + 1);
    }
    if (i%3 == 0) {
        d[i]= Math.min(d[i], d[parseInt(i/3)] + 1);
    }
    if (i%5 == 0) {
        d[i]= Math.min(d[i], d[parseInt(i/5)] + 1);
    }
}

console.log(d[x]);