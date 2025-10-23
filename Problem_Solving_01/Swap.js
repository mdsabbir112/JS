// Swap the 2 numbers ,

// For that we need a temporary variable for store 1 variable value and help to getting the perfect & correct values

// wrong one 
let a = 5;
let b = 7;
console.log(a, b);
 a = b;
 b = a;
 console.log(a, b);  // that is not correct


//  by adding a extra variable (glass) then we are able to sort out this problem

let c = 5;
let d = 7;
console.log(c, d);
let temp = c;
c = d;
d = temp;
console.log(c, d);


//  we can do this by following another method named as Distructure 

let x = 8 ;
let y = 6;
console.log(x, y);
[x , y] = [y , x]; // this is called as a Distructure Formula 
console.log(x , y);