//  Call back function

function ghotok (newFunction){
    console.log('apanar dekhebn naki ');
    newFunction(name);
}

const patri = function(messagae) {
    console.log( 'these are not the main thing', name);

}
const patri2 = function(message) {
    console.log( 'these are not the main thing', name);
}
const patri3 = function(message) {
    console.log( 'these are not the main thing');
}

const name = 'Ela'
ghotok (patri , name);
ghotok (patri2, name);



