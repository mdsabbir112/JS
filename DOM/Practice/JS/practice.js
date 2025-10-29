// Releted with Nodes  

let roomContainer = document.getElementById('Room-Container');
console.log(roomContainer.childNodes);
console.log(roomContainer.childNodes[3]);
console.log(roomContainer.firstChild);
console.log(roomContainer.lastChild);
console.log(roomContainer.firstChild.nextSibling);
console.log(roomContainer.lastChild.previousSibling);
console.log(roomContainer.parentNode);

// Create Element
let helloPlace = document.querySelector('#Place-Container ul');
console.log(helloPlace);

let newli = document.createElement('li');
console.log(newli);
console.log(newli.innerText = 'Bandarban');

// appandChild
console.log(helloPlace.appendChild(newli));