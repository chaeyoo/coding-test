const test = "3\n" +
    "3 4 5\n" +
    "1 0 1 0";
const input = test.toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let [add, sub, mul, div] = input[2].split(' ').map(Number);

let minValue = 1e9;
let maxValue = -1e9;

dfs(1, arr[0]);

console.log(maxValue);
console.log(minValue);

function dfs(index, value) {
    if(index == n) {
        minValue = Math.min(minValue, value);
        maxValue = Math.max(maxValue, value);
        return;
    }

    if (add > 0) {
        add--;
        dfs(index+1, value+arr[index]);
        add++;
    }
    if (sub > 0) {
        sub--;
        dfs(index+1, value-arr[index]);
        sub++;
    }
    if (mul > 0) {
        mul--;
        dfs(index+1, value*arr[index]);
        mul++;
    }
    if (div > 0) {
        div--;
        dfs(index+1, ~~(value/arr[index]));
        div++;
    }
}


