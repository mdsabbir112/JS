
// Function Default Parametter are assigned here 

// Function default perametter means if there is  a perametter are assigned on the function assigned
// But there is no argument are assigned then the function default preametter are used there .

function name(num1, num2){
        return num1 + num2 ;
}

// let sum = name(10,20);
let sum = name(10); // IF there any arguments are missing then it show the NaN message on the console log .
console.log(sum);

// So, what is the solution for this . The solution is to set the Default parameter .

// here is the use of Default Parameter 

function age (num3=0, num4=0) { // here set the Default Parameter for this function
        return num3 + num4 ;
}

let updateAge = age(10); // Finally this code work perfectly
console.log(updateAge);




// There is the Use of the Powerful Template String 
s
let name1 = `

MD sabbir hasan anik 
he is not a good guy and 
he was not working yet and not able to 
help his familly . his age is ${updateAge}  

`
// Template String are able to handle something in a Dynamic Way 

console.log(name1);