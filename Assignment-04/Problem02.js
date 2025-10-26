/**
 * Problem-02 :  Valid  Bangladeshi Number 
⚠️ Function Name Must be validContact()
এবার তোমার কাজ হলো validContact() নামে একটা ফাংশন তৈরি করা, যা কিছু শর্তের ভিত্তিতে  
যাচাই করবে একটা Contact number ভ্যালিড কিনা।  একটি Contact number ভ্যালিড হবার শর্ত হলো 

Contact Number টি অবশ্যই 11 digit এর হতে হবে। 
Contact Number টি  শুরু হবে  "01" দিয়ে 
Contact Number এ কোন স্পেস থাকা যাবে না।   

উপরের শর্ত গুলো পুরন হলে ই সে true আউটপুট হিসেবে return করবে। না হলে false আউটপুট হিসেবে return করবে। 

📥 Input:
তোমার ফাংশন একটি   ইনপুট নেবে যা হবে একটি স্ট্রিং।  স্ট্রিং এর character গুলো অবশ্যই 0-9 এর ভেতরে দেয়া  হবে। 


🚀 Output:
তোমার ফাংশন টি একটা boolean Value (true/false) কে  return করবে। অবশ্যই তোমাকে কিন্তু boolean value ই 
return করতে হবে। 
Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা


🚩Challenge:  যদি ইনপুট টি string না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 

 */
// Contact Number টি অবশ্যই 11 digit এর হতে হবে। 
// Contact Number টি  শুরু হবে  "01" দিয়ে 
// Contact Number এ কোন স্পেস থাকা যাবে না।

function validContact(number){
    if(typeof number !== 'string'){
        return 'Invalid';
    }
    else if(number.length == 11 && number[0] == 0 && number[1] == 1 && !number.includes(" ") ){
        return true;
    }
    else{
        return false;
    }
}

let result = validContact('01517500000');
console.log(result);