// Check the String is immutable or not 
// String --> is immutable . it can not modify itself like the array do.
// Basic normal array done this modification properly , thats why it is called as mutable .

const  arr  = [4, 45, 46, 85, 57]
 console.log(arr);
//  update the array by adding some element or replace the element that i want by accessing the index items,
arr[0]=100;
console.log('Updated array');
console.log(arr);


// now we want to access the string and its items .

const country = 'Bangladesh';
console.log('--------------------------------------');
console.log("String length: ");
console.log(country.length);
// Try to access the element from string using the concept of index
console.log(country[0]);
// but we are not able to change or update the string anymore .
country[0]= 'A';
console.log(country); //it can not able to modify the content over there.

