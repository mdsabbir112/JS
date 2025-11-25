// The Function tellJoke() below logs a funny message every 2 seconds and after
// 10 seconds , it  stops . Complete the code below and see the output .
 let res = 0;

function tellJoke( name , time ){

  let result =   setInterval(() => {
        console.log('hey ,', name ,' you are so funny ');

    res = time + res ;
    console.log(res);

    if(res == 10000){
        clearInterval(result);
    }

    }, time);
    

}

tellJoke('Anik' , 2000)