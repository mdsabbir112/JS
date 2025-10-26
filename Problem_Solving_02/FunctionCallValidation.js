// Function Call Validation 

function validation (a, b){
    // console.log(a,b);
    if(typeof a !== 'string'){
        return ('Please enter the String ');
    }

    else if(typeof b !== 'string'){
        return ('Please enter second element as the String ');
    }
}

let result = validation('asik' , 54);
console.log(result);


// While we getting the Array then it might be show the type of it is object .
// to overcome from that issue then we have to implement the code as Array.isArray(numbers )


function validation1 (number){
    console.log(typeof number); // it shows this number is an object not an array , for that reason we have to implement the additional code .

    if(Array.isArray(number) === false){ //by this we find out the solution here
        return ('Please enter the Array ');
    }
    const second = number[0];
    return second;

    
}

let result1 = validation1(['asik' , 54]);
// let result1 = validation1(54);
console.log(result1);
