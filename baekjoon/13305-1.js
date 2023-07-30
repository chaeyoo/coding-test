// 채형풀이

const test = "4\n" +
    "3 3 4\n" +
    "1 1 1 1"

const input = test.toString().split('\n');
const n = Number(input[0]);
const distance = input[1].split(' ').map(Number);
const price = input[2].split(' ').map(Number);

let total = BigInt(0);
let minPrice = price[0]; // 5
for (let i=0; i<n-1; i++) {
    if (minPrice > price[i+1]) {
        total += BigInt(distance[i]) * BigInt(minPrice);;
        minPrice = price[i+1];
    } else {
        total += BigInt(distance[i]) * BigInt(minPrice);
    }
}

console.log(String(total))