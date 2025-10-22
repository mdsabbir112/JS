// Find the Leap year . 

// Simple Method , (But this method is not 100% correct)
// Every year is divisible by 4

function leap (year){
    if(year % 4 === 0 ){
        return true;
    }
    return false;

}

// console.log(leap(1981));
// console.log(leap(1938));
// console.log(leap(2024));



// General theory :  Apply the Authentic Method and Follow the Original theory 

// instruction :
// if the year is not divisible by 100 and it will divisible by 4. this is the first condition.
// Second condition: if the year is divisible by 400 , then it will be the Leap year .

function leap(number){

    if(number % 4 === 0){
        if(number % 100 === 0){  // in this condition , if number are divisible by 100, then it also must be divisible by 400;
            return number % 400 === 0; // if this condition are true then return command will call as true .(return true;)
        }
        return true;
    }
    else{
        return false;
    }
}

console.log(leap(1995));