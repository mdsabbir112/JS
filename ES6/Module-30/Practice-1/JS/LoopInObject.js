// For object we might able to use a for-in loop 
// We are also able to use for of loop in a different style 

let person = {
    name: 'sabbir',
    age: 20,
    class: 12
}

// Lets get into the for in loop for extract the all keys from the object 

for(let key in person){
    console.log(key); //Key of the object 
    console.log(person[key]);  // Value of the object 
}



// Now try to get the key and Value by using for of loop
let array = Object.entries(person);
console.log(array);

for(let keys of array){
        console.log(keys);
        let [parent , child] = keys; // Apply array Distructuring for find the key and the value by apply for of loop
        console.log(`The keys are : ${parent} | The Values of the keys are: ${child}`);
}



let arr = [1,2,3,4,5,6,48,41,6];
console.log(...arr);
// let result = [...arr]; // Coppy the overall array on another variable 
// console.log(result);