
function cashIn(id) {
    let findCash = document.getElementById(id).value;
    let correctCash = parseFloat(findCash); // ✅ FIXED
    return correctCash; 
}


// get the value from element 

function getElementvalueById(id) {
    let element = document.getElementById(id).innerText;
    let elementValue = parseFloat(element);
    return elementValue;    
}

// Added the sum value into the website . 
function setValueById(id , value){
    let valueset = document.getElementById(id);
    valueset.innerText = value;
    // console.log(id , value);
} 