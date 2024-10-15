function solution(A) {
    // Implement your solution here
    // reduce 함수 사용 Array.reduce((누적값, 현재 처리 중인 배열의 요소))
    const totalCounter = A.reduce((counterObj, num) => {
        counterObj[num] = counterObj[num] ? counterObj[num] + 1 : 1; return counterObj;
    }, {});

    // console.log(totalCounter)
 
    // 객체에 접근
    for (let key in totalCounter) {
        if (totalCounter[key] % 2 === 1) {
            return Number(key);
        }
    }
}


console.log(solution([9, 3, 9, 3, 7]));