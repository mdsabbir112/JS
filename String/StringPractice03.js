// Check whether a string contains all the vowels a, e, i, o, u

let office = "here is the main portion of the office sally";
let vowel = ['a','e','i','o','u'];
let newVowelFound = [];

for(let i=0; i< office.length; i++){
    // if(office[i]== 'a' && office[i]== 'e' && office[i]== 'i' && office[i]== 'o' && office[i]== 'u'){
    //     console.log('Yes, this String Contains all the Vowels');
    // }

    let ch = office[i].toLowerCase();

    if(vowel.includes(ch) && !newVowelFound.includes(ch)){

        newVowelFound.push(ch);
    }
}
// Check the array is vowel or not
if(vowel.length === newVowelFound.length){
    console.log('This string is containing Vowel');
}
else{
    console.log('This string is not containing Vowel');
    console.log('The Missing Vowels are: ', vowel.filter(demoname => !newVowelFound.includes(demoname)));
}
// console.log(newVowelFound);