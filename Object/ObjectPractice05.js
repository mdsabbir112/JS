// Loop through an object and print the key-value pairs with their types

// Object
let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};
// Loop
for(let presence in myObject){
    console.log(presence , '|' , myObject[presence],'-->' ,typeof myObject[presence]);
}