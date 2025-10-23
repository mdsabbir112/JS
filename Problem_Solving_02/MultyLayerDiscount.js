// we need to assign multy layer discount on customer who can buy the elements 

//  Basic works 
function Basic (project){
    // console.log(project);
    let sum = 0;
    for(let num of project){
        // console.log(num);
        sum = sum + (num.price * num.quantity);
    }
    let pay = 0;
     if(sum<=500){
            pay = sum; //No discount
            return pay;
        }
        else if(sum>500 && sum<1000){
            pay = sum * 0.8; //Give 20% discount
            return pay;
        }
        else{
            pay = sum * 0.7; // Give 70% discount
            let round = Math.round(pay);
            return round;
        }
}

let market = [
    {sub: 'Fish' , price: 120, quantity: 3},
    {sub: 'Fish' , price: 120, quantity: 1},
    {sub: 'Fish' , price: 120, quantity: 7}
]

const result = Basic(market);
console.log(result);