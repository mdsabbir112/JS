// Conditional Practice 03  ; Grade Analysis 

let marks = 92;

if(marks>=50){
    if(marks>=80 && marks <= 100){
        console.log('Great You are Achive A+ with geeting :',marks,'%marks');
    }
    else if(marks>=70 && marks <= 79){
        console.log('Great You are Achive A with geeting :',marks,'%marks');
    }
    else if(marks>=60 && marks <= 69){
        console.log('Great You are Achive A- with geeting :',marks,'%marks');
    }
    else if(marks>=50 && marks <= 59){
        console.log('Great You are Achive B+ with geeting :',marks,'%marks');
    }
    
}
else{
    console.log('Sorry; You are Fail ');
}