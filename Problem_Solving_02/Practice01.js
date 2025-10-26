// Find the lowest number in the array below.
const heights = [167, 190, 120, 165, 137];

function lowest (array){
    console.log(array);
    let min = heights[0];
    for(let num of array){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const result = lowest(heights);
console.log('The Lowest Number is :',result);