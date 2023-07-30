let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

if (input[0] >= 90) {
    console.log('A');
} else if (input[0] >= 80) {
    console.log('B');
} else if (input[0] >= 70) {
    console.log('C');
} else if (input[0] >= 60) {
    console.log('D');
} else {
    console.log('F');
}