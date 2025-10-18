
// There are mainly 3 types of variable 
// these are --->
// number , bollean , string



// Number Variable
var age = 25;
var height = 123;
var result = age + height;

// console.log(age + height);
// console.log(result);


// Bollean Variable
var wouldYouTellLie = true;
// console.log(wouldYouTellLie);
var isHappy = false;
console.log(isHappy);

// String Variable
var fname = 'Md Sabbir';
var lname = " hasan";

var fullName = (fname+lname);
// console.log(fullName);


var age = 25;
age += 10;
// console.log(age);

var height = '12';
console.log(typeof height);

var age = parseInt ('12');
console.log(age);
console.log(typeof age);

// Fundamental of js numbers 
//   parseInt() , parsefloat() , tofixed() fUNCTION

// parseInt and parsefloat
var age = parseInt("22.5");
var agh = parseFloat("55.25");
// console.log(age);
// console.log(agh);

// tofixed()
var first = 12.5;
var secound = 45.2466;
//  console.log(secound.toFixed(2));
var result = (first * secound);
console.log(result.toFixed(2));


// isNaN() FUNCTION
var light = 45;
var name =  '12sabbir';
var name1 = parseInt ('12sabbir');

console.log(isNaN(light));
console.log(isNaN(name));
console.log(isNaN(name1));




// concatenation using basic arethmatic (+ - * / %  ** ) operation

var a=12;
var b=25;
var result1 = (a + b);
var result2 = (a - b);
var result3 = (a * b);
var result4 = (a / b);
var result5 = (a % b);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);


// Concatination with the string and number 

var age = 123;
var name = 'md sabbir hasan ';
var nok = '12345';
// var nok = 123456;

// var result = (name + age);
// var result = (nok + age);
var result = (nok - age);



console.log(result);

