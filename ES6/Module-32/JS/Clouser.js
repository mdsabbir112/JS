
//  here is the breif  concept of clouser  

// if a function are called then the count variable value will be increased 
// let count = 0; /// globally declare the count variable 

// function sum(){
//     count++;
//     console.log(count);
// }
// sum()
// sum()
// sum()
// sum() // the count variable is counted as 4, cause the sum function are called 4 times 

// Previous one is for using the Global Variable 

// now we see about the local count variable which is located into a function

// function sum(){
//     let count = 0;
//     count++ ;
//     console.log(count);

// }
// sum()
// sum()
// sum() // it is repetedly count the Counte value as 1 , cause it remain the count value as 0 for every time when it is called . 

//  we have to overcome from that problem 

// for that kind of problem we might use the clauser . which claim 2 function , and maintain a common relation 

function result() {
    let count = 0 ;
    return function (){
        count++;
        console.log(count);
    }
    //  target();
}
// sum()
// sum()
// sum() // Still it remains the same result , every time it keep the count value as 1.
let result = result();
// console.log(result); // it shows just the inner function , not show the value , then we might use the new function return statement here 
result()
result()
result()
result()
result()
// sum()

// that is what it means as Clauser , which make a relation with its inner function if have any