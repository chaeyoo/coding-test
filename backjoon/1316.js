let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);

function check(word) {
    let setData = new Set(word[0]);
    for (let i=0; i<word.length-1; i++) {
        if (word[i] != word[i+1]) {
            if (setData.has(word[i+1])) {
                return false;
            } else {
                setData.add(word[i+1]);
            }
        }
    }
    return true;
}

let res = 0;
for (let i=1; i<=n; i++) {
    const word = input[i];
    if (check(word)) {
        res++;
    }
}

console.log(res);