// here we apply different types of perametters........

// we are using Array, string , Numbers , objects as a perametters

//Basic  perametters
function Basic (num1){
    // console.log(num1

}
Basic(5);

// numbers  as a perametters
function Numbers(num1, num2){
    const result = num1*num2;
    return result
}

const res = Numbers(5, 10);
// console.log(res);

// String as a perametters
function name1(str1,str2){
    const gono = str1.length;
    console.log('Length of the First String: ',gono);
    const gona = str2.length;
    console.log('Length of the Secound String: ',gona);

    // check wheter the two string are become contain  same no of words or not !!!
    if(gono === gona){
        console.log('yes , they are same ');
        
    }
    else{
        console.log('no , they are not same at all ');
       
    }

}

name1('Sabbir','Hasan');


// bollean as a perametters

function sotty (num9, isCross){
    const add = num9*num9;
    console.log(add);

    //  check the addition are cross 50 ? or not bu using bollean 
    if(add<=50){
        console.log('it Cross the road ');
        return true ;
    }
    console.log('it not Cross the road ');
    return !true;
}

sotty(12,true);


// Array as a perametters
function arr (array){
    console.log(array);
    let size = array.length;
    console.log('The Size of the array is : ', size);
    let type = typeof array;
    console.log(type);
    // add all the elements  
    if(typeof array === type){
         let sum = 0;
        for(let result of array){
           
             sum = sum + result;
             
        }
        console.log('The Sum of the all element of the Array',sum);
            // return true;
            return sum;
    }
    else{
        console.log('not follow the condition');
    }
}

let resu = arr([5,6,7,2,5,6,6,654,8,4,4,6,6,6,6,7,8,9,89,89,117]);
console.log(resu);


// Object  as a perametters