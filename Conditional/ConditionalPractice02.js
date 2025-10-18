// Conditional Practice 02 
// BMI Calculator

let weight = 70;
let height = 1.37;
// let test = (weight)**2;
let BMI = weight / (height)**2
// console.log(`Your BMI is :${BMI}`);
console.log('Your BMI is :',BMI);

if(BMI<30){
    if(BMI<18.5){
        console.log('You are Underweight');
    }
    else if(BMI>=18.5 && BMI<=24.9){
        console.log('You are Normal');
    }
    else if(BMI>24.9 && BMI<=29.99){
        console.log('You are Overweight');
    }
}
else{
    console.log('You are Obsesed');
}