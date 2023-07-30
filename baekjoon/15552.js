const test = "5\n1 1\n12 34\n5 500\n40 60\n1000 1000"
let input = test.toString().split('\n');
let res = ""
for (let i=1 ; i<= Number(input[0]); i++) {
    res += Number(input[i].split(" ")[0]) + Number(input[i].split(" ")[1]) + '\n'
}

console.log(res)
