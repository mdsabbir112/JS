//  here we find the basic variable declaration methods and points

//  in es6 we are not use var as a variable declaration
//  we just use const and let as a variable declaration key

const country = "bangladesh";
console.log(country);
// this variable does not able to Fully change/Modify the value on it
//  country = 'india';
// console.log(country );

// But the Const Variable are support to change/ modify the value of array or object . but not able to modify the overall array on it

// here we see about the array section
const array = [1, 2, 3, 4, 5, 6, 8, 7, 9];
console.log(array);
array[3] = 12;
console.log(array);

// now try to change the overall array and get set the new array on it 

// array = [12 , 12 , 45, 84, 46];  // This is not possible that can not change the overall array

// Same scenario for the object also 
const object = {
    name: 'md Sabbir hasan ',
    age: 10,
    position: 'JR Developer'
}
console.log(object.name);
object.name = 'Md Mofazzal Hossain'
console.log(object.name);
console.log(object.position);

// object = {
//     name: ' sakibul'
// }

console.log(object.name);




// Now see the let variable Declaration
let age = 10;
console.log(age);
age = 20;
console.log(age);





