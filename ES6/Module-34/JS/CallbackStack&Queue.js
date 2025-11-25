// here we discuss about the call back Stack and also callback Queue. 

//Event loop are help to do this work 

/**
 * Actually we all know that , js is a single Threaded lannguage . 
 * --> it run a single line of code line by line  
 * --> for that reason there is some function , http request and timeout()
 * --> function are held in to the code . which might be take some time 
 * --> into the execution Environment . then it might be proceed over there . 
 * 
 * so for that reason we need to add a Queue . 
 * 
 * why we use Queue ? 
 * Ans ::: we use Queue for store the Asynchronus Code into the queue , for Further Excecution 
 *          To do that we need to clear the main call stack by compiling the Sync code over there . 
 *          Then we might to get the other code ,like this Assync code 
 * 
 * So , what we need to do for this Event Loop ? 
 * 
 * Ans : we need , 
 *                  1) Call Stack (LIFO) (First need to clear the call stack )
 *                  2) Call back Queue (FIFO) (Need to be clear)
 *                  3) Event Loop . (Call Stack Get the Function or REquest From the Call back Queue by using Event Loop)
 *              *** then the Execution are successfully happend over the code .
 */

const a = () => {
    b(); // call the Stack key function 
    console.log('a');
}
const b = () => {
    c();
    console.log('b');
}

// For that Async Function we use Call back Queue over there
setTimeout( () => {
    console.log('i am here ');
}, 3000)


const c = () => {
    d();
    console.log('c');
}
const d = () => {
    console.log('d');
}

a()


/**
 * there we use Call Satck , cal back Queue and Event loop over there  . 
 * and after every iteration the call stack are clear over the iteration . 
 */