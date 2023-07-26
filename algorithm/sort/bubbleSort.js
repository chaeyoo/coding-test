function bubbleSort(arr) {
    // i 는 비교할 횟수
    for (let i = arr.length -1; i > 0; i--) {
        console.log(`=========================`)
        console.log(`i: ${i}`)
        for (let j=0; j<i; j++) {
            console.log(j, `::::: ${j}번째 index`)
            if (arr[j] < arr[j+1]) {
                console.log(`::: arr[${j}]:::`,arr[j], `::: arr[${j+1}]:::`, arr[j+1]);
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                console.log(`${j}번째 index 돌고나서, arr: ${arr}`);
            }
        }
        console.log(`=========================`)
    }
}


// 1. 0 부터 999 까지의 30000개 숫자 선택정렬
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));
let startTime = new Date().getTime();
// bubbleSort(arr);
let endTime = new Date().getTime();
console.log(`버블정렬 소요시간: ${endTime - startTime}ms.`);

// 2. 30000개의 7 선택정렬
let arr2 = Array.from({length: 30000}, () => 7)
let startTime2 = new Date().getTime();
// bubbleSort(arr2);
let endTime2 = new Date().getTime();
console.log(`정렬된 배열의 버블정렬 소요시간: ${endTime2 - startTime2}ms.`);


let arr3 = [9, 8, 2, 4, 3];
bubbleSort(arr3);
console.log(arr3);