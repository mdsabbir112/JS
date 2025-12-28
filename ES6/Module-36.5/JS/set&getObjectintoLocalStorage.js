// here we work for get the entry of an object into localStorage

const enterintoLocalStorage =() => {
    const user = {
    name : 'Md Sabbir Hasan',
    age : 25,
    array : [1,2,3,4,5,6,7,8,9,10]
};

// localStorage.setItem('userObject', user); // in this kind of formate it goes as [object Object]

// to avoid this we use JSON.stringify to convert object into string
const conertIntoString = JSON.stringify(user);
localStorage.setItem('userObject', conertIntoString);

    // console.log(conertIntoString.name);  // string does not able to get any property of object
    // and it replied as undefined

    // to get the object back from localStorage we use JSON.parse

    const getUserString = localStorage.getItem('userObject');
    const conertIntoObject = JSON.parse(getUserString);
    console.log(typeof conertIntoObject);
    console.log(conertIntoObject); // it shows as Object , and able to get all property of object
    console.log(conertIntoObject.name);
    
}

