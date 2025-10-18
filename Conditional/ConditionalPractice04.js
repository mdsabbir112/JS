// Conditional Practice 04  ; Student Commitment with Friend by getting marks

let myMarks = 95;
let frMarks = 85;

if(myMarks>=80){
    // Comparission With Friends
    if(frMarks>=80){
        console.log('Go For take Lunch in Resturant');
    }
    else if(frMarks<80 && frMarks>=60){
        console.log('Good Try , Good Luck For next time');
    }
    else if(frMarks<60 && frMarks>=40){
        console.log('Never Seen his Message anymore');
    }
    else if(frMarks<40){
        console.log('Block Him');
    }
}
else{
    console.log('Go to home and sleep and act like you are sad');
}