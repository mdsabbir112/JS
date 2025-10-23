// Find the Maximum value from an array 

function find (arr){
    console.log('Array:',arr);
    let max = arr[0];
    for(let num of arr){
        // console.log(num);
        if(num > max){
            max = num;  // Gradually Update the value of max
        }
    }
    return max;
}

let array = [5,14,23,4,15,16,216,154,31,8,34,65,45,545,558,7];
let result = find(array);
console.log('The Largest Value from this Array is:',result);