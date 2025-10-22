// Inch to Feet Conversion

// 12 inch = 1 Feet
function Conversion (number){
    let feet = number / 12;
    let feetvalue  = parseInt(feet);
    // Inch
    let inch = number % 12;

    let final = feetvalue + ' Feet ' + inch + ' Inch' ;
    return final;
}

let result = Conversion(76);
console.log(result);

// let resu = Conversion(80);
// console.log(resu);
console.log(Conversion(80));