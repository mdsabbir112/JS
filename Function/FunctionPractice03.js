// Write a function called make_avg() which will take an array of integers 
// and the size of that array and return the average of those values.
function make_avg(array){
    let sum = 0;
    let size = array.length;
    for(let result of array){
         sum += result;
    }
    let avg = sum/size;
    return avg;

}

let average = make_avg([5, 6, 7, 8, 9, 10]);
console.log('The total Average of the array is:',average);