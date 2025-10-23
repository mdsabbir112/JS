// you are given an array of numbers .count how many times 
// the a number is repeated in the array.

function repeat (Array){
    let count = 0;
    for(let num of Array){
        // console.log(typeof num);
        if(num === 5){
            count++;
        }
    }
    return count;
}

let result = repeat([5, 2, 6, 7, 5, 4, 6, 5, 8, 5]) // from this array we are find 5
console.log('5 are presented in this Array:',result , 'Times');
