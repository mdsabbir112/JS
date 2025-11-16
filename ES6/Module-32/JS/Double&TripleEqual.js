// here we know about the Fact between Double & Triple Equals

// let num1 = 10;
// let num2 = '10';

// if(num1===num2){
//     console.log('Two number are Equals ');
// }
// else{
//     console.log( 'No They are not Equals');
// }

/**
 * These are the Example of Non-Primitive Data type Examples 
 * 
 * Note: Non-Primitive data type are not able to compare with if condition .
 * cause they are complete with full of various values   
 */
// examples
let get1 = [];
let get2 = []; // they are not Equal, cause they added as a Different Reference / Address into the memory for different Variable .
if(get1 == get2){
    console.log('They are Equals');
}
else {
    console.log('No , They are not Equals ');
}

// These are the Example of type Conversion / Coersion.
// let num1 = true;
// let num2 = 1;

// if(num1==num2){
//     console.log('Two number are Equals ');
// }
// else{
//     console.log( 'No They are not Equals');
// }