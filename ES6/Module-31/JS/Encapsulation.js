/**
 * Encaptulation is a process where we can access the attribute and its value 
 * insert of the class , but we are not able to access these key and its value from 
 * outside the class . cause they are remain private into the class . that is the 
 * Reason they are not accesable from outside of the class. 
 * 
 * Encapsulation মানে হলো একটি object-এর ভেতরের তথ্য (data) এবং কাজ (method) —
একসাথে রাখা ও সেগুলোকে বাইরের world থেকে লুকিয়ে রাখা।

অর্থাৎ, যেভাবে ওষুধের ক্যাপসুলের ভেতরে সব কিছু লুকানো থাকে, ঠিক সেভাবে object-এর 
ভিতরের data লুকিয়ে রাখা হয়, যাতে বাইরের কেউ সরাসরি সেটাকে পরিবর্তন করতে না পারে।

 * 
 * syntex : it define by # [which is means private] {there is also 3 different things are 
 * also keep on mind which are : public , }
 */


// here is some Example about this 
class Account {
    // Here we use the concept of Encapsulation 
    // Try to set the status as private ; which are not accessable from outside of this class 
    #Password; // there need to be send the keys , not send the value there.
    constructor(name , accId , password){
        this.Name = name;
        this.AccountId = accId ;
        this.#Password = password;
    }
    safe() {
        console.log(` ${this.Name}this is Your Account | and Your Account Id number is : ${this.AccountId}
            and Your Password number is : ${this.#Password}
            `);
    }
}

const newAccount = new Account ('Md Sabbir Hasan ', 123456789456134784, 5461279);
console.log(newAccount);
//  When the password are Encapsulated by using # then it might not accessable From 
// Outside from the class. so the below clg are not working perfectlly and it 
//  return the undefined value from there .
console.log(newAccount.Password);
// here the Encapsulated value are able to access but using the functional method 
//  which are locate into the class .  
newAccount.safe();

