// Generate the Real time Date and time over there 

// Syntex : new Date();  like this 

let date = new Date();  // It gives us the todays information over the time 
console.log(date);

// if we want to add some date like String then 
let strDate = new Date('2061-09-25'); // by using this we are able to showcase the date that we want to deliver.
console.log(strDate);

// if we want to get the date and month specifically from the given date then we can do it .
console.log(date.getMonth());
console.log(strDate.getDate());
console.log(strDate.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
 

// we are also able to get the date as a number 
let SpecificDate = new Date(2026, 2, 27); //here we get the date as a number 
console.log(SpecificDate); //Output: 2026-03-26T18:00:00.000Z
console.log(SpecificDate.toLocaleString()); //Output: 27/03/2026, 12:00:00 AM , toLocaleString() function helps us to make the date like this way.

// now we are working for set some month or date and update the previous date as like as we can .
console.log(SpecificDate.setDate(15));
console.log(SpecificDate); // it will update the previous date section ; like this way we are able to update the date,time,hour ,and a year also.
