// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longest (str){
    
    let seperate = str.split(' ');
   
    // Loop
    let longestWord = '';

    for(let new1 of seperate){
        
        if(new1.length>longestWord.length){
            longestWord = new1;
        }
        
    }
    return longestWord;
}

let result = 'I am learning Programming to become a programmer';
console.log('The largest number from the string is:', longest(result));
let result1 = 'I am learningjdgvgbbbvvs Programming to becomemingsssssssddddddddddd a programmer';
console.log('The largest number from the string is:', longest(result1));