// Ternary operator [ Condition ? if conidition : Else  Condition]

let age = 40;
let salary = 45000;

// general Formula of if else conditional

// if(age>=30){
//     console.log("Intelligent");
// }
// else{
//     console.log('not Intellegent');
// }


// Try Ternary Operator 
// age>=30 ? console.log('Intellegent') : console.log('not Intellegent');

// try more  complex  one 
let price = 300;
let isLeader = true;

price= isLeader===true ? 
       price>=200 ? price/2 : 0
       : price + 1000;

       console.log(price);