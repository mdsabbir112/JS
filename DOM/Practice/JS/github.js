// Enable and Disabled the Delete Btn when delete are typed into the input Field .

let deleteText = document.getElementById('delete-text');

    deleteText.addEventListener('keyup', function(event){
        let text = event.target.value;
        // console.log('typing...', text);
            
        let btn = document.getElementById('delete-btn')
        btn.addEventListener('click', function(){
     // here when the button was clicked then the title are not able to display itself , it removed from the website .
            const titlePage = document.getElementById('page-title');
        titlePage.style.display = 'none';
        })
        
        
        // console.log(btn);
        if(text.toLowerCase() === 'delete'){
            console.log('delete typed');
            btn.removeAttribute('disabled')
            // Skip the page title
            // const titlePage = document.getElementById('page-title');
            // titlePage.style.display = 'none';
        }
        else{
            console.log('Something else are happend ');
            btn.setAttribute('disabled', true);
            // Enabled the page title 
            const titlePage = document.getElementById('page-title');
            titlePage.style.display = 'block';
        }
    })
