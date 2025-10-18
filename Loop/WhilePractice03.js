/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let num1 = 81;
let sum1 = 0;

while(num1<=131){
    // Find the odd number
    if(num1%2 === 1){
        sum1 = sum1 + num1;
    }

    num1++;

}
console.log(sum1);
/***


Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
let num2 = 206;
let sum2 = 0;

while(num2<=311){
    // Find the odd number
    if(num2%2 === 0){
        sum2 = sum2 + num2;
    }

    num2++;

}
console.log(sum2);