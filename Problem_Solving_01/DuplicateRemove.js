// Remove the Duplicate numbers from an array .

function duplicate(Array) {
console.log(Array);
    let newArray = [];
    for(let num of Array){
        if(!newArray.includes(num)){
            newArray.push(num);
        }
        
    }
    console.log(newArray);
    return newArray;
}

let arr = [2, 4, 54, 68, 2, 7, 3, 4, 5, 5, 5, 6, 1, 7, 24, 45, 7,7,7,7,7,7,7,7,7,7,8,8,8,8,8];
console.log(duplicate(arr));