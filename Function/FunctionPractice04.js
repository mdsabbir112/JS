// Write a function called count_zero() which will take a 
// binary string (Binary string is a string which is consist of only 0 and 1) 
// as parameter and count how many 0’s are there in that string.
function count_zero(string){
    
    const splo = string.split('');
    // console.log(splo);
    let count = 0;
    for(let number of splo){
        // console.log(typeof number);

        if(number === '0'){
            count++;
        }
    }
    return count;
}

let result = count_zero('10111001010010001010100111010101');
console.log('0 are presented in',result ,'Times');
// console.log(result);