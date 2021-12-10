//Write a function which accepts an array as an argument. Each item in the array will be a number. The function should add all the numbers in the array and return the result. 

//Attempt 1 - ES5

function addArrNums(arr){
    var sum = 0;
    for(var i in arr) { 
        sum += arr[i];
    }
    return sum;
};

let total = addArrNums([4,7,12,11]);

console.log(total);
// Logs 34

total = addArrNums([4,5,6,7,8,9]);

console.log(total);
// Logs 39

console.log(total - total);
// Logs 0

//......Attempt 2 - ES6 with Reduce (Higher Order Function)...........//

const plusArrNum = arr => arr.reduce((preVal, currVal) => preVal + currVal, 0);

let sumVal = plusArrNum([9,16,29,43]);

console.log(sumVal);
// Logs 97

sumVal = plusArrNum([26,31,40,49,100,201]);

console.log(sumVal);
// Logs 447

console.log(sumVal + sumVal);
// Logs 894
