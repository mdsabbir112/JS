//  here we check whether a value or data type are true or false 

// lets take a String 
// let string = 'md sabbir hasan';
// let string = ''; // EMPTY string return a Falsy Value 

// check a number , which are true or false
// let string = 0; // it return a False Value 
// let string = 1;  //it return a True Value 
// let string = -1 ; // it return a true Value here 


// lets get the array, object , function 
// let string = []; // REturn a Truthy Value 
// let string = {}; // From EMPTY object it return a truthy Value 
let string = function(){}  // this also return a truth Value 


if(string){
    console.log('This is a Truthy Value ');
}
else{
    console.log('This is a Falsy Value');
}