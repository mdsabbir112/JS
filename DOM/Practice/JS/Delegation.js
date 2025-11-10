//  now here i write a js Program where i covered the Delegation part of an item over there 

// First access the First items where you click for 
// For that i want to use the for loop for every class

// const items = document.getElementsByClassName('lists');
//   console.log(items);

//   for(let item of items){
//     console.log(item);
//        item.addEventListener('click', function(event){
//         // Remove a line which are deleted by click event
//         console.log(event.target.parentNode.removeChild(event.target));
//        })

//   };


//secound process:  Get the Parent Element for access the all old and new items

let parentItems = document.getElementById('order-lists');
    parentItems.addEventListener('click' , function(event){
        // console.log(event.target);
        event.target.parentNode.removeChild(event.target);
    })


//   Add new item into the Ordered lists

const newBtn = document.getElementById('new-btn');
    newBtn.addEventListener('click', function(){
        // console.log('The Button are clicked Successfully');
        // add the parent element where the item are added 
        const ol = document.getElementById('order-lists');
        
        //Add a new item into the Order list 

        // Create a new item 
        let newItem = document.createElement('li');
         newItem.classList.add('lists');
         newItem.innerText ='New List item are Added';
        //  console.log(newItem);

        // Append a new item into the parent Element.
        ol.appendChild(newItem);
    })