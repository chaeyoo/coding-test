const test = '5\n3 4\n1 1\n1 -1\n2 2\n3 3'
let input = test.split('\n');
const n = Number(input[0]);
const arr = [];
for (let i=1; i<=n; i++) {
    arr.push(input[i].split(' ').map(Number));
}

function compare(a, b) {
    if (a[0] != b[0]) return a[0] - b[0];
    else return a[1] - b[1];
}

arr.sort(compare);


// for (let num of arr) {
//     console.log(num[0] + " " + num[1])
// }

let answer = "";
for (let num of arr) {
    answer += num[0] + " " + num[1]+ "\n"
}

console.log(answer)

// 결과: 맞았습니다

// 11650-2와 차이점:  answer를 ""으로 선언하고
// for로 console.log() 찍지않고 더해줌