// Here is the overall summary of this 31 module 

let person ={
    name: 'sabbir',
    age: 30,
    occu: 'student'
}

// Some Special Build in Methods :::

// console.log(person);
// let result = Object.keys(person);
// let result = Object.values(person);
// let result = Object.entries(person);
// Object.seal(person);
// Object.freeze(person);
// person.name = 'manik';
// console.log(person);
// console.log(result);

// here is the Explanation of Nested object :

let identity = {
    name:'md sabbir hasan ',
    age: 20 ,
    isStudent: {                  // THis is the nested object 
        isTrue: 'yes',
        class: 12,
        subject: ['physics', ' Math', 'Biology'],
        result: {
            5: 'gpa-5',
            8: 'A grade',
            10: 'A+',
            isGood: 'yes'
        }
    }
}
// Get the any key and Value From the main object
// console.log(identity.name);
// console.log(identity.isStudent);
// console.log(identity.isStudent.subject[1]);
// console.log(identity.isStudent.result[5]);
// console.log(identity.isStudent?.result?.isBad); // optional chaining 


// Array mapping (map Function )
// let array = [1,2,3,4,5,6,7,8,9]

// // let getValue = array.map(hey => hey * hey);
// let getValue = array.map(p => {
//     return p + 5 ;
// })
// console.log(getValue);


// Declare a Object here 
const products = [
    {id:1, name:'iphone', color: 'Black', price: 1500},
    {id:2, name:'xiomi', color: 'gold', price: 150},
    {id:3, name:'vivo', color: 'gold', price: 2500},
    {id:4, name:'infinix', color: 'green', price: 9500},
    {id:5, name:'samsung', color: 'white', price: 500},
];

// Apply For each loop
// products.forEach(element => {
//     if(element.color == 'gold'){
//         console.log(element);
//     }
// });

// Apply Filter functional loop method
// let getSomething = products.filter(element => {
//     if(element.price >=2000){
//             return element;
//     }
// })
// console.log(getSomething);


// Apply Find Functional loop
// let getFind = products.find(element => {
//     if(element.price >= 2000){
//             return element;
//     }
// })
// console.log(getFind);



// Here is the part of class and object are :
class vehical {
    owner = 'md sabbir hasan ';

    // declare a constructor 
    constructor(name , brand ){
        this.Name = name;
        this.Brand = brand;
    }
    move(){
        console.log(`hello this is ${this.Name} | Created by ${this.owner}`);
    }

}
// Implement the  concept of inheritence 
class bus extends vehical {
    #Seats;
        constructor(name, brand, seats){
            super(name, brand);
            this.#Seats = seats;
        }
        go(){
            console.log(`${this.#Seats} seats are available`);
        }

}
// create an instance of that class object 
// there is also use the Prototypical concept 
let createCoppy = new bus('BMW', "exios", 10);
console.log(createCoppy);
// Get the Function Value by using protype and Prototypical chain
createCoppy.move();
createCoppy.go();
console.log(createCoppy.Seats);

