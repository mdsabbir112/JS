// String Comparission are need 3 things these are : 
// 1.tolowercase() ; 2. toupercase(); 3. trim(){this is for remove the whitespace form the text }

const subject  = ' Java Script';
// const book = 'java Script';
const book = '   Java Script  ';
// Comparission are started here 

// if(subject === book){
// if(subject.toLowerCase() === book.toLowerCase()){
// if(subject.toUpperCase() === book.toUpperCase()){
if(subject.trim() === book.trim()){
    console.log('they are same: ',subject);
}
else{
    console.log('they are not same ');
}