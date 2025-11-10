// Spread Operator are basically used for get all the value from an iterable Array .

// Here is an normal Array for get the all value onto it .
let array = [1, 5,7,8,4,7,164,56,634,54,231,8231,64,164,65];
console.log(array);
for(let result of array){
    console.log(result);  //That is how we are able to extract the value from this array
}


// Now we can see that, this work are easily done by using Spread Operator . 
// The Syntex of Spread operator are (...Name of the Variable of the Array)
let names1 = ['anik', 'manik', 'ratanlion', 'Sakib'];
console.log(...names1);


// Find out the largest word from the Array 
let names = ['anik', 'manik', 'ratanlion', 'Sakib'];
let big = '';

for(let get of names){
    console.log(get);
    if(get.length > big.length){
        big =  get ;
    }
}

console.log('Largest name from this Array are: ', big);





// Find out the largest number 
let array1 = [1, 5,7,8,4,7,164,56,634,54,231,8231,64,164,65];
console.log('The Largest Number From this Array is: ',Math.max(...array1));