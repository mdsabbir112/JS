// Array Reverse

let numbers = [1, 2, 3, 4, 5, 6, 7];
// First process 
// numbers.reverse();
// console.log(numbers);

// Second Process
let results = [];
// for(let reverse of numbers){
//     console.log(reverse);
//     results.unshift(reverse) ;

// }
// console.log(results);

// Third process 
for(let i=0; i<numbers.length; i++){
    let ch = numbers[i];
    results.unshift(ch);
}
console.log('here is the Reversed value  ');
console.log(results);