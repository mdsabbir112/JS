
// 5 things which are able to fetch the information from an html website code 
// document.getelementbytagname ()
let result = document.getElementsByTagName('li'); // Array return kore 
// console.log(result[3]);

// let result1 = document.getElementById('main-container');
// console.log(result1);

let result2 = document.getElementsByClassName('main-section-2');
console.log(result2);

let result3 = document.querySelector('#main-container');
console.log(result3);

let result4 = document.querySelectorAll('#main-container');
console.log(result4);


// check the class list over there
let checkClass = document.getElementById('main-container');
console.log(checkClass.classList);

// Add or Remove the class from the classlist 
console.log(checkClass.classList.add('Pink'));
console.log(checkClass.classList);
//Remove
console.log(checkClass.classList.remove('pain'));
console.log(checkClass.classList);

// Set Attribute
let title1 = document.getElementsByClassName('main-title-1')[0];
let setting = title1.setAttribute('title', 'Find Something here that you can not see again ');
console.log(setting);

// About Node and Node list
let node = document.querySelector('#main-container');
console.log(node.childNodes);
console.log(node.firstChild);
console.log(node.firstChild.nextSibling);
console.log(node.lastChild);
console.log(node.childNodes[3]);
console.log(node.childNodes[3].previousSibling);

// Insert a section with some Content 
// Where to set 
let manage = document.getElementById('main-container');
// console.log(manage);

// What should we set by Create element 
let section = document.createElement('section');

let h1 = document.createElement('h1');
console.log(h1);
h1.innerText = 'Element are heared';
section.appendChild(h1);

// Add some UL list items
let ul = document.createElement('ul');
// Create the list items into the ul
let li = document.createElement('li');
li.innerText = 'Apple' ; 
console.log(li);
ul.appendChild(li);

let li2 = document.createElement('li');
li2.innerText = 'Orange' ; 
console.log(li2);
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.innerText = 'Mango' ; 
console.log(li3);
ul.appendChild(li3);

// main created section are appended here
section.appendChild(ul);

//Main Section append the child 

manage.appendChild(section);