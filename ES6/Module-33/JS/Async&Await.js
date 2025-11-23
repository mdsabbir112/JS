// here this tools  are work for handle the error oer the code 

// Async are meant as Asyncronus Functoion , By default the code are running Asyncronously (line by line) 
// Await is stands for not to be wait for geeting the output . please continue the 
// work , if the running procedure task are completed then the output will show there  


// // decalare a function 
// const handle = async () => {
//     //get the information from the database 
//     const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
//     // get the promiss / response from the database 
//     const data = await response.json();
//     console.log(data);
    
// }
// // call the function 
// handle();



// if we want  we also able to control the Error into that by using try and catch 
const handle = async () => {

try {

    
        //fetch the data from database 
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts");

        const data = await response.json();
        console.log(data);
    }


catch (error){
    console.log('These Error are might be inherited ', error );
}

}
//finally call the function
handle();
