// Here is covered the Destructuring Concept are covered 
// it just applied onto the Array and Object for extract the value from these .

// Basic Object Value Extraction are 
let object = {
    name: 'md sabbir hasan ',
    age: 30 ,
    occupation: 'web Developer'
}
// Extract the Value from this object 
console.log(object.name);
console.log(object.age);
console.log(object.occupation);


// Object Destructuring  
// Structuring of Distructuing : let {Enter name of the key/parameter} = object Name;
let {name, age, occupation} = object ;
console.log(name);
console.log(age);
console.log(occupation);


// Basic Array Value Extraction are 
let array = ['Mofazzal', 30 , 'Game Developer'];
// Extract the Value from the Array by the help of index 
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// Array Destructing 
// Structure: let [give the name as you want (name entry Freedom)] = Array name ;
                        // here first element take First index of the array
let [name1 , age1 , designation] = array;
console.log(name1, age, designation); // Successfully extract the value from an Array bu using the concept of Destructing