const test = `7
abba
summuus
xabba
xabbay
comcom
comwwmoc
comwwtmoc`;

const input = test.toString().split('\n');
let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i]);
}

function palindrome(x) {
    return x == x.split('').reverse().join('');
}

for (let i = 0; i < n; i++) {
    let data = arr[i];
    if (palindrome(data)) console.log(0);
    else {
        let found = false; // 케이스 2개에 대해 flag값 필요
        let n = data.length;
        for (let i = 0; i < parseInt(n / 2); i++) {
            if (data[i] != data[n - i - 1]) {
                // i에 있는 글자 제거
                if (palindrome(data.slice(0, i) + data.slice(i + 1, n))) found = true;

                // n-i-1에 있는 글자 제거
                if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n))) found = true;
                break; // 회문이 아닌 순간 break 
            }
        }

        if (found) console.log(1);
        else console.log(2);
    }
}