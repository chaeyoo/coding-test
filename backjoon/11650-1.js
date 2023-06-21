const test = '5\n3 4\n1 1\n1 -1\n2 2\n3 3'
let input = test.split('\n');
const n = Number(input[0]);

const arr = [];
for (let i=1; i<=n; i++) {
    arr.push(input[i].split(' ').map(Number));
}

for (let i=0; i<n-1; i++){
    if (arr[i][0] > arr[i+1][0]) {
        const tmp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = tmp;
    }
}

for (let i=0; i<n-1; i++) {
    if (arr[i][0] === arr[i+1][0] && arr[i][1] > arr[i+1][1]) {
        const tmp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = tmp;
    }
}

for (let num of arr) {
    console.log(num[0] + " " + num[1])
}

// 결과: 틀렸습니다