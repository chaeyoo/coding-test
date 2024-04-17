const test = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`;

const input = test.toString().split('\n');
const n = Number(input[0]);

let arr = [];
for (let i=1; i<=n; i++) {
    arr.push(input[i]);
}

// 중복 제거
arr = [...new Set(arr)];

arr.sort(function (a, b) {
    if (a.length != b.length) {
        return a.length - b.length;
    } else {
        // string 정렬 시 사전순
        if (a<b) return -1;
        else if (a>b) return 1;
        else return 0;
    }
});


console.log(arr);