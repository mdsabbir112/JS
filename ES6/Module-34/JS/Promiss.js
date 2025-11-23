// here we learn about how the promiss will work . 

/**
 * Promiss ::: 
 * 
 * This Promiss is the JSON Responce for an APi call 
 * 
 * Promiss has 3 different States  
 * 1) Pending
 * 2) Resolve
 * 3) Reject
 * 
 * 
 */

//here we see the basic manual Promiss section 

// fetch ("https://jsonplaceholder.typicode.com/comments")
// // .then (Response => console.log(Response.json())) // it return the Promise as Pending state
// .then (Response => Response.json())
// .then (data => console.log(data))


// here we create a fresh new Promiss .

// const fetchData = () => {

//     return new Promise ((resolve , reject) => {
//         const status = true;
//         if (status) {
//             resolve({name: "Rafi"})
//         }
//         else{
//             reject("Server Error")
//         }
//     })
// }
// console.log(fetchData()); // for see the promiss type status 

// fetchData ()
//     .then (data => console.log(data))
//     .catch(error => console.log(error))




// Practice :::: with create a new Promise

// const result = () => {
//     return new Promise ((resolve, reject) => {
//         const status = true ;

//         if(status) {
//             resolve({name: "Sabbir"})
//         }
//         else {
//             reject ("Server Error")
//         }
//     }) 
// }

// console.log(result()); // return  the Promise are Fulfilled

// result()
//     // then we have to accept the data from the promise that we give 
//     .then (data => console.log(data)) //find the Responce / data from an promiss 



// if  we want to get the json formate promise then we need to push the code differently

// const jsonValue = () => {
//     return new Promise ((resolve, reject) => {
//         const status = true ;

//         if(status){
//             const mockData = {
//                 json: () => Promise.resolve({name: "Hero"})
//             }
//             resolve(mockData);
//         }
//         else {
//             reject("Server Error")
//         }
//     })
// }

// console.log(jsonValue()); // promise are return as Fulfilled 

// jsonValue() // call the main function 

//     .then(Response => Response.json())  // get the promise into json formate 
//     .then (data => console.log(data))   // get the data from the request 




// Practice :::

const result = () => {
    return new Promise ((resolve, reject ) => {
        const status = true ;
        if (status) {
            // Declare a variable of an object 
            const mockData = {
                json: () => Promise.resolve({name: "Sabbir"})
            }
            resolve(mockData);
        } else {
            reject("Server Down");
        }
    })
} 

console.log(result());

result()
    .then(Response => Response.json())
    .then(data => console.log(data))
