function merge(arr, left, mid, right) {
    let i = left;
    let j = mid + 1;
    let k = left;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
        else sorted[k++] = arr[j++];
    }

    if (i > mid) {
        for (; j <= right; j++) sorted[k++] = arr[j];
    } else {
        for (; i <= mid; i++) sorted[k++] = arr[i];
    }

    for (let x = left; x <= right; x++) {
        arr[x] = sorted[x];
    }
}

function mergeSort(arr, left, right) {
    if (left < right) {
        let mid = parseInt((left + right) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}
let arr = [5, 1, 4, 7, 8, 3, 9, 2, 6];
let sorted = Array.from({ length: arr.length }, () => 0);

mergeSort(arr, 0, arr.length - 1);
console.log(arr);