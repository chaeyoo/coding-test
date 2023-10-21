let left = 1;
let right = x;

while(true) {
    left += 1;
    right += 1;
    if (right > n) break;
    sum = sum + arr[right] - arr[left -1];
    if (maxSum == sum) {
        count += 1;
    } else if (maxSum < sum) {
        maxSum = sum;
        count = 1;
    }
}
