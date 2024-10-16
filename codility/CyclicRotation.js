// 틀린 풀이
function solution(A, K) {
    // Implement your solution here
    // 4, 8, 12 --- 
    let arrLen = A.length;
    let rotNum = Number(K) % arrLen;
    function solution(A, K) {
        // Implement your solution here
        const move = K % A.length;
        if (move) {
            const newArr = A.splice(A.length - move);
            return [...newArr, ...A];
        }
        return A;
    }
    
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

// Question
// An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

// Write a function:

// function solution(A, K);

// that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

// For example, given

//     A = [3, 8, 9, 7, 6]
//     K = 3
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:

//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
// For another example, given

//     A = [0, 0, 0]
//     K = 1
// the function should return [0, 0, 0]

// Given

//     A = [1, 2, 3, 4]
//     K = 4
// the function should return [1, 2, 3, 4]