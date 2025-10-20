// // Basic Object are covered there 

// // object can be determined into 3 ways . these are . ; [] ; 

// // basic object 
// let car ={
//     model: ' BMW' ,
//     version: 2.2,
//     price : 21654664,
//     'Available color': ['black', 'red', 'green', 'yellow'],
//     approx: function(){
//         console.log("the car is speeding up");
//     }
// };

// // get and select the object property 

// // Dott 
// console.log(car.model);

// // Bracket 
// console.log(car['price']);
// console.log(car['Available color']);
// console.log(car.approx());

// // jodi amra amader object er vhitore thaka key gulake jante  chai 
// console.log(Object.keys(car));

// // update the value from there
// car.price= 30000;
// car.version= 3.3;
// console.log(car);



// Create an object 

let student ={
    subject : 'biology',
    roll: 22,
    chapters : ['1st chapter ', '2nd chapter', '3rd chapter'],
    //nested object are begin started from here
    class: {
        teacher: 'Aman ullah',
        designation: 'lecturer',
        // another object are written here 
        income:{
            monthly: 20000,
            yearly : 320000,
        }
    }
}


// now apply some operation on this object 
// -----------------------------------------------------------------------
// First access all of there object and their key & values from there 
console.log(student.subject);
// another Bracket method to do this 
// console.log(student['subject']);

// ------------------------------------------------------------------------
// now we try to update/modify the Values of an key
student.subject = 'Chemistry';
console.log(student.subject);
// Update / Modify an array with the help of accessing the index 
student.chapters[1] = '6th Chapter';
console.log(student.chapters);

// Access the Nested object over there 

// console.log(student.class);
// console.log(student.class.income);
console.log(student.class.income.monthly); // This is the process of accessing the nested object 

// i want to update the monthly salary 
let increment = student.class.income.monthly = '50000'; // here use a variable to store the updated salary
console.log(increment);

// If we want to delete a key from the object then use delete command 

delete student.class.income.yearly;
console.log(student.class.income);



// console.log(student);
