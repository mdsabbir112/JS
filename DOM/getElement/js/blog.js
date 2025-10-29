console.log('This is not a js function over there');
console.log(document);

// console.log(document.getElementsByTagName('li'));
let list = document.getElementsByTagName('li');
// console.log(list);

// This list is look like an array , this is also called as array like object
for(let get of list){
    // console.log(get.innerText); // innerText is used for extract the text from the Tag
} 


// Get Element By ID : 
// only used for get one specific element from the overall html code by the help of an id 

let subject = document.getElementById('fav-subject');
console.log(subject.innerText);

// if the id are not present into the html code then it might return Null value 
console.log(document.getElementById('alert'));

// Get Elements By Class name ;
//  Only used when we need any information which one is related to the same class name 

let places = document.getElementsByClassName('fav-places');
console.log(places);



// We are able to continue a loop in this array like object
for(let place of places){
        console.log(place.innerText);
}

// if the class are not present into the html code then it might return the empty Array 
console.log(document.getElementsByClassName('alert'));


// querySelectorAll()
// it return the nodeList which is static (not Automatically Updated)

let result = document.querySelectorAll('.places-container li ');
console.log(result );
for(let li of result){
        console.log(li.innerText);
}





// Done some powerful css styles by using js 

document.getElementById('fav-subject').style.backgroundColor= 'orange'.color='black'

// set or get the Attribute
const title = document.getElementById('fav-subject');
console.log(title.getAttribute('id')); // THIS IS FOR ONLY ID 

console.log(title.getAttribute('class'));// This is only for Class

console.log(title.classList); // This for check if the all class are available or not , and return it as an array ,
// for that reason it is much more easier for us to apply add or remove operation 

// here i remove a class from the classlist 
console.log(title.classList.remove('there'));
console.log(title.classList);

// Here  i add a class into the classlist 
console.log(title.classList.add('near'));
console.log(title.classList);



// Now Set some Attribute 
console.log(title.setAttribute('title', 'Toollip from the Java Script'));
 