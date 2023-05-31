let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
for(let i=1; i<=Number(input[0]); i++) {
    const cnt = Number(input[i].split(" ")[0])
    let resStr = "";
    for (let x of input[i].split(" ")[1]) {
        resStr += x.repeat(cnt)
    }
    console.log(resStr)

}