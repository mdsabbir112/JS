// Find out the Avargae of  an Even numbers from an all Array Element  . 

function avarage (Array){
    let odd = [];
    let even = [];
    for(let sep of Array){
        // console.log(sep);
        if(sep % 2 === 1){
            odd.push(sep);
        }
        // For Even
        else{
            if(sep % 2 === 0){
            even.push(sep);
        }
        }
    }
    // console.log(odd);
    // console.log(even);

    // Finding the Avarage 
    // For odd Section
    let sum = 0;
    for(let ami of odd){
        sum = sum + ami;

    }

    // For Even Section
     let sum1 = 0;
    for(let ami1 of even){
        sum1 = sum1 + ami1;

    }


    let size = odd.length;
    let size1 = even.length;
    let avg1 = sum / size;
    let avg2 = sum1 / size1;
    // When we goes for return the value then we set it as an object with key value pair.
    return {
        avg1: avg1,
        avg2: avg2
    };
}

let arr = [5,8,165,15,138,54,2651,598,121,563,4598];
// console.log(avarage(arr));
let result = avarage(arr);
console.log('Average of the all Odd numbers on the array is :',parseInt(result.avg1));
console.log('Average of the all Even numbers on the array is:',result.avg2);