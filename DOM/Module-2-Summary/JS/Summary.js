// Add something that you want for 

const textInput = document.getElementById('btn-input');
    textInput.addEventListener('click', function() {
        // console.log('button are clicked');
        let textInput = document.getElementById('text-input');
            // console.log(textInput);
            let get = textInput.value;

            // Enter the get text from the input field 
            let newthings = document.getElementById('enter-text');

            // create a new p tag
            let newElement = document.createElement('p');
            newElement.innerText = get;

            // Append the child into the Parent 
            newthings.appendChild(newElement);

         // refresh the overall input field 
         textInput.value = '';

    })


    // Delegation Process are Started From here

    // Delete a list item from the lists
    let parent = document.getElementById('ordered-lists');
    // console.log(parent);
        parent.addEventListener('click', function(event) {
            // console.log(event.target);
              event.target.parentNode.removeChild(event.target);
        })

        // Add a new item into the list 
        let buttonClick = document.getElementById('add-btn');
            buttonClick.addEventListener('click', function() {
                // Add a new list item 
                let addNew = document.createElement('li');
                 addNew.innerText = 'New item are Added';
                
                //  append this into the main parent element 
                parent.appendChild(addNew);
            })
