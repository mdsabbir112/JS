// Here we know about the Build in methods like 
// Finding keys, values, entries , delete, seal, freeze from an object 

// Create an Object 
let person = {
    name: 'Rimon',
    age: 12,
    occupation: 'student'
}

// Find the Keys, values, and entries from this object 
console.log(Object.keys(person)); // Give the overall keys from an object 
console.log(Object.values(person)); // give the overall values of every key from an object
console.log(Object.entries(person)); // Display the Object as an Array for loop operation or anything else 

// RE-Assigned some value into an object if we need  
person.age = 50;
console.log(person);

// Add a new keys and its value 
person.division = 'Dhaka';
console.log(person); // Successfully added the new key and its  values 

// Apply Seal 
//  when we apply seal we are not able to add some keys and its values into the object 
// but we able to reassigned the keys values 

Object.seal(person);

// Try to add another keys and its values , but it is not able to add into the object 
person.village = 'pormeshordi';
console.log(person);

// but we able to reassigned a value on it 
person.occupation = 'Developer';
console.log(person);


// Another one is freeze() ; if we apply this we are not able to add or assign any value into the object 
Object.freeze(person);

// Try to add a new key and its values 
person.country = 'Bangladesh';
console.log(person); // not able to add with the list of the object 

//  and also not able to add some value into any keys which are already present into the object
person.age = 20;
console.log(person); // these are not able to add the new reassigned value on the key 



