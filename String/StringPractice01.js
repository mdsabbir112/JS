// Count how many times a string has the letter 'a'

let myName = 'Md Sabbir HAsan Anik';
let count = 0;

console.log(myName);
let results = myName.split('');
console.log(results);
// console.log(myName.split());
// let result = results[5];
// console.log(result);
// console.log(results.length);
for(let i=0; i< results.length; i++ ){
    // if(results[i]== 'a'){
    if(results[i]== 'a' || results[i]== 'A'){
        // count = count+1;
        count++;
        
        // console.log("Found 'a' at index:", i);
    }
}
console.log("Found 'a' at ",count," Times");