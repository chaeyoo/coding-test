const number = "23 48\n25"
let input = number.toString().split('\n');
let line = input[0].split(' ');
let h = parseInt(line[0]);
let m = parseInt(line[1]);
let time = parseInt(input[1]);

h = h + parseInt((m + time) / 60);
m = (m + time) % 60

if (h >= 24) {
    h = h - 24;
}
console.log(h + " " + m);