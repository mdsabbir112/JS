// here we Explain about Handle the Error from an code
// handle the Error using Cache () function call

const handleUser = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
.then( response => response.jon())
.then( data => console.log(data))
// Handle the Error with the use of cach function call into the Chaining Method .
.catch(error => console.log('Error Dhorci', error))

}

handleUser();

