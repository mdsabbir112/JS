// Different Types of Events
let effect = document.getElementById('click-here');
// console.log(effect);
effect.addEventListener('mousemove', function(){
    console.log('Mouse are Triggered');
});


// Get the input field from there
// Focus , Blur

// Focus the input Field
let inputFocus = document.getElementById('focus-click');

inputFocus.addEventListener('focus' , function(){
    console.log('Added the Name Successfully');
})
let inputFocus1 = document.getElementById('focus1-click');

inputFocus1.addEventListener('focus' , function(){
    console.log('Added the Email Successfully');
})

// Blur the input Field

let inputFocus2 = document.getElementById('focus-click');

inputFocus2.addEventListener('blur' , function(){
    console.log('Done Name Successfully');
})
let inputFocus3 = document.getElementById('focus1-click');

inputFocus3.addEventListener('blur' , function(){
    console.log('Done Email Successfully');
})


//Key typing : it check whether the input field will tuped or not 
// By pressing key down Event s
let inputFocus4 = document.getElementById('focus1-click');

inputFocus4.addEventListener('keyup' , function(event){
    console.log('Typing', event.target.value);
})