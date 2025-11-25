// Set Time Interval (function , time)
setTimeout( () => {
    console.log('this is md sabbir hasan ');
}, 3000)

// here we define the set interval 
// this is simillar like the setTimeout(Function , Time)

// setInterval( () => {
//     console.log('hey, i am From bd');
// }, 4000)

let count = 0;

// setInterval( () => {
//     count = count + 1 ;
//     console.log(count);
// }, 3000)

// now one question released that how could we are able to stop the iteration 

// we are able to do this into various way --> 
// 1. By using If ELse 
// 2. By using clearInterval (need to push a perameter which the setInterval are present )

let result = setInterval( () => {
    count++;
    console.log(count);

     // this is the one way to do this !!!
    // clearInterval(result);

    // Another way to use if ELse condition 
    if(count == 5) {
        clearInterval(result)
    }
}, 3000);

