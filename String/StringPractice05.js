// Capitalize Every first Letter of each word in a String
let hello = "This is md sabbir hasan";
let words = hello.split(' ');
let result = "";

for(let i=0; i<words.length; i++){

    let capital = words[i].charAt(0).toUpperCase()+ words[i].slice(1);
    // console.log(capital);

    // result.push(capital); // this code is not running cause the push() function is not for String type variable, it works only for the array type variable .
    result += ' ' + capital;

}

console.log(result.trim());