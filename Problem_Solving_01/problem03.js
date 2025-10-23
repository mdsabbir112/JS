// Write a function to count the number of vowels in a string.

function names (str){
    // console.log(string);
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let new1 = [];

    let div = str.split('');
    // console.log(div);

    for(let ami of div){
        // console.log(ami); 

        if(vowels.includes(ami) && !new1.includes(ami)){
            new1.push(ami);
        }
    }
    console.log('Vowels are presented in this String are:',new1);
    let count = new1.length;
    // console.log(count);
    return count;
}

let result = names('Md Sabbir Hasan');
console.log('The number of the Vowels are presented in this String are :',result);