// Object Loop are Started here 
// For in -->Loop are only used for object 
// For of -->Loop are only used for Array 

// Declare some object 
let pen = {
    brand : 'Metador',
    color : 'Black',
    price : 150
}

// Started the for in loop for this object 

// for(let pencil in pen){
//     // this console is only for show the Perametters of the pen object
//     // console.log(pencil);
//     // This console is for show the key-s values 
//     // console.log(pencil,pen[pencil]);
// }


// -------------------------------------------------------------------
// Another Process to apply the loop over an object 
let write = Object.keys(pen); // it shows the objects keys in a array formate 
console.log(write);

let Read = Object.values(pen); // it shows the objects keys Values  in a array formate 
console.log(Read);

// Now we able to use the for of loop because we find the object in an array formate 
for(let collage of write){
    // console.log(collage);
    console.log(collage , '|' , pen[collage]);
}