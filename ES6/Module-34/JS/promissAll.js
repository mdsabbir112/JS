// here is the Complete Description of Promise All Function 

/**
 * Promise All ::;
 * 
 * --> It helps us to combined Different API in one code / 1 js file 
 * 
 */

const Arrays = [
     "https://jsonplaceholder.typicode.com/comments",
     "https://jsonplaceholder.typicode.com/posts",
     "https://jsonplaceholder.typicode.com/albums"

];

// console.log(Arrays);

Promise.all (Arrays.map(Array => {
    return fetch(Array).then(Response => Response.json()) // they just return the pormise over there 
    // .then(data=> data)
}))

    // .then(Response => Response)
    .then(data=> console.log(data)) // get the promise and show the output
    .catch(error => console.log(error))