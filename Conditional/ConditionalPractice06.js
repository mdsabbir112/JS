// conditional Practice 06 ; Bus ticket Counter 
let payable = 800;
let age = 5;
let isStudent = true;

if(age<=10){
    console.log('Children are Free');
}
else if(isStudent=false){
    console.log('Students Get 50% Discount');
}
else if(age>=60){
    console.log('Senior Citizen Get 15% Discount ');
}
else{
    console.log('You have to pay:',payable);
}