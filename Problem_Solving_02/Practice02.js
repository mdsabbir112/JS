// Find the friend with the smallest name.
const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function lowest (array){
    console.log(array);
    
    let min = heights[0];
    console.log(typeof min);
    for(let num of array){
        // if(num.length < min){
        //     min = num;  
        // } 
        console.log(num.length);
    }
    console.log('here',min);
    return min;
}

const result = lowest(heights);
console.log('The Lowest Number is :',result)