const test = `6 3`;
const input = test.toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let summary = 0;

// 최소한 1부터 k까지 더한 개수만큼은 있어야 함
for (let i=1; i<=k; i++) {
    summary += i;
}

// 개수가 부족하면 -1
if (summary > n) console.log(-1);
else {
    // 개수 충분하면서 summary의 배수만큼 있는 경우
    // 가장 적은 공과 많은 공의 차이는 k-1개
    n -= summary;
    if (n % k == 0) {
        console.log(k-1)
    
    // 배수보다 많이 있는 경우에는 k개 만큼 차이가 난다.
    } else {
        console.log(k);
    }
}