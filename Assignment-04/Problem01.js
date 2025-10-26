
// Hints:  যদি ইনপুট amount = 1500 হয়, তাহলে VAT হবে: 1500 × 7.5 / 100 = 112.5 Taka

function calculateVAT(number, vat){
    if(typeof number !== 'number'){
       return ('Invalid'); 
    }
    else if(number < 0){
        return ('Invalid');
    }

    else{
        return (number * vat) / 100 ;
         
    }
}

let result = calculateVAT(-665, 7.5);
console.log(result);