// here we explain about the Function Arguments and also talk about Pas the perametter  by Value and pass by Reference

// Arguments

function sum (num1, num2, num3){
    // console.log('this is md sabbir hasan ', num1);

    // if we want we are able to display the overall arguments 
    console.log(arguments); // by this we can see the overall arguments into that
    // this is return an array , which is array like object .
    // if we want to get the object into an array then we have to do something 

    let newArguments = [...arguments];
    console.log(newArguments); // here it is like an array , then we are able to do the all operations that we want for.
    console.log(arguments.length); // define the overall length 

}

let number = 5;
let number1 = 8;
let number2 = 9;
sum(number, number1, number2)  // here we pass the arguments 




// Call by Value 

const name = 'Md Sabbir Hasan '; // this is the Example of call by Value 

function identity (name) {
    // console.log(name);

    // by the use of call by value which are basically a Premetive data type , we are 
// not able to update the value by using the Function 

//here we try to update the previous value here 

    name = 'Md Mofazzal Hossain'
    // console.log(name);
}


let result = identity(name);
console.log(name); // here the actual value are not updated . it keeps the previous one .




// Call by Reference 

// it basically works on the verge of Non-Premetive data 

let arr = {name: 'md Sahadat Hossain ' , age: 20} // this is a non-Premetive data type , which might be changable

function reference(obj){
    // console.log(obj);
    obj.name = 'Md Mofazzal Hossain'; // try to change the value 
    // console.log(obj); // here success fully change the value . 

    // The reference value are able to change over the time , and it stored by the memory by once . 
    // thats why it make mush more easier to modify something . 

}
console.log(arr); // before update the value 

reference(arr);

console.log(arr); // after update the value 