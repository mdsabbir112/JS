//  here we talk about the JSON 
/**
 * JSON : JavaScript Object Notation 
 * 
 * mainly amra jokhon kono api er maddome kono request server side a send kori tokhon oii request er poriborte jokhon responce / Promiss ase 
 * tokhon sei code er jei formate thake seita mainly JSON Format aa thake . 
 * 
 * old version : age JSON use hoto na  , XML ba normal formate a use kora hoto and API theke data fetch kora hoito 
 * 
 * TYPE : JSON Formate aa mainly data String akare thake . object er data jei data type aa ii thakok na keno seita string formate aa niye ase .
 * 
 */

// Examples of JSON Formate . 

const person ={
    name: 'md sabbir hasan ',
    age: 20,
    friends : ['asif' , 'mofazzal'] 
}

// console.log(person);

// i want to make this object into json formate 
const newPerson = JSON.stringify(person);
console.log(newPerson); // this is the Formate of json with String 
console.log(typeof newPerson);

// now i want to convert this JSON String into an object , like the First object . 
const newPersonObject = JSON.parse(newPerson);
console.log(newPersonObject);
console.log(typeof newPersonObject); // successfully convert into the object 