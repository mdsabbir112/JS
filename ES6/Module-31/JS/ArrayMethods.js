// There are 4 types of Array methods. these are 
/**
 * 1. map()
 * 2. array.forEach(element => {});
 * 3. Filter()
 * 4. Find()
 */


/**
 * Map Functional method :
 * Aita moloto ekta Array er upor loop through kore ekta noton Array te Return kore. 
 *  
 */
let numbers = [1,2,3,4,5,6,7,8,9];

let newArray = numbers.map(number => {
    return number + 1 ;
})
console.log(newArray); // here return a new array 


/**
 * For Each Functional Loop method :
 *  aita array er upor loop through kore kono ekta Specific kaj somponno kore but kono kichu se return kore na 
 * 
 */

const products = [
    {id:1, name:'iphone', color: 'Black', price: 1500},
    {id:2, name:'xiomi', color: 'gold', price: 150},
    {id:3, name:'vivo', color: 'gold', price: 2500},
    {id:4, name:'infinix', color: 'green', price: 9500},
    {id:5, name:'samsung', color: 'white', price: 500},
];

// jeheto kono kichu return kora lagbe na tai variable oo declare korar kono need nai
products.forEach(product => {
    if(product.color == 'gold'){
            console.log(product);
    }
})



/**
 * Filter Functional Loop method :
 * Ekta Specific Condition er upor base kore jei Element or value gula match kore sei gula ke ekta Array te Return kore dey .
 * 
 */
let filterProduct = products.filter(product => {
    if(product.color == 'gold'){
            return product;
    }
    
})
console.log(filterProduct);



/**
 * Find Functional Loop method :
 * Ekta Specific Condition er upor base kore jei Element or value gula match kore sei gula ke ekta Object akare Return kore dey .
 * and aita sodho matro ekta value ii return kore . matched aro jodi value thake tobe tader ke ar print kore na sodho matro 
 * first matched element kei print kore dey and baki matched element gulake ignore kore  
 * 
 */
let findProduct = products.find(product => {
    if(product.color === 'gold'){
            return product;
    }
    
})
console.log(findProduct);