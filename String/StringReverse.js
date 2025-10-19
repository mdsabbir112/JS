// String REverse are possibilly done by many ways . these are :
// by using For-of Loop
let student = 'Md sabbir hasan anik';
let res = '';
for(let result of student){
    res = result + res;
    

}
// console.log(res);

// another General process by using split(), Reverse(), join() Function
let name= 'Md Sabbir Hasan Anik';
let full = '';
full = name.split("").reverse().join('');
// console.log(full);

// Using For Loop

let ami = 'Md Sabbir Hasan anik';
let resu = '';
for(let i=0; i<=ami.length; i++){
    // console.log(i);
    // console.log(ami[i]);
    resu = ami[i] + resu ;
    
}
console.log(resu);