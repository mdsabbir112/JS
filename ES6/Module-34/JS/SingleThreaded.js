// Here we find out the Basic context about js 
// This is also about Synchrounus and Assynchronus 


// We all know that js is the Single Threaded Language
/**
 * Single Threaded means that the code are Excecuted line by line Synchronizely
 * 
 * But some of little case the code are working in an Asynchronise style (not executed line by line , it depends on the time 
 * of the Excecution time of the code )
 * 
 *  
 */

// here is some Examples of that single Threaded formula 

let a = 10;
let b = 20 ;
console.log('this is the First boy');

// here fetch some Api in this code for test the code Excecution 
// are in synchronus or Assynchronous

fetch ("https://jsonplaceholder.typicode.com/comments")
.then (responce => responce.json())
.then (data => console.log(data))

//this code Excecution are take some time to excecute. so it works letter .
//and rest of the code are Excecutes perfectly in Synchronizely

let result = a + b ;
console.log('this is the last boy');
console.log(result);