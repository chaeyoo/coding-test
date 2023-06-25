const test = "3\n21 Junkyu\n21 Dohyun\n20 Sunyoung";
let input = test.toString().split('\n');
const n = Number(input[0]);

let arr = [];
for (let i=1; i<=n; i++) {
    const person = input[i].split(' ');
    arr.push({id: i, age: Number(person[0]), name: person[1]})
}

function compare(a, b) {
   if (a.age !== b.age) {
       return a.age-b.age
   } else {
       return a.id - b.id
   }
}

arr.sort(compare);

let result = "";
for (let x of arr) {
    result += x.age + " " + x.name + "\n"
}

console.log(result);