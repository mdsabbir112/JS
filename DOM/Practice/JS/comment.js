// we are aiming that we are trying to add a comment into our web page dynamically .

// Started from here 
// Step-01: Fetch the the Button First
let buttonClick = document.getElementById('btn-click');

//Add the Event listener
buttonClick.addEventListener('click', function(){
    // Fetch the data from the text field
    let textField = document.getElementById('text-area');
    // Get the value from the text field by value
    let getValue = textField.value;  //Need to add this someWhere 
    // console.log(getValue);
    // Need to Create an Paragraph ELement
    let parentNode = document.getElementById('main-div');
    // console.log(parentNode); 
    let newPara = document.createElement('p');
    // console.log(newPara);
    // Need to insert the input field value on it.
    newPara.innerText = getValue; // successfully added the value here .

    //Now need to add the content into the main section for display
   let designPera = parentNode.appendChild(newPara);
   designPera.classList.add('comments-class');  // classlist is for add an css class for the design part of the div .

    //    For Remove the text from the Text Field after Add this one into the paragraph .
    textField.value = ''; // ai line ta text field aa thaka sob Value gulake remove kore dicche 
    


});