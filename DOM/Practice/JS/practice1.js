// let text = document.getElementById('input-text');
//     text.addEventListener('keyup', function(event){
//         let getText = event.target.value;
//         console.log('Typing...', getText);

//         const button = document.getElementById('delete-btn');
//             button.addEventListener('click', function(){
//                 let pageTitle = document.getElementById('page-title');
//                 pageTitle.style.display = 'none';
//             });

//             if (getText.toLowerCase() === 'delete'){
//                     console.log('Delete Button are Enabled');
//                     button.removeAttribute('disabled');
//             }
//             else{
//                 console.log('Delete Button are Disabled');
//                 button.setAttribute('disabled', true)
//             }
//     })



// This part is for only Bubble 

// First try to reach the First list from the among lists 
let lists = document.getElementById('bubble-1');
 lists.addEventListener('click', function(event){
    console.log('The 1st List item are clicked');
    // We are able to Stop the Flowing Crediencial From there 
    // event.stopPropagation();
    event.stopImmediatePropagation(); // it imedietly Stop the Propagation
 });

//  Order list Section
let Order = document.getElementById('bubble-order');
 Order.addEventListener('click', function(){
    console.log('The Ordered List item are clicked');
 })

//  Section 
let sections = document.getElementById('bubble-section');
 sections.addEventListener('click', function(){
    console.log('The section are clicked');
 })

//  Main section
let mainSection = document.getElementById('bubble-main');
 mainSection.addEventListener('click', function(){
    console.log('The Main Section are clicked');
 })

// Body Section
let bodySection = document.getElementById('bubble-body');
 bodySection.addEventListener('click', function(){
    console.log('The Body Section are clicked');
 })