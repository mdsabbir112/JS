// Arrow Function is the Updated Version to Declare a function in a unique Style 

// Now i am writing the normal Function
function mul (num1=1, num2=2){
    return num1*num2 ; 
} 

let result = mul( 20 , 10);
console.log(result);


// Syntax of an Array Function 
// let functionName = (Parameter) =>{
//         return (what operaation you want to do);    
// }

// Now we Writing an Arrow Function 
let sum = (num1, num2) => {
    return num1 + num2 ;
}

let result1 = sum(10, 20);
console.log(result1);  // It works perfectly 



// Now we see the Different way to declare the array Function 

// Way 1
let connect = () => console.log('something');
connect();

// Way 2
let multiple = (num1) => num1*num1 ; // in Array function for a single line code  no need to write the return keyword
let get = multiple(10);
console.log(get);

// Way 3
let set = (num1, num2) => {
    return num1 / num2 ;
}
let result2 = set(100 , 5);
console.log(result2);


// Arrow Function using Dom 
document.getElementById('title')
 .addEventListener('click', () => { // here use Arrow Function insted of Normal Function
    console.log('Title are clicked ');
 })