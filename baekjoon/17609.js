const test = "7\n" +
    "abba\n" +
    "summuus\n" +
    "xabba\n" +
    "xabbay\n" +
    "comcom\n" +
    "comwwmoc\n" +
    "comwwtmoc"

const input = test.toString().split('\n');

function palindrome(x) {
    return x === x.split('').reverse().join('');
}

let testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
    let data = input[tc];
    if (palindrome(data)) {
        console.log(0)
    } else {
        let tag = false;
        let n = data.length;
        for (let i=0; i<parseInt(n / 2); i++) {
            if (data[i] !== data[n-1-i]) {
                if (palindrome(data.slice(0, i) + data.slice(i+1,n))) {
                    tag = true;
                }
                if (palindrome(data.slice(0, n-1-i) + data.slice(n-i, n))) {
                    tag = true;
                }
                break;
            }
        }
        if(tag) {
            console.log(1)
        } else {
            console.log(2)
        }
    }
}