function compare(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}
let arr1 = [1, 8, 5, 9, 21, 3, 7, 2, 15];
arr1.sort(compare);
console.log(arr1);

// 오름차순
function compare1(a, b) {
    return a - b;
}
let arr2 = [1, 8, 5, 9, 21, 3, 7, 2, 15];
arr2.sort(compare1);
console.log(arr2);

// 내림차순
function compare3(a, b) {
    return b - a;
}
let arr3 = [1, 8, 5, 9, 21, 3, 7, 2, 15];
arr3.sort(compare3);
console.log(arr3);

// 문자열 오름차순
let arr4 = ["banana", "apple", "kiwi", "watermelon"];
arr4.sort();
console.log(arr4);

function compare4(a, b) {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
}

// 문자열 내림차순은 정의를 꼭 해줘야 함
let arr5 = ["banana", "apple", "kiwi", "watermelon"];
arr5.sort(compare4);
console.log(arr5);
