function insertionSort(arr) {
    for (let i=1; i<arr.length; i++) {
        console.log('===============');
        console.log(`i: ${i}`);
        for (let j=i; j>0; j--) {
            console.log(`j: ${j}`)
            console.log(`arr[${j}] (${arr[j]}) < arr[${j-1}] (${arr[j-1]}) : ${arr[j] < arr[j-1]}`)
            if (arr[j] < arr[j-1]) {
                let tmp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = tmp;
            } else {
                console.log('break')
                break;
            }
            console.log(`${j}번째 index 이후 arr: ${arr}`)
        }
    }
}

// 1. 0 부터 999 까지의 30000개 숫자 삽입정렬
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));
let startTime = new Date().getTime();
// insertionSort(arr);
let endTime = new Date().getTime();
console.log(`삽입정렬 소요시간: ${endTime - startTime}ms.`);

// 2. 30000개의 7 삽입정렬
let arr2 = Array.from({length: 30000}, () => 7)
let startTime2 = new Date().getTime();
// insertionSort(arr2);
let endTime2 = new Date().getTime();
console.log(`정렬된 배열의 삽입정렬 소요시간: ${endTime2 - startTime2}ms.`);

let arr3 = [2, 4, 3, 1, 9, 6, 8, 7, 5];
insertionSort(arr3);
