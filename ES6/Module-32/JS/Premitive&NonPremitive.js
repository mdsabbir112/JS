// here is the some Difference Showcase of Primitive and Non-Primitive 

// There are Two type of datatype into a datatype

/**
 * Primitive Data Type :
 * The Basic Difference is :
 *  1. This is Immutable (The Value can not be change)
 */

// Primitive Datatypes are : Number , String , Bollean , NaN , undefined 
let name = "Md Sabbir hasan ";
let newName = name ;   // set a new Variable 

console.log(newName);

name = 'hero Alom'; // here assign a value but it can not able to modify the First name 
console.log(newName); // so this is Immutable (can not be change), that are proved there 




/**
 * Non- Primitive Data Type : Array , Object , Function , Date , Regx 
 *  This Datatype is Mutable (can be change over the time )
 * 
 * in these Non-Primitive data type it Primarily stored the data's Value into an 
 * reference which named as pointer . where we can fetch the Address of the main
 * object or array .
 * 
 */

//  here is the working of non-Primitive data types which are Mutable 
let work ={
    hour: 50 ,
    name : 'Md Sabbir Hasan'
}

let mainWork = work;
console.log(mainWork);

// here modify the object name and it will able to change the name .
mainWork.name = 'hero- Alom';
console.log(mainWork); // here is the new value are modify successfully , and it is mutable that are  proved here /