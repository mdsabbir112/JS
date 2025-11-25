// fetch the api , and use Async and Await keyword 


// this is an general approch

// fetch ("https://v2.jokeapi.dev/joke/Programming?type=single")
// .then (Response => Response.json())
// .then (data => console.log(data))

// here by using Async and Await function 

// const result = async () => {
//     const Response =await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
//     console.log(Response);
//     const data = await Response.json();
//     console.log(data);
// }
// result()


// when we use the general function to use the async and await on that 

async function result () {
        const Response =await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
    // console.log(Response);
    const data = await Response.json();
    console.log(data);
    console.log(data.category);
}
result()