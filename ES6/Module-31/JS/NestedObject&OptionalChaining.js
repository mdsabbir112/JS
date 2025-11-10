// here is the Explanation of Nested object 

let person = {
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

//Get the Value From the object and nested object 
console.log(person.name);
console.log(person.isStudent.isTrue);
console.log(person.isStudent.subject[2]);
// console.log(person.isStudent.result.8); //there is an error occured because the access of key 8 are not able to access because of dot notation . 
// it only possible when we use the bracket notation, cause bracket notation is more powerfull then the Dot notation.
console.log(person.isStudent.result['10']);
console.log(person.isStudent.result.mother); //there is occured an error , cause the mother key are not present into this object .For that reason there is an Fattal error occured.
// For overcome from this Crash Fatal Error we need to Implement the Optional Chaining Process 

// Optional Chainig are help to check the line by using as like as the concept of Ternary operator Loop system .
// For that er might use ? on the parent line of it 
console.log(person.isStudent.result?.mother); // it checks whether the content are present or not into the main object 
console.log(person['isStudent']?.['result']?.['9']); // here use only the bracket notation with Optional Chaining to ignore the Error.