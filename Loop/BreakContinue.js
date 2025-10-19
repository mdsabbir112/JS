// Break means --> i an done with this loop. it ends the loop.
let num = 50;
while(num>1){
    if(num<45){
        break;
    }
    // console.log(num);
    num--;
}

// Continue Means--> Skip the probable Iteration for the given condition .
let age = 55;

for(let i=54; i>1; i--){
    if(i%5!==0){
        continue;
    }
    console.log(i);
}