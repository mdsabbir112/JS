/**
 * Problem-03 : Admission Success  (📚 Will He Succeed?)
⚠️ Function Name Must be willSuccess()
রাফি, বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার প্রস্তুতি নিচ্ছে। 🎓📖 সে বিভিন্ন মডেল টেস্ট দিয়েছে এবং প্রতিবার ভিন্ন ভিন্ন নম্বর পেয়েছে। 
কিন্তু সে দুশ্চিন্তায় আছে— সে কি চূড়ান্ত পরীক্ষায় সফল হতে পারবে?  রাফির জন্য তুমি willSuccess() নামে একটা ফাংশন লিখে দাও 
,  যেটা একটা Number এর Array ইনপুট নেবে এবং রাফির রেজাল্ট এনালাইসিস করে রাফি কে guideline দিবে। 
মডেল টেস্টে 50 বা তার বেশী মার্ক মানে হলো Pass। আর 50 এর নিচে পাওয়া মানে হলো Fail. 
যদি Pass করা পরীক্ষার সংখ্যা  Fail করা পরীক্ষার সংখ্যা থেকে বেশি হয়, তাহলে সে মনে করবে যে সে প্রস্তুত এবং 
ফাংশন true রিটার্ন করবে অন্যথায়, সে মনে করবে এখনো প্রস্তুতি যথেষ্ট নয় এবং ফাংশন false রিটার্ন করবে 

📥 Input:
ফাংশন টি Input নেবে একটি Array
Array তে  Number Type এর ডাটা ই থাকবে।   
Example:   [55 , 75 , 41 , 33 , 0 , 87 , 91 ,  30 ]

🚀 Output:
ফাংশন টি একটা boolean Value (true/false) কে  return করবে। অবশ্যই তোমাকে কিন্তু boolean value ই return করতে হবে।  
Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা

🚩Challenge:  যদি ইনপুট টি Array না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 
 */

function willSuccess(marks){
    if(Array.isArray(marks) === false){
            return ('Invalid');
    }
    let count1 = 0;
    let count2 = 0;
    for(let number of marks){
        if(number >= 50){
            count1++;
        }
        else{
                count2++;
        }
    }

    if(count1 > count2){
            return true;
    }
    else{
        return false;
    }

}

let result = willSuccess([55 , 75 , 41 , 33 , 0 , 87 , 91 ,  30 ]);
console.log(result);