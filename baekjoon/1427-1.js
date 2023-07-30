const test = "2143";
const input = test.toString().split("\n");

const arr = [... input[0]]
arr.sort(function(a,b) {
    return b-a;
})

let result = "";
for (let x of arr) {
    result += x
}

console.log(result)