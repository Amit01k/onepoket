// Task 2: 
// Data Manipulation Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.

//Approach 1
const arr=[1,2,3,12,100]
let sumOfArr =(arr)=>{
    let sum
    sum=arr.reduce((acc,curr)=>{
    
    return acc+curr

},0)
 return sum
}

console.log(sumOfArr(arr))

//Approach 2

let sumOfArr2 = (arr)=>{
    let addition=0

for(let i=0;i<arr.length;i++){
    addition+=arr[i]
}
return addition
}
 console.log(sumOfArr2(arr))