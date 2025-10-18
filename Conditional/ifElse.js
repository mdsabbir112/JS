
// if-else statement for conditionals 

const salary = 10000;
const isBCS = true;

// Basic if-else conditional statement
// if(salary>=20000){
//     console.log('these are the man that you find for');  
// }
// else{
//     console.log('these are not the guy that i want for ');
    
// }




// Advanced Conditional statement (Multiple Conditional )
// const salary1 = 10000;
// const isBCS1 = true;
// const isgood= false;

// if(salary1>=10000 && isBCS == true){
//     console.log('these are the number that she want');
    
// }
// else{
//     console.log('these is not my girl anymore ');
    
// }


// mixed conditional if--else
//     const product = 50;
// const salary2 = 50000;
// const isbad =false;

// if((salary2>=30000 && product>=40) || isbad == true){
//     console.log('The person is a gentalman');
// }
// else{
//     console.log('the person is a ugly man');
    
// }



// Multilevel if-else statement
let buy = 18000;
let age = 30;

if(buy>=30000){
    // given the 10% offer for this 
    const  discount = buy* 10 / 100;
    const payAmount = buy - discount;
    console.log(discount);
    console.log(payAmount);
}

else if(buy>=20000 && age>=35){
    // given the 5% offer for this 
    const  discount = buy* 0.05;
    const payAmount = buy - discount;
    console.log(discount);
    console.log(payAmount);
}
// Nested Conditioal 
else if(buy>=15000 && age>=25){
    // use the nested conditional 
    if(buy>=17000){
        // Then we proide  the 7% discount 
        const  discount = buy* 0.07;
    const payAmount = buy - discount;
    console.log(discount);
    console.log(payAmount);
    }
    else{
        // Then we proide 2% discount
        const  discount = buy* 0.02;
    const payAmount = buy - discount;
    console.log(discount);
    console.log(payAmount);
    }
}

else {
    console.log('there are no discount , and you have to pay= ', buy);
    // console.log(buy);
}