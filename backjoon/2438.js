let number = Number(input[0]);
let res = ""

for(let i=1; i<=number; i++) {
    for (let j=1; j<=i; j++) {
        res += "*"
    }
    res += '\n'
}

console.log(res);