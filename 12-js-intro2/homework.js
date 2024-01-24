const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
console.log(arr);
printArray(arr);
bubbleSort(arr);
printArray(arr);

let index = binarySearch(arr, 5);
console.log(`index = ${index}`);
index = binarySearch(arr, 7);
console.log(`index = ${index}`);


sort(arr, (a, b) => b - a);
printArray(arr);


function printArray(arr) {
    console.log('==================');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('==================');
}



function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

}




function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midValue = arr[mid];

        if (midValue === value) {
            return mid;
        } else if (midValue < value) {
            left = mid + 1;  
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function sort(arr, comparator) {
    if (!comparator || typeof comparator !== 'function') {
        comparator = (a, b) => a - b;
    }
    for (let i = 0; i < arr.length; i++) {
             for (let j = 0; j < arr.length - 1; j++) {
                if (comparator(arr[j], arr[j+1]) > 0) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
             }
   
    }
}
