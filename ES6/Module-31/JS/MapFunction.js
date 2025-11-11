// Map function is most likely work like a loop . 
//  and it always return a complete array .

// Basic Syntex for map function :
//  let variableName = arrayName.map(element =>  {
//             return something;    
// });

// Here is a new task to increment 1 for every values on the array 

// Basic code without using map function
let numbers1 = [1,2,3,4,5,6,7,8,9];
let temp = [];
for(let result of numbers1){
    console.log(result);
    temp.push(result);

}
console.log('here is the original array:',temp);

// here using map function

let numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);
// here is the map Function for increment 1 number 
// let newArray = numbers.map(element => element + 1);
let newArray = numbers.map(element => {
    return element + 1 ;
});
    
console.log(newArray);