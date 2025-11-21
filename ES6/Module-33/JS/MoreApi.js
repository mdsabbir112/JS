// here is the depth discussion . about the API
   
fetch ('https://jsonplaceholder.typicode.com/users')
    .then (responce => responce.json())
    .then (data => {
        console.log(data);
    })

    document.getElementById('responceClick')
        .addEventListener('click', function(){
            fetch ('https://jsonplaceholder.typicode.com/users')
                .then(responceProps => responceProps.json())
                .then (data => {
                    console.log(data);
                    dataRecheck(data)
                })
        })


        function dataRecheck (mainArray) {
            console.log(mainArray[0]);
        }  