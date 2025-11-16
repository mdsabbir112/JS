
function sum (num1, num2){
    // var result3; // this is cause of Hoesting
    // Function Block

    const result = num2 + num1;
    // console.log(result);

    if(true){
        // Ai result 2 variable er Scope / aita ke access kora jabe sodho matro ai if condition Block er vhitorei 
        const result2 = num1 - num2;
        console.log(result2);

    }
    //  here it is not possible , cause it is not into the if Block Scope thats why it is not accessable   
    // console.log(result2);

    // here is the Concept of hoesting 
    console.log(result3);
    if(true){
        // const result3 = num1+ num2 ; // it is not accessable 
        var result3 = num1+ num2 ;  // but this is accessable just the cause of using var

    }
    console.log(result3);
}
// Function vhitorer variable function er baire thke access kora jay na 
// console.log(result);
sum(10,20)