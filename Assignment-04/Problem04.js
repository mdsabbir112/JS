/**
 * Problem-04: Valid Proposal
⚠️ Function Name Must be validProposal()
একটি matrimony website এর জন্য তোমাকে একটা ফাংশন লিখে দিতে হবে। যাতে তারা খুব সহজেই দুইজন মানুষের বায়োডাটা 
এনালাইসিস করে বুঝতে পারে  যে তাদের মধ্যে বিবাহ সম্ভব কি সম্ভব না।  2 জন মানুষের ভেতর বিবাহ সম্ভব কিনা তা কিছু শর্তের 
ভিত্তিতে নির্ধারন করতে হবে। 

২ জন কে ভিন্ন জেন্ডারের হতে হবে। 
২ জনের Age difference 7 বছরের বেশী হওয়া যাবেনা।   ( 💡explore  Math.abs()  ) 
এই শর্ত গুলো পুরন হলে ই তোমার ফাংশন true return করবে।  

📥 Input:
ফাংশনটি দুটি ইনপুট গ্রহণ করবে।
১ম ইনপুট: একটি অবজেক্ট
২য় ইনপুট: একটি অবজেক্ট
প্রতিটি অবজেক্টে ৩টি প্রোপার্টি থাকবে:
name: string (ব্যক্তির নাম)
gender: string (male/female)
age: number (ব্যক্তির বয়স)


🚀 Output:
যদি দুইজনের মধ্যে সব শর্ত পূর্ণ হয়, তাহলে ফাংশনটি true রিটার্ন করবে।
কোন একটি শর্ত মিথ্যা হলে function টি false return করবে।  

Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা


🚩Challenge:  ইনপুট গুলো  যদি অব্জেক্ট না হয়  তাহলে ফাংশন  "Invalid" return করবে।  
 */

function validProposal(x, y){
    console.log( x);
    console.log( y);
    if(typeof x !== 'object' || typeof y !== 'object' || typeof x !== typeof y){
            return ('Invalid');
    }
    
let abs1 = (Math.abs(obj1.age - obj2.age)); 
if(obj1.gender !== obj2.gender && abs1 <= 7 ){
        return true;
}
else{
    return false;
}

}

let obj1 = { name: "Rahul", gender: "male", age: 38 };
let obj2 = { name: "Joya", gender: "female", age: 31 };
// let obj2 = '4';

let result = validProposal(obj1, obj2);
console.log(result);