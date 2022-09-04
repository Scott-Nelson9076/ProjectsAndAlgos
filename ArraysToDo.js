var arr1 = [5,3,8,10,12,13]
var arr2 = [12,14,20,23,91,97]

function pushFront(arr,val) {
    arr = [val, ...arr];
    return arr
}

function altPushFront(arr,value){
    for(var i = arr.length; i<=0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = value
    return arr
}

console.log(pushFront(arr1,2))

function reverseArr(arr) {
    var r = arr.length - 1;
    for (var i = 0; i <= r / 2; i++){
        var temp = arr[i];
        arr[i] = arr[r - i];
        arr[r - i] = temp;
    }
    return arr
}

function insertAt(arr,index,value){
    for(var i = arr.length; i>= index; i--){
        arr[i] = arr[i - 1]
    }
    arr[index] = value
    return arr
}

function popFront(arr) {
    reverseArr(arr);
    console.log(arr[arr.length - 1])
    arr.pop();
    reverseArr(arr);
    return arr
}

console.log(popFront(arr1))

console.log(insertAt(arr1,2,115))

console.log(insertAt(arr2,4,31))

console.log(altPushFront(arr2,9))