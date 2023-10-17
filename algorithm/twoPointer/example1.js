let n = 8;
let m = 5;
let data = [3, 2, 4, 1, 2, 2, 1, 5];

let cnt = 0;
let intervalSum = 0;
let end = 0;

for (let start=0; start<n; start++) {
    console.log('for문 시작::start::', start);
    while (intervalSum < m && end < n) {
        intervalSum += data[end];
        end += 1;
        console.log('늘어나는 intervalSum과 end');
        console.log('intervalSum>>', intervalSum);
        console.log('end>>', end)
    }

    if (intervalSum == m) {
        cnt++;
    }

    // for문 끝자락에서 앞쪽에 있던 애들 하나씩 뺴주기
    intervalSum -= data[start];
    console.log('for문 끝::', intervalSum);

}

console.log(cnt);