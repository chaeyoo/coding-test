function solution(A) {
    // Implement your solution here
    let arr = new Array(1000000).fill(0);
    A.sort((a, b) => a - b);
    A.forEach(element => {
        arr[element]++
    });

    // console.log(arr);
    // console.log(arr.findIndex((el) => el%2 === 1));
    // 이걸 쓰면 모든 인덱스를 전부 탐색해야 한다.
    return arr.findIndex((el) => el%2 === 1);
}


console.log(solution([9, 3, 9, 3, 7]));