const age = 25;

localStorage.setItem('userAge', age);
localStorage.setItem('isLoggedIn', true);

// get some key from localStorage
console.log(localStorage.getItem('userAge'));