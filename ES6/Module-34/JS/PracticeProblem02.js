
// take the function parameter for set the time and the name 

function delayedGreeting(name , delayTime) {
    setTimeout(() => {
        console.log('His name is ', name);
    }, delayTime);
}

delayedGreeting('Alice' , 2000) ;