//here we know about the Async and Await Function 

// this function are work in a synchronus way. it is not a Async Function yet 

const fetchData =  async () => {

    const response = await fetch ("https://jsonplaceholder.typicode.com/albums")

    const data = await response.json();
    console.log(data);
}

fetchData() 