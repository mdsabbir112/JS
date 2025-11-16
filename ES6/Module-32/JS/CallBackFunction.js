/**
 * Call Back Function: 
 * jokhon kono ekta function er vhitore onno ekta function perameter hoye jay  sei
 * perameter walla function ke jokhon amra main function theke call kori and kicho 
 * perameter dei tokhon ai environment ke amra callback function bola hoy .
 * 
 */

//here is the full explanation of these 

// Declare a main function 
function ghotok (newFunction , name) {
    console.log('ekta valo meye ache dekhben naki, patri er name hocche  >> ', name);
    patri(); // ai function call kore another function successfully access kora jacche 
    // that means we are successfully done this 
    
    // we  are also able to send the name as a perametter of the called function 
    patri(name) ;
}

//  we are able to set any kind of variable with some use number , array, function ,object , string etc
// let patri = 'samira Akter ' ;  
// like that we  are able to set the function as like as we are able to set the string .
const patri = function (message) {
    console.log('Yes amader meye ta dekhte hobe  ', message);
}
const name = 'Md Sabbir hasan ';

ghotok(patri , name);

