// Find out the minimum price of a phone by follow the object as a input .

function MinOperation (mobile){
    // console.log(mobile);
    let min = mobile[0];
    for(let num of mobile){
        // console.log(num);
        if(num.price < min.price ){
            min = num;
        }
    }
    return min;
}

let phones =[
    {name: 'Iphone' ,  version: 17, price: 2705100, color: 'Pink'},
    {name: 'Samsung' ,  version: 10, price: 135100, color: 'Red'},
    {name: 'Realme' ,  version: 15, price: 535100, color: 'Black'},
    {name: 'xiomi' ,  version: 12, price: 935100, color: 'White'},
    {name: 'Oppo' ,  version: 11, price: 654600, color: 'Black'},
    {name: 'Vivo' ,  version: 9, price: 231600, color: 'Silver'},
];

let result =  MinOperation(phones);
console.log(result);