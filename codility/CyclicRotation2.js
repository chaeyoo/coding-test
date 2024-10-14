
function solution(A, K) {
    // Implement your solution here
    const move = K % A.length;
    if (move) {
        console.log(A.length - move);
        // console.log(A.splice(A.length - move));
        const newArr = A.splice(A.length - move);
        console.log(newArr);
        console.log(A);
        // 자른것과 잘린것을 붙이기
        return [...newArr, ...A];
    }
    return A;
}

// console.log(solution([1, 2, 3, 4], 4));
console.log(solution([3, 8, 9, 7, 6], 3));

// console.log([3, 8, 9, 7, 6].splice(3)); // 인덱스 3, 4
// console.log([3, 8, 9, 7, 6].splice(2)); // 인덱스 2, 3, 4


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