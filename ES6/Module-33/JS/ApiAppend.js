// here we append some information from Api .

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response =>  response.json())
.then (data => {
    // console.log(data);
    Elements(data);

})


// here create an another function here 
// this is the Example of using innertext onto it 

// const Elements = (mainDatas) => {
//     console.log(mainDatas);

//     const zilik = document.getElementById('clickEvent');

//     zilik.addEventListener('click', function() {
//         for(let mainData of mainDatas){
//             console.log(mainData);

//             const list = document.getElementById('lists');
            
//             const li = document.createElement('li')
//             li.innerText = mainData.title;
            
//             // Append the information into the main Div
//             const final = list.appendChild(li);

            
//         }
//     })

// }



// here we use about innerHtml into the code for Execute something onto it 

const Elements = (mainDatas) =>  {
    console.log(mainDatas);

    const Zilik = document.getElementById('clickEvent');

    Zilik.addEventListener('click', function() {
        
        for(let mainData of mainDatas) {
            // console.log(mainData);
            
            const lists = document.getElementById('mainlist');

            const div = document.createElement('div');
            div.classList.add('form') ;  // Add a  classname into Every div
            div.innerHTML = `
                <h2>${mainData.title}</h2>
                <p>${mainData.body}</p>
            `

            const final = lists.appendChild(div);
            
        }
    })
}