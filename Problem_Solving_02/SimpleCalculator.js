// Simple calculator to call function inside a function

// Function for add , sub , mul, div 
function add(a, b){
    let addition = a + b;
    return addition;
}
function sub(a, b){
    let substract = a + b;
    return substract;
}
function mul (a, b){
    return  a * b;
}
function div (a, b){
    return a / b;
}


// Main Function 
 function mainCalculator (x, y, operator){

    if(operator == 'add'){
        let result = add (x, y);
        return result;
    }
    else if(operator == 'sub'){
        let result = sub (x, y);
        return result;
    }
    else if(operator == 'mul'){
        let result = mul (x, y);
        return result;
    }
    else if(operator == 'div'){
        let result = div (x, y);
        return result;
    }
    else{
     let result =   console.log('Empty');
     return result;
    }
 }

 let MainResult = mainCalculator(5,  7, 'add');
 console.log(MainResult);