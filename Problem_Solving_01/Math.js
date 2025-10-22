// we able to use build in some mathmatical function these are-->

// this is the basic Syntex
// Math.something();

console.log(Math.max(5,8,7,9,24,5,1,65)); // Math.max are used for find the largest value from the Array.

// Assigned a Variable 
// console.log(Math.min(5,8,7,9,24,5,1,65));
let minimum = Math.min(5,8,7,9,24,5,1,65); // Math.min are used for find the smallest value from the Array.
console.log(minimum);

// Find the PI value (3.1416)
console.log(Math.PI);

// Find the Absolute(abs) value ; number (+) ba (-) jai thakok na keno aita always positive ans dive |-2|= 2 ; ai rokom vabe 
console.log(Math.abs(5-10));

// Jokhon kono Fractional(5.120125) value ke porno sonkha te convert korte chai tobe 
//Math.round(2.445018); use korte hobe ;
console.log(Math.round(2.45461246054)); // the value is return as 2
console.log(Math.round(2.75461246054)); // the value is return a 3

// Floor and celling Function 
console.log(Math.floor(2.965)); // output is 2
console.log(Math.ceil(2.00055)); // output is 3

// Math.random(); this command is for generate a rendom Fractional number for 
// generate any authentication or unique code for these .
console.log(Math.random());
console.log(Math.random()*10); // 10 multiply korar karon hocche random jei number ta genarte hobe seita 1 theke 10 er moddhejeikono fractionl or natural number hobe .
// if we want just an natural integer not a fractional number then we may use the Math.round (); command is for getting only an interger value .
console.log(Math.round(Math.random()*10));
