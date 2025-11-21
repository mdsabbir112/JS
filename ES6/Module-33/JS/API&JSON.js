// there is the breif description about API and its connection with JSON.

//This is the Structure of Call the Api

fetch('https://jsonplaceholder.typicode.com/todos/1') // aii line ta always ekta promiss / responce return kore .
// and aii line ta theke jei responce return hoy oita aii secound line aa dhora hoy 
    .then(Response => Response.json()) // aii line ta mainly response ta ke JSON promiss aa convert hoy.
    .then(JSON => console.log(JSON)) // object akare jei plain data thake tai pay

   
    // now try to add a button and click it to see the overall object on it 

    function hand (){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => Response.json())
    .then(JSON => console.log(JSON))
    }  // the function will be clicked successfully.