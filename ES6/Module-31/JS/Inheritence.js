//Here we know about the Class Inheritence .
/**
 * Inheritence :
 *  
 * Class Inheritence is bacially used for use a parent class for create a child class 
 * and get the all information that the parent class have .
 * EX:
 *     --> suppose amra basically amader dada theke amader baba ra property pay and nije oo kicho income kore , abar amra amader babar 
 * ja kichu ache sei gula ke uttor adhikar sotre  pai, with different variant of charecterestics .
 * 
 */

// Create a Parent Super class 

class Vehical {
    // Assign some Attribute with the use of Constructor 
    constructor(name, engine) {
        // Now assign key with these values of Constructor by using this keyword
        this.VehicalName = name;
        this.VehicalEngine = engine ;
    }
    move(){
        console.log('ami nije nije cholte pari');
    } ;
}

// Create a Child / Sub class which inherit the Superclass 
// For Inherit a Class we need to add Extend KEyword with the new Child class 
class bus extends Vehical {
    constructor(name , engine , seats){
        // Now we use Super keyword to insert and get some value onto the parametter of the Vehical class 
        super(name , engine);
        //this command for a new parametter of the bus class 
        this.seatNumber= seats;
    }

}
// For showcase something we need to make an instance or copy of the class and print it . 
let newBus = new bus ('Dowel', 'Horse', 5);
console.log(newBus);
newBus.move();

// Here is the SubSub class 

class car extends bus {
    constructor(name , engine , seats, oil){
        // Now we use Super keyword to insert and get some value onto the parametter of the Vehical class 
        super(name , engine, seats);
        //this command for a new parametter of the bus class 
        // this.seatNumber= seats;
        this.oil = oil;
    }
    go(){
        console.log('main central thing to run and go');
    }

}
// For showcase something we need to make an instance or copy of the class and print it . 
let newCar = new car ('Dowel', 'Horse', 5, 500);
console.log(newCar);
newBus.move();
newCar.go();

// here the Prototype and Prototypical chain oo use kora hoy  