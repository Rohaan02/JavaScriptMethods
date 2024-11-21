//// Map Example
// Don't modify the original array


//Making Array
let numbers = [1, 2, 3, 4];

let map2 = numbers.map(number => number * 3); //creates a new array by applying a callback function to each element of the original array.
console.log(map2);
// [ 3,6,9,12 ]


//////////////////////////////////////////////////////////////////////////////////////////////////
////Example2
let nums = [10, 20, 30];
let strNums = nums.map(num => `Number: ${num}`);
console.log(strNums);
// Output: ["Number: 10", "Number: 20", "Number: 30"]


//////////////////////////////////////////////////////////////////////////////////////////////////
////Example3
let arr = [1,'Rohaan'];
let multiplyArr = arr.map(a => a * 2);
console.log(multiplyArr);
//[ 2, NaN ]


//////////////////////////////////////////////////////////////////////////////////////////////////
////Example4
let findString = arr.map((b)=>{
    if(b==='Rohaan'){
        return 'found';
    }
})
console.log(findString);
//[undefined, found]


//////////////////////////////////////////////////////////////////////////////////////////////////
////Example4
let notFindString = arr.map((b)=>{
    if(b==='Rohaan'){
        return 'found';
    }
    else{
        return 'not Found';
    }
})
console.log(notFindString);