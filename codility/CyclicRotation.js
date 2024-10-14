function solution(A, K) {
    // Implement your solution here
    // 4, 8, 12 --- 
    let arrLen = A.length;
    let rotNum = Number(K) % arrLen;

    // console.log(arrLen);
    // console.log(rotNum);
    // [3, 8, 9, 7, 6] => [0, 1, 2, 3, 4] 
    // [9, 7, 6, 3, 8] => [2, 3, 4, 0, 1] 

    // K와 크거나 같은 건 idx%K
    // K보다 작은 건 idx + K - 1

    if(rotNum === 0) {
        return A;
    }
    let arr = [];
    for (let i=0; i<arrLen; i++) {
        if (i >= rotNum) {
            arr[i] = A[i%rotNum]
        } else {
            arr[i] = A[i+rotNum - 1];
        }
    }

    // console.log(arr);
    return arr;
}

// K를 배열의 길이로 나눈 나머지 만큼 이동
// console.log(8 % 5);
// console.log(13 % 5);
// solution([3, 8, 9, 7, 6], 3);

console.log(solution([1, 2, 3, 4], 4));