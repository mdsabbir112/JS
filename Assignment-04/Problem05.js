/**
 * Problem-05: Let’s Calculate Total Sleep Time
⚠️ Function Name Must be calculateSleepTime()
রাকিব অফিসে কাজ করতে করতে ঘুমিয়ে যায়।  যার কারনে সে সকল কাজ সঠিক সময় শেষ করতে পারেনা। তার এমন একটা 
ফাংশন দরকার যার মধ্যমে office  ঘুমানোর টোটাল সময় টা তিনি ক্যালকুলেট করে দেখতে চান এবং সেই সময় টুকু বাসায় এসে 
অফিসের কাজ করতে চান।  
তোমার কাজ হচ্ছে calculateSleepTime() নামে একটি ফাংশন তৈরি করা, যা একটি Array ইনপুট হিসেবে নেবে। 
Array তে রাকিবের ঘুমানোর সময় (seconds) গুলো সংখ্যা আকারে থাকবে। ফাংশনটি Array থেকে মোট সময় বের করে 
সেটিকে ঘণ্টা, মিনিট এবং সেকেন্ডে রূপান্তর করে একটি অবজেক্ট আকারে রিটার্ন করবে।

📥 Input:
Function টি input নেবে একটি array 
array এর element গুলো হবে number  (watch times in second) 

🚀 Output:
ফাংশন টি  Array তে থাকা সবগুলো সময় কে calculate করে সেটা কে ঘন্টা মিনিট এবং সেকেন্ড এ কনভার্ট করবে।
ফাংশন টি একটা অবজেক্ট রিটার্ন করবে।  অবজেক্ট টি দেখতে হবে এই রকম- 
{ hour:14 , minute: 46 , second: 3 } 

Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা

🚩Challenge:  Array element গুলো যদি number না হয় তাহলে   "Invalid" return করবে।  
 */

function calculateSleepTime(times) {
  let sum = 0;
  for (let find of times) {
    if (typeof find !== "number") {
      return "Invalid";
    }
    sum += find;
  }

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let x = 0;
  let y = 0;

  if (sum >= 3600) {
    hours = Math.floor(sum / 3600);
    x = hours * 3600;
    sum = sum - x;

    // minute
    minutes = Math.floor(sum / 60);
    y = minutes * 60;
    sum = sum - y;

    // secound
    seconds = sum;
  } 
  else if (sum < 3600) {
    // minute
    minutes = Math.floor(sum / 60);
    y = minutes * 60;
    sum = sum - y;

    // secound
    seconds = sum;
  } 
  else if (sum < 60) {
    seconds = sum;
  }
  return {
    hour: hours,
    minute: minutes,
    second: seconds,
  };
}

let arr = [10000, 2000, 725];
// let arr = [1000, 3000, '45', 725];
// let arr = [10, 20, 25];
let result = calculateSleepTime(arr);
console.log(result);
