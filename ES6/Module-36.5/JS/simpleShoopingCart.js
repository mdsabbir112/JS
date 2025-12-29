// here we use a shooping cart example to add items and total cost

const ExpandButtonDetails = () => {
    const personName = document.getElementById('personsName');
    const getName = personName.value;

    const accountNumber = document.getElementById('accountNumber');
    const getAccountNumber = accountNumber.value;

    Displayitems(getName, getAccountNumber);
    setItemsIntoLocalStorage(getName, getAccountNumber);

    personName.value = '';
    accountNumber.value = '';

}

const Displayitems = (name, account) => {
    const container = document.getElementById('lists');
    const li = document.createElement('li');
    li.innerText = `Name: ${name} , Account Number: ${account}`;
    container.appendChild(li);

}

// now we  are able to add items into the shooping cart list and also into the localStorage 

const  getItemsFromLocalStorage = () => {
   let cart = {};

    const getCartString = localStorage.getItem('cart');
    // console.log(getCartString);

    if(getCartString){
        cart = JSON.parse(getCartString);   
         
    }
    return cart;
}


const  DisplayProductsFromLocalStorage = () => {
    let cart = getItemsFromLocalStorage();

    console.log(cart);
    for(const product in cart){
        // console.log(product);
        // console.log(cart[product]);

        Displayitems(product, cart[product]);
    }
}

const setItemsIntoLocalStorage = (name, account) => {
    const cart = getItemsFromLocalStorage();

    // add items into the cart object
    cart[name] = account;   
    const convertIntoString = JSON.stringify(cart);
    localStorage.setItem('cart', convertIntoString);
}


DisplayProductsFromLocalStorage();