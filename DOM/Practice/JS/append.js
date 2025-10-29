
// When you append something then you might check 

// Where you added the content 
let mainContent = document.getElementById('main-container');
// console.log(mainContent);

// What to added into the content 
let section = document.createElement('section');

let h1 = document.createElement('h1');
h1.innerText = 'Food are Available Here';
console.log(h1);
section.appendChild(h1).style.color = 'tomato';

// create the ul and make 4 list li into this 
let ul = document.createElement('ul');

let li1 = document.createElement('li');
li1.innerText = 'Barger';
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.innerText = 'Pizza';
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.innerText = 'Biriani';
ul.appendChild(li3);

let li4 = document.createElement('li');
li4.innerText = 'Polaw';
ul.appendChild(li4);

// Append the all ul into the section here.
section.appendChild(ul).style.color = 'green';


// Append the content
mainContent.appendChild(section);



//Another way to change the html code and also the contents and able to add some Section or any kind of element. 
// By using InnerHtml
let htmlInner = document.createElement('section');
htmlInner.innerHTML= `
    <h1> Cloths Items </h1>
    <ul>
        <li> Shirt </li>    
        <li> Pant </li>    
        <li> T-Shirt </li>    
        <li> Lungi </li>    
    </ul>

`
mainContent.appendChild(htmlInner);