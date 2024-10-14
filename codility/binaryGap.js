function solution(N) {
    // Implement your solution here
    const binary = N.toString(2);
    // console.log(binary.indexOf('1'));
    // console.log(binary.lastIndexOf('1'));
    // console.log('----')
    const oneToOne = binary.slice(binary.indexOf('1'), binary.lastIndexOf('1') + 1);
    // console.log(oneToOne);
    // console.log('====');

    const arr = oneToOne.split('1');
    // console.log(arr);
    const lenArr = arr.map((v) => v.length)
    // console.log(lenArr);
    // console.log(Math.max(...lenArr))
    return Math.max(...lenArr);
}


solution(9); // 1001
solution(32); // 100000 
solution(15); // 1111
solution(529); // 1000010001