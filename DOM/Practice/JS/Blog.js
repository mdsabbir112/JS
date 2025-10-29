// Implement getElementsByTagName()

let tagName = (document.getElementsByTagName('h1'));
console.log(tagName); // it return as Array
for (const list of tagName) { // For of loop into the Array 
        console.log(list.innerText); //Extract the Text From the inner tag
}

// Get getElementsById()
let result = document.getElementById('Place-Container');
console.log(result.innerText); // Return just an number , text or string

//  lets Design like CSS from this js File
let result1 = document.getElementById('Hobby-Container').style.backgroundColor='green'
console.log(result1.innerText); 


// Get element by Class Name  
let result02 = document.getElementsByClassName('hobby-list');
console.log(result02);

for (const list02 of result02) {
        console.log(list02.innerText);
}


// Query Selector All 
let result03 = document.querySelectorAll('#Hobby-Container li');
// let result03 = document.querySelectorAll('#Hobby-Container');
console.log(result03);
for (const here of result03) {
        console.log(here.innerText);
}


// Class list from html
let result04 = document.getElementById('Reading-Container');
// console.log(result04.innerText);
console.log(result04.classList); // list down all the class that are presented under an id 
// get specific id or class by using getAttribute()
console.log(result04.getAttribute('class')); // This is only for an class

//remove
console.log(result04.classList.remove('chair'));
console.log(result04.classList);

//add
console.log(result04.classList.add('fear'));
console.log(result04.classList);

// Set Attribute 
console.log(result04.setAttribute('title', 'Toollip from the Java Script')); //Srt Attribute aa jekono attribute and sathe tar value set kore dea jay

// Done CSS design using js 

const selectors = document.querySelectorAll('section');
// console.log(selectors);
for(let selector of selectors ){
    // console.log(selector);
    selector.style.border = '5px solid tomato';
    selector.style.marginBottom = '5px';
    selector.style.paddingLeft = '15px';
    selector.style.backgroundColor = 'lightgray';
}

// Child node for find the node structure
let readingContainer = document.getElementById('Reading-Container');
console.log(readingContainer.childNodes); // this defines the imidiate Child

// Want to follow the first Child
console.log(readingContainer.firstChild);
console.log(readingContainer.lastChild);

// console.log(readingContainer.childNodes[3]);
console.log(readingContainer.childNodes[3].childNodes);

//next or preious siblings
// console.log(readingContainer.childNodes[3].childNodes[2].nextSibling);
console.log(readingContainer.childNodes[3].childNodes[2].previousSibling);


// Create Element 
// console.log(document.createElement('li'));
let newli = document.createElement('li');
newli.innerText = 'This is md something';
console.log(newli); 

// insert this new  Element into the main html code by  using appand or appandChild 

let readUl = document.querySelector('#Reading-Container ul');
console.log(readUl);
console.log(readUl.appendChild(newli)); //Here i push somethig li that i created in past .Thats how the appendchild are work together .

//parentnode 
console.log(readUl.parentNode.parentNode.parentNode);