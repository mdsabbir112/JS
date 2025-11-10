
let loginBtn = document.getElementById('btn-login');
    loginBtn.addEventListener('click', function(event) {
        event.preventDefault();
        let result = cashIn('add-money1');
        let result1 = cashIn('pin-number1');
        let result2 = getElementvalueById('main-balance');

        console.log(result , result1 , result2);
        
        let sum = result2 + result;
         setValueById('main-balance' ,sum)
        
});