const test = "4\n" +
    "3 3 4\n" +
    "1 1 1 1"

const input = test.toString().split('\n');
const n = Number(input[0]);
const distance = input[1].split(' ').map(Number);
const price = input[2].split(' ').map(Number);

let minPrice = price[0];
for (let i=0; i<price.length; i++) {
    minPrice = Math.min(minPrice, price[i]);
    price[i] = minPrice;
}

let total = BigInt(0);
for (let i=0; i<n-1; i++){
    total += BigInt(distance[i]) * BigInt(price[i]);
}

console.log(String(total))