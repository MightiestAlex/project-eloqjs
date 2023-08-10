let arr1 = [1, 2, 4, 8];
let arr2 = arr1;
let arr3 = [...arr1];


arr1[0] = 0;


arr3[1] = 5;


function master(a, b){
   return  a + b
}

let arr4 = arr1.reduce(function (accumulator, currentValue, currentIndex, array) {
   
    console.log(accumulator, currentValue, currentIndex, array)
    return accumulator = currentValue + accumulator;
}, 6)

let object1 = {1:1};
console.log(object1)
