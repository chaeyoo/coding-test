function selectionSort(arr) {
    for (let i=0; i<arr.length; i++) {
        let minIdx = i;
        for (let j=i+1; j<arr.length; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }

        let tmp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = tmp;
    }
}
// 1. 0 부터 999 까지의 30000개 숫자 선택정렬
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));
let startTime = new Date().getTime();
selectionSort(arr);
let endTime = new Date().getTime();
console.log(`선택정렬 소요시간: ${endTime - startTime}ms.`);

// 2. 30000개의 7 선택정렬
let arr2 = Array.from({length: 30000}, () => 7)
let startTime2 = new Date().getTime();
selectionSort(arr2);
let endTime2 = new Date().getTime();
console.log(`정렬된 배열의 선택정렬 소요시간: ${endTime2 - startTime2}ms.`);

