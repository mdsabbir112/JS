// There we implement how to create a class and how can we able to insert the key value Dynamically.
/**
 * Class: 
 * JavaScript Classes are templates for JavaScript Objects 
 * inside of it we are not set the Variable , its name is Attribute .
 * we can able to use Function , array . also an object .
 * we are able to make a Instance/Copy with set a new variable .
 * from that new copied variable we are able to set any attribute Dynamically .
 * For that we can add a constructor function with some parameter . 
 * this Constructor are able to set the Attribute key automatically by using 'this' keyword.
 * Then Dynamically we are able to change the value from inside of the main class object . 
 * 
 */


// Create a new class Object 
class products {
    // Set a Attribute which is most like a variable , no need to declare the variable type 
    // like const , var , let etc. 
    owner = 'Md Sabbir Hasan';
    ownersAge = 30 ;

    // Make a constructor for add something onto the object class 
    //constructor(parameter){this.attribute key name }
    constructor(name , price , brand , color){
        // console.log(name, price, brand, color);
        // Now we need to this keyword for add the key name with all the parametter colur
        this.DeviceName = name;
        this.DevicePrice = price ; // here by using this keyword we are able to add dynamic new value into the main class object .
        this.BrandName = brand ;
        this.DeviceColor = color;

    }

    details(){
            console.log( `This is the details of the ${this.DeviceName} product`);
    }
}

// Make an instance / Copy of this class to Reuse it in future , when we need this.
let iphone = new products();  //New Instance /copy are created .
console.log(iphone);
console.log(iphone.details()); // Call the function for print .


// now Create a Constructor inside a Main class to set any kind of value as like as the user are want to add dynamically 
let xiomi = new products('Xiomi', 50000, 'xiomi', 'White'); // call the parameter here 
console.log(xiomi);
console.log(xiomi.details());