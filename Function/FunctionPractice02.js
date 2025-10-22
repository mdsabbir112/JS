// Take a number if the number is odd multiply it by 2 and return the result. 
// If the number is even divide it by two and return the result.

function get (number){
    // console.log(number);
    if(number % 2 == 0){
        console.log('This number is a Even number');
        // Multiply it by 2
        const result = number * 2;
        return result;
    }
    else{
         console.log('This number is a Odd number');
         // Divide it by 3
        const result = number / 3;
        return result;
    }
}

const mul = get(5);
console.log(mul);
console.log('-----------------------------------------------------');
const div = get(6);
console.log(div);