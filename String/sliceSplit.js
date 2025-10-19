// here we covered varioud methods 
// Slice(), Split(),Join(), Concat();

// Slice() methods  
let Sentence = 'MdSabbirHasan';
console.log(Sentence.slice(2, 8));

// Split()
let description = 'This is Md Sabbir Hasan';
// let result = description.split();
// let result = description.split("");
let result = description.split(" "); // here create a space for Separate the words bt following the space ,
//    let result = description.split("a");
// console.log(result);


// Join() --> it basically works on the Array and Array elements
// it converts string array to normal text and able to modify the gap by using comma slase or whitespace. 
let fname =['Sabbir', 'hasan', 'anik' ];
let lname ='Hasan';
// console.log(fname.join()); // By Default it gives comma on the output of the elements array
// console.log(fname.join('|'));
console.log(fname.join('/'));


// Concat()--> it add one string to another string 
let first = 'Anik';
let last = 'mullah';

// const results = first + ' ' + last;  // this is a basic arithmatic operation to add two string 
// now we use a method name is concat()
const results = first.concat(' ').concat(last);

console.log(results);

// Include() --> it finds that any charecter into the string or array are present or not .
console.log(first.includes('A'));